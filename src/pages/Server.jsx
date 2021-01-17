import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory, useParams } from 'react-router-dom';
import ServerBar from '../components/Server/ServerBar';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from '../components/Server/TabPanel';
import { useTheme } from '@material-ui/core';
import ConsoleTab from '../components/Server/Tabs/ConsoleTab';
import ServerTab from '../components/Server/Tabs/ServerTab';
import PlayersTab from '../components/Server/Tabs/PlayersTab';
import ConfigTab from '../components/Server/Tabs/ConfigTab';
import SettingsTab from '../components/Server/Tabs/SettingsTab';
import RconService from '../Connections/RconService';
import SInfoContext from '../components/contexts/SInfoContext';

const Server = () => {

    const theme = useTheme();
    const history = useHistory();
    const { id } = useParams();
    const server = JSON.parse(localStorage.getItem('servers'))[id];
    const [serverSocket, setServerSocket] = React.useState(undefined);

    React.useEffect(() => {
        if (!server) return history.push('/');

        /* Connecting to WebSocket */
        const serverSocketCreator = new RconService(server.address, server.port, server.password);
        setServerSocket(serverSocketCreator);

        return () => {
            /* Disconnecting from WebSocket */
            serverSocketCreator.disconnect();
            setServerSocket(undefined);
        }

    }, []);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div>

            <Helmet>
                <title>Server - {server ? server.name : "undefined"}</title>
            </Helmet>

            <ServerBar value={value} handleChange={handleChange} />

            <SInfoContext.Provider value={serverSocket}>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}>

                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <ConsoleTab />
                    </TabPanel>

                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <ServerTab />
                    </TabPanel>

                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <PlayersTab />
                    </TabPanel>

                    <TabPanel value={value} index={3} dir={theme.direction}>
                        <ConfigTab />
                    </TabPanel>

                    <TabPanel value={value} index={4} dir={theme.direction}>
                        <SettingsTab />
                    </TabPanel>

                </SwipeableViews>
            </SInfoContext.Provider>
        </div >
    );
};



export default Server;