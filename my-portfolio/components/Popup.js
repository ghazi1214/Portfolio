/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const popupStyles = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(51, 51, 51, 0.9);
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const overlayStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Popup = ({ content, onClose }) => {
  return (
    <>
      <div css={overlayStyles} onClick={onClose}></div>
      <div css={popupStyles}>
        <button onClick={onClose} className="transition ease-out duration-700">Close</button>
        <div>{content}</div>
      </div>
    </>
  );
};

export default Popup;
