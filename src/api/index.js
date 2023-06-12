import axios from "axios";

const url = "https://disease.sh/v3/covid-19"

export const fetchData = async (country)=>{
    let changeableUrl = url + "/all";
    if(country) changeableUrl = `${url}/countries/${country}`
    try{
        const {data:{cases:confirmed, recovered, deaths, updated:lastUpdate}} = await axios.get(changeableUrl)
        return {confirmed, recovered, deaths, lastUpdate}
        
    }catch(err){
        console.log(err)
    }
}

export const fetchDaily = async()=>{
    try{
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.confirmed.total,
            date:new Date(dailyData.reportDate).toDateString()
        }))
        return modifiedData
    }catch(err){
        console.log(err)
    }
}

export const Countries = async()=>{
    try{
        const {data:countries} = await axios(`${url}/countries`)
        return countries.map(({country})=>country)
    }catch(err){
        console.log(err)
    }
}