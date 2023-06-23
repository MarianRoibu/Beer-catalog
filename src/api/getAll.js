const fetchAllBeers = async () => {
    try {
      const response = await fetch("https://api.punkapi.com/v2/beers");
      const data = await response.json();
  
      // Check if the response was successful
      if (response.ok) {
        return data;
      } else {
        console.error("Request failed with status:", response.status);
        return [];
      }
    } catch (error) {
      console.error("An error occurred:", error);
      return [];
    }
  };
  
  export default fetchAllBeers;
  