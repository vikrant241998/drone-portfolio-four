// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import "../styles/header.css";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <header className="header">
//       <nav className="navbar">
//         <div className="logo">DRONZA</div>

//         {/* Hamburger Icon */}
//         <div
//           className={`hamburger ${isOpen ? "open" : ""}`}
//           onClick={toggleMenu}
//         >
//           <div className="bar1"></div>
//           <div className="bar2"></div>
//           <div className="bar3"></div>
//         </div>

//         {/* Nav Links */}
//         <ul className={`nav-links ${isOpen ? "active" : ""}`}>
//           <li>
//             <Link href="/" onClick={closeMenu} className="active">
//               HOME
//             </Link>
//           </li>
//           <li><Link href="/about" onClick={closeMenu}>ABOUT</Link></li>
//           <li><Link href="/services" onClick={closeMenu}>SERVICES</Link></li>
//           <li><Link href="/gallery" onClick={closeMenu}>GALLERY</Link></li>
//           <li><Link href="/pages" onClick={closeMenu}>PAGES</Link></li>
//           <li><Link href="/shop" onClick={closeMenu}>SHOP</Link></li>
//           <li><Link href="/blog" onClick={closeMenu}>BLOG</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

"use client";

import { useState } from "react";
import Link from "next/link";
import "../styles/header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">DRONZA</div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link href="/" onClick={closeMenu} className="active">
              HOME
            </Link>
          </li>
          {/* Yahan humne href="/about" ko "#about" kar diya hai */}
          <li>
            <Link href="#about" onClick={closeMenu}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="#portfolio" onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#services" onClick={closeMenu}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
