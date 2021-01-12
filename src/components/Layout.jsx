import React from 'react';
import Chrome from './Chrome';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Chrome />

            <header>
                <Navbar />
            </header>

            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;