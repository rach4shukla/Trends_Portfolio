import React from 'react';
import styled from 'styled-components';
import BookImage1 from '../assets/1.png'; 
import BookImage2 from '../assets/2.png';
import BookImage3 from '../assets/3.png';
import BookImage4 from '../assets/4.png';
import BookImage5 from '../assets/5.png';
import BookImage6 from '../assets/6.png';
import BookImage7 from '../assets/7.png';
import BookImage8 from '../assets/8.png';
import BookImage9 from '../assets/9.png';

const BooksSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #f4f4f4;
`;

const ThreadContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px;
  width: 100%;
  gap: 20px;
  scroll-behavior: smooth;
  scrollbar-width: thin; /* For Firefox */
  
  &::-webkit-scrollbar {
    height: 8px; /* For Chrome, Safari */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #367c2b;
    border-radius: 4px;
  }
`;

const BookCard = styled.div`
  flex: 0 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const BookTitle = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
`;

const BookAuthor = styled.p`
  font-size: 1em;
  color: #555;
  margin: 5px 0;
`;

const BuyLink = styled.a`
  display: inline-block;
  background-color: #004526;
  color: #ffffff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #367c2b;
  }
`;

const BooksSection = () => {
  return (
    <BooksSectionContainer>
      <ThreadContainer>
        <BookCard>
          <BookImage src={BookImage1} alt="Book Cover 1" />
          <BookTitle>Introduction to Western Political Thought</BookTitle>
          <BookAuthor>Rachna Shukla</BookAuthor>
          <BuyLink href="https://www.amazon.ca/Introduction-Western-Political-Thought-Rachna/dp/9357048006" target="_blank" rel="noopener noreferrer">Buy on Amazon</BuyLink>
        </BookCard>
        <BookCard>
          <BookImage src={BookImage2} alt="Book Cover 2" />
          <BookTitle>Essential of Comparative politics</BookTitle>
          <BookAuthor>Rachna Shukla</BookAuthor>
          <BuyLink href="https://www.amazon.ca/Essentials-Comparative-Politics-Rachna-Shukla/dp/9357416757" target="_blank" rel="noopener noreferrer">Buy on Amazon</BuyLink>
        </BookCard>
        <BookCard>
          <BookImage src={BookImage3} alt="Book Cover 3" />
          <BookTitle>Definitive Guide To Political Ideologies</BookTitle>
          <BookAuthor>Rachna Shukla</BookAuthor>
          <BuyLink href="https://www.amazon.in/DEFINITIVE-POLITICAL-IDEOLOGIES-RACHNA-SHUKLA/dp/935819801X" target="_blank" rel="noopener noreferrer">Buy on Amazon</BuyLink>
        </BookCard>
        <BookCard>
          <BookImage src={BookImage4} alt="Book Cover 4" />
          <BookTitle>The Complete Handbook of Political Theory</BookTitle>
          <BookAuthor>Rachna Shukla</BookAuthor>
          <BuyLink href="https://www.amazon.com/dp/B000000003" target="_blank" rel="noopener noreferrer">Buy on Amazon</BuyLink>
        </BookCard>
        <BookCard>
          <BookImage src={BookImage5} alt="Book Cover 4" />
          <BookTitle>Themes & Thinkers: Indian Political Thought</BookTitle>
          <BookAuthor>Rachna Shukla</BookAuthor>
          <BuyLink href="https://www.amazon.com/dp/B000000003" target="_blank" rel="noopener noreferrer">Buy on Amazon</BuyLink>
        </BookCard>
        <BookCard>
          <BookImage src={BookImage6} alt="Book Cover 4" />
          <BookTitle>Globalisation of World Politics</BookTitle>
          <BookAuthor>Rachna Shukla</BookAuthor>
          <BuyLink href="https://www.amazon.com/dp/B000000003" target="_blank" rel="noopener noreferrer">Buy on Amazon</BuyLink>
        </BookCard>
        <BookCard>
          <BookImage src={BookImage7} alt="Book Cover 4" />
          <BookTitle>Analysis of Indian Constitution</BookTitle>
          <BookAuthor>Rachna Shukla</BookAuthor>
          <BuyLink href="https://www.amazon.com/dp/B000000003" target="_blank" rel="noopener noreferrer">Buy on Amazon</BuyLink>
        </BookCard>
        <BookCard>
          <BookImage src={BookImage8} alt="Book Cover 4" />
          <BookTitle>Indian Government and Politics</BookTitle>
          <BookAuthor>Rachna Shukla</BookAuthor>
          <BuyLink href="https://www.amazon.com/dp/B000000003" target="_blank" rel="noopener noreferrer">Buy on Amazon</BuyLink>
        </BookCard>
        <BookCard>
          <BookImage src={BookImage9} alt="Book Cover 4" />
          <BookTitle>India and The World: A Diplomatic Outlook</BookTitle>
          <BookAuthor>Rachna Shukla</BookAuthor>
          <BuyLink href="https://www.amazon.com/dp/B000000003" target="_blank" rel="noopener noreferrer">Buy on Amazon</BuyLink>
        </BookCard>
      </ThreadContainer>
    </BooksSectionContainer>
  );
}

export default BooksSection;
