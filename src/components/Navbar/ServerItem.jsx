import React from 'react';

const ServerItem = ({ server }) => {
    return (
        <div className="server-item">
            <div className="img">
                <img src={server.img} height="48" width="48" alt={server.name} />
            </div>
        </div>
    );
};

export default ServerItem;