import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/RachnaShukla.png';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #D0F0C0;
  clip-path: path('M 0 0 H 100% V 90% Q 50% 110% 0 90% Z');
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  font-family: 'Georgia', serif;
  font-size: 3em;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const NamePart = styled.span`
  font-size: 1em;
  font-weight: bold;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

const Description = styled.p`
  font-size: 1.5em;
  color: #004526;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NameContainer>
        <NamePart>Rachna</NamePart>
        <ProfileImage src={profileImage} alt="Profile" />
        <NamePart>Shukla</NamePart>
      </NameContainer>
      <Description>
        Full Stack Developer | Author | Mentored 155k students | Political Science Enthusiast
      </Description>
    </HeaderContainer>
  );
}

export default Header;
