import React from 'react';

const handleContactClick = () => {
  alert('Contact Us button clicked!');
};

const handleTermsClick = () => {
  alert('Terms button clicked!');
};

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; 2023 My Job Board. All rights reserved. |{' '}
        <button
          onClick={handleContactClick}
          style={{
            background: 'none',
            border: 'none',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Contact Us
        </button>{' '}
        |{' '}
        <button
          onClick={handleTermsClick}
          style={{
            background: 'none',
            border: 'none',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Terms
        </button>{' '}
        |{' '}
        <a href="/privacy" style={{ color: 'blue', textDecoration: 'underline' }}>
          Privacy
        </a>
      </p>
    </footer>
  );
};

export default Footer;







