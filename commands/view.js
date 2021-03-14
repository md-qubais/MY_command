let fs=require("fs");
let path=require("path");

function viewHelper(dirName, mode) {
    if (mode == "tree") {
        tree(dirName,"");
    } else if (mode == "flat") {
        viewFlat(dirName);
    } else {
        console.log("wrong mode  type help for commands");
    }
}

function viewFlat(src) {
    // how to find if given path is file or directory 
    let isFile = isFileOrNot(src);
    if (isFile == true) {
        console.log(src + "*");
    }
    else {
        // print
        console.log(src);
        // content read from os
        let fDirnames = readContent(src);
        // recursion 
        // console.log(fDirnames);
        for (let i = 0; i < fDirnames.length; i++) {
            let child = fDirnames[i];
            //    good practice??
            // let dirNamepath = src + "\\" + child;
            let dirNamepath = path.join(src, child);
            viewFlat(dirNamepath)
        }
    }
}
function isFileOrNot(src) {
    return fs.lstatSync(src).isFile();
}
function readContent(src) {
    return fs.readdirSync(src);
}


function check_file(path){
    return fs.lstatSync(path).isFile();
}
function content_reader(path){
    return fs.readdirSync(path);
}

function tree(path,printer){
        let children=content_reader(path);
        for(let i in children){
        let isfile=check_file(path+"\\"+children[i]);      
        if(isfile==true){
            console.log(printer+children[i],"*");
        }else{
            console.log(printer+children[i]);
            tree(path+"\\"+children[i],"\t"+printer);
    }
}
}
module.exports = {
    fn: viewHelper
}
