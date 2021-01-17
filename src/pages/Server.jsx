import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import ServerBar from '../components/Server/ServerBar';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from '../components/Server/TabPanel';
import { useTheme } from '@material-ui/core';
import ConsoleTab from '../components/Server/Tabs/ConsoleTab';
import ServerTab from '../components/Server/Tabs/ServerTab';
import PlayersTab from '../components/Server/Tabs/PlayersTab';
import ConfigTab from '../components/Server/Tabs/ConfigTab';
import SettingsTab from '../components/Server/Tabs/SettingsTab';

const Server = () => {

    const theme = useTheme();
    const { id } = useParams();
    const server = JSON.parse(localStorage.getItem('servers'))[id];

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
                <title>Server - {server.name}</title>
            </Helmet>

            <ServerBar value={value} handleChange={handleChange} />

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

        </div >
    );
};



export default Server;