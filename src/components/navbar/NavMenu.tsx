import { IconButton, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NavButton } from '@/components/navbar/NavButton';

type NavMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const NavMenu: React.FC<NavMenuProps> = ({ open, setOpen }) => {
  if (!open) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#1ae8e8',
        zIndex: 10000,
        pointerEvents: 'auto'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          position: 'relative',
          zIndex: 10100
        }}
      >
        <IconButton
          sx={{
            color: 'white',
            padding: 3,
            marginRight: 2
          }}
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon fontSize={'large'} />
        </IconButton>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10000
        }}
      >
        <Stack spacing={2}>
          <NavButton text={'test'} />
          <NavButton text={'test'} />
          <NavButton text={'test'} />
          <NavButton text={'test'} />
        </Stack>
      </div>
    </div>
  );
};
