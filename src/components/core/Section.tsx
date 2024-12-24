import { PropsWithChildren } from 'react';
import { Stack } from '@mui/material';

export const Section: React.FC<PropsWithChildren & { height: number }> = ({ children, height }) => {
  return (
    <Stack
      direction={'column'}
      sx={{
        height: `${height}vh`,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '80%' }}>
        {children}
      </div>
    </Stack>
  );
};