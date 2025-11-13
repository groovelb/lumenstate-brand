import { useRef, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Sun as SunIcon,
  Moon as MoonIcon,
  SunHorizon as SunHorizonIcon,
  SunDim as SunDimIcon
} from '@phosphor-icons/react';

/**
 * Format progress (0-1) to time string (12:00pm ~ 00:00am)
 */
const formatTimeFromProgress = (progress) => {
	// 12:00pm (noon) to 12:00am (midnight) = 12 hours
	const totalMinutes = progress * 12 * 60;
	const hours = Math.floor(totalMinutes / 60);
	const minutes = Math.floor(totalMinutes % 60);

	let displayHour = 12 + hours; // 12, 13, 14, ..., 23, 24
	let period = "pm";

	if (displayHour >= 24) {
		displayHour = 12; // 24:00 = 12:00am (midnight)
		period = "am";
	} else if (displayHour > 12) {
		displayHour -= 12; // 13:00 = 1:00pm
		period = "pm";
	}

	return `${displayHour}:${minutes.toString().padStart(2, "0")}${period}`;
};

/**
 * ScrollVideo Component
 * Video that scrubs (plays frame-by-frame) based on scroll position
 *
 * @param {string} src - Video source path
 * @param {React.RefObject} containerRef - Container element to track scroll (optional)
 * @param {Object} sx - MUI sx styles
 * @param {Object} scrollRange - Scroll range mapping { start: 0, end: 1 }
 * @param {boolean} showTime - Show time overlay (12:00pm ~ 00:00am)
 * @param {boolean} showTimeline - Show timeline progress bar with icons
 */
