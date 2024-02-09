import React from 'react';

function Footer({ title }) {
  return (
    <footer>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
