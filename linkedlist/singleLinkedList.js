"use strict";
var root = null;

class Node{
	constructor(data){
		this.next = null; 
		this.data = data;
	}

}
class LinkedList extends Node{
	insertAtBegin(data){
		var temp = new Node(data);
		if(root == null){
			root = temp;
		}else{
			var lastNode = root;
			while(lastNode.next != null){
				lastNode = lastNode.next;
			}
			lastNode.next = temp;

		}

	}
	displayLinkedList(){
		var temp = root;
		while(temp!=null){
			//document.getElementById("list_01").innerHTML = "<fffj>";
			document.getElementById("list-01").innerHTML += "<li>"+ temp.data+"</li>";
			console.log(temp.data);
			temp = temp.next;
		}
	}
}

function main(){
	var ll = new LinkedList();
	ll.insertAtBegin("Coffe Day");
	ll.insertAtBegin(20);
	ll.insertAtBegin("Black Pepper");
	ll.insertAtBegin("Blue Bottle");
	ll.insertAtBegin("White Mercenaries");
	ll.insertAtBegin('Dark Moon');
	ll.displayLinkedList();
}
