import { Box, Typography, Stack, Grid } from "@mui/material";
import { CircleHalf, Repeat, WaveSine } from "@phosphor-icons/react";
import LineGrid from "../components/layout/LineGrid";
import { content } from "../data/content";

// Icon mapping
const iconMap = {
	CircleHalf,
	Repeat,
	WaveSine,
};

const BrandValue = () => {
	return (
		<LineGrid container gap={0}>
			{content.hero.features.map((feature) => {
				const IconComponent = iconMap[feature.icon];
				return (
					<Grid
						key={feature.id}
						size={{ xs: 12, md: 4 }}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								height: "100%",
								px: { xs: 3, sm: 4, md: 8, lg: 10 },
								py: { xs: 6, md: 12, lg: 14 },
							}}
						>
							<Stack spacing={2} alignItems="flex-start">
								<IconComponent
									size={44}
									weight="regular"
									style={{ marginBottom: 16 }}
								/>
								<Typography
									variant="h3"
									sx={{
										fontSize: { xs: "1.4rem", sm: "1.55rem", md: "1.8rem", lg: "1.95rem" },
									}}
								>
									{feature.title}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										fontWeight: 300,
										fontSize: { xs: "0.85rem", md: "1rem" },
									}}
								>
									{feature.description}
								</Typography>
								<Typography
									variant="body1"
									color="text.secondary"
									sx={{
										fontWeight: 300,
										fontSize: { xs: "0.875rem", md: "1rem" },
										lineHeight: 1.7,
										mt: 1,
									}}
								>
									{feature.detailedDescription}
								</Typography>
							</Stack>
						</Box>
					</Grid>
				);
			})}
		</LineGrid>
	);
};

export default BrandValue;
