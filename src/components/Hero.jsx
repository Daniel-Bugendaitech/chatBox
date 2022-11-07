import React, { useEffect } from 'react';
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: '4b942b010b87751fb40d76744504f20b',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      var h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
  }, []);
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        <div
          className={`flex flex-row py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2  `}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount for{' '}
            <span className={`text-white`}>1 Month </span>
            Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] text-white leading-[75px] ss:leading-[100px] ">
            The Next <br className="hidden sm:block" />{' '}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="hidden ss:flex mr-0 md:mr-4">
            <GetStarted />
          </div>
        </div>

        <h1 className="flex-1 font-poppins font-semibold text-[52px] ss:text-[68px] text-white leading-[75px] ss:leading-[100px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Out team of experts uses a methology to identify the credit cards most
          likely to fit your needs. We examine annual percentage rates, annual
          fees.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} my-10 md:my-0 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-20 white__gradient " />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient " />
      </div>

      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
