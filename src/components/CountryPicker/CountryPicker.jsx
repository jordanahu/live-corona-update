import React, {useState, useEffect } from 'react';
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import {Countries} from "../../api";


const CountryPicker = ({handleCountry})=>{
    const [country, setCountry] = useState([]);

    useEffect(()=>async ()=>setCountry(await Countries()))

    return (
        <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountry(e.target.value)}>
                <option value="">All Countries</option>
                {
                    country.map((country, index)=>(
                    <option key={index} value={country}>{country}</option>
                    ))
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;