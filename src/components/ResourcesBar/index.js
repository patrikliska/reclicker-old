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

  const addSuffixToNumber = (value) => {
    let newValue = value
      .toFixed(2)
      .replace(/\.?0+$/, '')
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    if (value >= 1000000) {
      const suffixes = ['', 'k', 'M.', 'B.', 'T.'];
      const suffixNum = Math.floor(('' + value).length / 3);

      let shortValue = '';

      for (let precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat(
          (suffixNum !== 0
            ? value / Math.pow(1000, suffixNum)
            : value
          ).toPrecision(precision)
        );

        const dotLessShortValue = (shortValue + '').replace(
          /[^a-zA-Z 0-9]+/g,
          ''
        );

        if (dotLessShortValue.length <= 2) break;
      }

      if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);

      newValue = `${shortValue} ${suffixes[suffixNum]}`;
    }

    return newValue;
  };

  return resources?.map((resource) => (
    <ListItem className={classes.resourcesContainer}>
      <ListItemAvatar>
        <Avatar className={classes.resourcesIconContainer}>
          {resource.icon || <GiBarrier color='#2C377C' />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={addSuffixToNumber(resource.value)}
        secondary={resource.name}
      />
    </ListItem>
  ));
};

export default ResourcesBar;
