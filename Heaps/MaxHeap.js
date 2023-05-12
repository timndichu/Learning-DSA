class MaxHeap {
  constructor() {
    this.values = [];
  }

  push(val) {
    this.values.push(val);
    let arr = this.values;
    let index = arr.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    function swap(arr, parentIndex, index) {
      const temp = arr[parentIndex];
      arr[parentIndex] = arr[index];
      arr[index] = temp;
    }

    while (arr[parentIndex] < arr[index]) {
      swap(arr, parentIndex, index);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    this.values = arr;
    return this;
  }

  sinkDown(parentIndex, arr){
    while (true) {
        let left = 2 * parentIndex + 1;
        let right = 2 * parentIndex + 2;
        let parent = arr[parentIndex];
        let leftChild = arr[left];
        let rightChild = arr[right];
        let res;
  
        if (leftChild && rightChild) {
          res = Math.max(leftChild, rightChild);
        }
        else if(leftChild && !rightChild) {
          res = leftChild
        }
        else if(!leftChild && rightChild) {
          res = rightChild
        }
  
        if (leftChild === res && leftChild > parent) {
          arr[left] = parent;
          arr[parentIndex] = leftChild;
          parentIndex = left;
        } else if (rightChild === res && rightChild > parent) {
          arr[right] = parent;
          arr[parentIndex] = rightChild;
          parentIndex = right;
        } else {
          break;
        }
      }
  }

  extractMax() {
    let parentIndex = 0;
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown(parentIndex, arr);
    this.values = arr;
    return this;
  }
}

const heap = new MaxHeap();
// heap.push(41);
// heap.push(39);
// heap.push(33);
heap.push(18);
heap.push(27);
heap.push(12);
console.log(heap);
heap.extractMax();
console.log(heap);
