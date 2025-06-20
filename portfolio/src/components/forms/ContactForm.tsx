'use client';

const CenteredContactInfo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#0f1117] px-4">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Contact Me
        </h2>

        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          <div>
            <p className="font-semibold">📞 Phone Numbers</p>
            <p>+251 96 560 2001</p>
            <p>+251 94 307 9361</p>
          </div>

          <div>
            <p className="font-semibold">📧 Emails</p>
            <p>anthne.debebe@aait.edu.et</p>
            <p>antnhedebebe19@gmail.com</p>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500 dark:text-gray-500">
          I am available for collaboration and opportunities.
        </div>
      </div>
    </div>
  );
};

export default CenteredContactInfo;
