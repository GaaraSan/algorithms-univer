class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }

  toString() {
    return `{prev: ${this.prev?.data}, data: ${this.data}, next: ${this.next?.data}}`;
  }
}

class DoublyLinkedList {
  constructor(data) {
    this.head = new Node(data);
  }

  addToStart(data) {
    const newNode = new Node(data, null, this.head);

    this.head.prev = newNode;
    this.head = newNode;
  }

  insert(nodeData, data) {
    const newNode = new Node(data);
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === nodeData) {
        newNode.prev = currentNode;
        newNode.next = currentNode.next;

        if (currentNode.next) {
          currentNode.next.prev = newNode;
        }

        currentNode.next = newNode;
        return;
      }

      currentNode = currentNode.next;
    }
  }

  search(data) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  remove(data) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) {
        if (currentNode.prev === null) {
          this.head = currentNode.next;
          this.head.previous = null;
          return;
        }

        currentNode.prev.next = currentNode.next;

        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        }

        return;
      }

      currentNode = currentNode.next;
    }
  }

  getFromStart() {
    let currentNode = this.head;

    const data = [];

    while (currentNode) {
      data.push(currentNode.data);

      currentNode = currentNode.next;
    }

    return data;
  }

  getFromEnd() {
    return this.getFromStart().toReverse();
  }
}

export { DoublyLinkedList };
