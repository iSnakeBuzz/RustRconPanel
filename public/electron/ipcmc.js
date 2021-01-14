const { app, BrowserWindow, ipcMain } = require('electron');
const serve = require('electron-serve');
const isDev = require('electron-is-dev');

/* Add Server Window modal */
let ADD_SERVER_WINDOW;

/* IPC communicatino with FrontEnd */
ipcMain.on('add_server', (e, args) => {
    /* Creating a window to add the server */
    if (!ADD_SERVER_WINDOW) {
        ADD_SERVER_WINDOW = new BrowserWindow({
            maxWidth: 250,
            maxHeight: 400,

            width: 250,
            height: 400,

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
            ipcMain.emit('close_add_server', false)
        })
    } else e.returnValue = false;
});

