const { app, BrowserWindow, ipcMain } = require("electron")
const path = require("path")
const url = require("url")

// Keep a global reference of the window object to prevent garbage collection
let mainWindow

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "BetterWeb Browser",
    icon: path.join(__dirname, "assets/icon.png"),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webviewTag: true,
      preload: path.join(__dirname, "preload.js"),
    },
  })

  // Load the index.html file
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    }),
  )

  // Emitted when the window is closed
  mainWindow.on("closed", () => {
    mainWindow = null
  })
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow()

  app.on("activate", () => {
    // On macOS it's common to re-create a window when the dock icon is clicked
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
})

// Listen for close-app event from renderer process
ipcMain.on("close-app", () => {
  app.quit()
})
