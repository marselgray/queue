//Queue class
class Queue {
	//Array is used to implement a queue
	constructor(){
		this.items = [];
	}
	//Functions to be implemented
	//enqueue (item)
	enqueue(element) {
		//adding element to the queue
		this.items.push(element);
	}
	//dequeue
	dequeue(){
		//remvoing element from the queue
		//returns underflow when called
		//on empty queue
		if(this.isEmpty())
			return 'underflow';
		return this.items.shift();
	}
	//front()
	front(){
		//returns the front element
		//the queue without removing it
		if(this.isEmpty())
			return 'no elements in queue'
		return this.items[0];
	}
	//isEmpty()
	isEmpty(){
		//return true if the queue is empty
		return this.items.length == 0;
	}
	//printQueue()
	printQueue(){
		var str = '';
		for (var i = 0; i < this.items.length; i++)
			str += this.items[i] + ' ';
		return str;
	}
}


