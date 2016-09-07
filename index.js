#!/usr/bin/env node

"use strict";
var fs = require('fs');
var path = require('path');

var currentDir = process.cwd();
var tmpDir = path.join(__dirname, '/template');

var pkg = require('./package.json');

var options = {
    info: {
        display: true,
        description: 'INFO    : ' + pkg.description + '\n' +
        'Author  : ' + pkg.author + '\n' +
        'Homepage: ' + pkg.homepage
    },
    usage: {
        display: true,
        description: '\n Usage: react-redux-create [-v] [-h] [option <value>]\n'
    },
    fields: {
        display: true,
        description: ' Option    | Description'
    },
    n: {
        display: true,
        description: ' <name>      Assign a application name.(default: app)'
    },
    v: {
        display: true,
        description: ' -v          Display the version of react-redux-create.'
    },
    h: {
        display: true,
        description: ' -h          Display help.'
    },
    example: {
        display: true,
        description: '\n command line                            | description\n' +
        ' react-redux-create reactjsDemo          // create plugin by defaule,Ignore .\n' +
        ' pluginc -v                              // Show version of pluginCreater.\n'
    },
    version: {
        display: false,
        description: pkg.name + ' Ver: ' + pkg.version
    }
}

function displayOption(msg) {
    console.log(msg.description);
}

function displayAllOptions() {
    for (var key in options) {
        if (options[key].display) {
            displayOption(options[key]);
        }
    }
}

function readDir(tmpDir, dist) {
    try {
        fs.mkdirSync(dist);
    } catch (e) {
        console.log(e.message);
    }

    var list = fs.readdirSync(tmpDir);

    list.forEach(function (item) {
        if (fs.statSync(tmpDir + '/' + item).isDirectory()) {
            readDir(tmpDir + '/' + item, dist + '/' + item);
        } else {
            let buffStr = fs.readFileSync(path.join(tmpDir, item), 'utf-8');
            fs.writeFileSync(path.join(dist, item), buffStr ,{flag:'w+'});
        }
    });
}

function exec(argv) {
    if (argv[2] == '-h' || argv.length == 2) {
        displayAllOptions();
        process.exit();
    } else if (argv[2] == '-v') {
        displayOption(options['version']);
        process.exit();
    }
    var distDir = currentDir + '/' + argv[2];
    readDir(tmpDir, distDir);

    console.log('Create project successfully!');
    console.log('Please change the information on package.json');
}

exec(process.argv);

process.exit();