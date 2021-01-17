import React from 'react';

const PlayersTab = () => {

    React.useEffect(() => {
        console.log('Mounted PlayersTab');

        return () => {
            console.log('Unmounted PlayersTab');
        }
    }, []);

    return (
        <div className="tab-content">
            <div className="paper">
                Players Tab :D
            </div>
        </div>
    );
};

export default PlayersTab;