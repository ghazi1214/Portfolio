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
    background-color: rgba(51, 51, 51, 0.8);
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
        </p>
      </div>
    </main>
  );
};

export default Main;
