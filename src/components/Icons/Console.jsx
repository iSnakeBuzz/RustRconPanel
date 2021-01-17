import React from 'react';

const Console = ({ width, height, color }) => {
    return (
        <div style={{ width, height, fill: color }}>
            <svg width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                <path d="M9 10L6 7H3l3 3-3 3h3l3-3zm5 2v-1h-4v2h4v-1zM2 4.006C2 2.898 2.897 2 4.006 2h9.988C15.102 2 16 2.897 16 4.006v9.988A2.005 2.005 0 0 1 13.994 16H4.006A2.005 2.005 0 0 1 2 13.994V4.006z" fillRule="evenodd" />
            </svg>
        </div>
    );
};

export default Console;