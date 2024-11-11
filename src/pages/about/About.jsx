import Info from '../about/Info'
import {FaDownload} from "react-icons/fa"
import CV from '../../assets/Sisara-Cv.pdf'
import "./about.css"
import Profile from "../../assets/home.jpg"
import ResumeItem from './ResumeItem'
import {resume} from '../../data'
import {Link} from 'react-router-dom'
import { FaUserTie } from "react-icons/fa";


const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">About <span>Me</span></h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list grid">
              <Info/>
            </ul>
            <a href={CV} download='' className="button button__download">
              Download CV
              <span className="button__icon">
                <FaDownload/>
                </span>
                </a>
              <Link to='/contact' className="button button__hire">
                  Hire Me {' '}
              <span className="button__icon">
               <FaUserTie/>
              </span>
              </Link>
          </div>
          <div className="about_img">
          <img src={Profile} alt="profile"/>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      {/* <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>

        <div className="skills__container grid">
          <Skills/>
        </div>
      </section>

      <div className="separator"></div> */}

      <section className="resume">
      <h3 className="section__subtitle subtitle__center">Education  & Experience</h3>

      <div className="resume__container grid">
        <div className="resume__data">
          {resume.map((val) => {
            if(val.category === 'education' ){
              return <ResumeItem key={val.id} {...val}/>
            }
          })}
        </div>

        <div className="resume__data">
          {resume.map((val) => {
            if(val.category === 'experience' ){
              return <ResumeItem key={val.id} {...val}/>
            }
          })}
        </div>
      </div>   
      </section>
    </main>
  )
}

export default About