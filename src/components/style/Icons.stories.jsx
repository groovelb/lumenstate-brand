import { Box, Grid, Stack, Typography } from '@mui/material';
import { Sun, Moon, SunHorizon, SunDim, CircleHalf, Repeat, WaveSine } from '@phosphor-icons/react';

export default {
  title: '01. Style/Icons',
  parameters: { layout: 'padded' },
};

const icons = [
  { label: 'Sun', Comp: Sun },
  { label: 'Moon', Comp: Moon },
  { label: 'SunHorizon', Comp: SunHorizon },
  { label: 'SunDim', Comp: SunDim },
  { label: 'CircleHalf', Comp: CircleHalf },
  { label: 'Repeat', Comp: Repeat },
  { label: 'WaveSine', Comp: WaveSine },
];

export const Set = () => (
  <Grid container spacing={4}>
    {icons.map(({ label, Comp }) => (
      <Grid key={label} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
        <Stack spacing={1} alignItems="center">
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Comp size={16} />
            <Comp size={24} />
            <Comp size={32} />
          </Box>
          <Typography variant="caption" color="text.secondary">{label}</Typography>
        </Stack>
      </Grid>
    ))}
  </Grid>
);


