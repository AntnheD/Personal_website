'use client';

import Image from 'next/image';
import Link from 'next/link';

const ResumePage = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-sm sm:text-base text-black dark:text-white">
      {/* Page Title */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Professional Resume</h1>
        <button className="px-4 py-2 bg-gray-100 dark:bg-[#2d2f38] text-sm rounded-md hover:opacity-90 transition">
          Download PDF
        </button>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-12">
        A detailed overview of my education, skills, awards, and projects.
      </p>

      {/* Summary */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">Professional Summary</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I am Antnhe Debebe Habtegiorgis, a dedicated software engineering student at Addis Ababa University (AAIT),
          passionate about AI, embedded systems, and innovative technology solutions. I possess solid
          training in computer science and electronics and proven success in national-level competitions.
        </p>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-lg">Bachelor of Science in Software Engineering</h3>
            <p className="text-gray-600 dark:text-gray-400">Addis Ababa University (AAIT), 2022–2027 (Expected)</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Certificate of Training in Computer Science and Electronics</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Ethiopian Academy of Sciences, Oct 4, 2021 – Nov 20, 2021
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            'JavaScript', 'TypeScript', 'Python', 'C++', 'React', 'Next.js', 'Tailwind CSS',
            'Express.js', 'MongoDB', 'PostgreSQL', 'SQL', 'Arduino', 'TensorFlow', 'OpenCV', 'Git'
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-200 dark:bg-[#2a2c34] text-sm px-4 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Awards & Honors</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">3rd Place — 19th National Intellectual Property Day Competition</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Organized by Addis Ababa Technology University, Ethiopian Intellectual Property Authority, and Ethiopian Academy of Sciences (April 2022).
            </p>
            <Image
              src="/Image/exibit2.jpg" // Replace with your image
              alt="3rd Place Award"
              width={350}
              height={200}
              className="rounded-lg mt-3"
              priority
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Automatic Coffee Bean Color Sorter</h3>
            <p className="text-gray-600 dark:text-gray-400">3rd Place – National Engineering Competition, April 2022</p>
            <Image
              src="/coffee_project.jpg" // Replace with your project image
              alt="Coffee Bean Color Sorter"
              width={350}
              height={200}
              className="rounded-lg mt-3"
              priority
            />
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm transition">
          Download Full Resume
        </button>
        <Link
          href="/projects"
          className="bg-gray-200 dark:bg-[#2c2e38] text-black dark:text-white px-6 py-2 rounded-lg text-sm flex items-center justify-center"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="text-sm underline text-blue-600 dark:text-blue-400 mt-2 sm:mt-0"
        >
          Contact Me
        </Link>
      </div>
    </main>
  );
};

export default ResumePage;
