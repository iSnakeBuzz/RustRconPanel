import React from 'react';
import Chrome from '../components/Chrome';
import { Container, Grid, TextField } from '@material-ui/core';

const electron = window.require("electron")
const { ipcRenderer } = electron;

const AddServer = () => {

    const [state, setState] = React.useState({
        name: "Default name",
        address: "127.0.0.1",
        port: "28015",
        password: ""
    })

    const saveButton = () => {
        let storage = localStorage.getItem('servers');
        let servers = storage ? JSON.parse(storage) : [];
        servers.push(state);

        let toSave = JSON.stringify(servers);

        localStorage.setItem('servers', toSave)
        console.log('Saved servers:', toSave);

        /* Closing window */
        ipcRenderer.sendSync('close', 'ping');
    }

    return (
        <>
            <Chrome title="New Server" resize={false} />

            <main>
                <Container maxWidth="xs">
                    <div className="serverForm">
                        <div className="paper">
                            <TextField label="My server name" size="small" variant="outlined" style={{ width: "100%" }}
                                value={state.name} onChange={(e, a) => setState({ ...state, name: e.target.value })} />
                        </div>
                        <div className="paper">
                            <TextField label="127.0.0.1" size="small" variant="outlined" style={{ width: "100%" }}
                                value={state.address} onChange={(e, a) => setState({ ...state, address: e.target.value })} />
                        </div>
                        <div className="paper">
                            <TextField label="28015" type="number" size="small" variant="outlined" style={{ width: "100%" }}
                                value={state.port} onChange={(e, a) => setState({ ...state, port: e.target.value })} />
                        </div>
                        <div className="paper">
                            <TextField label="Password" size="small" variant="outlined" style={{ width: "100%" }}
                                value={state.password} onChange={(e, a) => setState({ ...state, password: e.target.value })} />
                        </div>
                    </div>

                    <div style={{ position: 'absolute', bottom: '20px', left: '0', width: '100%' }}>
                        <Grid
                            container
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={12}>
                                <div style={{ padding: '0 20px', maxWidth: '396px', marginLeft: 'auto', marginRight: 'auto' }} >
                                    <div className="btn" onClick={saveButton}>ADD SERVER</div>
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