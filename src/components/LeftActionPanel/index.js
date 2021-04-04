import React from 'react';

import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

import { GiForest, GiGoldMine } from 'react-icons/gi';

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

const LeftActionPanel = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} style={{ backgroundColor: 'red' }}>
        xs
      </Paper>
      <Paper className={classes.paper} style={{ backgroundColor: 'blue' }}>
        xs
      </Paper>
      <Paper className={classes.paper} style={{ backgroundColor: 'red' }}>
        xs
      </Paper>
      <Paper className={classes.paper} style={{ backgroundColor: 'blue' }}>
        xs
      </Paper>
      <Paper className={classes.paper} style={{ backgroundColor: 'red' }}>
        xs
      </Paper>
      <Paper className={classes.paper} style={{ backgroundColor: 'blue' }}>
        xs
      </Paper>
      <Paper className={classes.paper} style={{ backgroundColor: 'red' }}>
        xs
      </Paper>
      <Paper className={classes.paper} style={{ backgroundColor: 'blue' }}>
        xs
      </Paper>
    </>
  );
};

export default LeftActionPanel;
