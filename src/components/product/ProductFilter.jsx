import { Box, Typography, Stack } from '@mui/material';

const ProductFilter = ({ selectedType, onTypeChange }) => {
  const types = [
    { value: 'all', label: 'All' },
    { value: 'ceiling', label: 'Ceiling' },
    { value: 'stand', label: 'Stand' },
    { value: 'wall', label: 'Wall' },
    { value: 'desk', label: 'Desk' },
  ];

  return (
    <Box
      sx={{
        display: { xs: 'none', sm: 'none', md: 'block' },
        position: { md: 'sticky' },
        top: { md: 120 },
        height: 'fit-content',
      }}
    >
      <Stack spacing={2}>
        <Typography
          variant="overline"
          sx={{
            fontSize: { xs: '0.7rem', md: '0.75rem' },
            letterSpacing: '0.1em',
            color: 'text.secondary',
            fontWeight: 500,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Filter
        </Typography>

        <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
          {types.map((type) => (
            <Typography
              key={type.value}
              onClick={() => onTypeChange(type.value)}
              sx={{
                fontSize: '0.95rem',
                fontWeight: selectedType === type.value ? 500 : 300,
                color: selectedType === type.value ? 'text.primary' : 'text.secondary',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative',
                paddingLeft: { xs: 0, md: 2 },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: { xs: '50%', md: 0 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: selectedType === type.value ? { xs: '12px', md: '4px' } : { xs: '8px', md: '2px' },
                  height: selectedType === type.value ? '16px' : '0px',
                  backgroundColor: 'text.primary',
                  transition: 'all 0.2s ease',
                },
                '&:hover': {
                  color: 'text.primary',
                  '&::before': {
                    height: '16px',
                    width: { xs: '12px', md: '4px' },
                  },
                },
              }}
            >
              {type.label}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductFilter;
