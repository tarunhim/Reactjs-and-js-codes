class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}
class TreeNode {
    constructor(val,left,right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
let head = new ListNode(0,null);
head.next = new ListNode(1,null);
head.next.next = new ListNode(2,null);
head.next.next.next = new ListNode(3,null);
head.next.next.next.next = new ListNode(4,null);
head.next.next.next.next.next = new ListNode(5,null);

const printList = (head) => {
    let node = head;
    while(node !== null) {
        console.log(node.val);
        node = node.next;
    }
}
// printList(head);
const printTree = (root) => {
    if(root === null) return;

    printTree(root.left);
    console.log(root.val);
    printTree(root.right);
}

var sortedListToBST = function(head) {
	if(head === null){
		return null;
	}
	let temp = new ListNode(-1,null);
	temp.next = head;
	const solve = (head) => {
		if(head.next === null){ return null }
		if(head.next.next === null){ return new TreeNode(head.next.val,null,null)}
		let fast = head;
		let curr = head;
		let prev = null;
		while(fast !== null && fast.next !== null) {
            
			fast = fast.next.next;
			prev = curr;
			curr = curr.next;
		}
		let ans = new TreeNode(curr.val,null,null);
		prev.next = null;
		ans.left = solve(head);
		ans.right = solve(curr);
		return ans;
	}
	return solve(temp);
};

let ans = sortedListToBST(head);
// console.log(ans.val);
// console.log(ans.left);
printTree(ans);