/* eslint-disable react/prop-types */

import { useState } from 'react';
import parse from 'html-react-parser';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ResumeItem = ({ icon, year, title, desc, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="resume__item">
      <div className="resume__icon">{icon}</div>
      <span className="resume__date">{year}</span>
      <h3 className="resume__subtitle">{parse(title)}</h3>
      <p className="resume__description">{desc}</p>

      {details && (
        <div>
          <button className="toggle__button" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? <FaChevronUp /> : <FaChevronDown />} See Details
          </button>
          {showDetails && (
            <div className="details__tables">
              {details.map((session, index) => (
                <div key={index} className="details__table">
                  <h4>
                    {session.session}
                    <span className="label-value-pair">
                      <span className="label"> Year: </span>
                      <span className="value">{session.year}</span>
                    </span>
                    {session.rank && ( // Only display Z-score if it exists
                      <span className="label-value-pair">
                        <span className="label"> Z-score: </span>
                        <span className="value">{session.rank}</span>
                      </span>
                    )}
                  </h4>
                  <table>
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {session.subjects.map((detail, i) => (
                        <tr key={i}>
                          <td>{detail.subject}</td>
                          <td>{detail.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}

            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeItem;
