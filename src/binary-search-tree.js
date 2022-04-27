const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._node = null;
  }

  root() {
    return this._node;
  }

  add(data) {
    let newNode = new Node(data);

    if (this._node === null) {
      this._node = newNode;
      return this;
    }

    let current = this._node;
    while (current) {
      if (data === current.data) return undefined;

      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;

      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    return this.find(data) != null;
  }

  find(data) {
    if (this._node === null) return false;

    let current = this._node;
    let found = false;

    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = current;
      }

    }

    if (!found) return null;
    return found;
  }

  remove(data) {
    if (this._node === null) {
      return;
    }
  }

  min() {
    let curNode = this._node;

    while (curNode.left) {
      curNode = curNode.left;
    }

    return curNode.data;
  }

  max() {
    let curNode = this._node;

    while (curNode.right) {
      curNode = curNode.right;
    }

    return curNode.data;
  }
}

module.exports = {
  BinarySearchTree
};