import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hooBank"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10 md:mt-0">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className={`flex flex-col my-4 ss:my-0 min-w-[150px]`}
            >
              <h4 className="font-medium text-[18px] leading-[27px] text-secondary">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-normal text-[16px] leading-[24px] text-[#a16be8] hover:text-black cursor-pointer ${
                      index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-normal text-center text-[18px] leading-[27px] text-secondary">
          Copyright &copy; 2022 HooBank. All Rights Reserved.
        </p>

        <div className="flex flex-row mt-6 md:mt-0 ">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
              } text-secondary`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
