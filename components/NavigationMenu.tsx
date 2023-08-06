// components/NavigationMenu.tsx

import React from 'react';
import { Button, Menu, MenuItem, styled } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FullWidthButton = styled(Button)({
  width: '100%',
  justifyContent: 'left',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)"
});

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: '100%',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)"
  }
}));

const NavigationMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <FullWidthButton endIcon={<ArrowDropDownIcon />} onClick={handleClick}>
        Navigate
      </FullWidthButton>
      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component="a" href="/daily-overview">Daily Overview</MenuItem>
        <MenuItem onClick={handleClose} component="a" href="/weekly-overview">Weekly Overview</MenuItem>
        <MenuItem onClick={handleClose} component="a" href="/effective-overview">Effective Overview</MenuItem>
      </StyledMenu>
    </div>
  );
};

export default NavigationMenu;
