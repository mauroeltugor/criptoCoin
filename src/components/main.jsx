import { useState } from "react";
import search from "../getData";

const Try =  () =>{

    const[data, setData] = useState([]);

    
    
    const fetchData = async () => {
        const newData = await search();
        setData(newData)
    }

    fetchData()

    const FilterCoin = data.filter((event) => event.name.toLowerCase().includes(search.toLowerCase()));

    const dataInfo = data.map((element) => {
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
                    <h1>HELLO WORLD</h1>
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

