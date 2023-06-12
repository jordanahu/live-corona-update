import React, {useEffect, useState} from "react";
import {Cards, Chart, CountryPicker} from "./components";
import Ghana from "./components/Ghana/Ghana";
import styles from "./App.module.css";
import { fetchData } from "./api";
import covid19Img from "./images/jamCovid.png";


function App(){
    const [data, setData] = useState({});
    const [country, setCountry] = useState("");

    useEffect(()=>{
        fetchData().then(res=>{
            setData(prev=>{
                let finalResult = {...prev, ...res};
                return finalResult;
            })
        }).catch(_=>{
            alert("An error occured while fetching the data. Refresh")
        });
    },[]);



    const handleCountry = async (country)=>{
        const response = await fetchData(country);
        setCountry(country);

         setData(prev=>{
            let finalResult = {...prev, ...response};
            return finalResult;
        });

    }

     return(
            <div className={styles.container}>
                <img src={covid19Img} alt="CORONAVIRUS_LOGO_IMAGE"/>
                <Cards data={data}/>
                <Ghana fetchData={fetchData}/>
                <CountryPicker handleCountry={handleCountry}/>
                <Chart data={data} country={country}/>
            </div>
        )
}

export default App