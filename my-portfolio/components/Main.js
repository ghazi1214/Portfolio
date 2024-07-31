/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const mainStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;

  .section {
    width: 100%;
    max-width: 800px;
    background-color: rgba(51, 51, 51, 0.8); /* Add some transparency */
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
  }

  .intro {
    h2 {
      margin-bottom: 10px;
    }
  }
`;

const Main = () => {
  return (
    <main css={mainStyles}>
      <div className="section intro" id="intro">
        <h2>Introduction</h2>
        <p>
        At The Circle, we envision a world where fashion is accessible, stylish, and sustainable. We strive to create a brand that not only keeps up with the latest trends but also sets new ones. Our commitment to quality, innovation, and customer satisfaction drives us to constantly evolve and improve our offerings.
        </p>
      </div>
    </main>
  );
};

export default Main;
