/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const layoutStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(28, 28, 28, 0.8);
  color: #fff;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  width: 100%;
`;

const Layout = ({ children }) => {
  return <div css={layoutStyles}>{children}</div>;
};

export default Layout;
