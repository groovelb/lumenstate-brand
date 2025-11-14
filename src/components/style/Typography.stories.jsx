import { Box, Stack, Typography, Divider } from '@mui/material';

export default {
  title: '01. Style/Typography',
  parameters: { layout: 'padded' },
};

export const Scale = () => (
  <Stack spacing={3}>
    <Box>
      <Typography variant="h1">H1 · Headline 1</Typography>
      <Typography variant="body2" color="text.secondary">Primary display for hero titles</Typography>
    </Box>
    <Divider />
    <Box>
      <Typography variant="h2">H2 · Headline 2</Typography>
      <Typography variant="body2" color="text.secondary">Section titles</Typography>
    </Box>
    <Divider />
    <Box>
      <Typography variant="h3">H3 · Headline 3</Typography>
      <Typography variant="body2" color="text.secondary">Sub-section titles</Typography>
    </Box>
    <Divider />
    <Box>
      <Typography variant="h4">H4 · Headline 4</Typography>
    </Box>
    <Divider />
    <Box>
      <Typography variant="h5">H5 · Headline 5</Typography>
    </Box>
    <Divider />
    <Box>
      <Typography variant="h6">H6 · Headline 6</Typography>
    </Box>
    <Divider />
    <Box>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
    </Box>
    <Divider />
    <Box>
      <Typography variant="body1">Body 1 · 400 Regular paragraph text</Typography>
      <Typography variant="body2" color="text.secondary">Body 2 · Secondary</Typography>
    </Box>
    <Divider />
    <Box>
      <Typography variant="overline">OVERLINE</Typography>
      <Typography variant="caption" color="text.secondary">Caption text</Typography>
    </Box>
  </Stack>
);


