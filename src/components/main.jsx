import { useState } from "react";
import search from "../getData";

const Try =  () =>{

    const[data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchData = async () => {
        const newData = await search();
        setData(newData)
    }

    fetchData()

    const FilterCoin = (event) => {
        setSearchTerm(event.target.value);
      };

    const filteredData = data.filter((element) =>
        element.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      

    const dataInfo = filteredData.map((element) => {
        return(
            <div>
                <div >
                    <div className="criptoInfo">
                        <p className="symbol">{element.symbol}</p>
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
                        <input className="searchBar" type="text" onChange={FilterCoin} placeholder="Enter your search request..." />
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

export default Try;

