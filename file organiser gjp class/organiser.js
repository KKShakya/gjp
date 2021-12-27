const fs = require("fs")

function isFolder(path_string) {
    return fs.lstatSync(path_string).isDirectory()
}


function readFolder(loc) {
    let files = fs.readdirSync(loc)
    files.forEach(file => {
        // if it is a folder then go inside it
        if (isFolder(loc + "\\" + file)) {
            // console.log(loc + "\\" + file);
            readFolder(loc + "\\" + file)
        } else {
            console.log(loc + "\\" + file);
        }
    })
}

readFolder(__dirname + "\\" + "files")

module.exports = {
    readFolder
}