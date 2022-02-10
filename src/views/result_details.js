import React, { Component } from "react";
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";

export default class ResultDetails extends Component {
  render() {
    return (
      <>
        <Grid
          container
          direction="row"
          spacing={2}
          style={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}
        >
          <Grid item xs>
            <Card variant="outlined">
              <CardHeader title="Video" />
              <CardContent>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  component="h6"
                  style={{ padding: 100 }}
                >
                  Display Video here
                </Typography>
                <Typography variant="h6" color="textPrimary" component="h6">
                  Title:
                </Typography>
                <Typography variant="h6" color="textPrimary" component="h6">
                  Language:
                </Typography>
                <Typography variant="h6" color="textPrimary" component="h6">
                  Main Category:
                </Typography>
                <Typography variant="h6" color="textPrimary" component="h6">
                  Sub Category:
                </Typography>
                <Typography variant="h6" color="textPrimary" component="h6">
                  Book:
                </Typography>
                <Typography variant="h6" color="textPrimary" component="h6">
                  Sinf:
                </Typography>
                <Typography variant="h6" color="textPrimary" component="h6">
                  Written In:
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          spacing={2}
          style={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}
        >
          <Grid item xs>
            <Card variant="outlined">
              <CardHeader title="Room" />
              <CardContent>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  component="h6"
                  style={{ padding: 100 }}
                >
                  Display Room Data here
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card variant="outlined">
              <CardHeader title="Stage" />
              <CardContent>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  component="h6"
                  style={{ padding: 100 }}
                >
                  Display Stage data here
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          spacing={2}
          style={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}
        >
          <Grid item xs>
            <Card variant="outlined">
              <CardHeader title="Riasat Ali And Others" />
              <CardContent>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  component="h6"
                  style={{ padding: 100 }}
                >
                  Display Data here
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card variant="outlined">
              <CardHeader title="Media Link" />
              <CardContent>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  component="h6"
                  style={{ padding: 100 }}
                >
                  Display data here
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card variant="outlined">
              <CardHeader title="Tarzain" />
              <CardContent>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  component="h6"
                  style={{ padding: 100 }}
                >
                  Display data here
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    );
  }
}
