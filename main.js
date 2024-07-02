const path = require("path");
const { app, BrowserWindow, Menu, shell, ipcMain} = require("electron");
//const { rootCertificates } = require("tls");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
  win.maximize()
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

let janelaSobre = null;

ipcMain.on("abrir-janela-sobre", () => {
  if (!janelaSobre) {
    janelaSobre = new BrowserWindow({
      width: 300,
      height: 250,
      frame: false,
      webPreferences: {
        preload: `${__dirname}/preload.js`,
      },
    });
    janelaSobre.on("closed", () => {
      janelaSobre = null;
    });
    janelaSobre.loadURL(`file://${__dirname}/sobre.html`);
  }
});

const template = [
  {
    label: 'Arquivo',
    submenu: [
      {
        label: 'Sair',
        click: ()=> app.quit(),
        accelerator: 'Alt + F4'
      },
    ]

  },
  {
    label: 'Exibir',
    submenu: [
      {
        label: 'Recarregar',
        role: 'reload'
      },
      {
        label: 'Ferramenta de Desenvolvedor',
        role: 'toggleDevTools'
      },
      {
        type: 'separator'
      },
      {
        label: 'Aplicar zoom',
        role: 'zoomIn'
      },
      {
        label: 'Diminuir zoom',
        role: 'zoomOut'
      },
      {
        label: 'Restaurar o zoom',
        role: 'resetZoom'
      }
    ]
  },
  {
    label:  'Ajuda',
    submenu: [
      {
        label: 'Documentação',
        click:()=> shell.openExternal('https://www.electronjs.org/')
      },
      {
        type: 'separator'
      },
      {
        label: 'Sobre',
        click: () => sobreMenu()
      }
      
    ]
  }
];

const  sobreMenu = () => {
  if (!janelaSobre) {
    janelaSobre = new BrowserWindow({
      width: 300,
      height: 250,
      
      webPreferences: {
        preload: `${__dirname}/preload.js`,
      },
    });
    janelaSobre.on("closed", () => {
      janelaSobre = null;
    });
    janelaSobre.loadURL(`file://${__dirname}/sobre.html`);
  }
};

