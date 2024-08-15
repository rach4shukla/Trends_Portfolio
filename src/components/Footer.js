import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #D0F0C0;
  padding: 30px 20px;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;
  }
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: #367c2b;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ContactInfo = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 24px;
  transition: color 0.2s ease;

  &:hover {
    color: #367c2b;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#home">Home</FooterLink>
        <FooterLink href="#work">Work</FooterLink>
        <FooterLink href="#about">About</FooterLink>
        <FooterLink href="#blog">Blog</FooterLink>
      </FooterLinks>
      <ContactInfo>
        <p>Cambridge, Canada (EST)</p>
        <p>Email: rachna4shukla@gmail.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </ContactInfo>
      <SocialLinks>
        <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">F</SocialLink>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">T</SocialLink>
        <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">L</SocialLink>
        <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">I</SocialLink>
      </SocialLinks>
      <p>&copy; 2024 Rachna Shukla. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
