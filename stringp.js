let str="  tom and jerry  ";
str=str.replace("jerry","cat");
str=str.trim();
console.log(str);
console.log(str.padStart(20,1));
console.log(str.padEnd(15,"y"));
let message="I like hot tea and hot coffee";
message=message.replace(/hot/g,"ice");
console.log(message);
console.log(message.includes("coffee"));
console.log(message.startsWith("you"));
console.log(message.endsWith("coffee"));