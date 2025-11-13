import { Typography } from '@mui/material';

/**
 * Brightness and Color Temperature State Label Component
 * @param {number} lux - Brightness value
 * @param {number} kelvin - Color temperature value (K)
 */
const StateLabel = ({ lux, kelvin }) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        fontFamily: 'monospace',
        fontSize: '0.875rem',
      }}
    >
      {lux} lx · {kelvin} K
    </Typography>
  );
};

export default StateLabel;
