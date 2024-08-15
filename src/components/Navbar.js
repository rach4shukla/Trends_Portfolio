// Navbar.jsx
import React from 'react';
import styled from 'styled-components';
import AboutSection from './AboutSection';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #D0F0C0;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-bottom: 10px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: #367c2b;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const LocationTime = styled.div`
  font-size: 17px;
  color: #666;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  background-color: #004526;
  color: white;
  border: none;
  padding: 20px 40px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #367c2b;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#work">Work</NavLink>
        <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
        <NavLink href="#blog">Blog</NavLink>
        <NavLink href="#gallery">Gallery</NavLink>
      </NavLinks>
      <LocationTime>
        Cambridge, Canada (EST)
      </LocationTime>
      <Button>Get in Touch</Button>
    </NavbarContainer>
  );
}

export default Navbar;
