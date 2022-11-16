import React from 'react';
import styles from '../style';
import Contact from './Contact';
import Navbar from './Navbar';

const About = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} mt-8 my-8`}>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default About;
