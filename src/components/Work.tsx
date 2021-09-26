import { Grid } from '@mui/material';
import React from 'react';

import styles from 'styles/App.module.scss';

function Work() {
  return (
    <section id={'work'} className={styles.aboutSection}>
      <div className={styles.content}>
        <Grid container direction={'row'} spacing={2} className={styles.titleContainer}>
          <Grid item className={styles.number}>
            02.
          </Grid>
          <Grid item className={styles.title}>
            Working Experince.
          </Grid>
          <Grid item>
            <div className={styles.titleLine}></div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Work;
