const path = require('path');
const url = require('url')
const {app, BrowserWindow, protocol} = require('electron');

let win;
function createMainWindow() {
    win = new BrowserWindow({
        title:'image resizer',
        width:500,
        height:600

    });
    win.loadURL(url.format({

        pathname:path.join(__dirname,'./renderer/index.html'),
        protocol: 'file',
        slashes: true 
    }));

    win.on('closed', ()=>{
        win = null;
    })
}

app.on('ready' , createMainWindow)