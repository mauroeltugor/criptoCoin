const searchInfo = async () => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1';
    const response = await fetch(url);
    const data = await response.json();
    const finalDataCoin = data.map((data) => {
      return{
        'name': data.name,
        'symbol': data.symbol,
        'image':data.image,
        'current_price': data.current_price
      }
    })
    return finalDataCoin;
  };
  
export default searchInfo;