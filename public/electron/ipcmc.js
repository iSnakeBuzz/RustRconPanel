const { app, BrowserWindow, ipcMain } = require('electron');
const serve = require('electron-serve');
const isDev = require('electron-is-dev');

/* Add Server Window modal */
let ADD_SERVER_WINDOW;

/* IPC communicatino with FrontEnd */
ipcMain.on('add_server', (e, arg) => {
    /* Creating a window to add the server */
    if (!ADD_SERVER_WINDOW) {
        ADD_SERVER_WINDOW = new BrowserWindow({
            width: 250,
            height: 450,

            darkTheme: true,
            center: true,
            frame: false,
            resizable: false,
            webPreferences: { nodeIntegration: true }
        });
        ADD_SERVER_WINDOW.loadURL(isDev ? 'http://localhost:3000/add-server' : 'app://-/add-server')
        e.returnValue = true;

        /* Handling window close */
        ADD_SERVER_WINDOW.on('close', () => {
            ADD_SERVER_WINDOW = undefined;
            updateServers();
        })
    } else e.returnValue = false;
});

const updateServers = () => {
    let windows = BrowserWindow.getAllWindows();
    mainWindow = windows[windows.length - 1];

    console.log("Updating servers.", mainWindow)
    mainWindow.webContents.postMessage('update_servers', 'ping');
}