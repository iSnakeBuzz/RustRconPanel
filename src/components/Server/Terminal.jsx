import React from 'react';
import { ArrowForwardIos } from '@material-ui/icons';

const Terminal = ({ value, handleCommand }) => {
    const scrollRef = React.useRef(undefined)
    const executeScroll = () => scrollRef.current.scrollIntoView()

    React.useEffect(() => {
        if (scrollRef) executeScroll();
    }, [value]);

    return (
        <div className="terminal">
            <div id="content">
                {value}
                <div ref={scrollRef} />
            </div>

            <div className="terminal-input w-100">
                <div>
                    <ArrowForwardIos />
                </div>
                <input className="w-100" onChange={handleCommand} />
            </div>
        </div>
    );
};

export default Terminal;