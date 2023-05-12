
/*const n1 = {
    data: 100
};

const n2 = {
    data: 200
};

n1.next = n2;

console.log(n1);
*/



//define class of Nodes
class Node {
     constructor(data, next=null){
        this.data = data;
        this.next = next;
     }
}

//define LinkedList
class LinkedList {
    constructor(){
        //if the list is empty, head is null and size is 0
        this.head = null;
        this.size = 0;
    }

    //insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    //insert last node
    insertLast(data){
        let node = new Node(data);
        let current;

        //if empty,make head
        if(this.head == null) {
            this.head = node;
        }
        else{
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }

        this.size++
    }

    //insert at index
    insertAt(data, index){

        //If index is out of range
        if(index > 0 && index> this.size){
            return;
        }
        //If first index
        if(index == 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current,previous;

        //Set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current; //node before index
            count++;
            current = current.next; //node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;

    }

    //get at index
    getAt(index){
        let current = this.head;
        let count = 0;

        while(current){
            if(count == index) {
                console.log(current.data);
                return;
            }
            count++;
            current = current.next;
        }

        return null;
    }


    //remove at index
    removeAt(index){
        if(index>0 && index > this.size){
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        //Remove first
        if(index == 0) {
            this.head = current.next;
        }
        else{
            while(count < index) {
                count++;
                previous = current;
                current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    //clear list
    clearList(){
        this.head = null;
        this.size = 0;
    }

    //print list data
    printListData(){
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }


}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);

ll.insertLast(400);

ll.insertAt(500, 2);

// ll.getAt(1);

ll.clearList();

ll.printListData();