const styles = {
  boxWidth: 'w-full xl:max-w-[1280px]',

  heading2:
    'font-semibold text-[40px] xs:text-[48px] text-secondary leading-[66.8px] xs:leading-[76.8px] w-full',
  paragraph: 'font-normal text-secondary text-[18px] leading-[30.8px]',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'px-6 sm:px-16',
  paddingY: 'py-6 sm:py-16',
  padding: 'px-6 sm:px-16 py-4 sm:py-12',

  marginX: 'mx-6 sm:mx-16',
  marginY: 'my-6 sm:my-16',
};

export const layout = {
  section: `flex flex-col md:flex-row ${styles.paddingY}`,
  sectionReverse: `flex flex-col-reverse md:flex-row ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} mr-0 md:mr-10 mt-10 md:mt-0 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} ml-0 md:ml-10 mt-10 md:mt-0 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
