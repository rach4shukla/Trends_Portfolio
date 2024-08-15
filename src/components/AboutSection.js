import React from 'react';
import styled from 'styled-components';


const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #D0F0C0;
  padding: 50px 20px;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: #004526;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #333;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 30px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Skill = styled.div`
  background-color: #fff;
  color: #004526;
  padding: 15px 25px;
  border-radius: 50px;
  font-size: 1em;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <Title>About Me</Title>
      <Description>
        I'm Rachna Shukla, a Full Stack Developer with a passion for building web applications that are both functional and aesthetically pleasing. With a strong background in the MERN stack, I have mentored over 155k students and authored several books. When I'm not coding, I enjoy delving into political science and exploring new technologies.
      </Description>
      <SkillsContainer>
        <Skill>JavaScript</Skill>
        <Skill>React</Skill>
        <Skill>Node.js</Skill>
        <Skill>MongoDB</Skill>
        <Skill>Express</Skill>
        <Skill>HTML & CSS</Skill>
        <Skill>Git & GitHub</Skill>
      </SkillsContainer>
    </AboutContainer>
  );
};

export default AboutSection;
