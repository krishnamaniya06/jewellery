import React from 'react';
import DropdownMenu from './DropdownMenu';
import allEarringsImage from '../assets/all-earrings.jpg';
import comboEarringsImage from '../assets/combo-earrings.jpg';
import antiTarnishEarringsImage from '../assets/anti-tarnish-earrings.jpg';
import allRingsImage from '../assets/all-rings.jpg';
import allNecklacesImage from '../assets/all-necklaces.jpg';
import antiTarnishNecklacesImage from '../assets/anti-tarnish-necklaces.jpg';
import allBraceletsImage from '../assets/all-bracelets.jpg';
import { Heart, User, ShoppingCart } from 'lucide-react';
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {
  const menuItems = [
    { label: 'ALL JEWELLERY' },
    {
      label: "VALENTINE'S DAY",
      dropdownItems: [
        { label: 'For Boyfriend', href: '#' },
        { label: 'For Girlfriend', href: '#' },
        { label: 'For Husband', href: '#' },
        { label: 'For Wife', href: '#' },
      ],
    },
    {
      label: 'EARRINGS',
      dropdownItems: [
        {
          label: 'All Earrings',
          href: '/123',
          image: allEarringsImage,
        },
        {
          label: 'Combo Earrings',
          href: '#',
          image: comboEarringsImage,
        },
        {
          label: 'Anti-tarnish Earrings',
          href: '#',
          image: antiTarnishEarringsImage,
        },
      ],
    },
    {
      label: 'RINGS',
      dropdownItems: [
        {
          label: 'All Rings',
          href: '#',
          image: allRingsImage,
        },
      ],
    },
    {
      label: 'NECKLACES',
      dropdownItems: [
        {
          label: 'All Necklaces',
          href: '#',
          image: allNecklacesImage,
        },
        {
          label: 'Anti-tarnish Necklaces',
          href: '#',
          image: antiTarnishNecklacesImage,
        },
      ],
    },
    {
      label: 'BRACELETS',
      dropdownItems: [
        {
          label: 'All Bracelets',
          href: '#',
          image: allBraceletsImage,
        },
      ],
    },
    { label: 'GIFT BOXES' },
    { label: 'NEW ARRIVALS' },
    { label: 'MEN' },
    { label: 'WOMEN' },
  ];

  return (
    <nav className="bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between relative">
        {/* Left Side */}
        <div className="flex items-center">
          {/* Search Icon */}
          <button className="text-white text-2xl font-bold mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
        {/* Centered "Salty" Heading */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-bold text-white uppercase mb-2">
          SALTY
        </div>
        {/* Right Side */}
        <div className="flex items-center space-x-6">
          {/* Like Icon with Tooltip */}
          <Tooltip title="Like" arrow>
            <button className="text-white text-2xl">
              <Heart />
            </button>
          </Tooltip>
          {/* User Icon with Tooltip */}
          <Tooltip title="Account" arrow>
            <button className="text-white text-2xl">
              <User />
            </button>
          </Tooltip>
          {/* Cart Icon with Tooltip */}
          <Tooltip title="Cart" arrow>
            <button className="text-white text-2xl">
              <ShoppingCart />
            </button>
          </Tooltip>
        </div>
      </div>
      {/* Menu Items */}
      <div className="hidden md:flex flex-col items-center">
        {/* First Row */}
        <div className="flex space-x-6">
          {menuItems.slice(0, 8).map((item, index) => (
            <DropdownMenu
              key={index}
              label={item.label}
              items={item.dropdownItems}
            />
          ))}
        </div>
        {/* Second Row */}
        <div className="flex mt-2 space-x-6">
          <button className="text-white text-lg font-semibold hover:bg-white hover:text-red-500 rounded-md transition">
            MEN
          </button>
          <span className="text-white text-lg font-semibold">|</span>{' '}
          {/* Separator */}
          <button className="text-white text-lg font-semibold hover:bg-white hover:text-red-500 rounded-md transition">
            WOMEN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
