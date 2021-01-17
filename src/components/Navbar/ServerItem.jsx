import React from 'react';
import { Tooltip } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { LocalTaxiOutlined } from '@material-ui/icons';

const ServerItem = ({ server }) => {

    const history = useHistory();
    const [active, setActive] = React.useState(false);

    React.useEffect(() => {
        setActive(history.location.pathname == `/server/${server.id}`)
    }, [history.location.pathname]);

    return (
        <div>
            <Link to={`/server/${server.id}`}>
                <Tooltip title={server.name} arrow placement="right" >
                    <div className={"server-item" + (active ? " server-item-active" : "")}>
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