"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export function HeroButton({ children, href = "/test", className = "" }: HeroButtonProps) {
  return (
    <motion.div
      className={`relative group inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {/* Glow effect */}
      <div 
        className="absolute -inset-0.5 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"
        style={{
          background: 'linear-gradient(to right, #4c1d95, #5b21b6, #37359a)',
        }}
      />
      
      {/* Main button */}
      <Link href={href}>
        <button
          type="button"
          className="relative px-10 py-4 rounded-full transition-all duration-300 group-hover:scale-105"
          style={{
            background: 'linear-gradient(to right, #1e1b4b, #312e81, #1e1b4b)',
            border: '1px solid rgba(124, 58, 237, 0.3)',
          }}
        >
          {/* Content */}
          <span className="relative flex items-center gap-3">
            <span 
              className="font-bold text-lg tracking-wide"
              style={{ color: '#ffffff' }}
            >
              {children}
            </span>
            
            {/* Arrow */}
            <motion.span
              className="inline-block"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.span>
          </span>
        </button>
      </Link>
    </motion.div>
  );
}
