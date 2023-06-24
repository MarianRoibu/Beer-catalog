import React from "react";
import { Input } from "../../Styles/ComponentsStyles/SearchBarStyle";

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
