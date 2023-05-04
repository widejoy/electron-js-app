const path = require('path');
const {app, BrowserWindow} = require('electron');

function CreateMainWindow() {
    const MainWindow = new BrowserWindow({
        title:'image resizer',
        width:500,
        height:600

    });
   MainWindow.loadFile(path.join(__dirname, './renderer/index.html'));

}