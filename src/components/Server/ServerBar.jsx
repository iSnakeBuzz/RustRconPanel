import React from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { Chat, Description, People, Settings, Storage } from '@material-ui/icons';
import Console from '../Icons/Console';

const ServerBar = ({ value, handleChange }) => {
    return (
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="Server Tabs" centered>
                <Tab icon={<Console height="24px" width="24px" color="#fff" />} {...applyProps(0)} />
                <Tab icon={<Storage />} {...applyProps(1)} />
                <Tab icon={<People />} {...applyProps(2)} />
                <Tab icon={<Description />} {...applyProps(3)} />
                <Tab icon={<Settings />} {...applyProps(4)} />
            </Tabs>
        </AppBar>
    );
};

function applyProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}


export default ServerBar;