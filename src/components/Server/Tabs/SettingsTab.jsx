import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ServersContext from '../../contexts/ServersContext';

const SettingsTab = () => {

    const { id } = useParams();
    const history = useHistory();
    const { data, setData } = React.useContext(ServersContext);

    React.useEffect(() => {
        console.log('Mounted SettingsTab');

        return () => {
            console.log('Unmounted SettingsTab');
        }
    }, []);

    const handleRemove = () => {
        let storage = localStorage.getItem('servers');
        let servers = JSON.parse(storage);
        servers.splice(id, 1)

        let toSave = JSON.stringify(servers);

        updateServers(toSave);

        history.push('/');
    }

    const handleUpload = async (e) => {
        let file = e.target.files[0];
        let file64 = await toBase64(file);
        console.log('Base64 Image:', file64)

        let storage = localStorage.getItem('servers');
        let servers = JSON.parse(storage);
        let server = servers[id];

        server.img = file64;

        servers[id] = server;
        let toSave = JSON.stringify(servers);
        updateServers(toSave);
    }

    const updateServers = (toSave) => {
        setData(toSave)
        localStorage.setItem('servers', toSave);
    }

    /* Getted from https://bit.ly/2XLkxgb */
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    return (
        <div className="tab-content">
            <div className="paper">

                <div className="tab-spacer-y">
                    <div className="flex f-center-y">
                        <div>Change the image of the server</div>
                        <div className="ml-auto">
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={handleUpload}
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="default" component="span" size="small">
                                    UPLOAD
                                </Button>
                            </label>
                        </div>
                    </div>

                    <div className="flex f-center-y">
                        <div><b style={{ color: "#ff3838" }}>WARNING:</b> You want to delete this server?</div>
                        <div className="ml-auto">
                            <Button size="small" color="secondary" variant="contained" onClick={handleRemove}>DELETE</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SettingsTab;