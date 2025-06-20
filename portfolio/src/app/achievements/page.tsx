'use client';

import Image from 'next/image';

const achievements = [
  {
    title: 'Certificate of Training in Computer Science and Electronics',
    description:
      'Completed intensive training and prototype development at the Ethiopian Academy of Sciences from October 4, 2021, to November 20, 2021.',
    buttonText: 'View Certificate',
    image: '/Image/certficet.jpeg' 
  },
  {
    title: 'BSc Software Engineering (In Progress)',
    description:
      'Currently pursuing Bachelor of Science in Software Engineering at Addis Ababa University (AAIT) from May 26, 2022, expected graduation 2027.',
    image: '/Image/AAITLogo.png', // Optional: AAIT logo or related image
  },
];

const awards = [
  {
    title: '3rd Place – 19th National Intellectual Property Day Competition',
    description:
      'Awarded third place in the national competition organized jointly by Addis Ababa Technology University, Ethiopian Intellectual Property Authority, and Ethiopian Academy of Sciences in April 2022.',
    buttonText: 'View Award',
    image: '/Image/exibit1.jpg', // Replace with your award image
  },
];

export default function AchievementsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-sm sm:text-base text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Achievements & Certificates</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        A curated showcase of my certifications, academic journey, and award recognitions reflecting my commitment to software engineering and innovation.
      </p>

      {/* Certifications */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Certifications & Training</h2>
        <div className="space-y-8">
          {achievements.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start justify-between gap-6 bg-gray-100 dark:bg-[#1e1f24] p-6 rounded-lg shadow"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{cert.description}</p>
                {cert.buttonText && (
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    {cert.buttonText}
                  </button>
                )}
              </div>
              {cert.image && (
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={240}
                  height={140}
                  className="rounded-md object-cover shadow-md"
                  priority
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Awards & Honors</h2>
        <div className="space-y-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start justify-between gap-6 bg-gray-100 dark:bg-[#1e1f24] p-6 rounded-lg shadow"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{award.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{award.description}</p>
                {award.buttonText && (
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                    {award.buttonText}
                  </button>
                )}
              </div>
              {award.image && (
                <Image
                  src={award.image}
                  alt={award.title}
                  width={240}
                  height={140}
                  className="rounded-md object-cover shadow-md"
                  priority
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
