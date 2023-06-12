import React, { useState, useEffect } from "react";
import Error from "./error";

const SearchCoinsBar = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`
        );
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const FilterCoin = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(
    (element) =>
      element.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dataInfo = filteredData.map((element) => {
    return (
      <div key={element.id}>
        <div>
          <div className="criptoInfo">
            <img src={element.image} className="symbol" alt={element.name} />
            <p>{element.name}</p>
            <p>${element.current_price.toFixed(2).replace('.',',')} USD</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="main">
      <div className="target">
        <div className="startPart">
          <h1>Sales Activity</h1>
        </div>
        <div className="endPart">
          <div className="tittleSearch">
            <h1>Control Panel</h1>
            <input
              className="searchBar"
              type="text"
              onChange={FilterCoin}
              placeholder="Enter your search request..."
            />
          </div>
          <div className="b2b">
            <h3>B2B DISTRIBUTION</h3>
            <p>Sales Deal</p>
          </div>
          <hr className="line" />
          {isLoading ? (
            <div className="loading">Loading...</div>
          ) : error ? (
            <Error />
          ) : (
            <div>{dataInfo}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchCoinsBar;
