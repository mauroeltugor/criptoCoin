const search = async () => {
    const url = 'https://api.coingecko.com/api/v3/search?query=a';
    const response = await fetch(url);
    const data = await response.json();
    const finalData = data.coins
    const final = finalData.map((data) => {
      return{
        'name': data.image,
        'symbol': data.symbol,
        'image':data.image
      }
    })
    return final;
  };
  
  export default search;