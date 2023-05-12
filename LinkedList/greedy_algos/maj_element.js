 /*
 Given an array of size n, find the majority element. The majority element is the element that appears more 
 than floor(n/2) times.
 You may assume that the array is non-empty and the majority element always exist in the array.

 Example :

 Input : [2, 1, 2]
 Return  : 2 which occurs 2 times which is greater than 3/2.
*/

//A is an integer
function majority_element(A){
    //creating our own array
    var myArr = [];
    myArr = A;

    //loop thru array & store each element in an object
    var myObj = {};

    //for example
    /*
    {
        //our element : number of times it appears
    }
    */

    for(var i=0;i<myArr.length;i++){
        if(myObj[myArr[i]]){
            myObj[myArr[i]]++
        }
        else{
            myObj[myArr[i]]=1;
        }
    }

    var biggestNumber = 0;
    var value = 0;
    for(var element in myObj){
        if(myObj[element] > value){
            biggestNumber = element;
            value = myObj[element];
        }
        // if(myObj[element] > Math.floor((myArr.length)/2)){
        //     return element;
        // }
    }

    return biggestNumber;
}


var maj = majority_element([2,1,2,5,6,7]);

console.log(maj);