const sumAll = function(start, end) {
    let sum = 0;
    let start1 = null;
    let end1 = null;
    if (start < 0) {
        return "ERROR";
    } else if (end < 0) {
        return "ERROR";
    }

    if (start > end) {
        start1 = arguments[1];
        end1 = arguments[0];
    } else {
        start1 = arguments[0];
        end1 = arguments[1];
    }
    
    for(let i=start1; i<=end1; i++) {
        sum += i;
    }
    return sum;
};
console.log(sumAll(-1,10));