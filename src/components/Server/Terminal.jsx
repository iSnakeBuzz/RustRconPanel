import React from 'react';
import { ArrowForwardIos, Delete, Save } from '@material-ui/icons';
import { IconButton, Tooltip } from '@material-ui/core';

const Terminal = ({ value, handleCommand, handleClearConsole }) => {
    const scrollRef = React.useRef(undefined)
    const executeScroll = () => scrollRef.current.scrollIntoView()

    React.useEffect(() => {
        if (scrollRef) executeScroll();
    }, [value]);

    const handleValue = (e) => {
        if (e.key === 'Enter') handleCommand(e.target.value);
    }

    return (
        <div className="terminal">
            <div id="content">
                {value}
                <div ref={scrollRef} />
            </div>

            <div className="terminal-btns">
                <Tooltip title="Clear Console">
                    <IconButton color="secondary" onClick={handleClearConsole} size="small">
                        <Delete fontSize="inherit" />
                    </IconButton>
                </Tooltip>
            </div>

            <div className="terminal-input w-100">
                <div>
                    <ArrowForwardIos />
                </div>
                <input className="w-100" onKeyPress={handleValue} />
            </div>
        </div>
    );
};

export default Terminal;