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


/**
 * With a singly linked list, the only way to find the end of the list, and thus the n'th node from the end, 
 * is to actually iterate all the way to the end. 
 * The challenge here is attemping to find the solution in only one pass. 
 * A naive approach here might be to store pointers to each node in an array, 
 * allowing us to calculate the n'th from the end once we reach the end, 
 * but that would take O(M) extra space, where M is the length of the linked list.

A slightly less naive approach would be to only store only the last n+1 node pointers in the array.
This could be achieved by overwriting the elements of the storage array in circlular fashion as we iterate through the list. This would lower the space complexity to O(N+1).

In order to solve this problem in only one pass and O(1) extra space, however,
 we would need to find a way to both reach the end of the list with one pointer and also reach 
 the n'th node from the end simultaneously with a second pointer.

To do that, we can simply stagger our two pointers by n nodes by giving the first pointer (fast)
 a head start before starting the second pointer (slow). 
 Doing this will cause slow to reach the n'th node from the end at the same time that fast reaches the end.
 */


var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) return head.next;
  while (fast.next) (fast = fast.next), (slow = slow.next);
  slow.next = slow.next.next;
  return head;
};
