"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const mainNavItems = [
    { href: '/', label: 'Home' },
    { href: '/types', label: 'Types' },
  ];

  const resourceItems = [
    { href: '/blog', label: 'Blog' },
    { href: '/celebrities', label: 'Celebrities' },
    { href: '/compatibility', label: 'Compatibility' },
    { href: '/usage', label: 'Usage' },
    { href: '/glossary', label: 'Glossary' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-semibold text-white hover:text-gray-200 transition-colors duration-200 cursor-pointer">
                Simple MBTI
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-white hover:text-gray-200 transition-all duration-300 pb-2 ${
                    isActive ? 'border-b-2 border-white' : 'hover:border-b-2 hover:border-purple-400'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                onMouseEnter={() => setResourcesOpen(true)}
                className="flex items-center space-x-1 text-white hover:text-gray-200 transition-all duration-300 pb-2 hover:border-b-2 hover:border-purple-400"
              >
                <span>Resources</span>
                <svg className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {resourcesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-md rounded-lg border border-white/10 shadow-xl"
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  <div className="py-2">
                    {resourceItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive 
                              ? 'bg-purple-600 text-white' 
                              : 'text-gray-300 hover:bg-purple-600/20 hover:text-white'
                          }`}
                          onClick={() => setResourcesOpen(false)}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 0 0-2zm0 6h16a1 1 0 0 0 0 2H4a1 1 0 0 1 0-2z"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - All items displayed flat */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              {/* Main Items */}
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Resource Items - Displayed flat, not grouped */}
              {resourceItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
