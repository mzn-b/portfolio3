import { Section } from '@/components/core/Section';
import { Stack, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';
import { HighlightedText } from '@/components/core/HighlightedText';

export const Welcome = () => {
  return (
    <Section height={100}>
      <Stack direction={'row'} spacing={16} sx={{
        alignItems: 'center'
      }}>
        <Stack direction={'column'} spacing={1}>
          <Typography variant={'h2'}>
            Hi! I&#39;m <HighlightedText>Mazen.</HighlightedText>
          </Typography>
          <Stack direction={'column'}>
            <Typography>
              <HighlightedText>Full-stack developer</HighlightedText> and aspiring architect of the digital
              world.
            </Typography>
            <Typography>
              Building the future of software with a love for design, gaming, and all things nerdy.
            </Typography>
          </Stack>
        </Stack>
        <Image src={'/picrew_me.png'} alt={'me'} width={256} height={256} />
      </Stack>
      <KeyboardArrowDownIcon
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'moveUpDown 2s ease-in-out infinite'
        }}
        fontSize={'large'}
      />
    </Section>
  );
};