const {app, BrowserWindow} = require('electron')
const express = require('express');
const path = require('path');
const getPort = require('get-port');


getPort().then(PORT => {
  const ap = express();
  ap.use(express.static(path.resolve(__dirname, "./conflux-offline-wallet")));
  const  server = ap.listen(PORT);


  app.on("ready", function () {
    const mainWindow = new BrowserWindow({ show: true, width: 800, height: 700 });
    mainWindow.loadURL(`http://localhost:${ PORT }`);
  });
})