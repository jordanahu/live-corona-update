import React, {useState, useEffect } from 'react';
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import {Countries} from "../../api";


const CountryPicker = ({handleCountry})=>{
    const [country, setCountry] = useState([]);

    useEffect(()=>{
        Countries().then(res=>{
            setCountry(prev=>{
            let finalResult = [...prev]
            if(Array.isArray(res)){
                finalResult.push(...res)
            }

            return finalResult;
        })
        })
        .catch(err=>console.log("the errors from countries are, ", err))
    },[])

    return (
        <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountry(e.target.value)}>
                <option value="">All Countries</option>
                {
                    country?.map((country, index)=>(
                    <option key={index} value={country}>{country}</option>
                    ))
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;