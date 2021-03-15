//Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber+1)) + minNumber;

}
var random = randomRangeNumber(1,13);
console.log(random);


//Only change code above this line

module.exports = randomRangeNumber;