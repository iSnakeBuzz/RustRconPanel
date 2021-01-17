import React from 'react';

const SettingsTab = () => {

    React.useEffect(() => {
        console.log('Mounted SettingsTab');

        return () => {
            console.log('Unmounted SettingsTab');
        }
    }, []);

    return (
        <div className="tab-content">
            <div className="paper">
                Server Settings Tab 😏
            </div>
        </div>
    );
};

export default SettingsTab;