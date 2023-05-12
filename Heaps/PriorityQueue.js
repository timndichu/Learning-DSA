class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  push(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);

    let arr = this.values;
    let index = arr.length - 1;
    let element = arr[index];


    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = arr[parentIndex];
      if (element.priority >= parent.priority) break;

      arr[parentIndex] = element;
      arr[index] = parent;

      index = parentIndex;
    }
    this.values = arr;
    return this;
  }

  sinkDown(parentIndex, arr) {
    while (true) {
      let left = 2 * parentIndex + 1;
      let right = 2 * parentIndex + 2;
      let parent = arr[parentIndex];
      let leftChild = arr[left];
      let rightChild = arr[right];
      let res;

      if (leftChild && rightChild) {
        res = Math.min(leftChild.priority, rightChild.priority);
      } else if (leftChild && !rightChild) {
        res = leftChild.priority;
      } else if (!leftChild && rightChild) {
        res = rightChild.priority;
      }

      if (
        leftChild &&
        leftChild.priority === res &&
        leftChild.priority < parent.priority
      ) {
        arr[left] = parent;
        arr[parentIndex] = leftChild;
        parentIndex = left;
      } else if (
        rightChild &&
        rightChild.priority === res &&
        rightChild.priority < parent.priority
      ) {
        arr[right] = parent;
        arr[parentIndex] = rightChild;
        parentIndex = right;
      } else {
        break;
      }
    }
  }

  dequeue() {
    let parentIndex = 0;
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown(parentIndex, this.values);
    return this;
  }
}

const pq = new PriorityQueue();

pq.push("common cold", 5);
pq.push("gunshot", 1);
pq.push("high fever", 4);
pq.push("broken arm", 2);
pq.push("glass in foot", 3);

console.log(pq);
pq.dequeue();
console.log(pq);
