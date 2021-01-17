import React from 'react';
import Terminal from '../Terminal';
import LogItem from '../Console/LogItem';
import { Button } from '@material-ui/core';

const ConsoleTab = () => {

    const [log, setLog] = React.useState([]);

    React.useEffect(() => {
        console.log('Mounted ConsoleTab');
        updatelog(makeid(12));

        return () => {
            console.log('Unmounted ConsoleTab');
        }
    }, []);

    const updatelog = (value) => {
        let oldLog = [...log];
        if (oldLog.length >= 200) oldLog.shift();

        oldLog.push(<LogItem key={value} date={new Date()} value={value} />)
        setLog(oldLog)
    }

    const handleClearConsole = (e) => {
        let empty = [];
        empty.push(<LogItem key={"cleared-console"} date={new Date()} value={"Has been cleared the console."} />);
        setLog(empty);
    }

    const handleCommand = (e) => {
        updatelog(e.target.value);
    }

    return (
        <div className="tab-content">
            <Terminal value={log} handleCommand={handleCommand} handleClearConsole={handleClearConsole} />
        </div>
    );
};

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


export default ConsoleTab;