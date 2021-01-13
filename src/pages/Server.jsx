import React from 'react';
import { useParams } from 'react-router-dom';

const Server = () => {

    const { id } = useParams();

    return (
        <div>
            Server #{id}
        </div >
    );
};

export default Server;