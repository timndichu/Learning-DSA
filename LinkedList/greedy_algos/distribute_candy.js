/*
There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

1. Each child must have at least one candy.
2. Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?

----Input Format:
The first and the only argument contains N integers in an array A.

----Output Format:
Return an integer, representing the minimum candies to be given.

Example:
Input 1:
    A = [1, 2]
Output 1:
    3

*/


function distributeCandy(A){
    if(A.length == 1) return 1;
    var p1 = new Array(A.length);
    var p2 = new Array(A.length);
    p1[0] = 1;

    //we start at i=1 since we want to be able to compare with i-1
    for(var i = 1; i < A.length; i++) {
        //check if the current element is greater than the previous
        if(A[i] > A[i - 1]){
            //set
            p1[i] = p1[i - 1] + 1;
        }
        else 
            p1[i] = 1;
    }

    p2[A.length - 1]=1;
    for(i = A.length  - 1; i >= 0; i--) {
        if(A[i] > A[i + 1]){
            p2[i] = p2[i + 1] + 1;
        }
        else 
            p2[i] = 1;
    }
    var result = 0;
    for(i = 0; i < A.length; i++) {
        result += Math.max(p1[i], p2[i]);
    }
    return result;
}

// var answer = distributeCandy([12,4,2,8,15]);
// console.log(answer);


function myDistribution(A) {

    if(A.length == 1) {
        return 1;
    }

    var myArr = A;
    var l2r = Array(myArr.length);
    var r2l = Array(myArr.length);

    //initializing ends
    l2r[0] = 1;
    r2l[myArr.length -1] = 1;

    //for left to right
    for(var i=1;i<myArr.length;i++) {
        if(myArr[i] > myArr[i-1]) {
            l2r[i] = l2r[i-1]+1;
        }
        else{
            l2r[i] = 1;
        }
    }

    //for right to left 
    //MYCODE
    for(var i= myArr.length-1;i>=0;i--) {
        if(myArr[i-1] > myArr[i]) {
            r2l[i-1] = r2l[i]+1;
        }
        else{
            r2l[i-1] = 1;
        }
    }

    // for(var i= myArr.length-1;i>=0;i--) {
    //     if(myArr[i] > myArr[i+1]) {
    //         r2l[i] = r2l[i+1]+1;
    //     }
    //     else{
    //         r2l[i] = 1;
    //     }
    // }

    var totalCandies = 0;
    //looping through our array and getting the max value of candies btwn the 2 arrays
    for(var i=0;i<myArr.length;i++) {
        totalCandies += Math.max(l2r[i], r2l[i]);
    }

    return totalCandies;


}


var answer = myDistribution([1]);
console.log(answer);
