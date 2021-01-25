#!/bin/env node
let path = require('path'), fs=require('fs');

function fromDir(startPath, filter, callback){

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    let files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        let filename = path.join(startPath,files[i]);
        let stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter, callback); //recurse
        }
        else if (filter.test(filename)) {
            callback(filename, files[i])
        }
    }
}

function justPrint(filePath, fileName){
    console.log('-- found: ', fileName.split('.')[0]);
}

let iconNames = []
function addTolist(filePath, fileName) {
    iconNames.push({
        iconName: fileName.split('.')[0],
        filePath,
        used: false
    })
}

function checkIfUnsused(filePath, fileName) {
    let data = fs.readFileSync(filePath)
    iconNames.forEach((icon, index, iconList) => {
        if(data.includes(`${icon.iconName}`)){
            console.log('--- icon used', icon.iconName)
            iconList[index].used = true;
        }
    })
}

fromDir('www/svg',/\.svg$/, justPrint);
fromDir('www/svg',/\.svg$/, addTolist);
fromDir('www',/\.(js|css|html)$/, checkIfUnsused);

iconNames.forEach((icon) => {
    if(!icon.used){
        console.log('--- will delete unused icon', icon.iconName)
        fs.unlink(icon.filePath, (err) => {
            if (err) {
                console.error(err);
            }
        })
    }
})
