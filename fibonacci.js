const fibonacci = function(number) {
    number = Number(number);
    if (number < 0) {
        console.log("OOPS");
        return "OOPS";
    }
    let term = (((1+Math.sqrt(5))/2)**number)/Math.sqrt(5) - (((1-Math.sqrt(5))/2)**number)/Math.sqrt(5)
    term = Math.round(term)
    console.log(term);
    return term;
};

fibonacci(25);