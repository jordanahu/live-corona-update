import React, {Component} from "react";
import {Cards, Chart, CountryPicker} from "./components";
import Ghana from "./components/Ghana/Ghana";
import styles from "./App.module.css";
import { fetchData } from "./api";
import covid19Img from "./images/jamCovid.png";


class App extends Component{

    state = {
        data:{},
        country:""
    }

    handleCountry = async (country)=>{
        const response = await fetchData(country)
        this.setState({data:response, country})
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({data})
    }

    render(){
        const {data, country} = this.state
        return(
            <div className={styles.container}>
                <img src={covid19Img} alt="CORONAVIRUS_LOGO_IMAGE"/>
                <Cards data={data}/>
                <Ghana fetchData={fetchData}/>
                <CountryPicker handleCountry={this.handleCountry}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App