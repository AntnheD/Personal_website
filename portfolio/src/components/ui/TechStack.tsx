'use client';

import Image from 'next/image';

const techStack = [
  {
    name: 'C',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    link: 'https://en.cppreference.com/w/c',
  },
  {
    name: 'C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    link: 'https://en.cppreference.com/w/cpp',
  },
  {
    name: 'OOP',
    icon: '/icons/oop.svg', // You must store this locally
    link: 'https://en.wikipedia.org/wiki/Object-oriented_programming',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    link: 'https://react.dev/',
  },
  {
    name: 'React Native',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    link: 'https://reactnative.dev/',
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    link: 'https://expressjs.com/',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    link: 'https://docs.python.org/3/',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    link: 'https://www.typescriptlang.org/docs/',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    link: 'https://nextjs.org/docs',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    link: 'https://nodejs.org/en/docs',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    link: 'https://www.mongodb.com/docs/',
  },
];

const TechStack = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        🚀 Tech Stack
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {techStack.map(({ name, icon, link }, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1b1e27] dark:bg-gray-800 p-5 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-md"
            title={`Learn more about ${name}`}
          >
            <div className="relative w-12 h-12 mb-2">
              <Image src={icon} alt={`${name} logo`} fill className="object-contain" />
            </div>
            <span className="text-white text-xs">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
