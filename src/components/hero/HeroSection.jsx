import { useRef } from "react";
import { Box, Grid } from "@mui/material";
	import { useTheme } from "@mui/material/styles";
	import useMediaQuery from "@mui/material/useMediaQuery";
import LineGrid from "../layout/LineGrid";
import ScrollVideo from "../shared/ScrollVideo";
import HeroMessage from "./HeroMessage";
import { content } from "../../data/content";

const HeroSection = () => {
	const heroRef = useRef(null);
	const theme = useTheme();
	const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
	const isSmOnly = useMediaQuery(theme.breakpoints.between("sm", "md"));
	const isBelowMd = isSmDown || isSmOnly;
	const left = 8;
	const right = 4;
	return (
		<LineGrid
			container
			gap={0}
			ref={heroRef}
			sx={{
				width: "100%",
				px: { xs: 3, sm: 4, md: 8 },
				boxSizing: "border-box",
			}}
		>
			{/* Grid 1 - Video Background with HeroMessage Overlay */}
			<Grid
				size={{ xs: 12, md: left }}
				sx={{
					display: { xs: "none", md: "block" },
				}}
			>
				<Box
					sx={{
						overflow: "hidden",
						position: "relative",
					}}
				>
					<ScrollVideo
						src={content.hero.videos.row2Col1}
						containerRef={heroRef}
						scrollRange={{ start: 0, end: 1 }}
						showTime={true}
						showTimeline={true}
						sx={{
							aspectRatio: "8/5.027",
							objectFit: "cover",
							zIndex: 0,
						}}
					/>
					<Box
						sx={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							zIndex: 1,
						}}
					>
						<HeroMessage />
					</Box>
				</Box>
			</Grid>

			{/* Grid 2 - Scroll Video */}
			<Grid
				size={{ xs: 12, md: right }}
			>
				<Box
					sx={{
						overflow: "hidden",
						position: "relative",
					}}
				>
					<ScrollVideo
						src={content.hero.videos.row1Col2}
						containerRef={heroRef}
						scrollRange={{ start: 0, end: 1 }}
						showTime={true}
						showTimeline={isBelowMd}
						sx={{
							zIndex: 0,
							...(isBelowMd && {
								aspectRatio: "4/5",
								objectFit: "cover",
							}),
						}}
					/>
					{isBelowMd && (
						<Box
							sx={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								zIndex: 1,
							}}
						>
							<HeroMessage />
						</Box>
					)}
				</Box>
			</Grid>
		</LineGrid>
	);
};

export default HeroSection;
