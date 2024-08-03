import React from 'react';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const footerStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'rgba(45, 45, 45, 0.8)',
    color: 'white',
    width: '100%',
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  column: {
    flex: '1 1 200px',
    margin: '10px',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
  },
  socialIcon: {
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    listStyleType: 'none',
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginBottom: '10px',
    display: 'block',
  },
  copyright: {
    textAlign: 'center',
  },
};

const Footer = () => {
  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.section}>
        <div style={footerStyles.column}>
          <h4>Let's keep in touch!</h4>
          <p>Find us on any of these platforms, we respond 1-2 business days.</p>
          <div style={footerStyles.socialIcons}>
            <a href="#" style={footerStyles.socialIcon}><i className="fab fa-twitter"></i></a>
            <a href="#" style={footerStyles.socialIcon}><i className="fab fa-facebook-square"></i></a>
            <a href="#" style={footerStyles.socialIcon}><i className="fab fa-dribbble"></i></a>
            <a href="#" style={footerStyles.socialIcon}><i className="fab fa-github"></i></a>
          </div>
        </div>
        <div style={footerStyles.column}>
          <h4>Useful Links</h4>
          <ul style={footerStyles.links}>
            <li><a href="#" style={footerStyles.link}>About Us</a></li>
            <li><a href="#" style={footerStyles.link}>Blog</a></li>
            <li><a href="#" style={footerStyles.link}>Github</a></li>
            <li><a href="#" style={footerStyles.link}>Free Products</a></li>
          </ul>
        </div>
        <div style={footerStyles.column}>
          <h4>Other Resources</h4>
          <ul style={footerStyles.links}>
            <li><a href="#" style={footerStyles.link}>MIT License</a></li>
            <li><a href="#" style={footerStyles.link}>Terms &amp; Conditions</a></li>
            <li><a href="#" style={footerStyles.link}>Privacy Policy</a></li>
            <li><a href="#" style={footerStyles.link}>Contact Us</a></li>
          </ul>
        </div>
      </div>
      <hr style={{ width: '100%', borderColor: 'white' }} />
      <div style={footerStyles.copyright}>
        <p>Copyright © 2021 Notus JS by <a href="https://www.creative-tim.com" style={footerStyles.link}>Creative Tim</a>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
