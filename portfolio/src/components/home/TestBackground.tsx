'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function TestDynamicHeroImage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch by rendering fallback image on server
  const lightImage = '/Image/home-light.png';
  const darkImage = '/Image/home-dark.png';

  const bgImage = !mounted
    ? lightImage
    : resolvedTheme === 'dark'
    ? darkImage
    : lightImage;

  return (
    <section
      aria-label="Dynamic Hero section"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.7s ease-in-out',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: '2rem',
    borderRadius: '1rem',
    textAlign: 'center',
    color: resolvedTheme === 'dark' ? 'white' : 'black',
    maxWidth: '600px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
  }}
>

        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
          Hi, I’m <span style={{ color: '#2563EB' }}>Antnhe Debebe</span>
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          A passionate software engineering student specializing in AI and embedded systems.
          I build transformative technology to solve real-world challenges.
        </p>
      </div>
    </section>
  );
}
