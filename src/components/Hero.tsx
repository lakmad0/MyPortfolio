import { Button, Grid, IconButton } from '@mui/material';
import React from 'react';
import styles from 'styles/App.module.scss';
import { FiCode, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function Hero() {
  return (
    <section id={'hero'} className={styles.heroSection}>
      <div className={styles.content}>
        <Grid container direction={'column'} className={styles.textGrid}>
          <Grid item className={styles.geet}>
            <span>Hi, my name is</span>
          </Grid>

          <Grid item className={styles.name}>
            <span>Lakshitha Madushan.</span>
          </Grid>
          <Grid item className={styles.profession}>
            <span>I build full-stack software solutions.</span>
          </Grid>
          <Grid item className={styles.description}>
            <p>
              I'm a passionate, forward-thinking Software Engineer with 4+ years’ background in designing, developing
              and maintaining high performant and scalable enterprise software solutions.
            </p>
          </Grid>
          <Grid item className={styles.viewResumeButton}>
            <Button variant="outlined">View my resume</Button>
          </Grid>
        </Grid>
        <Grid container direction={'column'} className={styles.fixedIcons}>
          <Grid item>
            <IconButton aria-label="github" className={styles.iconLink}>
              <FiGithub />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="linkedIn" className={styles.iconLink}>
              <FiLinkedin />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="mail" className={styles.iconLink}>
              <FiMail />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="hackerRank" className={styles.iconLink}>
              <FiCode />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Hero;
