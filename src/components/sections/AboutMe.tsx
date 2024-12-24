import { Section } from '@/components/core/Section';
import { Stack, Typography } from '@mui/material';
import { HighlightedText } from '@/components/core/HighlightedText';
import Image from 'next/image';

export const AboutMe = () => {
  return (
    <Section height={80}>
      <Stack direction={'row'} spacing={4} sx={{ alignItems: 'flex-start' }}>
        <Stack
          direction={'column'}
          sx={{
            borderRadius: 2
          }}
          spacing={2}
        >
          <Typography variant={'h4'}>
            Learn more <HighlightedText>About Me</HighlightedText>
          </Typography>
          <Typography>
            Hi, I’m Mazen El-shaarawi, a full-stack developer with a passion for building smooth, user-friendly
            applications.
            I specialize in TypeScript, Java, Kotlin, React, and all things web development. I love solving problems and
            bringing creative ideas to life through code.
          </Typography>
          <Typography>
            When I’m not coding, you can find me gaming, reading manga, or designing graphics. I believe a mix of
            creativity and tech makes for the best user experiences. Plus, I’m always up for a good DnD
            campaign!
          </Typography>
          <Typography>
            I’m currently studying Software Architecture in my master’s program, aiming to move into architecture as my
            next career step. I speak English, German, Arabic, and some rudimentary Japanese and Spanish, so I’m all
            about
            connecting with people and cultures.
          </Typography>
        </Stack>
        <Image src={'/me.jpg'} alt={'me'} width={9999} height={9999}
               style={{ height: 'auto', maxWidth: '25%', borderRadius: 6 }} />
      </Stack>
    </Section>
  );
};