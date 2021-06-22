import React, { useEffect, useState } from "react";
import logo from "../Home/images/a2_logo-removebg-preview.png";
import "../Home/FirstSection.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [pos, setPos] = useState("top");

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 10) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);

  var toggleMenu = () => {
    const menuToggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  };

  // box-shadow: 1px 10px 58px -13px rgba(0, 0, 0, 0.75);
  // -webkit-box-shadow: 1px 10px 58px -13px rgba(0, 0, 0, 0.75);
  // -moz-box-shadow: 1px 10px 58px -13px rgba(0, 0, 0, 0.75);

  return (
    <div>
      <header
        style={{
          boxShadow:
            pos === "top" ? "none" : " 1px 10px 58px -13px rgba(0, 0, 0, 0.75)",
        }}
      >
        <Link to="/" className="asl" >
          
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="33.000000pt" height="35.000000pt" viewBox="0 0 296.000000 249.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,249.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M997 2436 c-15 -7 -35 -22 -43 -35 l-16 -23 -19 31 c-35 57 -103 32
-143 -54 l-27 -55 -94 0 -95 0 0 60 0 60 -79 0 c-135 0 -121 134 -121 -1151
l0 -1099 1090 0 1090 0 0 200 0 200 -40 0 -40 0 0 95 0 95 65 0 c55 0 65 3 65
18 0 9 18 238 40 507 22 270 40 491 40 493 0 1 -47 2 -105 2 l-105 0 0 70 c0
40 -4 70 -10 70 -6 0 -10 -30 -10 -70 l0 -70 -105 0 c-105 0 -105 0 -105 -25
0 -34 69 -901 76 -952 l5 -43 65 0 64 0 0 -95 0 -95 -50 0 -50 0 0 -100 0
-100 -890 0 -890 0 0 951 c0 863 1 951 16 945 9 -3 54 -6 100 -6 69 0 84 -3
84 -15 0 -30 31 -75 55 -81 16 -4 35 0 52 11 23 16 29 16 52 3 65 -38 115 -29
133 23 15 44 52 40 77 -10 11 -21 17 -42 13 -46 -4 -4 4 -5 17 -3 22 3 45 35
69 98 7 18 8 6 4 -44 -5 -67 -5 -68 18 -61 33 11 93 13 111 4 23 -11 59 12 81
51 16 30 23 35 56 35 35 0 38 -3 52 -43 15 -43 17 -44 65 -47 74 -6 110 10
145 60 17 24 30 48 30 53 0 18 30 22 168 24 120 1 128 2 67 8 -38 4 -109 8
-157 9 l-88 1 0 60 c0 71 -6 75 -83 66 -44 -6 -55 -11 -69 -37 -17 -29 -18
-29 -43 -13 -14 9 -43 16 -65 16 -28 -1 -40 3 -40 14 0 22 -34 17 -59 -10
l-22 -24 -26 24 c-39 36 -55 30 -87 -31 -16 -30 -32 -55 -37 -55 -5 0 -9 18
-9 39 0 30 -6 44 -22 55 -21 15 -24 14 -53 -12 -24 -22 -38 -27 -68 -24 -36 3
-38 5 -33 28 7 28 -9 64 -27 63 -7 0 -24 -6 -40 -13z"/>
<path d="M2326 2434 c-3 -8 -6 -43 -6 -75 l0 -60 43 3 c42 3 42 3 45 46 l3 42
55 0 54 0 0 -46 c0 -43 -7 -57 -105 -190 -58 -79 -105 -153 -105 -164 0 -19 6
-20 150 -20 l150 0 0 30 0 30 -90 0 c-49 0 -90 3 -90 6 0 3 35 54 78 113 104
140 103 139 100 224 l-3 72 -136 3 c-118 2 -137 0 -143 -14z"/>
<path d="M1010 2010 c-72 -9 -133 -41 -159 -83 -19 -31 -21 -49 -21 -191 l0
-156 210 0 210 0 0 100 0 100 225 0 225 0 0 -159 0 -159 -367 -5 c-380 -5
-417 -9 -467 -48 -60 -47 -61 -56 -61 -386 0 -343 -2 -333 86 -383 65 -37 208
-38 521 -6 305 32 288 32 288 1 l0 -25 220 0 220 0 0 644 0 643 -23 34 c-29
43 -84 69 -167 80 -78 10 -862 9 -940 -1z m690 -960 l0 -190 -133 0 c-74 0
-175 -3 -225 -6 l-92 -7 0 197 0 196 225 0 225 0 0 -190z"/>
</g>
</svg>

          <span className="as">atti square</span>
        </Link>
        <div className="toggle" onClick={toggleMenu}></div>
        <ul className="navigation">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/franchise" onClick={toggleMenu}>
              Franchise
            </Link>
          </li>
          <li>
            <Link to="/franchise-enquiry" onClick={toggleMenu}>
              Franchise Enquiry
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={toggleMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact{" "}
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
