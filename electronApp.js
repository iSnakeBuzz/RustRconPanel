const electron = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

/* Creating Electron Window & APP */
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

let mainWindow;

/* Create main Window */
const createWindow = () => {
    /* Creating the Main Window */
    mainWindow = new BrowserWindow({
        minWidth: 800,
        minHeight: 450,
        width: 800,
        height: 450,
        darkTheme: true,
        center: true,
        frame: false,
    });

    /* Loading website. If dev, loads a local URL, otherwise runs from build folder. */
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, './build/index.html')}`);

    /* Enable dev tools if isDev is true. (CTRL + SHIFT + I opens the dev tools manually) */
    if (isDev) mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});