import { Button } from '@mui/material';

type NavButtonProps = {
  text: string
}

export const NavButton: React.FC<NavButtonProps> = ({ text }) => {
  return (
    <Button
      sx={{
        color: 'white',
        fontSize: 24
      }}
    >
      {text}
    </Button>
  );
};