import React from 'react';
import Chrome from './Chrome';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Chrome />

            <div className="content">
                <Navbar />

                <main>
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;