'use client';

import { Stack } from '@mui/material';
import { Navbar } from '@/components/navbar/Navbar';
import { Welcome } from '@/components/sections/Welcome';
import { AboutMe } from '@/components/sections/AboutMe';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <Stack direction={'column'}>
      <Navbar />
      <Welcome />
      <AboutMe />
      <Projects />
      <Contact />
    </Stack>
  );
}