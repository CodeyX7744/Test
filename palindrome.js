function palindrome(str) {

    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let originalString = null;
    let reversedString = null;
    let filteredString = null;
    originalString = str.toLowerCase().split("");
    filteredString = originalString.filter(letter => alphabet.includes(letter));
    filteredString = filteredString.join("");
    console.log(`Original String: ${filteredString}`);

    reversedString = filteredString;
    reversedString = reversedString.split("").reverse().join("");
    console.log(`Reversed String: ${filteredString}`);
    
    if (reversedString === filteredString) {
        console.log(`${str} is a palindrome`);
        return true;
    } else { 
        console.log(`${str} isn't a palindrome`);
        return false;
    }
    
}

palindrome("racecar");