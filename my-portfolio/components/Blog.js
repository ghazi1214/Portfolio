/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Popup from './Popup';

const blogStyles = css`
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

  .blog-button {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    transition: ease-out duration-700;
  }

  .blog-button:hover {
    transform: translateY(-5px) scale(1.1);
  }
`;

const Blog = () => {
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
    <div css={blogStyles}>
      <h2>Blog</h2>
      <ul>
        <li>
          <h3>Blog Post 1</h3>
          <p>Content for blog post 1.</p>
        </li>
        <div className="blog-button shadow-xl" onClick={() => handleButtonClick('Blog Post 1 Details')}>
          Read More
        </div>

        <li className="mt-4">
          <h3>Blog Post 2</h3>
          <p>Content for blog post 2.</p>
        </li>
        <div className="blog-button shadow-xl" onClick={() => handleButtonClick('Blog Post 2 Details')}>
          Read More
        </div>

        <li className="mt-4">
          <h3>Blog Post 3</h3>
          <p>Content for blog post 3.</p>
        </li>
        <div className="blog-button shadow-xl" onClick={() => handleButtonClick('Blog Post 3 Details')}>
          Read More
        </div>
      </ul>

      {isPopupOpen && <Popup content={popupContent} onClose={handleClosePopup} />}
    </div>
  );
};

export default Blog;
