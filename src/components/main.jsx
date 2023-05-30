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


    return(
        <div>
            <h1>{data.id}</h1>
        </div>
    )
}

export default Try;

