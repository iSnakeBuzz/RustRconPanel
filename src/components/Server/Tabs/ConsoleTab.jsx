import React from 'react';
import Terminal from '../Terminal';
import LogItem from '../Console/LogItem';
import { Button } from '@material-ui/core';
import SInfoContext from '../../contexts/SInfoContext';


const ConsoleTab = () => {

    const [log, setLog] = React.useState([]);
    const serverSocket = React.useContext(SInfoContext);

    React.useEffect(() => {
        console.log('Mounted ConsoleTab');
        updateLog('Loading console...');

        return () => {
            console.log('Unmounted ConsoleTab');
        }
    }, []);

    React.useEffect(() => {
        if (serverSocket === undefined) return;
        console.log('Listening Socket messages');

        serverSocket.onMessage((e) => {
            const data = JSON.parse(e.data);

            if (data.Identifier < 1000) {
                console.log('[Socket-Console] Receiving data:', data);
                if (data.Identifier !== -1) updateLog(data.Message)
            }

        })

        if (!serverSocket.isReady()) {
            serverSocket.onOpen((e) => {
                console.log('[Socket-Debug-Console] The WS has been opened.', e);
                serverSocket.request('console.tail 128', (data) => {
                    const messages = JSON.parse(data.Message);
                    updateLogs(messages);
                })
            });
        } else {
            serverSocket.request('console.tail 128', (data) => {
                const messages = JSON.parse(data.Message);
                updateLogs(messages);
            });
        }


    }, [serverSocket]);

    const updateLogs = (values) => {
        let newLog = [];

        values.map((e, i) => {
            newLog.push(<LogItem key={i} date={new Date()} value={e.Message} />);
            if (newLog.length >= 200) newLog.shift();
        })

        setLog(prev => [...prev, newLog]);

    }

    const updateLog = (value) => {
        let newLog = [];

        newLog.push(<LogItem key={value} date={new Date()} value={value} />);
        if (newLog.length >= 200) newLog.shift();

        setLog(prev => [...prev, newLog])
    }

    const handleClearConsole = (e) => {
        let empty = [];
        empty.push(<LogItem key={"console-cleared"} date={new Date()} value={"The console has been cleared."} />);
        setLog(empty);
    }

    const handleCommand = (value) => {
        if (serverSocket && serverSocket.isReady()) {
            console.log('Sending command..')
            serverSocket.sendMessage(value);
        }
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