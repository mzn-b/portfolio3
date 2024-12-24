import { Section } from '@/components/core/Section';
import { Stack, Typography } from '@mui/material';

export const Projects = () => {
  return (
    <Section height={100}>
      <Stack direction={'column'}>
        <Typography variant={'h2'}>
          Hi! I&#39;m Mazen. 👋
        </Typography>
        <Typography>
          Flavor text - Flavor text - Flavor text - Flavor text - Flavor text - Flavor text - Flavor text - Flavor text
        </Typography>
      </Stack>
    </Section>
  );
};