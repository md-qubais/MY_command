let fs = require('fs'); 
const { type } = require('os');
let path = require('path'); 
let types = {
    media: ["mp4", "mkv","mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['cpp','docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
function check_file(path){
    return fs.lstatSync(path).isFile();

}
function content_reader(path){
    return fs.readdirSync(path);
}


function organize(name){
    if(check_file(name)){
        let str=path. basename(name).split('.').pop();
        for(let i in types){
            for(let j in types[i]){
                if(types[i][j]==str){
                    if(i=='documents'){
                        console.log("C++");
                        let arr=name.split('\\');
                        let ext=arr[arr.length-1];
                        let Path=arr.pop();
                        Path=arr.join('\\');
                        if (!fs.existsSync(Path+"\\"+i)) {
                            fs.mkdirSync(Path+"\\"+i)
                            console.log("document folder sucessfully created");
                            //check if the file already exists
                            fs.copyFile(name,Path+"\\"+i+"\\"+ext, (err) => {
                                console.log('File was copied to destination');
                              });
                        }else{
                            console.log("documents folder already created");
                            fs.copyFile(name,Path+"\\"+i+"\\"+ext, (err) => {
                                console.log('File was copied to destination');
                              });
                        }
                    }
                else if(i=="archives"){
                        let arr=name.split('\\');
                        let ext=arr[arr.length-1];
                        let Path=arr.pop();
                        Path=arr.join('\\');
                        if (!fs.existsSync(Path+"\\"+i)) {
                            fs.mkdirSync(Path+"\\"+i)
                            console.log("archives folder sucessfully created");
                            fs.copyFile(name,Path+"\\"+i+"\\"+ext, (err) => {
                                console.log('File was copied to destination');
                              });
                        }else{
                            console.log("archives folder already created");
                            fs.copyFile(name,Path+"\\"+i+"\\"+ext, (err) => {
                                console.log('File was copied to destination');
                              });
                        }
                }else if(i=="media"){
                        let arr=name.split('\\');
                        let ext=arr[arr.length-1];
                        let Path=arr.pop();
                        Path=arr.join('\\');
                        if (!fs.existsSync(Path+"\\"+i)) {
                            fs.mkdirSync(Path+"\\"+i)
                            console.log("media folder sucessfully created");
                            fs.copyFile(name,Path+"\\"+i+"\\"+ext, (err) => {
                                console.log('File was copied to destination');
                              });
                        }else{
                            console.log("media folder already created");
                            fs.copyFile(name,Path+"\\"+i+"\\"+ext, (err) => {
                                console.log('File was copied to destination');
                              });
                        }
                }else if(i=="app"){
                        let arr=name.split('\\');
                        let ext=arr[arr.length-1];
                        let Path=arr.pop();
                        Path=arr.join('\\');
                        if (!fs.existsSync(Path+"\\"+i)) {
                            fs.mkdirSync(Path+"\\"+i)
                            console.log("app folder sucessfully created");
                            fs.copyFile(name,Path+"\\"+i+"\\"+ext, (err) => {
                                console.log('File was copied to destination');
                              });
                        }else{
                            console.log("app folder already created");
                            fs.copyFile(name,Path+"\\"+i+"\\"+ext, (err) => {
                                console.log('File was copied to destination');
                              });
                        }

                }
            }
            }
        }
    }else{
        let children=content_reader(name);
        for(let i=0;i<children.length;i++){
            organize(name+"\\"+children[i]);
        }
    }

}



function organizefn(folderName) {
   if(folderName==undefined){
       console.log("cant create path enter valid path");
       return 0;
   }
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
        console.log("directory sucessfully created");
      }else{
          //now search all one by one and create a new folder and paste all in that folder
          organize(folderName);
      }      
}

// nodejs -> export

module.exports = {
    fn: organizefn
}
