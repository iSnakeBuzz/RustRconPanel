import React from 'react';
import ServerItem from './ServerItem';
import HomeImage from '../../assets/images/Home.png'
import PlusIcon from '../../assets/images/PlusIcon.svg'

import { Link } from 'react-router-dom';

const electron = window?.require("electron")
const { ipcRenderer } = electron;

const Navbar = () => {

    const [opened, setOpened] = React.useState(false);

    const openServerAdd = () => {
        setOpened(ipcRenderer.sendSync('add_server', 'ping'));
    }

    React.useEffect(() => {
        ipcRenderer.on('close_add_server', (e, arg) => {
            setOpened(arg)
        });
    }, [])

    return (
        <div className="navbar">
            <Link to="/">
                <div className="server-item">
                    <div className="img">
                        <img src={HomeImage} height="48" width="48" alt="Back to home" />
                    </div>
                </div>
            </Link>

            <div className="flex-center">
                <div className="divider" />
            </div>

            {[0, 2, 3].map((number) => {
                return (<ServerItem key={number} server={{ img: "https://i.imgur.com/7KMIMiS.png", id: number, name: `TestServer #${number}` }} />);
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