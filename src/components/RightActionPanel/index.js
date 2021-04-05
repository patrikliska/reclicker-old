import React from 'react';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { GiArrowCluster } from 'react-icons/gi';

import { makeStyles } from '@material-ui/core/styles';

import Upgrade from './Upgrade';

import upgrades from './upgrades.json';

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const RightActionPanel = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paperContainer}>
      <Typography
        variant='h4'
        style={{ textAlign: 'center', fontWeight: 500, marginBottom: 5 }}
      >
        Upgrades
        <Divider style={{ marginTop: 10 }} />
      </Typography>
      <Grid container spacing={2}>
        {upgrades.map((upgrade) => (
          <>
            <Grid item xs={12} style={{ paddingBottom: 0 }} alignItems='center'>
              <Typography
                variant='h6'
                style={{ textAlign: 'center', fontWeight: 300 }}
              >
                {upgrade?.category}
              </Typography>
            </Grid>
            {upgrade?.data.map((item) => (
              <Grid item xs={3}>
                <Paper
                  className={classes.paper}
                  style={{ position: 'relative' }}
                >
                  {/* <GiArrowCluster
                    style={{
                      position: 'absolute',
                      bottom: 5,
                      left: 7,
                      textAlign: 'left',
                      fontSize: 10,
                    }}
                  /> */}
                  <Typography
                    variant='subtitle1'
                    style={{
                      position: 'absolute',
                      bottom: 5,
                      right: 7,
                      textAlign: 'left',
                      fontSize: 12,
                      lineHeight: 'unset',
                    }}
                  >
                    0/10
                  </Typography>
                  {Upgrade(item)}
                </Paper>
              </Grid>
            ))}
          </>
        ))}
      </Grid>
    </Paper>
  );
};

export default RightActionPanel;
