class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  push(val) {
    const node = new Node(val);
    if (!this.root) {
      return (this.root = node);
    }
    let parent = this.root;

    while (parent) {
      if (val === parent.val) {
        return undefined;
      }
      if (val < parent.val) {
        if (parent.left === null) {
          parent.left = node;
          return;
        } else {
          parent = parent.left;
        }
      } else {
        if (parent.right === null) {
          parent.right = node;
          return;
        } else {
          parent = parent.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      return false;
    }
    let parent = this.root;

    while (parent) {
      if (parent.val === val) {
        return true;
      }
      if (val < parent.val) {
        parent = parent.left;
      } else {
        parent = parent.right;
      }
    }
    return false;
  }
}

const newBST = new BinarySearchTree();
newBST.push(10);
newBST.push(6);
newBST.push(3);
newBST.push(8);
newBST.push(15);
newBST.push(20);
newBST.push(4);
newBST.push(10);
const found = newBST.find(2);
console.log(newBST);
