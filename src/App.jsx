import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutMe from './Components/About Me/AboutMe';
import Projects from './Components/Projects/Projects';
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
 const  App = () => {
  return (
   <>
     <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
   </>
  )
}

export default App;