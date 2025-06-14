import { motion } from 'framer-motion';
import ytCloneImg from '../../assets/youtubeclone.png';
import foodAppImg from '../../assets/reactfood.png';
import { FaYoutube, FaUtensils, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'YouTube Clone',
    icon: <FaYoutube />,
    image: ytCloneImg,
    description:
      'A responsive YouTube clone built with React.js and REST API, featuring video search, dynamic routing, and embedded playback. Clean UI and smooth user experience inspired by the original platform.',
    techStack: ['React.js', 'REST API', 'JavaScript', 'CSS', 'Node.js', 'Express.js', 'MongoDB'],
    repo: 'https://github.com/Sachin4507243/youtube.git',
  },
  {
    title: 'React Food App',
    icon: <FaUtensils />,
    image: foodAppImg,
    description:
      'A simple and responsive food ordering application built with React.js, Tailwind CSS, and Redux Toolkit. Features include a clean UI, modular components, and real-time cart functionality for a smooth user experience.',
    techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Redux Toolkit', 'Axios'],
    repo: 'https://github.com/Sachin4507243/ReactFoodApp.git',
  },
];

const Projects = () => {
  return (
    <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-black text-white" id="projects">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-cyan-400 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black rounded-2xl overflow-hidden border border-gray-800 transition-all flex flex-col"
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl text-cyan-400">{project.icon}</div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-cyan-700/20 text-cyan-300 px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-300 hover:underline mt-4"
                >
                  <FaGithub className="text-lg" />
                  View GitHub Repo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
