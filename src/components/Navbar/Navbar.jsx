import React from 'react';
import ServerItem from './ServerItem';
import HomeImage from '../../assets/images/Home.png'
import PlusIcon from '../../assets/images/PlusIcon.svg'

import { Link } from 'react-router-dom';
import ServersContext from '../contexts/ServersContext';

const electron = window.require("electron")
const { ipcRenderer } = electron;

const Navbar = () => {

    const { data, setData } = React.useContext(ServersContext)

    const openServerAdd = () => {
        ipcRenderer.sendSync('add_server', 'ping');
    }

    return (
        <div className="navbar">
            <Link to="/">
                <div className="server-item">
                    <div className="img">
                        <img src={HomeImage} height="48" width="48" alt="Back to home" />
                    </div>
                </div>
            </Link>

            <div className="flex flex-center">
                <div className="divider" />
            </div>

            {data && JSON.parse(data).map((number, id) => {
                console.log("Server:", number, id)
                return (<ServerItem key={id} server={{ img: "https://i.imgur.com/7KMIMiS.png", id: id, name: `${number.name}` }} />);
            })}

            <div className="server-item pointer" onClick={openServerAdd}>
                <div className="img">
                    <img src={PlusIcon} height="24" width="24" alt="Back to home" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;