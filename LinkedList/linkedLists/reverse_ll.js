/**
 * Definition for singly-linked list.
 
 */
   class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
         this.next = (next === undefined ? null : next);
    }
 }


/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseLinkedList = function(head) {
    //iterative solution
    var prev = null;
    var curr = head;

    while(curr) {
        var next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

var reversed = reverseLinkedList([1,2,3,4,5]);

console.log(reversed);