/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const portfolioStyles = css`
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

  .portfolio-button {
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

  .portfolio-button:hover {
    transform: translateY(-5px) scale(1.1);
  }

  .svg-icon {
    width: 24px;
    height: 24px;
    color: #fff;
  }
`;

const Portfolio = () => {
  return (
    <div css={portfolioStyles}>
      <h2>Portfolio</h2>
      <ul>
        <li>
          <h3>Credit Card Fraud Detection Research Proposal</h3>
          <p>
            Developed an in-depth research proposal that utilizes big data to combat credit card fraud. Demonstrated advanced analytical skills and comprehensive understanding of fraud detection technologies.
          </p>
        </li>
        <div className="portfolio-button shadow-xl">
          View Details
          <svg className="animate-bounce w-6 h-6 text-gray-900 svg-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>

        <li className="mt-4">
          <h3>Amazon UK Product Listing</h3>
          <p>
            Created and optimized product listings for silicone and paper air fryer liners, achieving significant sales growth.
          </p>
        </li>
        <div className="portfolio-button shadow-xl">
          View Details
          <svg className="animate-bounce w-6 h-6 text-gray-900 svg-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>

        <li className="mt-4">
          <h3>Daraz Seller Central Management</h3>
          <p>
            Successfully managed and expanded product listings on Daraz Seller Central, ensuring high customer satisfaction.
          </p>
        </li>
        <div className="portfolio-button shadow-xl">
          View Details
          <svg className="animate-bounce w-6 h-6 text-gray-900 svg-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </ul>
    </div>
  );
};

export default Portfolio;
