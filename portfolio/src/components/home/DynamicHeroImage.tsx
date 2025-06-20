'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-full h-screen bg-black" />;

  const lightImage = '/Image/home-light.png';
  const darkImage = '/Image/home-dark.png';
  const imageToUse = resolvedTheme === 'dark' ? darkImage : lightImage;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4">
      <Image
        src={imageToUse}
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.3] -z-10 transition-all duration-700"
      />
      <div className="bg-white/80 dark:bg-black/70 backdrop-blur-md rounded-2xl p-8 max-w-3xl text-center shadow-xl z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Hi, I’m <span className="text-blue-600 dark:text-blue-400">Antnhe Debebe</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          A passionate software engineering student specializing in AI and embedded systems.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
