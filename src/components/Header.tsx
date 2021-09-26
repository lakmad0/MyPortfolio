import { AppBar, Button, Grid, Slide, Toolbar, useScrollTrigger } from '@mui/material';
import React from 'react';
import styles from 'styles/App.module.scss';
import profImage from 'images/prof.png';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const elevateTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 150,
    target: window ? window() : undefined,
  });

  const hideTrigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!hideTrigger}>
      {React.cloneElement(children, {
        elevation: elevateTrigger ? 4 : 0,
        className: elevateTrigger ? styles.slideNav : styles.navWithInitial,
      })}
    </Slide>
  );
}

function Header() {
  return (
    <HideOnScroll>
      <AppBar elevation={0}>
        <Toolbar className={styles.appbar}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={styles.navBarContent}
            wrap={'nowrap'}
          >
            <Grid item xs={2}>
              <div className={styles.profileImageContainer}>
                <img src={profImage} alt={'profImage'} className={styles.profileImage} />
              </div>
            </Grid>
            <Grid container item alignItems="center" justifyContent="flex-end">
              <Grid item className={styles.navLink}>
                <a href={'#about'}>
                  <span className={styles.linkNum}>01. </span>
                  <span>About</span>
                </a>
              </Grid>
              <Grid item className={styles.navLink}>
                <span className={styles.linkNum}>02. </span>
                <span>Experience</span>
              </Grid>
              <Grid item className={styles.navLink}>
                <span className={styles.linkNum}>03. </span>
                <span>Projects</span>
              </Grid>
              <Grid item className={styles.navLink}>
                <span className={styles.linkNum}>04. </span>
                <span>Contact</span>
              </Grid>
              <Grid item className={styles.resumeButton}>
                <Button variant="outlined">Resume</Button>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
