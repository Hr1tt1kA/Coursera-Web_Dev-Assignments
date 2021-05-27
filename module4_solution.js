// In this assignment, you are going to loop over an array of names and print out either a hello or goodbye to that name to the browser console. If the name starts with a letter j or J, you are to print out Goodbye JSomeName. If the name starts with any other letter, you are to print out Hello SomeName.

let arrayOfNames = ["Jack","Riya","Julie", "Alexa", "Brake", "Charlie", "David", "Elon", "jake", "jackson"];

for (element of arrayOfNames) {
    if (element[0] == "j" || element[0] == "J") {
        console.log("Goodbye",element);
    }
    else {
        console.log("Hello",element);
    }
}