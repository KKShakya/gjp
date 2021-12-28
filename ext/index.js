const fs = require("fs");
const extensions = {
    music: {
        ext: ["mp3", "wmv"],
        count: 0
    },
    docs: {
        ext: ["doc", "docx", "txt"],
        count: 0
    }
}
fs.readdirSync("./files").forEach(file => {
    let fileExt = file.split(".")[1];
    if (extensions.music.ext.includes(fileExt)) {
        extensions.music.count++;
    } else if (extensions.docs.ext.includes(fileExt)) {
        extensions.docs.count++;
    }
})
console.log(extensions);





