import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

const MiddleActionPanel = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography
        variant="h4"
        style={{ textAlign: "center", fontWeight: 500, marginBottom: 5 }}
      >
        Town
      </Typography>
      <Grid container spacing={1}>
        {[0, 1, 2, 3, 4].map((item, index) => (
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography>{`xs=${index}`}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default MiddleActionPanel;
