const fs = require("fs")
const path = require("path")

let ext = require("./ext.js")
function isFolder(path_string) {
    return fs.lstatSync(path_string).isDirectory()
}

function getItOrganised(loc) {
    // console.log(loc);
    let extension = path.extname(loc).split(".")[1]
    let filename = path.basename(loc);
    console.log(filename);
    if (ext.audio.extensions.includes(extension)) {
        fs.copyFileSync(loc, `./organised_folder/audio/${filename}`)
        ext.audio.count++;
    } else if (ext.documents.extensions.includes(extension)) {
        fs.copyFileSync(loc, `./organised_folder/documents/${filename}`)
        ext.documents.count++;
    } else if (ext.videos.extensions.includes(extension)) {
        fs.copyFileSync(loc, `./organised_folder/videos/${filename}`)
        ext.videos.count++;
    } else {
        fs.copyFileSync(loc, `./organised_folder/others/${filename}`)
        ext.others.count++;
    }
}

function readFolder(loc) {
    let files = fs.readdirSync(loc)
    files.forEach(file => {
        // if it is a folder then go inside it
        if (isFolder(loc + "\\" + file)) {
            // console.log(loc + "\\" + file);
            readFolder(loc + "\\" + file)
        } else {
            getItOrganised(loc + "\\" + file);
        }
    })
}

// readFolder(__dirname + "\\" + "files")

module.exports = {
    readFolder
}