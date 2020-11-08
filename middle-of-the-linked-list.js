/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let listArr = [];
    let current = head;
    while(current){
        listArr.push(current);
        current = current.next;
    }
    return listArr[Math.ceil((listArr.length-1)/2)];
};