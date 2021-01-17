import React from 'react';

const LogItem = ({ date, value }) => {
    return (
        <div className="flex">
            <div style={{ marginRight: "10px" }}>
                <Moment format="[hh:MM:DD]:">{date}</Moment>
            </div>
            <div>{value}</div>
        </div>
    );
};

export default LogItem;