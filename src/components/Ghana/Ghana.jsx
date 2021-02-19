import React, {useState, useEffect} from "react";
import styles from "./Ghana.module.css";
import { Card, Typography, Grid } from "@material-ui/core";
import cx from "classnames";



function Ghana({fetchData}) {
    const [info, setInfo] = useState({country:"ghana"});

    useEffect(()=>{
        async function data(){
            const results = await fetchData(info.country);
            setInfo(res=>({...res, ...results}))
        }
        data()
        .catch(error=>console.log("Error is: "+error.message))
    },[info.country])

    const { confirmed, deaths, recovered, lastUpdate } = info;

  return (
   
    <div className={cx(styles.container)}>
      <div className={cx(styles.container__first)}>UPDATE IN GHANA</div>
       <div className={cx(styles.container__last)}>
       <Grid container justify="center" spacing={3}>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.cards, styles.infected, styles.test1)}
        >
          <Typography gutterBottom color="textSecondary">
            Infected
          </Typography>
          <Typography variant="h5">
          {confirmed?.value}
            
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">Number of Active cases</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.cards, styles.recovered, styles.test1)}
        >
          <Typography gutterBottom color="textSecondary">
            Recovered
          </Typography>
          <Typography variant="h5">
          {recovered?.value}
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">Number of Recovered cases</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.cards, styles.deaths, styles.test1)}
        >
          <Typography gutterBottom color="textSecondary">
            Deaths
          </Typography>
          <Typography variant="h5">
          {deaths?.value}
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">Number of Death cases</Typography>
        </Grid>
      </Grid>
       </div>
    
    </div>
  );
}

export default Ghana;
