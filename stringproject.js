//check for secret password if it is right log user in.
//password should not start with number

let secret = "kill bill"

user = " kill bill "

user = user.toLowerCase();
user=user.trim();
while (!user.includes(secret)){
for (i = 0; i <= 10; i++) {
    if (user.startsWith(i)) {

        
        console.log("password should not start with number");
        break;
    }
}
if (user.endsWith("bill"))
console.log("you are close try again!");
break;
}
if (user.includes(secret))
console.log("you are login in");
