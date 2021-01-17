import { Box, Typography } from '@material-ui/core';
import React from 'react';


/* Obtained from https://bit.ly/3nQYMpN */

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (children)}
        </div>
    );
};

export default TabPanel;