import React from 'react';
import Chrome from '../components/Chrome';
import { Container, Grid, TextField } from '@material-ui/core';

const AddServer = () => {
    return (
        <>
            <Chrome title="New Server" resize={false} />

            <main>
                <Container maxWidth="xs">
                    <div className="serverForm">
                        <div className="paper">
                            <TextField label="Address" size="small" variant="outlined" style={{ width: "100%" }} />
                        </div>
                        <div className="paper">
                            <TextField label="Port" type="number" size="small" variant="outlined" style={{ width: "100%" }} />
                        </div>
                        <div className="paper">
                            <TextField label="Password" size="small" variant="outlined" style={{ width: "100%" }} />
                        </div>
                    </div>

                    <div style={{ position: 'absolute', bottom: '20px', left: '0', width: '100%' }}>
                        <Grid
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={12}>
                                <div style={{ padding: '0 20px', maxWidth: '396px', marginLeft: 'auto', marginRight: 'auto' }}>
                                    <div className="btn">ADD SERVER</div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </main>

        </>
    );
};

export default AddServer;