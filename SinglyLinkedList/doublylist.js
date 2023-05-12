class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        
        if(!this.head) {
            this.head = node;
            this.tail = node;
        }
        else{
            // const prevTail = this.tail;
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
          
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head){
            return;
        }
        else {
            const newTail = this.tail.prev;
            this.tail = newTail;
            this.tail.next = null;
        }
        this.length--;
        return this;
    }

    shift() {
        if(!this.head) {
            return
        }
        else {
            const newHead = this.head.next;
            this.head = newHead;
            this.head.prev = null;
        }
        this.length--;
        return this;
    }
    unshift(value) {
        if(!this.head) {
           return this.push(value)
        }
        const node = new Node(value);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++;
        return this;
    }
    get(index) {
        if(index >= this.length){
            return null;
        }

        let currNode = this.head;
        let currIndex = 0;
        while(currNode !== null) {
            if(currIndex === index) {
                return currNode;
            }
            currNode = currNode.next;
            currIndex++;
        }
    }

    set(index, value) {
        const node = this.get(index);
        if(node) {
            node.value = value;
            return true
        }
        return false
    }

    insertAt(index, value) {
        if(index ===0) {
           return this.unshift(value)
        }
        if(index === this.length) {
            return this.push(value)
         }
        if( index <0 || index > this.length) {
            return;
        }
        const newNode = new Node(value);
        const currNode = this.get(index);
        const prevNode = this.get(index - 1);
        prevNode.next = newNode;
        newNode.prev = prevNode;
        currNode.prev = newNode;
        newNode.next = currNode;
        this.length++;
        return this;
    }

    removeAt(index) {
        if(index<0 || index >= this.length) {
            return null;
        }
        if(index ===0) {
            return this.shift();
        }
        if(index ===this.length-1) {
            return this.pop();
        }
        const removedNode = this.get(index);
        const nextNode = removedNode.next;
        const prevNode = removedNode.prev;
        nextNode.prev = prevNode;
        prevNode.next = nextNode;
        this.length--;

    }

    reverse() {
        if(!this.head){
            return null;
        }
        let curr = this.head;
        this.head = this.tail;
        this.tail = curr;

        while(curr) {
            let temp = curr.next;
            curr.next = curr.prev;
            curr.prev = temp;            
            curr = curr.next;
        }
    }

}

const newList = new DoublyLinkedList();
newList.push(1);
newList.push(2);
newList.push(3);
newList.reverse();
// console.log(node);
console.log(newList);
