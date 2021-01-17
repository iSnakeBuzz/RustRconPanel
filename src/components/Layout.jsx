import React from 'react';
import Chrome from './Chrome';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Chrome />

            <Navbar />

            <div className="content">
                <main>
                    <div className="main_container">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Layout;