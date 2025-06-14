import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactMe = () => {
  const form = useRef();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setSuccess(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-black text-white"
    >
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-cyan-400 text-center"
        >
          Contact Me
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#121212] rounded-2xl p-8 space-y-6 shadow-2xl border border-gray-800"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="bg-[#1a1a1a] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-300 w-full"
          >
            Send Message
          </button>

          {success === true && (
            <p className="text-green-400 mt-2 text-center">
              Message sent successfully!
            </p>
          )}
          {success === false && (
            <p className="text-red-400 mt-2 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/sachin19289"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white text-2xl transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sachin4507243"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white text-2xl transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:pathania19289@gmail.com"
            className="text-cyan-400 hover:text-white text-2xl transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
