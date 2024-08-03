/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';

const headerStyles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: rgba(45, 45, 45, 0.8); /* Add some transparency */
  z-index: 10;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .nav-container {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  nav {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav-link {
    display: inline-block;
    padding: 5px 10px;
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

  .theme-toggle {
    margin-left: auto;
  }

  .menu-icon {
    display: none;
    font-size: 24px;
    color: white;
  }

  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }

    nav {
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      position: absolute;
      top: 60px;
      background-color: rgba(45, 45, 45, 0.9);
      width: 100%;
      left: 0;
      padding: 10px 0;
      z-index: 9999;
    }

    nav.open {
      display: flex;
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header css={headerStyles}>
      <h1>
        <Image src="/logo.png" alt="The Circle Logo" width={50} height={50} />
        The Circle
      </h1>
      <div className="nav-container">
        <nav className={isMenuOpen ? 'open' : ''}>
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
      </div>
      <div className="theme-toggle">
        <ThemeToggle />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};

export default Header;
