import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fetchAllBeers from "../../../../../api/getAll";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Modal from "../../../../components/InformationModal/Modal";
import SettingsModal from "../../../../components/SettingsModal/SettingsModal";

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
  
  z-index: 1000;
`;

const ButtonContainerFilters = styled.div`
  
  margin-top: -120vh;
  
  z-index: 1000;
`;


const CardButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -120vh;
  z-index: 100;
`;
const FavoriteButtonContainer = styled.div`
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

const ButtonFavorite = styled.button`
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
const Table = styled.table`
margin-top: 120rem;
z-index: 999;
`

const BeerCard = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedBeer, setSelectedBeer] = useState(null);
  const [displayedProperties, setDisplayedProperties] = useState([
    "name",
    "abv",
    "ibu",
    "description",
  ]);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [isTableView, setIsTableView] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    async function fetchBeers() {
      const data = await fetchAllBeers();
      setBeers(data);
      setFilteredBeers(data.slice(startIndex, startIndex + 12));
    }

    fetchBeers();
  }, [startIndex]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = (filteredBeers) => {
    setStartIndex(0);
    setFilteredBeers(filteredBeers.slice(0, 12));
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

  const toggleSettingsModal = () => {
    setShowSettingsModal(!showSettingsModal);
  };

  const handlePropertyToggle = (property) => {
    const updatedProperties = displayedProperties.includes(property)
      ? displayedProperties.filter((prop) => prop !== property)
      : [...displayedProperties, property];
    setDisplayedProperties(updatedProperties);
  };

  const handleAddProperty = (property) => {
    if (!displayedProperties.includes(property)) {
      const updatedProperties = [...displayedProperties, property];
      setDisplayedProperties(updatedProperties);
    }
  };

  const handleBookmark = (beerId) => {
    if (favorites.includes(beerId)) {
      const updatedFavorites = favorites.filter((id) => id !== beerId);
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, beerId];
      setFavorites(updatedFavorites);
    }
  };

  const mainBeers = beers.slice(startIndex, startIndex + 12);
  const filteredAndBookmarkedBeers = showFavorites
    ? beers.filter((beer) => favorites.includes(beer.id))
    : filteredBeers;

  return (
    <Container>
      {!isTableView && (
        <>
          {!filteredAndBookmarkedBeers.length && (
            <ContentContainer>
              {mainBeers.map((beer) => (
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
                  <Button
                    onClick={() => handleBookmark(beer.id)}
                    active={favorites.includes(beer.id)}
                  >
                    {favorites.includes(beer.id) ? "Remove Favorite" : "Add Favorite"}
                  </Button>
                </PostContainer>
              ))}
            </ContentContainer>
          )}
          <SearchBar beers={beers} setFilteredBeers={handleSearch} />
          {!!filteredAndBookmarkedBeers.length && (
            <ContentContainer>
              {filteredAndBookmarkedBeers.map((beer) => (
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
                  <button
                    onClick={() => handleBookmark(beer.id)}
                    active={favorites.includes(beer.id)}
                  >
                    {favorites.includes(beer.id) ? "Remove Favorite" : "Add Favorite"}
                  </button>
                </PostContainer>
              ))}
            </ContentContainer>
          )}
        </>
      )}

      <ButtonContainer>
        <Button onClick={handlePrevious} disabled={startIndex === 0}>
          Previous
        </Button>
        <Button onClick={handleNext} disabled={startIndex + 12 >= beers.length}>
          Next
        </Button>
      </ButtonContainer>
<ButtonContainerFilters>
                {!isTableView && (
          <ButtonFavorite onClick={() => setIsTableView(true)}>Switch to Table View</ButtonFavorite>
        )}
        {isTableView && (
          <ButtonFavorite onClick={() => setIsTableView(false)}>Switch to Card View</ButtonFavorite>
        )}
        <ButtonFavorite onClick={() => setShowFavorites(!showFavorites)}>
          {showFavorites ? "Show All" : "Show Favorites"}
        </ButtonFavorite>          
      <ButtonSettings onClick={toggleSettingsModal}>Settings</ButtonSettings>
      </ButtonContainerFilters>
<CardButtonContainer>
  </CardButtonContainer>



   
      

      {isTableView && (
              <Table>
          
          <thead>
            <tr>
              {displayedProperties.includes("image") && <th>Image</th>}
              {displayedProperties.includes("name") && <th>Name</th>}
              {displayedProperties.includes("abv") && <th>ABV</th>}
              {displayedProperties.includes("ibu") && <th>IBU</th>}
              {displayedProperties.includes("description") && <th>Description</th>}
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndBookmarkedBeers.map((beer) => (
              <tr key={beer.id}>
                {displayedProperties.includes("image") && (
                  <td>
                    <img src={beer.image_url} alt="Beer" />
                  </td>
                )}
                {displayedProperties.includes("name") && <td>{beer.name}</td>}
                {displayedProperties.includes("abv") && <td>{beer.abv}</td>}
                {displayedProperties.includes("ibu") && <td>{beer.ibu}</td>}
                {displayedProperties.includes("description") && <td>{beer.description}</td>}
                <td>
                  <button
                    onClick={() => handleBookmark(beer.id)}
                    style={{ color: favorites.includes(beer.id) ? "red" : "black" }}
                  >
                    {favorites.includes(beer.id) ? "Remove" : "Favorite"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table >
        
      )}


      {selectedBeer && <Modal beer={selectedBeer} onClose={closeModal} />}
      {showSettingsModal && (
        <SettingsModal
          displayedProperties={displayedProperties}
          onPropertyToggle={handlePropertyToggle}
          onAddProperty={handleAddProperty}
          onClose={toggleSettingsModal}
        />
      )}
    </Container>
  );
};
  
  export default BeerCard;