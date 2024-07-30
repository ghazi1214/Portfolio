/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const headerStyles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(45, 45, 45, 0.8);
  z-index: 10;

  h1 {
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  nav {
    display: flex;
    gap: 20px;
  }

  .nav-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    transition: transform 0.3s ease-in-out;
  }

  .nav-link:hover {
    transform: translateY(-5px) scale(1.1);
  }

  .nav-link a {
    color: #fff;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <header css={headerStyles}>
      <h1>
        <Image src="/logo.png" alt="The Circle Logo" width={50} height={50} />
        The Circle
      </h1>
      <nav>
        <div className="nav-link shadow-xl">
          <Link href="/">Introduction</Link>
        </div>
        <div className="nav-link shadow-xl">
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div className="nav-link shadow-xl">
          <Link href="/skills">Skills</Link>
        </div>
        <div className="nav-link shadow-xl">
          <Link href="/blog">Blog</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
