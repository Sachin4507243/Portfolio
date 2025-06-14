import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useRef } from 'react';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const TorusShape = () => {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} rotation={[0.5, 0.5, 0]}>
      <torusGeometry args={[1.2, 0.4, 16, 100]} />
      <meshStandardMaterial
        color="#00f6ff"
        metalness={1}
        roughness={0.2}
        emissive="#00f6ff"
        emissiveIntensity={1}
      />
    </mesh>
  );
};

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans" id="home">
      {/* 3D Background */}
      <Canvas className="!absolute top-0 left-0 w-full h-full z-0" camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <Stars radius={120} depth={50} count={6000} factor={4} saturation={0} fade />
        <TorusShape />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-12 md:pl-24 text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white"
        >
          Hi, I'm Sachin Pathania
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-lg sm:text-2xl md:text-3xl mt-4 font-semibold text-white"
        >
          <Typewriter
            words={[
              'Full Stack Developer',
              'React / Node.js Specialist',
              'MERN Stack Developer',
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="max-w-2xl mt-6 text-base sm:text-lg text-white/80 pr-4"
        >
          I design and build performant full-stack web applications with immersive user experiences, blending code with creativity.
        </motion.p>

        {/* Glowing MERN Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex gap-8 mt-10 text-5xl"
        >
          <SiMongodb className="text-green-400 glow-green" />
          <SiExpress className="text-white glow-white" />
          <SiReact className="text-cyan-400 glow-cyan" />
          <SiNodedotjs className="text-lime-400 glow-lime" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
