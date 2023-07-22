class Node{
    value;
    next;
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}
class Stack{
    start;
    length;
    constructor() {
        this.start = null;
        this.length = 0;
    }
    push(value){
        if(this.length==0){
            let node = new Node(value,null);
            this.start = node;
        }else{
            let node = new Node(value,this.start);
            this.start = node;
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
    pop(){
        if(this.length!=0){
            let cur = this.start;
            this.start = this.start.next;
            this.length--;
            return cur.value;
        }
        return -1;
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.printStack());