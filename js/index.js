console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = 'Ben'
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Ross'
console.log("The navigator's name is " +hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name,it has ${hacker1.length} characters.`);
}
else if (hacker1 < hacker2) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log('wow, you both have equally long name, ${hacker1.length} characters!.');
}

// Iteration 3: Loops
// Print all the characters of the driver's name, separated by a space and in capitals
let drivername=""
for (let i = 0; i < hacker1.length; i++) {
    drivername += hacker1[i].toUpperCase() + " ";
}
console.log(drivername);
//Print all the characters of the navigator's name, in reverse order.
let reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--){
    reversed += hacker2[i];
}
console.log(reversed);
//lexicographical order
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}
//bonus
let str = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

let words = str.split(/\s+/); // Split by whitespace
let wordCount = words.length;
console.log("Number of words:", wordCount);

let etCount = 0;
words.forEach(word => {
    if (word.toLowerCase().includes("et")) {
        etCount++;
    }
});
console.log("Number of times 'et' appears:", etCount);
//bonus2
function isPalindrome(word1) {
    // Convert the word to lowercase to make the comparison case-insensitive

    let lowerCaseWord = word1.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    // Reverse the word
    let reversedWord = lowerCaseWord.split('').reverse().join('');
    // Check if the original word is equal to the reversed word
    return lowerCaseWord === reversedWord;
}

// Test the function with some examples
console.log(isPalindrome("A man, a plan, a canal, Panama!"));  // true
console.log(isPalindrome("step on no pets"));  // true
console.log(isPalindrome("hello"));  // false
