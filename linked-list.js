class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export default class LinkedList {
  #head = null;

  append(value) {
    const newNode = new Node(value);

    if (this.#head === null) {
      this.#head = newNode;
    } else {
      let current = this.#head;

      while (current.nextNode !== null) {
        current = current.nextNode;
      }

      current.nextNode = newNode;
    }
    return newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.#head;
    this.#head = newNode;

    return newNode;
  }

  size() {
    let total = 0;

    let head = this.#head;
    while (head !== null) {
      total++;

      head = head.nextNode;
    }

    return total;
  }

  head() {
    return this.#head;
  }

  tail() {
    let currentNode = this.#head;

    if (currentNode === null) {
      return null;
    }

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  at(index) {
    if (index > this.size()) {
      return null;
    }

    let i = 0;
    let item = this.#head;
    while (i < index) {
      item = item.nextNode;
      i++;
    }

    return item;
  }

  pop() {
    let currentNode = this.#head;

    if (currentNode === null) {
      return null;
    } else if (currentNode.nextNode === null) {
      let removedEle = currentNode;
      this.#head = null;
      return removedEle;
    } else {
      while (currentNode.nextNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }

      let removedEle = currentNode.nextNode;
      currentNode.nextNode = null;
      return removedEle;
    }
  }

  contains(value) {
    let currentNode = this.#head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let currentNode = this.#head;
    let index = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }

      index++;
      currentNode = currentNode.nextNode;
    }

    return null;
  }

  toString() {
    let currentNode = this.#head;
    let string = "";

    while (currentNode !== null) {
      string += `( ${currentNode.value} ) -> `;

      currentNode = currentNode.nextNode;
    }

    string += null;

    return string;
  }

  insertAt(value, index) {
    if (index > this.size()) {
      return null;
    } else if (!index) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    let currentNode = this.#head;
    let i = 1;
    while (i < index) {
      currentNode = currentNode.nextNode;
      i++;
    }

    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;

    return newNode;
  }

  removeAt(index) {
    if (index > this.size() || index < 0) {
      return null;
    } else if (!index) {
      const removedEle = this.#head;
      this.#head = this.#head.nextNode;
      removedEle.nextNode = null;
      return removedEle;
    }

    let currentNode = this.#head;
    let i = 1;
    while (i < index) {
      currentNode = currentNode.nextNode;
      i++;
    }

    const removedEle = currentNode.nextNode;
    currentNode.nextNode = currentNode.nextNode.nextNode;

    return removedEle;
  }
}
