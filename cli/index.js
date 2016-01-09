#!/usr/bin/env node

'use strict';

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const argv = require('yargs').argv;
const replaceText = require('es-replace-text');

function fileExists(target) {
    try {
        fs.accessSync(target, fs.F_OK);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * copies source dir to target dir
 */
function copyDir(source, target) {
    const hiddenExcludes = [
        'git',
        'DS_STORE',
    ];
    const hiddenExcludesRegexp = new RegExp('^\\.(' + hiddenExcludes.join('|') + ')$', 'i');
    var excludes = /(node_modules|bower_components)/;

    fs.readdirSync(source).forEach((file) => {
        if (hiddenExcludesRegexp.test(file)) return;
        if (excludes.test(file)) return;
        console.log('copied over ' + file);
        fs.copySync(path.resolve(source, file), path.resolve(target, file));
    });
}

function missingKey(keys) {
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (!argv[key] || typeof argv[key] !== 'string') {
            return chalk.red('required key missing') + ' --' + key + ' [string]';
        }
    }
}

const helpText = '\n' +
    chalk.blue('react-gulp-starter cli tool') +
    '\n\n' +
    chalk.blue('usage:') +
        '\t' + 'react-gulp-starter-cli <command>' +
    '\n';

const handlers = {

    comp() {
        const errText = missingKey(['name']);
        if (errText) {
            return console.log(errText);
        }
        const name = argv.name;

        const source = path.resolve(__dirname, 'templates', 'comp');
        const target = path.resolve('.', name);

        if (fileExists(target)) {
            return console.log(chalk.red(target + ' already exists'));
        }

        copyDir(source, target);
        replaceText.replaceInFileRecursive(target, {
            keyword: /rcomp/g,
            filetype: /\.(js|css)$/,
            transform() {
                return name;
            },
        });
        replaceText.replaceFilenameRecursive(target, {
            keyword: /rcomp/g,
            replaceWith: name,
        });
    },

    help() {
        console.log(helpText);
    },

};

function mainHandler() {
    const commands = argv._;
    const validCommands = Object.keys(handlers);

    if (commands.length === 0) {
        return handlers.help();
    }

    const commandHandler = handlers[commands[0]];
    if (!commandHandler) {
        return handlers.help();
    }

    commandHandler();
}


/***********************************************
*		    Immediately Envoked				   *
***********************************************/

mainHandler();
