const fs = require('fs');
const path = require('path');



const extentions = {
    images: {
        ext: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'],
        count: 0
    },
    videos: {
        ext: ['mp4', 'avi', 'mkv', 'mov', 'wmv', 'flv', 'mpg', 'mpeg'],
        count: 0
    },
    documents: {
        ext: ['pdf', 'doc', 'docx', 'txt', 'xls', 'xlsx', 'ppt', 'pptx', "js"],
        count: 0

    },
    archives: {
        ext: ['.zip', '.rar', '.7z', '.tar', '.gz', '.bz2', '.iso'],
        count: 0
    },
    audio: {
        ext: ['mp3', 'wav', 'aac', 'flac', 'ogg'],
        count: 0
    }
}

Object.keys(extentions).forEach(key => {
    fs.mkdir("organised/" + key, err => {
        if (err)
            // console.log(err);
            return;
    });
});


const organize = (file) => {
    // console.log(file);
    if (extentions.documents.ext.includes(file.split(".").pop())) {
        console.log(file);
        fs.copyFileSync(file, __dirname + "\\organised\\documents\\" + file.split("\\").pop());
    }
}
var read = (p) => {
    var data = fs.readdirSync(path.join(p), 'utf8');
    for (let i = 0; i < data.length; i++) {
        if ((data[i] + "").split("").includes('.')) {
            const filePath = p + "\\" + data[i]
            organize(filePath);
        } else {
            read(p + "\\" + data[i]);
        }
    }
}

console.log(read(__dirname));