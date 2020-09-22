const util = require('util');
const childProcess = require('child_process');
const exec = util.promisify(childProcess.exec);

async function run() {
    let binaryData = await exec('"D:/Program Files/Nox/bin/adb" exec-out screencap -p', { encoding: 'Shift_JIS' });
    let blob = new Blob([binaryData.stdout], { type: "image/jpeg" });
    let url = URL.createObjectURL(blob);
    let img = document.getElementById("img");
    img.src = url;
}