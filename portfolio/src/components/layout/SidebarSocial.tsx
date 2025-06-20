'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { Share2, X } from 'lucide-react';

const socialLinks = [
  { href: 'https://twitter.com', icon: 'fab fa-twitter', label: 'Twitter' },
  { href: 'https://github.com/AntnheD', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/antnhe-d-2a03552a2/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'https://instagram.com', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: 'https://youtube.com', icon: 'fab fa-youtube', label: 'YouTube' },
];

const SidebarSocial = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-1/2 left-4 -translate-y-1/2 z-50">
      {/* Circular Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 dark:bg-blue-500 text-white shadow-lg hover:scale-105 transition-transform"
        aria-label="Toggle social sidebar"
      >
        {open ? <X size={24} /> : <Share2 size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={clsx(
          'mt-4 bg-white dark:bg-[#0f1117] text-gray-800 dark:text-white rounded-xl shadow-xl overflow-hidden transition-all duration-300',
          open ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        )}
      >
        <ul className="flex flex-col items-center gap-4 px-4 py-6">
          {socialLinks.map(({ href, icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label={label}
              >
                <i className={icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarSocial;
