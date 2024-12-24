import { Box, Stack, Typography } from '@mui/material';
import { HighlightedText } from '@/components/core/HighlightedText';
import { ContactForm } from '@/components/ContactForm';
import { Section } from '@/components/core/Section';
import { SocialsBar } from '@/components/SocialsBar';


export const Contact = () => {

  return (
    <Section height={60}>
      <Stack direction={'row'} spacing={4}>
        <Stack spacing={2}>
          <Typography variant="h4">
            Fancy a <HighlightedText>Chat?</HighlightedText>
          </Typography>
          <Typography>
            Unfortunately I didn't implement a chat window. But I'm always happy to connect via email using the form or any of my socials listed below.
          </Typography>
          <Typography>
            Looking forward to hearing from you!
          </Typography>
          <SocialsBar/>
        </Stack>
        <ContactForm />
      </Stack>
    </Section>
  );
};