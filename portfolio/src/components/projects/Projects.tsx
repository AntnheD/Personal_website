const projects = [
  {
    title: 'AI-Powered Chatbot',
    description: 'Developed an AI chatbot using NLP for customer service.',
    image: '/chatbot.png',
  },
  {
    title: 'Smart Home Automation App',
    description: 'Mobile app to control smart home devices.',
    image: '/smart-home.png',
  },
  {
    title: 'Autonomous Drone System',
    description: 'Autonomous drone for environmental monitoring.',
    image: '/drone.png',
  },
];

const Projects = () => (
  <section className="py-16 px-4">
    <h2 className="text-xl font-semibold mb-8">Featured Projects</h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {projects.map((project, i) => (
        <div key={i} className="bg-[#1b1e27] p-4 rounded-lg">
          <img src={project.image} alt={project.title} className="rounded mb-4" />
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-gray-300">{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
