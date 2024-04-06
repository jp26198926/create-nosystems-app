#!/usr/bin/env node
const {execSync} = require('child_process');

const runCommand = command => {
    try{
        execSync(`${command}`, {stdio: 'inherit'});
    }catch(e){
        console.error(`Failed to execute ${command}`, e);
        return false;
    }

    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/jp26198926/create-nosystems-app ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log('Cloing the repository with the name ' + repoName);
const checkedOut = runCommand(gitCheckoutCommand);

if(!checkedOut) process.exit(-1);

console.log('Installing dependencies');

const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log('Done!');
console.log(`cd ${repoName}`);

