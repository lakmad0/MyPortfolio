import { Button, Grid } from '@mui/material';
import React from 'react';
import styles from 'styles/App.module.scss';

function Hero() {
  return (
    <section id={'hero'} className={styles.heroSection}>
      <Grid container direction={'column'} className={styles.textGrid}>
        <Grid item className={styles.geet}>
          <span>Hi, my name is,</span>
        </Grid>

        <Grid item className={styles.name}>
          <span>Lakshitha Madushan.</span>
        </Grid>
        <Grid item className={styles.profession}>
          <span>I build full-stack software solutions.</span>
        </Grid>
        <Grid item className={styles.description}>
          <p>
            I'm a passionate, forward-thinking Software Engineer with 4+ years’ background in designing, developing and
            maintaining high performant and scalable enterprise software solutions.
          </p>
        </Grid>
        <Grid item className={styles.viewResumeButton}>
          <Button variant="outlined">View my resume</Button>
        </Grid>
      </Grid>
    </section>
  );
}

export default Hero;
