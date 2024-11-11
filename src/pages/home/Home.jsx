import { useEffect } from 'react';
import Typed from 'typed.js';
import Profile from "../../assets/home.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css';
import Shapes from './Shapes';

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ["UI/UX Engineer", "Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home section grid">
      <img src={Profile} alt="Profile" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            Hi, I&apos;m <span> Sisara Dilhari!</span>
          </h1>
          <h2 className="home__subTitle">
           I&apos;m a <span className="typing"></span>
          </h2>

          <p className="home__description">
            I&apos;m a UI/UX Engineer and front-end developer passionate about creating intuitive and clean designs. I focus on building seamless user experiences that blend form and function, ensuring every project is both visually appealing and highly functional.
          </p>
          <Link to='/about' className="button">
            More About Me{' '}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
