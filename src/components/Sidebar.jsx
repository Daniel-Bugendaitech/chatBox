import React, { useState } from 'react';
import { logo } from '../assets';
import {
  AiOutlineHome,
  AiFillSetting,
  AiFillMinusCircle,
  AiOutlineMenu,
} from 'react-icons/ai';
import { FaProductHunt } from 'react-icons/fa';
import { BiGroup } from 'react-icons/bi';
import { MdOutlineFeaturedVideo } from 'react-icons/md';
// import { MdCompareArrows } from 'react-icons/md';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Home', src: AiOutlineHome },
    { title: 'Features', src: MdOutlineFeaturedVideo },
    { title: 'Product', src: FaProductHunt },
    { title: 'Clients', src: BiGroup },
    { title: 'Setting', src: AiFillSetting },
  ];
  return (
    <div
      className={` ${
        open ? 'w-45' : 'w-10'
      } bg-dark h-screen p-5  pt-8 relative duration-300`}
    >
      <div
        className={`absolute cursor-pointer rounded-full  -right-3 top-9 w-7 
            ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
      >
        <AiOutlineMenu size={30} color="#7D2AE8" />
      </div>
      <div className="flex gap-x-4 items-center">
        <img
          src={logo}
          className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
          width="100"
          height="50"
        />
        <h1
          className={`text-[#7D2AE8] origin-left font-medium text-xl duration-200 ${
            !open && 'scale-0'
          }`}
        ></h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
              index === 0 && 'bg-light-white'
            } `}
          >
            <Menu.src size={30} color="#7D2AE8" />
            <span
              className={`${
                !open && 'hidden'
              } origin-left duration-200 text-[#7D2AE8]`}
            >
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
