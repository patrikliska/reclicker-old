import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import { GiPineTree, GiGoldMine } from 'react-icons/gi';

const iconSize = 50;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  miningIconContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  miningIcon: {
    transition: 'all .1s ease-in-out',
    '&:active': {
      transform: 'scale(1.2)',
    },
  },
}));

const LeftActionPanel = ({ onTreeClick }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography
        variant='h4'
        style={{ textAlign: 'center', marginBottom: 10 }}
      >
        Mines
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <IconButton
              className={classes.miningIconContainer}
              onClick={() => onTreeClick()}
              disableFocusRipple
              disableRipple
            >
              <GiPineTree
                size={iconSize}
                color='#708238'
                className={classes.miningIcon}
              />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <GiGoldMine size={iconSize} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LeftActionPanel;
