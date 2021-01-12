import React from 'react';
import ServerItem from './ServerItem';

const Navbar = () => {
    return (
        <div className="navbar">
            <ServerItem server={{ img: "https://i.imgur.com/7KMIMiS.png", name: "Hello World" }} />
        </div>
    );
};

export default Navbar;