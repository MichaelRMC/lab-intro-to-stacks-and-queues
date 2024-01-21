const { nums, words } = require("./data/data.js");
const { inspect } = require( "util" );

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Stack {
	constructor(top = null) {
		this.top = top;
	}
	peek() {
		if (this.top == null) {
			throw new Error("The stack is empty");
		}
		return this.top;
  }
  
  size ()
  {
    let count = 0
  } 

  peek ()
  {
    return this.top
  }
	pop() {
		if (this.top == null) {
			throw new Error("The stack is empty");
		}
		let item = this.top;
		if (item) {
			let newItem = item.next;
			this.top = newItem;
			return item;
		}
  } 

  push ( data )
  {
    let newNode = new Node( data )
    newNode.next = this.top
    this.top = newNode
  }

  isEmpty ()
  {
    return this.top === null
  }

}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
		this.max = 0;
	}

	enqueue(data) {
		let newNode = new Node(data);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		return this.size++;
	}
	dequeue() {
		if (this.first == null) {
			throw new Error("The queue is empty");
		}
		const item = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return item.data;
	}
	peek() {
		if (this.first == null) {
			throw new Error("The queue is empty");
		}
		return this.first;
	}

	
	isEmpty() {
		return this.first === null;
	}
}

module.exports = {
  Node,
  Queue,
  Stack,
};
