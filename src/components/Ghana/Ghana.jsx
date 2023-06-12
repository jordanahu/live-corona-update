import React, {useState, useEffect} from "react";
import styles from "./Ghana.module.css";
import { Card, Typography, Grid } from "@material-ui/core";
import cx from "classnames";
import CountUp from "react-countup";
import Loader from "react-loader-spinner";



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
  if (!confirmed)
    return <Loader type="ThreeDots" color="#0000b3" height="55" width="60" />;
  return (
   
    <div className={cx(styles.container)}>
      <div className={cx(styles.container__first)}>UPDATE IN GHANA</div>
       <div className={cx(styles.container__last)}>
       <Grid container justifyContent="center" spacing={3}>
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
          <CountUp
              start={0}
              end={confirmed}
              separator=","
              duration={2}
            />
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
            <CountUp
              start={0}
              end={recovered}
              separator=","
              duration={2}
            />
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
             <CountUp
              start={0}
              end={deaths}
              separator=","
              duration={2}
            />
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
