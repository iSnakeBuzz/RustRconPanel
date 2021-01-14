const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const serve = require('electron-serve');
const serveReact = serve({ directory: path.join(__dirname, '../build') });
require('./electron/ipcmc')

let mainWindow;

/* Create main Window */
const createWindow = async () => {
    /* Creating the Main Window */
    mainWindow = new BrowserWindow({
        minWidth: 940,
        minHeight: 500,
        width: 940,
        height: 500,
        darkTheme: true,
        center: true,
        frame: false,
        webPreferences: { nodeIntegration: true }
    });

    /* Loading website. If dev, loads a local URL, otherwise runs from build folder. */
    /* Using electron-serve on production to serve the single-page web app  */
    if (isDev) mainWindow.loadURL('http://localhost:3000');
    else serveReact(mainWindow);

    /* Enable dev tools if isDev is true. (CTRL + SHIFT + I opens the dev tools manually) */
    // if (isDev) mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => mainWindow = null);
}

app.whenReady().then(() => createWindow());

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) createWindow();
});

/* IPC communicatino with FrontEnd */
ipcMain.on('minimize', (e, arg) => {
    let focusedWindow = BrowserWindow.getFocusedWindow();
    focusedWindow.minimize();

    /* I return a value to prevent bugs :) */
    e.returnValue = "pong";
});

ipcMain.on('maximize', (e, arg) => {

    let focusedWindow = BrowserWindow.getFocusedWindow();

    if (!focusedWindow.isMaximized()) focusedWindow.maximize();
    else focusedWindow.unmaximize();

    e.returnValue = "pong";
});

ipcMain.on('close', (e, arg) => {
    let focusedWindow = BrowserWindow.getFocusedWindow();

    if (focusedWindow.id === mainWindow.id) app.quit();
    else focusedWindow.close();

    e.returnValue = "pong";
});