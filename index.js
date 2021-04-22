#! /usr/bin/env node
const { exec } = require("child_process");

console.log(`☕ Downloading a new wallpaper...`);
exec("npx wallpaper-cli https://source.unsplash.com/random/3840x2160", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    console.log(`✨ Enjoy your new background ✨`);
});