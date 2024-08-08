// create a class called LinkedList. It should have a head and tail property. It should have an instance method called append that will append to the linked list a node instance. Also a property called  insertAt that will insert a node at a given index

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  tail = null;

  append(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insertAt(data, index) {
    if (index < 0 || index > this.length()) {
      return null;
    }

    const newNode = new Node(data);
    let currentNum = 0;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (index === 0) {
        this.head = newNode;
        newNode.next = currentNode;
      } else {
        if (currentNum === index - 1) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
        }
      }
      const nextNode = currentNode.next;
      currentNode = nextNode;
      currentNum++;
    }
  }

  length() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode.next != null) {
      const nextNode = currentNode.next;
      currentNode = nextNode;
      count++;
    }
    return count;
  }
}

const node3 = new Node("2");
node3.next = null;
const node2 = new Node("1");
node2.next = node3;
const node1 = new Node("0");
node1.next = node2;

console.log(node1);
// console.log(node2);
// console.log(node3);

const linkedList1 = new LinkedList();
linkedList1.append("0");
linkedList1.append("1");
linkedList1.append("3");
linkedList1.insertAt("2", 2);
linkedList1.append("4");
linkedList1.insertAt("5", 5); // will not insert
// console.log(linkedList1.head.next.next);
// console.log(linkedList1.length());
