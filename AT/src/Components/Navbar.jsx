import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
import { FaChevronDown, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaBars } from "react-icons/fa";
import AT_Logo from "../assets/AT-Logo.png";
import { gsap } from "gsap";

// Navbar Container
const NavbarContainer = styled.div`
  width: 100%;
  z-index: 1000;
`;

// Top Bar with Social Media & Contact Info
const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  background-color:rgb(0, 0, 0);
  color: white;
  font-size: 14px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
      font-family: "Gantari", serif;


  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 18px;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

// Navbar Styling
const Nav = styled.nav`
  position: fixed;
  top: 38px; /* Adjust based on TopBar height */
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 5%;
      font-family: "Gantari", serif;



  @media (max-width: 768px) {
  top:-1%;
  }
`;

const Logo = styled.img`
  height: 65px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  position: relative;
      font-family: "Questrial", serif;

  @media (max-width: 1095px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
    padding: 0px 50px;
    background:rgb(0, 0, 0);
    color: white;
    padding:15px 30px;
  }
`;

const NavItem = styled.li`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  color: black;
  transition: color 0.3s;
  padding: 10px 0;
  font-weight: bold;
      font-family: "Questrial", serif;
      font-weight:500;



  &:hover {
    color: #ff5733;
  }

  &.active {
    color:#ff5733;
    font-weight: bold;
    font-size: 18px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 1095px) {
    text-align: start;
    width: 100%;
    color: white;


  }
`;

// Dropdown Menu
const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  padding: 15px 10px;
  border-radius: 5px;
  width: 250px;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-10px")});
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  z-index: 1000;

  li {
    padding: 13px 8px;
    font-size: 14px;
    color: #001f5f;
    cursor: pointer;
    transition: background 0.3s;
        font-family: "Questrial", serif;
font-weight:400;

    &:hover {
      background: rgb(255, 0, 0);
      color: white;
    }
  }
`;

const MobileMenuIcon = styled(FaBars)`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 1095px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdown = (index) => {
    if (window.innerWidth > 768) return;
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  useEffect(() => {
    gsap.to(".navbar-container", {
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(".navbar-logo", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5
    });

    gsap.from(".navbar-links li", {
      opacity: 0,
      y: -30,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
      delay: 1
    });
  }, []);

  return (
    <NavbarContainer className="navbar-container">
      {/* Top Bar */}
      <TopBar>
        <SocialIcons>
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </SocialIcons>
        <ContactInfo>
          <FaPhone /> <span>+91 82206 99796</span>
          <FaEnvelope /> <span>info@amburtec.com</span>
        </ContactInfo>
      </TopBar>

      {/* Main Navbar */}
      <Nav>
        <Logo src={AT_Logo} alt="Amburtec Logo" />
        <MobileMenuIcon onClick={toggleMenu} />
        <NavLinks isOpen={isMenuOpen}>
          <NavItem className={isActive('/')}>
            <Link to="/">Home</Link>
          </NavItem>

          <NavItem
            onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown(0)}
            onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
            onClick={() => handleDropdown(0)}
            className={isActive('/about')}
          >
            About Us <FaChevronDown size={13} />
            <DropdownMenu isOpen={openDropdown === 0}>
              <li>General Information</li>
              <li>Statistical Profile</li>
              <li>Unique Features of the CETP</li>
              <li>Plant Performance</li>
              <li>Treatment Plant Data</li>
              <li>Computerized Operations & Management</li>
              <li>Organization Chart</li>
              <li>Board Of Directors</li>
              <li>Acknowledgement</li>
              <li>Green Belt Development</li>
            </DropdownMenu>
          </NavItem>

          <NavItem
            onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown(1)}
            onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
            onClick={() => handleDropdown(1)}
            className={isActive('/services')}
          >
            Services <FaChevronDown size={13} />
            <DropdownMenu isOpen={openDropdown === 1}>
              <li>Pre-Treatment System</li>
              <li>Statistical Profile</li>
              <li>Sludge Management</li>
            </DropdownMenu>
          </NavItem>

          <NavItem
            onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown(2)}
            onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
            onClick={() => handleDropdown(2)}
            className={isActive('/zld')}
          >
            ZLD <FaChevronDown size={13} />
            <DropdownMenu isOpen={openDropdown === 2}>
              <li>Pre-Treatment</li>
              <li>Reverse Osmosis</li>
              <li>Multiple Effect Evaporator</li>
            </DropdownMenu>
          </NavItem>

          <NavItem
            onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown(3)}
            onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
            onClick={() => handleDropdown(3)}
            className={isActive('/testing-lab')}
          >
            Testing Lab <FaChevronDown size={13} />
            <DropdownMenu isOpen={openDropdown === 3}>
              <li>Introduction</li>
              <li>Testing Methods</li>
              <li>View Of Modern Equipment</li>
            </DropdownMenu>
          </NavItem>

          <NavItem className={isActive('/member-tanneries')}>
            <Link to="/member-tanneries">Member Tanneries</Link>
          </NavItem>

          <NavItem className={isActive('/slf')}>
            <Link to="/slf">SLF</Link>
          </NavItem>

          <NavItem className={isActive('/annual-returns')}>
            <Link to="/annual-returns">Annual Returns</Link>
          </NavItem>

          <NavItem className={isActive('/projects')}>
            <Link to="/projects">Projects</Link>
          </NavItem>

          <NavItem className={isActive('/contact-us')}>
            <Link to="/contact-us">Contact Us</Link>
          </NavItem>
        </NavLinks>
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;