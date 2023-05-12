

//reverse string
/**
 * Example: the fox
 * Output: xof eht
 
 */

function reverseString(str) {
var myStr = '';

for(var i= str.length -1; i>=0;i--) {
    myStr+=str[i];
}

return myStr;

}




//reverse words in a string
/**
 * Example: the fox
 * Output: fox the
 
 */

function reverseWordsInString(A){
 
    var myStr = '';
    var arr = A.split(' ');

    for(var i= arr.length -1; i>=0;i--) {
        if(i==arr.length -1) {
            myStr = myStr.concat(`${arr[i]}`);
        }
        else{
            myStr = myStr.concat(` ${arr[i]}`);
        }
    
    }

    myStr.trim();
    
    return myStr;
   
}


var ans = reverseStrings('j');
console.log(ans);

console.log(reverseString('the quick fox'));