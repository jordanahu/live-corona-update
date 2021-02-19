import React, {useState, useEffect} from 'react';
import {fetchDaily} from "../../api";
import {Line, Bar} from "react-chartjs-2";
import styles from "./Chart.module.css"


const Chart = ({data:{confirmed, recovered, deaths}, country})=>{
    const [dailyData, setDaily] = useState([]);

    useEffect(()=>void (async ()=>setDaily(await fetchDaily()))(),[])
    
    
    const lineChart = (
        dailyData.length?
        <Line
        data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:"Infected",
                fill:true,
                borderColor:'#66ff33'
            },{
                data:dailyData.map(({deaths})=>deaths),
                label:"Deaths",
                fill:true,
                borderColor:'red',
                backgroundColor:'rgba(255, 0, 0, 0.5)'
            }]
        }}
        />:null
    );
    
    const barChart = (
        confirmed ?
        <Bar
        data={{
            labels:["Infected", "Recovered", "Deaths"],
            datasets:[{
                backgroundColor:["rgba(255, 0, 0, 0.5)","rgba(0, 255, 0, 0.5)","rgba(0, 0, 255, 0.5)"],
                label:"People",
                data:[confirmed.value, recovered.value, deaths.value]
            }],

        }}
        options={{
            legend:{display:false},
            title:{display:true, text:`Current country is ${country}`}
        }}
        /> : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;