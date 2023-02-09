//Sections
import Navbar from "../elements/Navbar";
import Landing from "../sections/Landing";
import Icons from "../elements/CodeIcons";
import Projects from "../sections/Projects";
import About from "../sections/About";

// Navigation arrow
import Arrow from "../elements/Arrow";

// Styles
import styles from "../styles/Home.module.css";
import Footer from "../elements/Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Landing />
      <Icons />
      <Arrow />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;

//TODO
// New logo
// Hamburger menu
// Scroll effect
// New bg?
// padding landing text
// større font icons
// weather app link