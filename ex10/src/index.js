//Only change code below this line
function mathTest(x,y) {

    //Only change code above this line
    if (x < 0 || y < 0) {

    //Only change code above this line
        return undefined;
    //Only change code below this line
    
    }
    return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));
    //Only change code above this line
    
}
//var result = mathTest(2,2);
//var result = mathTest(-2,2);
//var result = mathTest(2,-2);
//var result = mathTest(2,8);
//var result = mathTest(3,3);
var result = mathTest(0,0);
console.log(result);

//Only change code above this line


module.exports = mathTest;