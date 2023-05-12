/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    let tail = dummy;
    let length = 0;
    let currIndex = 0;
    let curr = head;
    let nextNode = null;
    while(curr) {
        length++;
        curr = curr.next;
    }
    curr = head;
    // at length - n, store the next node (nextNode)
    while(curr) {
        if(currIndex === length - n) {
            nextNode = curr.next;
            break;
        }
        currIndex++;
        curr = curr.next;
    }
     curr = head;
     console.log(nextNode)
    // at length -n -1, set the next node to  nextNode
     while(curr) { 
         tail.next = curr;
        if(currIndex === length - n - 1) {
            curr.next = nextNode
            tail.next.next = curr.next
            break;
        }
        currIndex++;
        curr = curr.next;
        tail = tail.next;
    }
     
    return dummy.next;

};