import React from 'react';
import Moment from 'react-moment';

const LogItem = ({ date, value }) => {
    return (
        <div className="flex">
            <div style={{ paddingRight: "10px", wordBreak: 'normal' }}>
                <Moment format="\[hh:mm:ss\]\:">{date.toISOString()}</Moment>
            </div>
            <div style={{ wordWrap: "break-word" }}>{value}</div>
        </div>
    );
};

export default LogItem;