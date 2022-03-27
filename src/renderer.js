// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { shell, ipcRenderer } = require("electron");


// After the DOM is loaded, we can remove the unnecessary classes and IDs
document.addEventListener('DOMContentLoaded', () => {
  const remove = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());
  remove(".toolbar-nav")
  remove("footer")
  remove("#mainNav")
  remove("#footer")
  document.getElementsByClassName("search-box-container")[0].style.maxWidth = "90%";
  document.getElementsByClassName("store-footer")[0].style.marginTop = "40px";
});

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (e) {
    var targetHost = (e.target.hostname.includes("flatpak.org") ? e.target.hostname : null) || (e.target.href.includes("flathub.org") ? e.target.href : null) || (e.target.href.includes("dl.flathub.org") ? e.target.href : null);
    if (targetHost == null) {
      e.preventDefault();
      e.stopPropagation();
      shell.openExternal(e.target.href)
    };
  });
});

document.addEventListener('DOMContentLoaded', function (e) {
  if (navigator.onLine == false) {
    var content = '<html lang="en"> <head> <meta charset="utf-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <title>You are offline</title> <style> body { font-family: helvetica, arial, sans-serif; margin: 2em; background: #4a86cf; } h1 { margin-block: 1rem; font-style: italic; color: #fff; } h2 { margin-block: 1rem; color: #fff; } p { margin-block: 1rem; color: #fff; } </style> </head> <body> <h1> Flatpak for Linux </h1> <h2>You are offline</h2> <p>Click the Home button on the menu to try reloading.</p> </body> </html>';
    document.getElementsByTagName('body')[0].innerHTML = content;
  }
});