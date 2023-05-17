
function hash(key, arrayLen) {
    let total = 0;
    for(let char of key) {
        // map "a" to 1,  "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen;
    }
    console.log(total);
    return total;
}

hash("pink", 10);
hash("orangered", 10);

































// let total = 0;
// let string = "hello";

// let length = string.length;
// let index = 0;

// while(length>0) {
//     console.log('Length is: ' + length);
//     console.log('Char is: ' + string.charAt(length - 1));
//     console.log('Code is: ' + (string.charCodeAt(length - 1) - 96));
//     total += string.charCodeAt(length - 1) - 96;
//     length--;
// }
// while (index < length) {
//   total += string.charCodeAt(index) - 96;
//   index++;
// }

// console.log(total);
