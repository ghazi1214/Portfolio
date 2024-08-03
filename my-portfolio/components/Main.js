/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LineChart from './LineChart';

const mainStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 20px;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const contentStyles = css`
  background-color: rgba(0, 0, 0, 0.6); /* Add some transparency to the background */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 90%; /* Ensure the content does not take more than 90% of the width on small screens */
  margin-bottom: 20px;

  @media (min-width: 768px) {
    max-width: 50%; /* Ensure the content does not take more than half the width on larger screens */
    margin-bottom: 0;
  }
`;

const chartContainerStyles = css`
  width: 90%;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.8); /* Add a light background to the chart container */
  border-radius: 10px;
  padding: 10px;

  @media (min-width: 768px) {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 20%;
    right: 5%;
  }
`;

const Main = () => {
  return (
    <main css={mainStyles}>
      <div css={contentStyles}>
        <h1>Welcome to The Circle</h1>
        <p>
          At The Circle, we envision a world where fashion is accessible,
          stylish, and sustainable. We strive to create a brand that not only
          keeps up with the latest trends but also sets new ones. Our commitment
          to quality, innovation, and customer satisfaction drives us to
          constantly evolve and improve our offerings.
        </p>
      </div>
      <div css={chartContainerStyles}>
        <LineChart />
      </div>
    </main>
  );
};

export default Main;
