/* eslint-disable react/prop-types */

import { useState } from 'react'
import Close from '../../assets/close.svg'


const ProjectItem = ({img,title,details}) => {
  const [modal,setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="project__item">
        <img src={img} alt="" className="project__img" />

        <div className="project__hover" onClick={toggleModal}>
            <h3 className="project__title">{title}</h3>
        </div>

        {modal && (
            <div className="project__modal">
            <div className="project__modal-content">
                <img 
                src={Close} 
                alt=""  
                className='modal__close' 
                onClick={toggleModal}/>

                <h3 className="modal__title">{title}</h3>

                <ul className="modal__list grid">
                    {details.map(({icon, title, desc}, index) => {
                        return(
                            <li className="modal__item" key={index}>
                                <span className="item__icon">{icon}</span>

                                <div>
                                    <span className="item__title">{title}</span>
                                    <a href={desc} target='_blank' className="item__details">{desc}</a>
                                </div>
                            </li>
                        )
                    })}
                </ul>

                <img src={img} alt="" className='modal__img' />
            </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default ProjectItem
