import React from 'react';
import Terminal from '../Terminal';
import Moment from 'react-moment';

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
        oldLog.push(<LogItem date={new Date()} value={value} />)
        setLog(oldLog)
    }

    const handleCommand = (e, value) => {
        updatelog(e.target.value);
    }

    return (
        <div className="tab-content">
            <Terminal value={log} handleCommand={handleCommand} />
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