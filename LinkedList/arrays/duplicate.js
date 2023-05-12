

function duplicate(A){
    var obj={};
    var myArr = A;

    for(var i=0; i<myArr.length; i++) {
        //check if element exists in obj
        //if not, add it to obj and return -1
        //if exists, return it

        if(obj[myArr[i]]){
            return myArr[i];
        }
        else{
            obj[myArr[i]] = 1;
        }
    }
    return -1;
 
}

var duplicate = duplicate([3,3,4,5]);
console.log(duplicate);