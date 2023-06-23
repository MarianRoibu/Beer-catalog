import React from "react";
import styled from "styled-components";

const Input = styled.input`
 position: absolute;
 top: 50%;
 padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  width: 300px;
  z-index: 10;
`;

const SearchBar = ({ beers, setFilteredBeers }) => {
    const handleSearch = (event) => {
        const searchQuery = event.target.value.toLowerCase();

        const filteredBeers = beers.filter(
            (beer) =>
                beer.name.toLowerCase().includes(searchQuery) ||
                beer.food_pairing.some((food) => food.toLowerCase().includes(searchQuery))
        );

        setFilteredBeers(filteredBeers);
    };

    return (
        <Input
            type="text"
            placeholder="Search beers by name or food pairing"
            onChange={handleSearch}
        />
    );
};

export default SearchBar;
