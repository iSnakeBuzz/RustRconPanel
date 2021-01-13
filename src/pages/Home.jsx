import React from 'react';
import { Grid } from '@material-ui/core';

const Home = () => {
    return (
        <div >

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div className="paper">
                        Hello world
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="paper">
                        Hello world
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="paper">
                        Hello world
                    </div>
                </Grid>
            </Grid>

            <div className="paper mt-3">Other Paper</div>

        </div>
    );
};

export default Home;