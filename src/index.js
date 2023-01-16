module.exports = function reverse (n) {
    var number = Math.abs(n)
    var string = number.toString()
    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray
}