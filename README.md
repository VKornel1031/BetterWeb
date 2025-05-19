# BetterWeb Browser

<p align="center">
  <img src="assets/icon.png" alt="BetterWeb Logo" width="120" height="120">
</p>

<p align="center">
  A modern, minimalist web browser built with Electron and Chromium.
</p>

## ✨ Features

- **Clean, Minimalist Interface**: Dark theme with teal accents for a modern look
- **Floating Tab Design**: Elegant tab design inspired by Brave browser
- **Google Search Integration**: Seamless search experience with Google
- **Custom Homepage**: Beautiful, distraction-free search page
- **Multiple Tabs**: Easy tab management with intuitive controls
- **Smart Tab Closing**: Close the app when closing the last tab

## 📸 Screenshots

![BetterWeb Browser](screenshots/browser.png)
![BetterWeb Homepage](screenshots/homepage.png)

*Note: Replace with actual screenshots of your application*

## 🚀 Installation

### Pre-built Binaries

Download the latest release for your platform from the [Releases](https://github.com/yourusername/betterweb/releases) page.

### Build from Source

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/betterweb.git
cd betterweb

# Install dependencies
npm install

# Start the application
npm start

# Build the application
npm run build
\`\`\`

## 💻 Usage

### Navigation

- Use the address bar to enter URLs or search queries
- Click the back, forward, and refresh buttons to navigate
- Open new tabs with the + button
- Close tabs with the X button on each tab

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+T | New Tab |
| Ctrl+W | Close Tab |
| Ctrl+R | Refresh |
| Ctrl+L | Focus Address Bar |
| Alt+Left | Back |
| Alt+Right | Forward |

## 🔧 Technologies

- **Electron**: Framework for creating native applications with web technologies
- **HTML/CSS/JavaScript**: Core web technologies for the UI
- **Chromium**: Web browser engine that powers the webview components

## 📁 Project Structure

\`\`\`
betterweb/
├── assets/               # Application assets (icons, images)
├── main.js               # Main Electron process
├── preload.js            # Preload script for secure IPC
├── index.html            # Browser UI template
├── homepage.html         # Custom search homepage
├── renderer.js           # Browser UI logic
├── styles.css            # Browser UI styling
└── package.json          # Project configuration
\`\`\`

## 🛠️ Development

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Setup Development Environment

\`\`\`bash
# Install dependencies
npm install

# Start the application in development mode
npm run dev
\`\`\`

### Building for Production

\`\`\`bash
# Build for current platform
npm run build

# Build for specific platforms
npm run build:win
npm run build:mac
npm run build:linux
\`\`\`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Electron](https://www.electronjs.org/)
- [Brave Browser](https://brave.com/) for design inspiration
- [Google](https://www.google.com/) for search functionality

---

<p align="center">
</p>
