class Node{
    value;
    next;
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}
class Queue{
    start;
    last;
    length;
    constructor() {
        this.start = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(value){
        if(this.length==0){
            let node = new Node(value,null);
            this.start = node;
            this.last = node;
        }else{
            let current = this.last;
            let node = new Node(value,null);
            current.next = node;
            this.last = node;
        }
        this.length++;
    }
    printStack(){
        let cur = this.start;
        let res = [];
        while(cur!==null){
            res.push(cur.value);
            cur = cur.next;
        }
        return res;
    }
    dequeue(){
        if(this.length!=0){
            let cur = this.start;
            this.start = this.start.next;
            this.length--;
            if(this.length==0){
                this.last = null;
            }
            return cur.value;
        }
        return -1;
    }
}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.printStack());
console.log("dequeue : "+queue.dequeue());
console.log(queue.printStack());
console.log("dequeue : "+queue.dequeue());
console.log(queue.printStack());
console.log("dequeue : "+queue.dequeue());
console.log(queue.printStack());
console.log(queue);