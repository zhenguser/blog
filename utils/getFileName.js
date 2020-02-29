//获取某个目录下的所有文件

const { readdir, writeFile } = require('fs');
const { resolve } = require('path');

const FOLDERPATH = '';

readdir(FOLDERPATH, (err, files) => {
    let fileNames = [];
    files.forEach(file => {
        if( file === 'README.md') {
            file = `''`;
        }else {
            file = file.replace('.md','');
            file = `'${file}'`;
        }
        fileNames.push(file);
    });

    writeFile(resolve(__dirname, './filenames.js'), `[${fileNames}]`, ()=>{
        console.log('文件获取完成');
    })
});