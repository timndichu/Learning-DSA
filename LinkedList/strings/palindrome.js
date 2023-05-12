
function isPalindrome(string) {

    //remove whitespace, special char
    var text = string.replace(/\W+/g, "").trim();
    var len = string.length;

    for(var i=0; i<len/2;i++) {
        //we need a pointer
        //racecar
          
        if(text[i] !== text[len - i -1]){
            return 0;
        }

    }
    return 1;

}

const ans = isPalindrome("raar");
console.log(ans);