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

  bfs() {
    let queue = [];
    let visited = [];

    queue.push(this.root);

    while (queue.length !== 0) {
      let node = queue.shift();
      visited.push(node.val);

      // check if it has a left
      if (node.left) queue.push(node.left);

      // check if it has a right
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  dfsPreOrder() {
    let visited = [];
    let curr = this.root;

    function traverse(node) {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(curr);

    return visited;
  }

  dfsPostOrder() {
    let visited = [];
    let curr = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }
    traverse(curr);

    return visited;
  }

  dfsInOrder() {
    let visited = [];
    let curr = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
     
    }
    traverse(curr);

    return visited;
  }
}

const newBST = new BinarySearchTree();
newBST.push(10);
newBST.push(6);
newBST.push(3);
newBST.push(8);
newBST.push(15);
newBST.push(20);
const bfs = newBST.bfs();
const dfsPreOrder = newBST.dfsPreOrder();
const dfsPostOrder = newBST.dfsPostOrder();
const dfsInOrder = newBST.dfsInOrder();
console.log("bfs is: ");
console.log(bfs);
console.log("dfsPreOrder is: ");
console.log(dfsPreOrder);
console.log("dfsPostOrder is: ");
console.log(dfsPostOrder);
console.log("dfsInOrder is: ");
console.log(dfsInOrder);
