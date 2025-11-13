import { Box, Typography, Stack } from "@mui/material";
import { content } from "../../data/content";

const HeroMessage = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				alignItems: "flex-start",
				width: "100%",
				height: "100%",
				p: { xs: 4, md: 6 },
			}}
		>
			<Stack
				spacing={{ xs: 1, md: 1 }}
				alignItems="flex-start"
				sx={{
					width: "100%",
					textAlign: "left",
					mt: 0,
					ml: { xs: 0, md: 0.6 },
				}}
			>
				{/* Brand Name - Main Headline */}
				<Typography
					variant="h1"
					component="h1"
					sx={{
						fontSize: {
							xs: "clamp(2.5rem, 8vw, 3.2rem)",
							sm: "clamp(3.2rem, 7vw, 4rem)",
							md: "clamp(4rem, 6vw, 5.2rem)",
							lg: "clamp(4.8rem, 5vw, 6rem)",
						},
						lineHeight: 1.05,
					}}
				>
					{content.hero.title}
				</Typography>
				{/* Subtitle */}
				<Typography
					variant="h2"
					sx={{
						fontFamily: '"Pretendard Variable", Pretendard',
						fontWeight: 100,
						fontSize: {
							xs: "clamp(1.1rem, 4vw, 1.6rem)",
							sm: "clamp(1.3rem, 3vw, 1.8rem)",
							md: "clamp(1.5rem, 2.5vw, 2rem)",
							lg: "clamp(1.6rem, 2vw, 2.2rem)",
						},
						pl: 0.7,
						lineHeight: 1.4,
					}}
				>
					{content.hero.subtitle}
				</Typography>
			</Stack>
		</Box>
	);
};

export default HeroMessage;
