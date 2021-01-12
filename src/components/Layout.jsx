import React from 'react';
import Chrome from './Chrome';

const Layout = ({ children }) => {
    return (
        <>
            <Chrome />

            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;