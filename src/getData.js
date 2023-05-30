const search = async () => {
    const url = 'https://api.coingecko.com/api/v3/search?query=a';
    const response = await fetch(url);
    const data = await response.json();
    const final = data.map((info) => ({
      id: info.id,
      name: info.name,
      symbol: info.symbol
    }));
  
    return final;
  };
  
  export default search;
  