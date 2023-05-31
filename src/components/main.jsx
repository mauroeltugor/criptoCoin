import { useState } from "react";
import search from "../getData";

const Try =  () =>{

    const[data, setData] = useState([]);
    
    const fetchData = async () => {
        const newData = await search();
        setData(newData)
    }

    console.log(data);

    if(data.length ===0){
        fetchData();
    }

    const dataInfo = data.map((element) => {
        return <p>{element.symbol}</p>; // Suponiendo que el objeto tiene una propiedad "nombre"
      });

    return(
        <div>
            <ul>
                <li>{dataInfo}</li>
            </ul>
        </div>
    )
}

export default Try;

