import { Box, Grid, Stack, Typography } from '@mui/material';
import { productAssets } from '../../assets/product';

export default {
  title: '01. Style/Assets · Product',
  parameters: { layout: 'padded' },
};

export const Images = () => (
  <Grid container spacing={3}>
    {Object.entries(productAssets).map(([id, { images }]) => (
      <Grid key={id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Stack spacing={1}>
          <Typography variant="overline">Product {id}</Typography>
          <Box
            component="img"
            src={images?.[0]}
            alt={`product-${id}-0`}
            loading="lazy"
            style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '4/5' }}
          />
          {images?.[1] && (
            <Box
              component="img"
              src={images[1]}
              alt={`product-${id}-1`}
              loading="lazy"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '4/5' }}
            />
          )}
        </Stack>
      </Grid>
    ))}
  </Grid>
);

export const Videos = () => (
  <Grid container spacing={3}>
    {Object.entries(productAssets).map(([id, { video }]) => (
      <Grid key={id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Stack spacing={1}>
          <Typography variant="overline">Product {id}</Typography>
          {video ? (
            <Box
              component="video"
              src={video}
              controls
              preload="metadata"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '4/5' }}
            />
          ) : (
            <Typography variant="caption" color="text.secondary">No video</Typography>
          )}
        </Stack>
      </Grid>
    ))}
  </Grid>
);

export const AllGrid = () => {
  const items = [];
  Object.entries(productAssets).forEach(([id, { images, video }]) => {
    if (images?.[0]) items.push({ key: `${id}-img-0`, type: 'image', src: images[0], label: `P${id} · img0` });
    if (images?.[1]) items.push({ key: `${id}-img-1`, type: 'image', src: images[1], label: `P${id} · img1` });
    if (video) items.push({ key: `${id}-vid`, type: 'video', src: video, label: `P${id} · video` });
  });
  return (
    <Grid container spacing={3}>
      {items.map(({ key, type, src, label }) => (
        <Grid key={key} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Stack spacing={1}>
            <Typography variant="overline">{label}</Typography>
            <Box
              component={type === 'image' ? 'img' : 'video'}
              src={src}
              {...(type === 'video' ? { controls: true, preload: 'metadata' } : { loading: 'lazy' })}
              style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '4/5' }}
            />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};


