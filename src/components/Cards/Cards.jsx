import React from "react";
import { Card, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import Loader from "react-loader-spinner";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed)
    return <Loader type="ThreeDots" color="#0000b3" height="55" width="60" />;
  return (
    <div className={styles.container}>
      <Grid container justifyContent="center" spacing={3} >
        <Grid
          item
          xs={12}
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
          component={Card}
          className={cx(styles.cards, styles.deaths, styles.test1)}
        >
          <Typography gutterBottom color="textSecondary">
            Deaths
          </Typography>
          <Typography variant="h5">
            <CountUp start={0} end={deaths} separator="," duration={2} />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">Number of Death cases</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
