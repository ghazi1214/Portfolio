/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from './Header';

const layoutStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(28, 28, 28, 0.8); /* Add some transparency to the background */
  color: #fff;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <div css={layoutStyles}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
