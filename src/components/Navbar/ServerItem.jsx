import React from 'react';
import { Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ServerItem = ({ server }) => {
    return (
        <div>
            <Link to={`/server/${server.id}`}>
                <Tooltip title={server.name} arrow placement="right" >
                    <div className="server-item">
                        <div className="img">
                            <img src={server.img} height="48" width="48" alt={server.name} />
                        </div>
                    </div>
                </Tooltip>
            </Link>
        </div>
    );
};

export default ServerItem;