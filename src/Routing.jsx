import React from 'react';
import styles from './style';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './components/About';
import { Navbar } from './components';

const Routing = () => {
  return (
    <div className="bg-[#333] h-[100vh]">
      <Router>
        {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div> */}
        <Routes>
          <Route path="/home" element={<App />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
