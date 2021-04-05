import React, { useState, useEffect, useRef } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

import {
  GiMetalBar,
  GiMinerals,
  GiMineWagon,
  GiStonePile,
  GiWoodPile,
} from 'react-icons/gi';

import ResourcesBar from '../../components/ResourcesBar';
import LeftActionPanel from '../../components/LeftActionPanel';
import MiddleActionPanel from '../../components/MiddleActionPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => clearInterval(id);
  }, [delay]);
};

const MainPage = () => {
  const classes = useStyles();

  const [woodResources, setWoodResources] = useState({
    id: 0,
    name: 'Wood',
    value: 0,
    icon: <GiWoodPile color='#5d2906' />,
  });

  const [stoneResources, setStoneResources] = useState({
    id: 1,
    name: 'Stone',
    value: 0,
    icon: <GiStonePile color='#888C8D' />,
  });

  const [metalOreResources, setMetalOreResources] = useState({
    id: 2,
    name: 'Metal ore',
    value: 0,
    icon: <GiMineWagon color='#474f52' />,
  });

  const [metalIngotResources, setMetalIngotResources] = useState({
    id: 3,
    name: 'Metal ingot',
    value: 0,
    icon: <GiMetalBar color='#C0C2C4' />,
  });

  const [shinyStoneResources, setShinyStoneResources] = useState({
    id: 4,
    name: 'Shiny stone',
    value: 0,
    icon: <GiMinerals color='#8B7CDB' />,
  });

  const resources = [
    woodResources,
    stoneResources,
    metalOreResources,
    metalIngotResources,
    shinyStoneResources,
  ];

  const onTreeClick = () => {
    if (Math.random() < 0.2)
      setWoodResources({ ...woodResources, value: woodResources.value + 0.1 });
  };

  // useInterval(() => {
  //   setWoodResources({ ...woodResources, value: woodResources.value + 333 });
  // }, 100);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResourcesBar resources={resources} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <LeftActionPanel onTreeClick={onTreeClick} />
        </Grid>
        <Grid item xs={6}>
          <MiddleActionPanel />
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
