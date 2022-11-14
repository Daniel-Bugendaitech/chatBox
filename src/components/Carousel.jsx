import React, { useState, useEffect, useRef } from 'react';
import image1 from '../assets/villa1.jpg';
import image2 from '../assets/villa4.jpg';
import image3 from '../assets/villa6.jpg';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai';

const sliderImages = [image1, image2, image3];

let count = 0;
let slideInterval;
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade_animation');
  };

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation);
    slideRef.current.addEventListener('mouseenter', pauseSlider);
    slideRef.current.addEventListener('mouseleave', startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleNextClick = () => {
    count = (count + 1) % sliderImages.length;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade_animation');
  };
  const handlePreviousClick = () => {
    const sliderLength = sliderImages.length;
    count = (currentIndex + sliderLength - 1) % sliderLength;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade_animation');
  };

  console.log(slideRef);
  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        <img src={sliderImages[currentIndex]} alt="" />
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          onClick={handlePreviousClick}
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          onClick={handleNextClick}
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