const ScrollVideo = ({
	src,
	containerRef = null,
	sx = {},
	scrollRange = { start: 0, end: 1 },
	showTime = false,
	showTimeline = false,
	...props
}) => {
	const videoRef = useRef(null);
	const [isInView, setIsInView] = useState(false);
	const [displayedTime, setDisplayedTime] = useState("12:00pm");
	const [progress, setProgress] = useState(0);
	const theme = useTheme();
	const isSmOnly = useMediaQuery(theme.breakpoints.between("sm", "md"));
	const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
	const shouldStackTimeline = showTimeline && (isSmOnly || isSmDown);

	// Initialize video to frame 0 on load
	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const handleLoadedData = () => {
			// Set initial frame to 0 when video is loaded
			video.currentTime = 0;
		};

		video.addEventListener("loadeddata", handleLoadedData);

		// If already loaded, set immediately
		if (video.readyState >= 2) {
			video.currentTime = 0;
		}

		return () => {
			video.removeEventListener("loadeddata", handleLoadedData);
		};
	}, []);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		// IntersectionObserver for performance optimization
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting);
			},
			{ threshold: 0.1 }
		);

		observer.observe(video);

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const video = videoRef.current;
		if (!video || !isInView) return;

		let animationFrameId = null;
		let lastScrollTime = 0;
		const throttleDelay = 16; // ~60fps

		const updateVideoTime = () => {
			const now = Date.now();
			if (now - lastScrollTime < throttleDelay) {
				animationFrameId = requestAnimationFrame(updateVideoTime);
				return;
			}
			lastScrollTime = now;

			// Calculate scroll progress based on absolute scroll position
			let progress = 0;

			if (containerRef && containerRef.current) {
				// Use container ref if provided - absolute scroll position
				const container = containerRef.current;
				const containerHeight = container.offsetHeight;
				const containerOffsetTop = container.offsetTop;
				const scrollY = window.scrollY || window.pageYOffset;

				// Calculate progress based on how much we've scrolled past the container start
				// progress = 0 when scrollY = containerOffsetTop (container just entering from top)
				// progress = 1 when scrollY = containerOffsetTop + containerHeight (container fully scrolled past)
				progress = (scrollY - containerOffsetTop) / containerHeight;
			} else {
				// Use video element itself - absolute scroll position
				const videoHeight = video.offsetHeight;
				const videoOffsetTop = video.offsetTop;
				const scrollY = window.scrollY || window.pageYOffset;

				// Calculate progress based on how much we've scrolled past the video start
				progress = (scrollY - videoOffsetTop) / videoHeight;
			}

			// Apply scroll range mapping
			const { start, end } = scrollRange;
			progress = (progress - start) / (end - start);

			// Clamp between 0 and 1
			progress = Math.max(0, Math.min(1, progress));

			// Update progress state for timeline
			setProgress(progress);

			// Update time display if enabled
			if (showTime) {
				const timeString = formatTimeFromProgress(progress);
				setDisplayedTime(timeString);
			}

			// Update video time
			if (video.duration) {
				const targetTime = video.duration * progress;
				// Only update if difference is significant (avoid jitter)
				if (Math.abs(video.currentTime - targetTime) > 0.033) {
					video.currentTime = targetTime;
				}
			}

			animationFrameId = requestAnimationFrame(updateVideoTime);
		};

		// Start animation loop
		animationFrameId = requestAnimationFrame(updateVideoTime);

		// Scroll event listener (passive for performance)
		const handleScroll = () => {
			if (!animationFrameId) {
				animationFrameId = requestAnimationFrame(updateVideoTime);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, [isInView, containerRef, scrollRange, showTime]);

	// Timeline icon positions
	const timeIcons = [
		{ value: 0, icon: SunIcon, label: '12:00pm' },
		{ value: 0.33, icon: SunDimIcon, label: '4:00pm' },
		{ value: 0.67, icon: SunHorizonIcon, label: '8:00pm' },
		{ value: 1, icon: MoonIcon, label: '00:00am' },
	];

	// Determine active icon
	const getActiveIndex = () => {
		const distances = timeIcons.map(({ value }) => Math.abs(value - progress));
		return distances.indexOf(Math.min(...distances));
	};

	const activeIndex = getActiveIndex();

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: "100%",
			}}
		>
			{/* Video */}
			<Box
				component="video"
				ref={videoRef}
				muted
				playsInline
				preload="auto"
				sx={{
					width: "100%",
					height: "auto",
					display: "block",
					position: "relative",
					zIndex: 0,
					...sx,
				}}
				{...props}
			>
				<source src={src} type="video/mp4" />
			</Box>

			{/* Time Overlay */}
			{showTime && (
				<Box
					sx={{
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
						py: { xs: 3, md: 4 },
						px: { xs: 3, sm: 4, md: 8 },
						background:
							"linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)",
						zIndex: 1,
						pointerEvents: "none",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: shouldStackTimeline ? "column" : "row",
							alignItems: shouldStackTimeline ? "stretch" : "center",
							gap: shouldStackTimeline ? 2 : { xs: 2, md: 4 },
						}}
					>
						{/* Time Display */}
						<Box
							sx={{
								minWidth: { xs: '120px', md: '150px' },
								flexShrink: 0,
								mb: shouldStackTimeline ? 2 : 0,
							}}
						>
							<Typography
								variant="h3"
								sx={{
									color: "white",
									fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
									fontWeight: 300,
									letterSpacing: "-0.02em",
								}}
							>
								{displayedTime}
							</Typography>
						</Box>

						{/* Timeline Progress Bar */}
						{showTimeline && (
							<Box sx={{ flex: 1 }}>
							{/* Icons */}
							<Box
								sx={{
									mb: 1,
									position: 'relative',
									height: '24px',
								}}
							>
								{timeIcons.map((timeIcon, index) => {
									const { value, icon } = timeIcon;
									const IconComponent = icon;
									const isActive = index === activeIndex;
									return (
										<Box
											key={value}
											sx={{
												position: 'absolute',
												left: `${value * 100}%`,
												transform: 'translateX(-50%)',
												display: 'flex',
												alignItems: 'center',
												transition: 'opacity 0.2s ease',
												opacity: isActive ? 1 : 0.5,
											}}
										>
											<IconComponent
												weight={isActive ? "regular" : "thin"}
												size={20}
												color="white"
											/>
										</Box>
									);
								})}
							</Box>

							{/* Progress Bar */}
							<Box
								sx={{
									position: 'relative',
									height: '2px',
									backgroundColor: 'rgba(255, 255, 255, 0.3)',
									borderRadius: '1px',
								}}
							>
								{/* Progress Track */}
								<Box
									sx={{
										position: 'absolute',
										left: 0,
										top: 0,
										bottom: 0,
										width: `${progress * 100}%`,
										backgroundColor: 'white',
										borderRadius: '1px',
										transition: 'width 0.1s linear',
									}}
								/>

								{/* Tick Marks */}
								{timeIcons.map(({ value }) => (
									<Box
										key={value}
										sx={{
											position: 'absolute',
											left: `${value * 100}%`,
											top: '50%',
											transform: 'translate(-50%, -50%)',
											width: '1px',
											height: '12px',
											backgroundColor: 'rgba(255, 255, 255, 0.6)',
										}}
									/>
								))}

								{/* Current Position Indicator */}
								<Box
									sx={{
										position: 'absolute',
										left: `${progress * 100}%`,
										top: '50%',
										transform: 'translate(-50%, -50%)',
										width: '8px',
										height: '8px',
										borderRadius: '50%',
										backgroundColor: 'white',
										transition: 'left 0.1s linear',
									}}
								/>
							</Box>

							{/* Time Labels */}
							<Box
								sx={{
									mt: 1,
									position: 'relative',
									height: '16px',
								}}
							>
								{timeIcons.map(({ value, label }) => (
									<Typography
										key={value}
										variant="caption"
										sx={{
											position: 'absolute',
											left: `${value * 100}%`,
											transform: 'translateX(-50%)',
											fontSize: '0.65rem',
											color: 'rgba(255, 255, 255, 0.7)',
										}}
									>
										{label}
									</Typography>
								))}
							</Box>
						</Box>
						)}
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default ScrollVideo;
