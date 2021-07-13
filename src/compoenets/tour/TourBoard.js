import React from 'react';
import TourList from "./TourList";
import TourPlan from "./TourPlan";
import TourMap from "./TourMap";
import Grid from '@material-ui/core/Grid';
import MediaCard from "./MediaCard";

const TourBoard = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <h1>TourBoard</h1>
                <Grid item xs={12}>
                    <TourMap></TourMap>
                </Grid>
                <Grid item xs={6}>
                    <TourList></TourList>
                </Grid>
                <Grid item xs={6}>
                <TourPlan></TourPlan>
                </Grid>
            </Grid>
        </div>
    );
};

export default TourBoard;