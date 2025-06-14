import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiGit } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, color: "#e34c26", label: "HTML" },
  { icon: <FaCss3Alt />, color: "#264de4", label: "CSS" },
  { icon: <SiTailwindcss />, color: "#06b6d4", label: "Tailwind CSS" },
  { icon: <FaJs />, color: "#f0db4f", label: "JavaScript" },
  { icon: <FaReact />, color: "#61dbfb", label: "React.js" },
  { icon: <FaNode />, color: "#68a063", label: "Node.js" },
  { icon: <SiExpress />, color: "#ffffff", label: "Express.js" },
  { icon: <SiMongodb />, color: "#4DB33D", label: "MongoDB" },
  { icon: <SiGit />, color: "#f1502f", label: "Git" },
  { icon: <FaGithub />, color: "#fff", label: "GitHub" },
];

const AboutMe = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6 sm:px-12" id="about">
      <div className="w-[80%] mx-auto flex flex-col items-center text-center space-y-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-cyan-400 shadow-lg overflow-hidden"
        >
          <img
            src="/sachin.jpeg"
            alt="Sachin Pathania"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">Hello, I'm Sachin</h2>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed">
            A passionate{" "}
            <span className="text-cyan-400 font-semibold">
              Full Stack Developer
            </span>{" "}
            with <span className="text-cyan-400 font-semibold">8 months</span>{" "}
            of hands-on experience. I build scalable and user-friendly web apps
            using the{" "}
            <span className="text-blue-400 font-medium">MERN stack</span> and
            modern UI frameworks to deliver seamless digital experiences.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-xl shadow-xl hover:shadow-2xl transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 sm:grid-cols-10 gap-6 pt-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center space-y-2"
            >
              <div
                className="text-4xl sm:text-5xl"
                style={{
                  color: skill.color,
                  textShadow: `0 0 10px ${skill.color}`,
                }}
              >
                {skill.icon}
              </div>
              <p className="text-sm font-medium">{skill.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full text-left mt-12 space-y-6"
        >
          <h3 className="text-3xl font-semibold text-cyan-400 border-b border-cyan-600 pb-2">
            Education
          </h3>

          {/* BCA */}
          <div className="space-y-1">
            <p className="text-white text-lg font-medium">
              🎓 <strong>Bachelor of Computer Applications (BCA)</strong>
            </p>
            <p className="text-white/80 text-base">
              Govt PG College, Dhaliara —{" "}
              <span className="text-sm text-gray-400">CGPA: 6.16</span>
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Built a strong foundation in programming, database management, and
              web technologies. Gained knowledge of computer systems,
              algorithms, and software development life cycles.
            </p>
          </div>

          {/* MCA */}
          <div className="space-y-1">
            <p className="text-white text-lg font-medium">
              🎓 <strong>Master of Computer Applications (MCA)</strong>
            </p>
            <p className="text-white/80 text-base">
              Govt PG College, Dharamshala —{" "}
              <span className="text-sm text-gray-400">CGPA: 7.27</span>
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Focused on advanced programming, data structures, and application
              development. Developed practical skills in software design, web
              development, and backend integration.
            </p>
          </div>

          {/* Full Stack Training */}
          <div className="space-y-1">
            <p className="text-white text-lg font-medium">
              🧠 <strong>Full Stack Web Development Training</strong>
            </p>
            <p className="text-white/80 text-base">Internshala Trainings</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Completed hands-on training covering HTML, CSS, JavaScript,
              React.js, Node.js, Express.js, and MongoDB. Built real-world
              projects and strengthened skills in full-stack development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
