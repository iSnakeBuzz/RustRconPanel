import React from 'react';
import { Helmet } from 'react-helmet';

const electron = window?.require("electron")
const { ipcRenderer } = electron;

const Chrome = ({ title, resize }) => {

    const handleMinimize = () => {
        ipcRenderer.sendSync('minimize', 'ping');
    }

    const handleMaximize = () => {
        ipcRenderer.sendSync('maximize', 'ping');
    }

    const handleClose = () => {
        ipcRenderer.sendSync('close', 'ping');
    }

    return (
        <>
            <Helmet>
                <title>{title ? title : "Rust Server Panel"}</title>
            </Helmet>
            <div className="chrome-tool noselect">
                <div className="chrome-tool-inside">

                    <div className="chrome-tool-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g transform="translate(0 0)"><g transform="translate(0 0)"><path d="M10.126,7.69l-.935.935h0L2.735,2.168l.5-.5L1.174.014,0,1.188,1.658,3.245l.5-.5L8.611,9.205l-.935.935,1.333,1.333,2.45-2.45Z" transform="translate(0 -0.014)" fill="#fff" /><path d="M352.733,350.3l-2.45,2.45,1.47,1.47a1.732,1.732,0,0,0,2.45-2.45Z" transform="translate(-340.711 -340.725)" fill="#fff" /></g><path d="M7.095,254.8l-1.914-1.914-1.4,1.4A2.912,2.912,0,1,0,5.693,256.2Zm-3.515,2.935a.943.943,0,1,1,0-1.333A.942.942,0,0,1,3.579,257.733Z" transform="translate(0 -245.98)" fill="#fff" /><g transform="translate(6.905 -0.001)"><path d="M259.777,1.756l-.229-.585-1.469,1.469-.593-.159-.159-.593L258.8.42,258.211.19a2.767,2.767,0,0,0-3.674,3.326l-1.664,1.664,1.914,1.914,1.664-1.664a2.767,2.767,0,0,0,3.326-3.674Z" transform="translate(-252.873 0.001)" fill="#fff" /></g></g></svg>
                        <div style={{ marginLeft: "4px" }}>{title ? title : "Rust Server Panel"}</div>
                    </div>

                    <div className="ml-auto chrome-buttons">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleMinimize} className="minimize-button pointer" width="14" height="14" viewBox="0 0 12 12">
                            <rect width="12" height="12" rx="6" />
                        </svg>

                        {resize === undefined && (
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={handleMaximize} className="maximize-button pointer" width="14" height="14" viewBox="0 0 12 12">
                                <rect width="12" height="12" rx="6" />
                            </svg>
                        )}

                        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleClose} className="close-button pointer" width="14" height="14" viewBox="0 0 12 12">
                            <rect width="12" height="12" rx="6" />
                        </svg>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Chrome;