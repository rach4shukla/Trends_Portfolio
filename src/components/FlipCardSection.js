import React from 'react';
import styled, { keyframes } from 'styled-components';
import FlipCard from './FlipCard';
import bookImage from '../assets/fullstack.png'; 
import writerImage from '../assets/writer.png'; 
import educatorImage from '../assets/educator.png'; 

const jumpIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  60% {
    opacity: 1;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardsSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
  border-radius: 10px;
  animation: ${jumpIn} 1s ease-out;
  
  & > div {
    animation: ${jumpIn} 1s ease-out;
  }

  & > div:nth-child(1) {
    animation-delay: 0.1s;
  }

  & > div:nth-child(2) {
    animation-delay: 0.3s;
  }

  & > div:nth-child(3) {
    animation-delay: 0.5s;
  }
`;

const FlipCardSection = () => {
  return (
    <CardsSection>
      <FlipCard 
        image={bookImage} 
        pageUrl="/#work" 
        buttonText="Full Stack Web Dev" 
      />
      <FlipCard 
        image={writerImage} 
        pageUrl="/page2" 
        buttonText="Author" 
      />
      <FlipCard 
        image={educatorImage}
        pageUrl="https://unacademy.com/@Ashnasisodia/about" 
        buttonText="Educator & Mentor" 
      />
    </CardsSection>
  );
}

export default FlipCardSection;
