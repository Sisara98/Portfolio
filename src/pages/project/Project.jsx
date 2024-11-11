import { useState } from 'react';
import { project } from '../../data';
import ProjectItem from './ProjectItem';
import './project.css';

const Project = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredProjects = activeTab === "All"
    ? project
    : project.filter((item) => item.category === activeTab);

  return (
    <div>
      <section className="project section">
        <h2 className="section__title">My <span>Project</span></h2>

          <div className='project__tabs'>
            {["All", "Web", "App", "Design"].map((tab) => (
              <div
                key={tab}
                className={`project__button button--flex ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </div>
            ))}
          </div>

        
        <div className="project__container container grid">
          {filteredProjects.map((item) => (
            <ProjectItem key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
