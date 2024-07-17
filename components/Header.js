"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={isOpen ? 'active' : ''}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/recipes">Recipes</Link></li>
          <li><Link href="/tips">Tips</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
