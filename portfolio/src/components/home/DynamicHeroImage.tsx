'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  // const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Correct paths for images in the public directory
  // If 'home-dark.png' is in 'public/Image', its path is '/Image/home-dark.png'
  // const lightImage = '/Image/home-dark.png';
  // const darkImage = '/Image/home-dark.png'; // Corrected this line

  // const imageToUse = resolvedTheme === 'dark' ? darkImage : lightImage;

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src={'/home.jpg'}
        alt="Hero background"
        fill
        className="object-cover brightness-[0.35] -z-10 transition-opacity duration-500"
        priority
      />

      {/* Content Overlay */}
      <div className="bg-white/60 dark:bg-black/90 backdrop-blur-md text-white rounded-lg p-12 max-w-4xl w-full text-center z-10">
        <h1 className="text-4xl font-bold mb-4">Hi, I’m Antnhe Debebe</h1>
        <p className="mb-6 text-gray-300">
          A software engineering student specializing in AI and embedded systems. Passionate about building transformative tech.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            View Projects
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;