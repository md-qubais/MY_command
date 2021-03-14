let helperFile = require("./commands/help.js");
let viewFile = require("./commands/view");
let organizeFile = require("./commands/organize");
let input = process.argv.slice(2);
// node mycli.js [view ,dirName]
let command = input[0];

switch (command) {
    case "view":
        viewFile.fn(input[1], input[2]);
        break;
    case "organize":
        organizeFile.fn(input[1]);
        break;
    case "help":
        helperFile.fn();
        break;
    default:
        console.log("wrong command type help for all the commands");
        break;
}