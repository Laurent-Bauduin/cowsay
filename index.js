const studentInfo = require("./information.js");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hi ${studentInfo.name} from ${studentInfo.campus} !`,
    e: "^^",
    T: "V"
}));