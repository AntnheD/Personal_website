const techIcons = [
  '/file.svg', '/globe.svg', '/vercel.svg',
  '/next.svg', '/window.svg', '/window copy.svg'
];

const TechStack = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-xl font-semibold mb-6">Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {techIcons.map((src, idx) => (
          <div key={idx} className="bg-[#1b1e27] p-6 rounded-lg flex items-center justify-center">
            <img src={src} alt="Tech icon" className="h-10"  />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
