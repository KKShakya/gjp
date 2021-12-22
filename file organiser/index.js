const fs = require('fs');
const path = require('path');

function getArr() {
    const extentions = {
        images: {
            ext: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg'],
            count: 0
        },
        videos: {
            ext: ['.mp4', '.avi', '.mkv', '.mov', '.wmv', '.flv', '.mpg', '.mpeg'],
            count: 0
        },
        documents: {
            ext: ['.pdf', '.doc', '.docx', '.txt', '.xls', '.xlsx', '.ppt', '.pptx'],
            count: 0

        },
        archives: {
            ext: ['.zip', '.rar', '.7z', '.tar', '.gz', '.bz2', '.iso'],
            count: 0
        },
        audio: {
            ext: ['.mp3', '.wav', '.aac', '.flac', '.ogg'],
            count: 0
        }
    };
    return new Promise((resolve, reject) => {
        fs.readdir("./files", (err, files) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                files.forEach(file => {
                    if (extentions.images.ext.includes(path.extname(file))) {
                        extentions.images.count++;
                    } else if (extentions.videos.ext.includes(path.extname(file))) {
                        extentions.videos.count++;
                    } else if (extentions.documents.ext.includes(path.extname(file))) {
                        extentions.documents.count++;
                    } else if (extentions.archives.ext.includes(path.extname(file))) {
                        extentions.archives.count++;
                    } else if (extentions.audio.ext.includes(path.extname(file))) {
                        extentions.audio.count++;
                    } else {
                        console.log(`${file} is not supported`);
                    }
                });
                resolve(extentions);
            }
        });
    });
}

// IIFY
(async () => {
    let result = await getArr();
    fs.writeFile('./files/result.json', JSON.stringify(result), err => {
        if (err)
            console.log(err);
        else
            console.log('file created');
    });
})();



