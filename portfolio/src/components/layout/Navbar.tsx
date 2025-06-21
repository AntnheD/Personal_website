'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Debugging theme persistence
    if (typeof window !== 'undefined') {
      console.log('Theme from localStorage:', localStorage.getItem('theme'));
    }
  }, []);

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f1117] text-black dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Antnhe.Dev
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`hover:underline transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Theme Toggle Icon */}
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:opacity-90 transition"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800" />
              )}
            </button>
          )}

          {/* Avatar */}
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full border border-gray-500 dark:border-gray-300"
          />

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-[#0f1117] px-6 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-1 ${
                    pathname === link.href
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'hover:underline'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
