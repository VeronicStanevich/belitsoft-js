/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const map = new Map();
    let current = head;
    while(current){
        if(!map.has(current)){
            map.set(current);
        }else{
            return current;
        }
        current = current.next;
    }
    return false;
};