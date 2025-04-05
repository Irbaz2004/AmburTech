import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  FaChevronDown,
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import AT_Logo from "../assets/AT-Logo.png";
import { gsap } from "gsap";

// Navbar Container
const NavbarContainer = styled.div`
  width: 100%;
  z-index: 1000;
  margin: 0;
`;

// Top Bar with Social Media & Contact Info
const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  background-color: rgb(0, 0, 0);
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
    top: -1%;
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
  gap: 40px;
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
    background: rgb(0, 0, 0);
    color: white;
    padding: 15px 30px;
    gap: 20px;
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
  font-weight: 500;

  &:hover {
    color: #00911a;
  }

  &.active {
    color: #00911a;
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
    font-weight: 400;
    position: relative;

    &:hover {
      background: #00911a;
      color: white;
    }
  }
`;

// Nested Dropdown Menu
const NestedDropdownMenu = styled.ul`
  position: absolute;
  left: 100%;
  top: 0;
  background: white;
  padding: 15px 10px;
  border-radius: 5px;
  width: 250px;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-10px")});
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  z-index: 1000;

  li {
    padding: 13px 8px;
    font-size: 14px;
    color: #001f5f;
    cursor: pointer;
    transition: background 0.3s;
    font-family: "Questrial", serif;
    font-weight: 400;

    &:hover {
      background: #00911a;
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
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdown = (index) => {
    if (window.innerWidth > 768) return;
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleNestedDropdown = (index) => {
    if (window.innerWidth > 768) return;
    setOpenNestedDropdown(openNestedDropdown === index ? null : index);
  };

  const isActive = (path) => (location.pathname === path ? "active" : "");

  useEffect(() => {
    gsap.to(".navbar-container", {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".navbar-logo", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
    });

    gsap.from(".navbar-links li", {
      opacity: 0,
      y: -30,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
      delay: 1,
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
          <NavItem className={isActive("/")}>
            <Link to="/">Home</Link>
          </NavItem>

          <NavItem
            onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown(0)}
            onMouseLeave={() =>
              window.innerWidth > 768 && setOpenDropdown(null)
            }
            onClick={() => handleDropdown(0)}
            className={isActive("/about")}
          >
            <Link to={"/about"}> About Us</Link> <FaChevronDown size={13} />
            <DropdownMenu isOpen={openDropdown === 0}>
              <Link to="/about/generalinformation">
                <li>General Information</li>
              </Link>
              <Link to={"/about/statisticalprofile"}>
                <li>Statistical Profile</li>
              </Link>
              <Link to={"/about/uniquefeaturesofthecetp"}>
                <li>Unique Features of the CETP</li>
              </Link>
              <Link to={"/about/plantperformance"}>
                <li>Plant Performance</li>
              </Link>
              <Link to={"/about/treatmentplantdata"}>
                <li>Treatment Plant Data</li>
              </Link>
              <Link to={"/about/computerizedcetp"}>
                <li>Computerized Operations & Management</li>
              </Link>
              <Link to={"/about/organizationchart"}>
                <li>Organization Chart</li>
              </Link>
              <Link to={"/about/boardofdirectors"}>
                <li>Board Of Directors</li>
              </Link>
              <Link to={"/about/acknowledgement"}>
                <li>Acknowledgement</li>
              </Link>
              <Link to={"/about/greenbeltdevelopment"}>
                <li>Green Belt Development</li>
              </Link>
            </DropdownMenu>
          </NavItem>

          <NavItem
            onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown(1)}
            onMouseLeave={() =>
              window.innerWidth > 768 && setOpenDropdown(null)
            }
            onClick={() => handleDropdown(1)}
            className={isActive("/services")}
          >
            Services <FaChevronDown size={13} />
            <DropdownMenu isOpen={openDropdown === 1}>
              <Link to={"/servicepage/pretreatmentsystem"}><li>Pre-Treatment System</li></Link>
              <Link to={"/servicepage/processdescription"}><li>Process Description</li></Link> 
            </DropdownMenu>
          </NavItem>

          <NavItem
            onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown(2)}
            onMouseLeave={() =>
              window.innerWidth > 768 && setOpenDropdown(null)
            }
            onClick={() => handleDropdown(2)}
            className={isActive("/zld")}
          >
            ZLD <FaChevronDown size={13} />
            <DropdownMenu isOpen={openDropdown === 2}>
              <li 
                onMouseEnter={() => window.innerWidth > 768 && setOpenNestedDropdown(0)}
                onMouseLeave={() => window.innerWidth > 768 && setOpenNestedDropdown(null)}
                onClick={() => handleNestedDropdown(0)}
              >
                Pre-Treatment <FaChevronRight size={13} />
                <NestedDropdownMenu isOpen={openNestedDropdown === 0 || (window.innerWidth <= 768 && openDropdown === 2 && openNestedDropdown === 0)}>
                  {/* <Link to={"/zld/pretreatment"}><li>Overview</li></Link> */}
                  <Link to={"/zld/pretreatment/processflowdiagram"}><li>Process Flow Diagram</li></Link>
                  <Link to={"/zld/pretreatment/unitsizedesign"}><li>Unit Size & Design</li></Link>
                  <Link to={"/zld/pretreatment/gallery"}><li>Gallery</li></Link>
                </NestedDropdownMenu>
              </li>

              <li 
                onMouseEnter={() => window.innerWidth > 768 && setOpenNestedDropdown(1)}
                onMouseLeave={() => window.innerWidth > 768 && setOpenNestedDropdown(null)}
                onClick={() => handleNestedDropdown(1)}
              >
                Reverse Osmosis <FaChevronRight size={13} />
                <NestedDropdownMenu isOpen={openNestedDropdown === 1 || (window.innerWidth <= 768 && openDropdown === 2 && openNestedDropdown === 1)}>
                  {/* <Link to={"/zld/reverseosmosis"}><li>Overview</li></Link> */}
                  <Link to={"/zld/reverseosmosis/processflowdiagram"}><li>P&ID</li></Link>
                  <Link to={"/zld/reverseosmosis/unit"}><li>Unit Size & Design</li></Link>
                  <Link to={"/zld/reverseosmosis/gallery"}><li>Gallery</li></Link>
                </NestedDropdownMenu>
              </li>

              <li 
                onMouseEnter={() => window.innerWidth > 768 && setOpenNestedDropdown(2)}
                onMouseLeave={() => window.innerWidth > 768 && setOpenNestedDropdown(null)}
                onClick={() => handleNestedDropdown(2)}
              >
                Multiple Effect Evaporator <FaChevronRight size={13} />
                <NestedDropdownMenu isOpen={openNestedDropdown === 2 || (window.innerWidth <= 768 && openDropdown === 2 && openNestedDropdown === 2)}>
                  {/* <Link to={"/zld/multipleeffectevaporator"}><li>Overview</li></Link> */}
                  <Link to={"/zld/multipleeffectevaporator/processflowdiagram"}><li>P&ID</li></Link>
                  <Link to={"/zld/multipleeffectevaporator/unit"}><li>Unit Size & Design</li></Link>
                  <Link to={"/zld/multipleeffectevaporator/gallery"}><li>Gallery</li></Link>
                </NestedDropdownMenu>
              </li>
            </DropdownMenu>
          </NavItem>

          <NavItem
            onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown(3)}
            onMouseLeave={() =>
              window.innerWidth > 768 && setOpenDropdown(null)
            }
            onClick={() => handleDropdown(3)}
            className={isActive("/testing-lab")}
          >
            Testing Lab <FaChevronDown size={13} />
            <DropdownMenu isOpen={openDropdown === 3}>
              <Link to={"/testinglab/introduction"}><li>Introduction</li></Link>
            </DropdownMenu>
          </NavItem>

          <NavItem className={isActive("/member-tanneries")}>
            <Link to="/membertanneries">Member Tanneries</Link>
          </NavItem>

          <NavItem className={isActive("/slf")}>
            <Link to="/slf">SLF</Link>
          </NavItem>

          {/* <NavItem className={isActive("/annual-returns")}>
            <Link to="/annualreturn">Annual Returns</Link>
          </NavItem> */}

          <NavItem 
            onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown(4)}
            onMouseLeave={() =>
              window.innerWidth > 768 && setOpenDropdown(null)
            }
            onClick={() => handleDropdown(4)}
            className={isActive("/projects")}
          >
            Projects <FaChevronDown size={13} />
            <DropdownMenu isOpen={openDropdown === 4}>
            <Link to={"/projects/cetp"}><li>Establishment of CETP – 1995</li></Link>
            <Link to={"/projects/iius"}><li>IIUS – 2008</li></Link>
              <Link to={"/projects/ifladp"}><li>IFLADP - 2018</li></Link>
              <Link to={"/projects/step"}><li>STEP Scheme – 2025</li></Link>

            </DropdownMenu>
          </NavItem>

          <NavItem className={isActive("/contact-us")}>
            <Link to="/contact">Contact Us</Link>
          </NavItem>
        </NavLinks>
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;