/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function onlyUnique(value, index, self) {
    return self.findIndex((v) => v.val === value.val) === index;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;
    let listArr = [];
    let listArrDelete =[];
    while(current){
        listArr.push(current);
        current = current.next;
    }
    if(listArr.length===0){
        return head;
    }

    listArr = listArr.filter(onlyUnique);
    for(let i=0; i<listArr.length; i++){
        listArr[i].next = listArr[i+1] || null;
    }
    return listArr[0];
};