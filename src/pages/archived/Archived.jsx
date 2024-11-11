import { useState } from 'react';
import { profile_experience } from '../../data';  
import './archived.css';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent} from '@radix-ui/react-tooltip';

const Archived = () => {
  const [activeTab, setActiveTab] = useState('certificates');

  const renderContent = () => {
    switch (activeTab) {
      case 'certificates':
        return (
          <div className="e-grid">
            {profile_experience
              .filter((item) => item.category === 'certificates')
              .map((item) => (
                <div key={item.id} className="e-card">
                  <h4 className="e-year">{item.year}</h4>
                  <h3 className="e-title" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                  <ul className="e-desc">
                    {item.desc.split('. ').map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        );
      case 'activities':
        return (
          <div className="e-grid">
            {profile_experience
              .filter((item) => item.category === 'activities')
              .map((item) => (
                <div key={item.id} className="e-card">
                  <h4 className="e-year">{item.year}</h4>
                  <h3 className="e-title" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                  <ul className="e-desc">
                    {item.desc.split('. ').map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        );
      case 'skills':
        return (
          <div className="skills-grid">
          {profile_experience
            .filter((item) => item.category === 'skills')
            .map((item) => (
              <div key={item.id} className="skill-card">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="skill-icon">
                        {item.icon} {/* Icon rendering */}
                      </div>
                    </TooltipTrigger>
                     <TooltipContent>
                      <p className='para__name'>{item.name}</p>
                     </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
              </div>
            ))}
        </div>
          
        );  
    
    }
  };

  return (
    <div className="profile-container">
      <div className="sidebar">
      <h2 className="title">My <span>Journey</span></h2>
        <p className="paragraph">My passion has grown with each course, certificate, and skill I&apos;ve gained, bringing me closer to the IT industry.</p>
        <div className="tab">
          <button onClick={() => setActiveTab('skills')} className={activeTab === 'skills' ? 'active' : ''}>
            Skills
          </button>
          <button onClick={() => setActiveTab('certificates')} className={activeTab === 'certificates' ? 'active' : ''}>
          Certificates
          </button>
          <button onClick={() => setActiveTab('activities')} className={activeTab === 'activities' ? 'active' : ''}>
          Extracurricular Activities
          </button>
        </div>
      </div>
      <div className="content">
        <h2 className="section-title">My {activeTab}</h2>
        <p className="section-paragraph">
          {activeTab === 'activities'
            ? "Below are the activities I've archived."
            : `Below are the ${activeTab} I've gained that reflect my passion for ICT and my journey toward the IT industry.`}
        </p>
        <div className="scrollable-content">
          {renderContent()}
        </div>
      </div>

    </div>
  );
};

export default Archived;
