// In this assignment, you are going to loop over an array of names and print out either a hello or goodbye to that name to the browser console. If the name starts with a letter j or J, you are to print out Goodbye JSomeName. If the name starts with any other letter, you are to print out Hello SomeName.

let arrayOfNames = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (element of arrayOfNames) {
    if (element[0] == "j" || element[0] == "J") {
        console.log("Goodbye",element);
    }
    else {
        console.log("Hello",element);
    }
}

let greeting = document.getElementById("greetings")

greeting.addEventListener("mouseover", function greetings(){
    greeting.innerHTML = "Thank You."
    greeting.style.backgroundColor = "cornflowerblue";
    greeting.addEventListener("mouseout" , function mouseOut() {
        greeting.innerHTML = "Hello Everyone!"
        greeting.style.backgroundColor = "navy";
    })
})