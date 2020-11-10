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
    let listArr = [];
    //const map = new Map();
    let current = head;
    while(current){
        if(listArr.indexOf(current) === -1){
            listArr.push(current);
        }else{
            return current;
        }
        current = current.next;
    }
    return false;
};