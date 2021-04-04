import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';

import { GiBarrier } from 'react-icons/gi';

const useStyles = makeStyles((theme) => ({
  resourcesContainer: {
    width: 200,
    display: 'inline-flex',
  },
  resourcesIconContainer: {
    backgroundColor: '#ffffff',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
  },
}));

const ResourcesBar = ({ resources }) => {
  const classes = useStyles();

  return resources.map((resource) => (
    <ListItem className={classes.resourcesContainer}>
      <ListItemAvatar>
        <Avatar className={classes.resourcesIconContainer}>
          {resource.icon || <GiBarrier color='#2C377C' />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={resource.value} secondary={resource.name} />
    </ListItem>
  ));
};

export default ResourcesBar;
