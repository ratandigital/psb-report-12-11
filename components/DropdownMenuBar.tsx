// components/DropdownMenuBar.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DropdownMenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle mouse over and out
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  // Handle opening a new window on click
  const openInNewWindow = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side of the navigation */}

        {/* Right side of the navigation */}
        <div className="flex space-x-6 text-white">
          <Link href="/dashboard" className="hover:bg-gray-700 p-2 rounded-md">Home</Link>
          
          <Link href="/about" className="hover:bg-gray-700 p-2 rounded-md">About</Link>
          <Link href="/services" className="hover:bg-gray-700 p-2 rounded-md">Services</Link>
          {/* Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center space-x-2 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <span>Reports</span>
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="p-2">
                  <button
                    onClick={() => openInNewWindow('/daily-report')}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Daily Report
                  </button>
                  <button
                    onClick={() => openInNewWindow('/reports')}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    All Reports
                  </button>
                  <button
                    onClick={() => openInNewWindow('/user-list')}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    User List
                  </button>
                  <button
                    onClick={() => openInNewWindow('/admin-list')}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Admin List
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}
