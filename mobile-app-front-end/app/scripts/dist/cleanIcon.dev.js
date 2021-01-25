#!/bin/env node
"use strict";

var path = require('path'),
    fs = require('fs');

function fromDir(startPath, filter, callback) {
  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath);
    return;
  }

  var files = fs.readdirSync(startPath);

  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);

    if (stat.isDirectory()) {
      fromDir(filename, filter, callback); //recurse
    } else if (filter.test(filename)) {
      callback(filename, files[i]);
    }
  }
}

function justPrint(filePath, fileName) {
  console.log('-- found: ', fileName.split('.')[0]);
}

var iconNames = [];

function addTolist(filePath, fileName) {
  iconNames.push({
    iconName: fileName.split('.')[0],
    filePath: filePath,
    used: false
  });
}

function checkIfUnsused(filePath, fileName) {
  var data = fs.readFileSync(filePath);
  iconNames.forEach(function (icon, index, iconList) {
    if (data.includes("".concat(icon.iconName))) {
      console.log('--- icon used', icon.iconName);
      iconList[index].used = true;
    }
  });
}

fromDir('www/svg', /\.svg$/, justPrint);
fromDir('www/svg', /\.svg$/, addTolist);
fromDir('www', /\.(js|css|html)$/, checkIfUnsused);
iconNames.forEach(function (icon) {
  if (!icon.used) {
    console.log('--- will delete unused icon', icon.iconName);
    fs.unlink(icon.filePath, function (err) {
      if (err) {
        console.error(err);
      }
    });
  }
});