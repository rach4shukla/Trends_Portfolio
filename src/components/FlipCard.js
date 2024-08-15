// FlipCard.js
import React from 'react';
import styled from 'styled-components';

const FlipCardContainer = styled.div`
  width: 300px;
  height: 200px;
  perspective: 1000px;
  margin: 20px;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #D0F0C0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #D0F0C0;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  transform: rotateY(180deg);
  border: 2px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const NavigateButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background: #004526;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #367c2b;
  }
`;

const FlipCard = ({ image, pageUrl, buttonText }) => {
  return (
    <FlipCardContainer>
      <FlipCardInner>
        <FlipCardFront>
          <CardImage src={image} alt="Card front" />
        </FlipCardFront>
        <FlipCardBack>
          <p>{buttonText}</p>
          <NavigateButton onClick={() => window.location.href = pageUrl}>
            Go to Page
          </NavigateButton>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCardContainer>
  );
}

export default FlipCard;
