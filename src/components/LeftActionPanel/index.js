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

const LeftActionPanel = ({ onTreeClick, resources }) => {
  const classes = useStyles();

  const getIcon = (iconName) => {
    const IconButtonContainer = ({ children, onClick }) => (
      <IconButton
        className={classes.miningIconContainer}
        onClick={() => onClick()}
        disableFocusRipple
        disableRipple
      >
        {children}
      </IconButton>
    );

    switch (iconName.toLowerCase()) {
      case 'wood':
        return (
          <IconButtonContainer onClick={onTreeClick}>
            <GiPineTree
              size={iconSize}
              color='#708238'
              className={classes.miningIcon}
            />
          </IconButtonContainer>
        );
      default:
        return (
          <IconButtonContainer>
            <GiGoldMine size={iconSize} className={classes.miningIcon} />
          </IconButtonContainer>
        );
    }
  };

  return (
    <Paper className={classes.paper}>
      <Typography
        variant='h4'
        style={{ textAlign: 'center', fontWeight: 500, marginBottom: 5 }}
      >
        Mines
      </Typography>
      <Grid container spacing={1}>
        {resources?.map((resource) => (
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{ display: 'flex' }}>
              {getIcon(resource?.name)}
              <Typography
                variant='subtitle2'
                style={{
                  opacity: 0.35,
                  textAlign: 'right',
                  width: '100%',
                  display: 'grid',
                  alignItems: 'end',
                }}
              >
                Chance to succeed: {resource?.clickChance * 100}%
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default LeftActionPanel;
