import { AppBar, Slide, Toolbar, useScrollTrigger } from '@mui/material';
import React from 'react';
import styles from 'styles/App.module.scss';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const elevateTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const hideTrigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!hideTrigger}>
      {React.cloneElement(children, {
        elevation: elevateTrigger ? 4 : 0,
      })}
    </Slide>
  );
}

function Header() {
  return (
    <HideOnScroll>
      <AppBar elevation={0}>
        <Toolbar className={styles.appbar}>Test header</Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
