let string = "Today is a good day!"
let name = "Feng Li"

for (i = 0; i < string.length; i++) {
    //console.log(string[i]);
    process.stdout.write(string[i]);
}
let newstring = string.concat(" Hello, " + (name));
console.log(newstring);
console.log(string.toLowerCase());
console.log(string.indexOf("o"));
console.log("last index of o " + string.lastIndexOf("o"));
for (i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
}
console.log(name.toUpperCase());
string = name.slice(0, 5);
console.log(string);

let address = "68 E 120th st. New York, NY 10035"
console.log("house number: " + address.slice(0, 2));
console.log("street: " + address.slice(3, 14));
console.log("zip: " + address.slice(28, 33));
//Store a sentence in a string variable and find the total number of vowels that string contains
//you can display those vowels if you want to
string = "Today is a good day!"
let numofVow = 0;
string = string.toLowerCase();
for (i = 0; i < string.length; i++) {
    if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
        numofVow++;
        console.log(string[i]);
    }
}
console.log("number of vowels: " + numofVow);
//Store a sentence in a string variable and find the total number of vowels that string contains
//you can display those vowels if you want to
let sentence = "Today is a good day!"
let vowellist = "aeiou";
 numofVow = 0;
sentence = sentence.toLowerCase();
for (i = 0; i < sentence.length; i++) {
    for (j = 0; j < vowellist.length; j++) {
        if (sentence[i] === vowellist[j]) {
            numofVow++;
            console.log(vowellist[j]);
            break;
        }
    }

}

console.log("number of vowels: " + numofVow);

str1='1';
num=1;
if(str1==num){
    console.log("True");
}
else{
    console.log("false");
}
