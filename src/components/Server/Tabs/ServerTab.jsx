import React from 'react';

const ServerTab = () => {

    React.useEffect(() => {
        console.log('Mounted ServerTab');

        return () => {
            console.log('Unmounted ServerTab');
        }
    }, []);

    return (
        <div className="tab-content">
            <div className="paper">
                Server TAB :O
            </div>
        </div>
    );
};

export default ServerTab;