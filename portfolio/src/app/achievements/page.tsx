'use client';

import Image from 'next/image';


const achievements = [
  {
    title: 'Full-Stack Web Development Certification',
    description:
      'Issued by CodeCamp, this certification validates my proficiency in building dynamic web applications using modern frameworks and best practices.',
    buttonText: 'View Certificate',
    image: '/cert1.jpg',
  },
  {
    title: 'AI/ML Specialization',
    description:
      'A specialization from Coursera, focusing on machine learning algorithms, neural networks, and their applications in real-world problems.',
    buttonText: 'View Certificate',
    image: '/cert2.jpg',
  },
  {
    title: 'Embedded Systems Design',
    description:
      'A certification from edX, covering the design and implementation of embedded systems, including microcontrollers and real-time operating systems.',
    buttonText: 'View Certificate',
    image: '/cert3.jpg',
  },
];

const awards = [
  {
    title: 'Hackathon Winner',
    description:
      'First place in the annual Tech Innovators Hackathon for developing an innovative solution using AI and IoT technologies.',
    buttonText: 'View Project',
    image: '/award1.jpg',
  },
  {
    title: "Dean's List",
    description:
      'Recognized for academic excellence and outstanding performance in software engineering courses.',
    image: '/award2.jpg',
  },
];

export default function AchievementsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-sm sm:text-base text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-2">Achievements & Certificates</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-10">
        A collection of my accomplishments and certifications in software engineering, AI/ML, and embedded systems.
      </p>

      {/* Certifications */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Certifications</h2>
        <div className="space-y-6">
          {achievements.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start justify-between gap-4 bg-gray-100 dark:bg-[#1e1f24] p-5 rounded-lg"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{cert.description}</p>
                {cert.buttonText && (
                  <button className="bg-gray-300 dark:bg-gray-700 text-sm px-4 py-2 rounded-md hover:opacity-90 transition">
                    {cert.buttonText}
                  </button>
                )}
              </div>
              <Image
                src={cert.image}
                alt={cert.title}
                width={200}
                height={120}
                className="rounded-md object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Awards</h2>
        <div className="space-y-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start justify-between gap-4 bg-gray-100 dark:bg-[#1e1f24] p-5 rounded-lg"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{award.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{award.description}</p>
                {award.buttonText && (
                  <button className="bg-gray-300 dark:bg-gray-700 text-sm px-4 py-2 rounded-md hover:opacity-90 transition">
                    {award.buttonText}
                  </button>
                )}
              </div>
              <Image
                src={award.image}
                alt={award.title}
                width={200}
                height={120}
                className="rounded-md object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
