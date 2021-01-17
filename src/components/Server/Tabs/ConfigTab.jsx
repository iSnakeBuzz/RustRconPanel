import React from 'react';

const ConfigTab = () => {

    React.useEffect(() => {
        console.log('Mounted ConfigTab');

        return () => {
            console.log('Unmounted ConfigTab');
        }
    }, []);

    return (
        <div className="tab-content">
            <div className="paper">
                Config Tab 😄
            </div>
        </div>
    );
};

export default ConfigTab;