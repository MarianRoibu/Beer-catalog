import React, { useEffect, useState } from "react";
import {
  ButtonSettings, ButtonFavorite, Button, LikeButton, HeartIcon, FavoriteButtonContainer, CardButtonContainer,
  ButtonContainer, ButtonContainerFilters, Container, ContentContainer, PostContainer, ButtonFilters, BeerImage, BeerName, BeerDetails
} from "../../../../Styles/HomePageStyles/BeerCardsStyle";
import { Table, Th, Td, ImageWrapper } from "../../../../Styles/HomePageStyles/BeerTableStyle";
import { FaChevronLeft, FaChevronRight, FaTable, FaThLarge, FaHeart, FaEye } from "react-icons/fa";
import fetchAllBeers from "../../../../../api/getAll";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import Modal from "../../../../components/InformationModal/Modal";
import SettingsModal from "../../../../components/SettingsModal/SettingsModal";
import GearButtonComponent from "../../../../components/Buttons/GearButton";



const BeerCard = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedBeer, setSelectedBeer] = useState(null);
  const [displayedProperties, setDisplayedProperties] = useState([
    "image",
    "name",
    "tagline",
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
          {!!filteredAndBookmarkedBeers.length && (
            <ContentContainer>
              {filteredAndBookmarkedBeers.map((beer) => (
                <PostContainer>
                  <div key={beer.id} onClick={() => handleCardClick(beer)}>
                    {displayedProperties.includes("image") && (
                      <BeerImage src={beer.image_url} alt="Beer" />
                    )} <br />
                    {displayedProperties.includes("name") && (
                      <BeerName>{beer.name}</BeerName>
                    )}
                    {displayedProperties.includes("tagline") && (
                      <BeerDetails>Tagline: {beer.tagline}</BeerDetails>
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
                  </div>
                  <LikeButton
                    onClick={() => handleBookmark(beer.id)}
                    className={favorites.includes(beer.id) ? 'active' : ''}
                  >
                    <HeartIcon />
                    {favorites.includes(beer.id)}
                  </LikeButton>
                </PostContainer>
              ))}
            </ContentContainer>
          )}
        </>
      )}
      <SearchBar beers={beers} setFilteredBeers={handleSearch} />

      <ButtonContainer>
        <Button onClick={handlePrevious} disabled={startIndex === 0}>
          <FaChevronLeft />
        </Button>
        <Button onClick={handleNext} disabled={startIndex + 12 >= beers.length}>
          <FaChevronRight />
        </Button>
      </ButtonContainer>

      <ButtonContainerFilters>
        {isTableView && (
          <ButtonFilters onClick={() => setIsTableView(false)}>
            <FaThLarge style={{ marginRight: '5px' }} />
            Switch
          </ButtonFilters>
        )}
        {!isTableView && (
          <ButtonFilters onClick={() => setIsTableView(true)}>
            <FaTable style={{ marginRight: '5px' }} />
            Switch
          </ButtonFilters>
        )}
        <ButtonFilters onClick={() => setShowFavorites(!showFavorites)}>
          {showFavorites ? (
            <>
              <FaEye style={{ marginRight: '5px' }} />
              All
            </>
          ) : (
            <>
              <FaHeart style={{ marginRight: '5px' }} />
              Favorites
            </>
          )}
        </ButtonFilters>

        <ButtonSettings onClick={toggleSettingsModal}>
          <GearButtonComponent />
        </ButtonSettings>
      </ButtonContainerFilters>


      {/* <CardButtonContainer>
  </CardButtonContainer> */}



      {isTableView && (
        <Table>
          <thead>
            <tr>
              {displayedProperties.includes("image") && <Th>Image</Th>}
              {displayedProperties.includes("name") && <Th>Name</Th>}
              {displayedProperties.includes("tagline") && <Th>tagline</Th>}
              {displayedProperties.includes("abv") && <Th>ABV</Th>}
              {displayedProperties.includes("ibu") && <Th>IBU</Th>}
              {displayedProperties.includes("description") && <Th>Description</Th>}
              <Th>Favorite</Th>
            </tr>
          </thead>
          <tbody>
            {filteredAndBookmarkedBeers.map((beer) => (
              <tr>

                {displayedProperties.includes("image") && (
                  <Td key={beer.id} onClick={() => handleCardClick(beer)}>
                    <ImageWrapper>
                      <img src={beer.image_url} alt="Beer" />
                    </ImageWrapper>
                  </Td>
                )}
                {displayedProperties.includes("name") && <Td>{beer.name}</Td>}
                {displayedProperties.includes("tagline") && <Td>{beer.tagline}</Td>}
                {displayedProperties.includes("abv") && <Td>{beer.abv}</Td>}
                {displayedProperties.includes("ibu") && <Td>{beer.ibu}</Td>}
                {displayedProperties.includes("description") && <Td>{beer.description}</Td>}

                <Td>
                  <LikeButton
                    onClick={() => handleBookmark(beer.id)}
                    className={favorites.includes(beer.id) ? 'active' : ''}
                  >
                    <HeartIcon />
                    {favorites.includes(beer.id)}
                  </LikeButton>

                </Td>
              </tr>
            ))}
          </tbody>
        </Table>

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