import { useEffect, useState } from "react";
import searchInfo from "../helper/getCriptoCoinData";
import search from "../helper/search";

const SearchCoinsBar =  () =>{
    
    const[data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const[searchData, setSearchData] = useState([]);
    
    // const FilterCoin = (event) => {
    //     setSearchTerm(event.target.value);
    // };
    
    // const filteredData = data.filter((element) =>
    // element.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    // element.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    
    // const end= `https://api.coingecko.com/api/v3/search?query=${filteredData}`


    // const searchResult = async () => {
    //     const searchData = await search(end); 
    //     setSearchData(searchData);      
    // };
       

    useEffect(()=>{
        const fetchData = async () => {
            const newData = await searchInfo();
            setData(newData)
        }
        fetchData()
    })

    // useEffect(()=>{
    //     const searchFetch = async(url) =>{
    //         const dataResultApi = await searchResult(url);
    //         setSearchData(dataResultApi);
    //     }
    //     searchFetch(end)
    // })
      
    // useEffect(() => {
    //     searchResult(); 
    //   }, [filteredData]);
      

    const dataInfo = data.map((element) => {
        return(
            <div>
                <div >
                    <div className="criptoInfo">
                        <img src={element.image} className="symbol"/>
                        <p>{element.name}</p>
                        <p>${element.current_price}</p>
                    </div>
               </div>
            </div>
        )  
      });

    return(
        <section className="main">
            <div className="target">
                <div className="startPart">
                    <h1>Sales Activity</h1>
                </div>
                <div className="endPart">
                    <div className="tittleSearch">
                        <h1>Control Panel</h1>
                        <input className="searchBar" type="text" /*onChange={FilterCoin}*/ placeholder="Enter your search request..." />
                    </div>
                    <div className="b2b">
                        <h3>B2B DISTRIBUTION</h3>
                        <p>Sales Deal</p>
                    </div>
                    <hr className="line"/>
                    <div>
                        {dataInfo}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchCoinsBar;