import React from 'react';

const BeerTable = ({ beers, displayedProperties }) => {
  return (
    <table>
      <thead>
        <tr>
          {displayedProperties.includes("image") && <th>Image</th>}
          {displayedProperties.includes("name") && <th>Name</th>}
          {displayedProperties.includes("abv") && <th>ABV</th>}
          {displayedProperties.includes("ibu") && <th>IBU</th>}
          {displayedProperties.includes("description") && <th>Description</th>}
        </tr>
      </thead>
      <tbody>
        {beers.map((beer) => (
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BeerTable;
