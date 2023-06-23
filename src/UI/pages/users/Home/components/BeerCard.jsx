import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  margin-bottom: 10rem;
  background-color: #ffffff;
`;

const ContentContainer = styled.div`
  display: grid;
  top: 70%;
  position: absolute;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding-bottom: 10vh;
  z-index: 2;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BeerImage = styled.img`
  width: 20vh;
  height: 10vh;
  object-fit: contain;
  border-radius: 5%;
  margin-bottom: 10px;
`;

const BeerName = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

const BeerDetails = styled.p`
  margin-bottom: 10px;
  color: #1d16169f;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -120vh;
  z-index: 10;
`;
const CardButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -120vh;
  z-index: 100;
`;

const Button = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  color: #fff;
  margin-left: 50vh;
  margin-right: 50vh;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #999;
  }
`;
const ButtonSettings = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  color: #fff;
  margin-left: 50vh;
  margin-right: 50vh;
  z-index: 9999;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #999;
  }
`;


const BeerCards = ({ beers, displayedProperties, handleCardClick }) => {
  return (
    <ContentContainer>
      {beers.map((beer) => (
        <PostContainer key={beer.id} onClick={() => handleCardClick(beer)}>
          {displayedProperties.includes("image") && (
            <BeerImage src={beer.image_url} alt="Beer" />
          )}
          {displayedProperties.includes("name") && (
            <BeerName>{beer.name}</BeerName>
          )}
          {displayedProperties.includes("abv") && (
            <BeerDetails>ABV: {beer.abv}</BeerDetails>
          )}
          {displayedProperties.includes("ibu") && (
            <BeerDetails>IBU: {beer.ibu}</BeerDetails>
          )}
          {displayedProperties.includes("description") && (
            <BeerDetails>{beer.description}</BeerDetails>
          )}
        </PostContainer>
      ))}
    </ContentContainer>
  );
};

export default BeerCards;
