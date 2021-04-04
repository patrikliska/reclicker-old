import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

import {
  GiForest,
  GiGoldMine,
  GiMetalBar,
  GiMinerals,
  GiMineWagon,
  GiStonePile,
  GiWoodPile,
} from 'react-icons/gi';

import ResourcesBar from '../../components/ResourcesBar';
import LeftActionPanel from '../../components/LeftActionPanel';

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

const MainPage = () => {
  const [resources, setResources] = useState([
    { id: 0, name: 'Wood', value: 0, icon: <GiWoodPile color='#5d2906' /> },
    { id: 1, name: 'Stone', value: 0, icon: <GiStonePile color='#888C8D' /> },
    {
      id: 2,
      name: 'Metal ore',
      value: 0,
      icon: <GiMineWagon color='#474f52' />,
    },
    {
      id: 3,
      name: 'Metal ingot',
      value: 0,
      icon: <GiMetalBar color='#C0C2C4' />,
    },
    {
      id: 4,
      name: 'Shiny stone',
      value: 0,
      icon: <GiMinerals color='#8B7CDB' />,
    },
  ]);

  const classes = useStyles();

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
          <LeftActionPanel />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
