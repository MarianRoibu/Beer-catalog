import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fetchAllBeers from "../../../../../api/getAll";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Modal from "../../../../components/InformationModal/Modal";

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

const BeerCard = () => {
    const [beers, setBeers] = useState([]);
    const [filteredBeers, setFilteredBeers] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [selectedBeer, setSelectedBeer] = useState(null);
  
    useEffect(() => {
      async function fetchBeers() {
        const data = await fetchAllBeers();
        setBeers(data);
        setFilteredBeers(data.slice(startIndex, startIndex + 12));
      }
  
      fetchBeers();
    }, [startIndex]);
  
    const handleSearch = (filteredBeers) => {
      setFilteredBeers(filteredBeers);
      setStartIndex(0);
    };
  
    const handleNext = () => {
      setStartIndex(startIndex + 12);
    };
  
    const handlePrevious = () => {
      setStartIndex(startIndex - 12);
    };
  
    const handleCardClick = (beer) => {
      setSelectedBeer(beer);
    };
  
    const closeModal = () => {
      setSelectedBeer(null);
    };
  
    const mainBeers = beers.slice(startIndex, startIndex + 12);
  
    return (
      <Container>
        {!filteredBeers.length && (
          <ContentContainer>
            {mainBeers.map((beer) => (
              <PostContainer key={beer.id} onClick={() => handleCardClick(beer)}>
                <BeerImage src={beer.image_url} alt="Beer" />
                <BeerName>{beer.name}</BeerName>
                <BeerDetails>
                  ABV: {beer.abv} | IBU: {beer.ibu}
                </BeerDetails>
                <BeerDetails>{beer.description}</BeerDetails>
              </PostContainer>
            ))}
          </ContentContainer>
        )}
        <SearchBar beers={beers} setFilteredBeers={handleSearch} />
        {!!filteredBeers.length && (
          <ContentContainer>
            {filteredBeers.map((beer) => (
              <PostContainer key={beer.id} onClick={() => handleCardClick(beer)}>
                <BeerImage src={beer.image_url} alt="Beer" />
                <BeerName>{beer.name}</BeerName>
                <BeerDetails>
                  ABV: {beer.abv} | IBU: {beer.ibu}
                </BeerDetails>
                <BeerDetails>{beer.description}</BeerDetails>
              </PostContainer>
            ))}
          </ContentContainer>
        )}
        <ButtonContainer>
          <Button onClick={handlePrevious} disabled={startIndex === 0}>
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={startIndex + 12 >= beers.length}
          >
            Next
          </Button>
        </ButtonContainer>
        {selectedBeer && <Modal beer={selectedBeer} onClose={closeModal} />}
      </Container>
    );
  };
  
  export default BeerCard;