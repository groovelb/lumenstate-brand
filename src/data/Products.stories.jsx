import { Box, Stack, Typography, Chip, Grid } from '@mui/material';
import products from './products';

export default {
  title: '04. Data/Products',
  parameters: { layout: 'padded' },
};

const summarize = (items) => {
  const total = items.length;
  const byType = items.reduce((acc, p) => {
    acc[p.type] = (acc[p.type] || 0) + 1;
    return acc;
  }, {});
  const types = Object.entries(byType).map(([type, count]) => ({ type, count }));
  return { total, types };
};

export const Summary = () => {
  const { total, types } = summarize(products);
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="h4">Products</Typography>
        <Chip label={`Total: ${total}`} />
      </Stack>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {types.map(({ type, count }) => (
          <Chip key={type} label={`${type}: ${count}`} />
        ))}
      </Stack>
      <Grid container spacing={2}>
        {products.map((p) => (
          <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Stack spacing={1}>
              <Typography variant="overline">#{p.id} · {p.type}</Typography>
              <Typography variant="body1">{p.title}</Typography>
              <Typography variant="caption" color="text.secondary">
                {p.lux} lx · {p.kelvin} K
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Box />
    </Stack>
  );
};


