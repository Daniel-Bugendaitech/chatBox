import React from 'react';
import styles from './style';
import {
  Navbar,
  Carousel,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
  Accordion,
  // Contact,
} from './components';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden flex">
      {/* <div>
        <Sidebar />
      </div> */}
      <div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Carousel />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Accordion />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

//object contain; gradient; semantic names; radial gradient;
//corousal : zoom-in , zoomout, drawer menu
