import { Grid } from '@mui/material';
import React from 'react';
import styles from 'styles/App.module.scss';
import profImage from 'images/prof.png';

function About() {
  return (
    <section id={'about'} className={styles.aboutSection}>
      <div className={styles.content}>
        <Grid container direction={'row'} spacing={2} className={styles.titleContainer}>
          <Grid item className={styles.number}>
            01.
          </Grid>
          <Grid item className={styles.title}>
            About Me
          </Grid>
          <Grid item>
            <div className={styles.titleLine}></div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            keeping my site open source, but as you all know, plagiarism is bad. It's always disheartening whenever I
            find that someone has copied my site without giving me credit. I spent a non-trivial amount of effort
            building and designing this iteration of my website, and I am proud of it! All I ask of you all is to not
            claim this effort as your own. Please also note that I did not build this site with the intention of it
            being a starter theme, so if you have questions about implementation, please refer to the Gatsby docs.Many
            people have contacted me asking me if they can use this code for their own website, and the answer to that
            question is usually yes, with attribution. I value keeping my site open source, but as you all know,
            plagiarism is bad. It's always disheartening whenever I find that someone has copied my site without giving
            me credit. I spent a non-trivial amount of effort building and designing this iteration of my website, and I
            am proud of it! All I ask of you all keeping my site open source, but as you all know, plagiarism is bad.
            It's always disheartening whenever I find that someone has copied my site without giving me credit. I spent
            a non-trivial amount of effort building and designing this iteration of my website, and I am proud of it!
            All I ask of you all is to not claim this effort as your own. Please also note that I did not build this
            site with the intention of it being a starter theme, so if you have questions about implementation, please
            refer to the Gatsby docs.Many people have contacted me asking me if they can use this code for their own
            website, and the answer to that question is usually yes, with attribution. I value keeping my site open
            source, but as you all know, plagiarism is bad. It's always disheartening whenever I find that someone has
            copied my site without giving me credit. I spent a non-trivial amount of effort building and designing this
            iteration of my website, and I am proud of it! All I ask of you all keeping my site open source, but as you
            all know, plagiarism is bad. It's always disheartening whenever I find that someone has copied my site
            without giving me credit. I spent a non-trivial amount of effort building and designing this iteration of my
            website, and I am proud of it! All I ask of you all is to not claim this effort as your own. Please also
            note that I did not build this site with the intention of it being a starter theme, so if you have questions
            about implementation, please refer to the Gatsby docs.Many people have contacted me asking me if they can
            use this code for their own website, and the answer to that question is usually yes, with attribution. I
            value keeping my site open source, but as you all know, plagiarism is bad. It's always disheartening
            whenever I find that someone has copied my site without giving me credit. I spent a non-trivial amount of
            effort building and designing this iteration of my website, and I am proud of it! All I ask of you all
            keeping my site open source, but as you all know, plagiarism is bad. It's always disheartening whenever I
            find that someone has copied my site without giving me credit. I spent a non-trivial amount of effort
            building and designing this iteration of my website, and I am proud of it! All I ask of you all is to not
            claim this effort as your own. Please also note that I did not build this site with the intention of it
            being a starter theme, so if you have questions about implementation, please refer to the Gatsby docs.Many
            people have contacted me asking me if they can use this code for their own website, and the answer to that
            question is usually yes, with attribution. I value keeping my site open source, but as you all know,
            plagiarism is bad. It's always disheartening whenever I find that someone has copied my site without giving
            me credit. I spent a non-trivial amount of effort building and designing this iteration of my website, and I
            am proud of it! All I ask of you all
          </Grid>
          <Grid item xs={4}>
            <div className={styles.imageBorder}>
              <div className={styles.imageContainer}>
                <img src={profImage} alt={'profImage'} className={styles.image} />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default About;
