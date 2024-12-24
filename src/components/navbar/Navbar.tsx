import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { NavMenu } from '@/components/navbar/NavMenu';

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '140px',
          background: 'linear-gradient(to bottom, #101112 10%, rgba(255, 255, 255, 0))',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-end'
        }}
      >
        <IconButton
          sx={{
            color: '#1ae8e8',
            padding: 3
          }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <MenuIcon fontSize={'large'} />
        </IconButton>
      </div>

      <NavMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};
