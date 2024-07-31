/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Popup from './Popup';

const skillsStyles = css`
  padding: 20px;
  background-color: #333;
  border-radius: 10px;

  h2 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 10px;
  }

  .skill-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    transition: ease-out duration-700;
  }

  .skill-button:hover {
    transform: translateY(-5px) scale(1.1);
  }

  .svg-icon {
    width: 24px;
    height: 24px;
    color: #fff;
  }
`;

const Skills = () => {
  const [popupContent, setPopupContent] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div css={skillsStyles}>
      <h2>Skills</h2>
      <h3>Web Development:</h3>
      <ul>
        <li>Expert in Next.js and React, with multiple successful projects</li>
        <li>Strong ability to create dynamic, responsive, and user-friendly websites</li>
      </ul>
      <div className="skill-button shadow-xl" onClick={() => handleButtonClick('Web Development Details')}>
        Learn More
        <svg className="animate-bounce w-6 h-6 text-gray-900 svg-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <h3 className="mt-4">Data Entry:</h3>
      <ul>
        <li>Exceptional accuracy and efficiency in data entry tasks</li>
        <li>Advanced knowledge of various data management tools and software</li>
      </ul>
      <div className="skill-button shadow-xl" onClick={() => handleButtonClick('Data Entry Details')}>
        Learn More
        <svg className="animate-bounce w-6 h-6 text-gray-900 svg-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <h3 className="mt-4">Assignment and Project Management:</h3>
      <ul>
        <li>Extensive experience in managing and delivering high-quality academic assignments</li>
        <li>Skilled in conducting and presenting comprehensive research, particularly in credit card fraud detection</li>
      </ul>
      <div className="skill-button shadow-xl" onClick={() => handleButtonClick('Project Management Details')}>
        Learn More
        <svg className="animate-bounce w-6 h-6 text-gray-900 svg-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <h3 className="mt-4">Graphic Designing:</h3>
      <ul>
        <li>Proficient in creating visually compelling and engaging graphic designs</li>
        <li>Continuously enhancing skills to stay ahead in the graphic design industry</li>
      </ul>
      <div className="skill-button shadow-xl" onClick={() => handleButtonClick('Graphic Designing Details')}>
        Learn More
        <svg className="animate-bounce w-6 h-6 text-gray-900 svg-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <h3 className="mt-4">Entrepreneurship:</h3>
      <ul>
        <li>Founder and manager of "The Circle," an online store with a diverse product range</li>
        <li>Expertise in product listing, digital marketing, and customer relationship management</li>
        <li>Successful track record on platforms like Daraz Seller Central and Amazon UK</li>
      </ul>
      <div className="skill-button shadow-xl" onClick={() => handleButtonClick('Entrepreneurship Details')}>
        Learn More
        <svg className="animate-bounce w-6 h-6 text-gray-900 svg-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      {isPopupOpen && <Popup content={popupContent} onClose={handleClosePopup} />}
    </div>
  );
};

export default Skills;
