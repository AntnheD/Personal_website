'use client';

import Image from 'next/image';
import Link from 'next/link';

const ResumePage = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-sm sm:text-base text-black dark:text-white">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Professional Résumé</h1>
        <button className="px-4 py-2 bg-gray-100 dark:bg-[#2d2f38] text-sm rounded-md hover:opacity-90 transition">
          Download PDF
        </button>
      </div>
      <p className="text-gray-500 dark:text-gray-400 mt-1 mb-8">
        A snapshot of my skills, education, and professional journey.
      </p>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
        <p className="text-gray-600 dark:text-gray-300">
          A highly motivated and skilled software engineer with a strong foundation in computer science
          principles and a passion for developing innovative solutions. Proven ability to work effectively
          in both individual and collaborative settings, delivering high-quality results within deadlines.
          Seeking a challenging role where I can leverage my technical expertise and contribute to the success
          of a dynamic team.
        </p>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Master of Science in Computer Science</h3>
            <p className="text-gray-500 dark:text-gray-400">University of Technology, 2020–2022</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-500 dark:text-gray-400">University of Technology, 2016–2020</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            'JavaScript', 'TypeScript', 'Python', 'C++', 'React', 'Next.js', 'Tailwind CSS',
            'Express.js', 'MongoDB', 'PostgreSQL', 'SQL', 'Arduino', 'TensorFlow', 'OpenCV', 'Git'
          ].map(skill => (
            <span key={skill} className="bg-gray-200 dark:bg-[#2a2c34] text-sm px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Professional Experience</h2>
        <div className="space-y-6">
          <div>
            <p className="font-medium">2022 – Present</p>
            <p className="font-semibold">Software Engineer</p>
            <p className="text-gray-500 dark:text-gray-400">Tech Innovators Inc.</p>
          </div>
          <Image
            src="/coffee.jpg"
            alt="Coffee Project"
            width={350}
            height={200}
            className="rounded-lg"
          />
          <div>
            <p className="font-medium">2021 – 2022</p>
            <p className="font-semibold">Junior Software Engineer</p>
            <p className="text-gray-500 dark:text-gray-400">Code Crafters LLC</p>
          </div>
          <Image
            src="/certificate.jpg"
            alt="Certificate"
            width={350}
            height={200}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="space-y-3">
          <p className="font-semibold">2021</p>
          <p className="text-base font-medium">Automatic Coffee Bean Color Separator</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">3rd Place – Engineering Competition</p>
          <Image
            src="/medal.jpg"
            alt="Medal"
            width={350}
            height={200}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Certifications & Awards</h2>
        <p className="text-gray-400">Coming soon...</p>
      </section>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm">
          Download Full Résumé
        </button>
        <Link
          href="/projects"
          className="bg-gray-200 dark:bg-[#2c2e38] text-black dark:text-white px-6 py-2 rounded-lg text-sm"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="text-sm underline text-blue-500 dark:text-blue-400 mt-2 sm:mt-0"
        >
          Contact Me
        </Link>
      </div>
    </main>
  );
};

export default ResumePage;
