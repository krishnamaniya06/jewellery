import { useState } from 'react';

const DropdownMenu = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-white text-lg font-semibold hover:bg-white hover:text-red-500 px-1 py-3 rounded-md transition flex items-center text-nowrap">
        {label}
        {items && items.length > 0 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 inline ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>
      {isOpen && items && items.length > 0 && (
        <div className="absolute left-0 bg-white text-black shadow-md rounded-md w-62 p-0 max-w-screen box-border z-50">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-6 py-4 text-base flex items-center hover:bg-gray-100 transition-all duration-200"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-8 h-8 mr-4 object-cover"
                />
              )}
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;