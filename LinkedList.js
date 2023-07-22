class Node{
    value;
    next;
    prev;
    constructor(value,prev,next){
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}
class LinkedList{
    start;
    last;
    length;
    constructor(){
        this.start = null;
        this.last = null;
        this.length = 0;
    }
    add(value){
        if(this.length==0){
            let node =  new Node(value,null,null);
            this.start = node;
            this.last = node;
        }
        else{
            let current = this.last;
            let node =  new Node(value,current,null);
            this.last = node;
            current.next = node;
        }
        this.length++;
    }
    printLinked(){
        let cur = this.start;
        const res = [];
        while(cur !== null){
            res.push(cur.value);
            cur = cur.next;
        }
        return res;
    }
    removeFirst(value){
        let cur = this.start;
        while(cur !== null){
            if(cur.value == value){
                if(this.length==1){
                    this.start = null;
                    this.last = null;
                }
                else if(cur.prev==null){
                    this.start = cur.next;
                    this.start.prev = null;
                }else if(cur.next == null){
                    this.last = cur.prev;
                    this.last.next = null;
                }else{
                    cur.prev.next = cur.next;
                }
                this.length--;
                return true;
            }
            cur = cur.next;
        }
        return false;
    }
    removeLast(value){
        let cur = this.last;
        while(cur !== null){
            if(cur.value == value){
                if(this.length==1){
                    this.start = null;
                    this.last = null;
                }
                else if(cur.prev==null){
                    this.start = cur.next;
                    this.start.prev = null;
                }else if(cur.next == null){
                    this.last = cur.prev;
                    this.last.next = null;
                }else{
                    cur.prev.next = cur.next;
                }
                this.length--;
                return true;
            }
            cur = cur.prev;
        }
        return false;
    }
    searchElement(value){
        let cur = this.start;
        while(cur !== null){
            if(cur.value==value){
                return true
            }
            cur =  cur.next;
        }
        return false;
    }
}
let linked =new LinkedList();
console.log(linked.printLinked());
linked.add(1);
linked.add(2);
linked.add(3);
linked.add(4);
linked.add(3);
linked.add(5);
console.log(linked.printLinked());
console.log('Remove Last 3 = '+linked.removeLast(3))
console.log(linked.printLinked());
console.log('Remove Frist 3 = '+linked.removeFirst(3))
console.log(linked.printLinked());
console.log('search 4 = '+linked.searchElement(4));
console.log('search 3 = '+linked.searchElement(3));
console.log(linked);