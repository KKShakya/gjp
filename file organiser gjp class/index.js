const fs = require("fs")
let ext = require("./ext.js")
let { organiser } = require("./organiser.js")

let folder_to_be_organised = "files"



fs.mkdir("./organised_folder", err => {
    if (err) {
        // console.log(err);
        console.log("already created");
        organize(folder_to_be_organised);
    } else {
        organize(folder_to_be_organised);
    }
})




function organize(loc) {
    // Create the folders of the given types
    Object.keys(ext).forEach(type => {
        try {
            fs.mkdirSync(`./organised_folder/${type}`);
            console.log("Folders Created");
        } catch (err) {
            // console.log(err);
            console.log("already created");
        }
    })
    // call organiser
    organiser(__dirname, loc)
}










