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
    this._node = removeNode(this._node, data);

		function removeNode(node, data) {
			if (!node) return null;

			if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			} else if (data > node.data) {
				node.right = removeNode(node.right, data);
				return node;
			} else {
				if (!node.left && !node.right) return null;

				if (!node.left) {
					node = node.right;
					return node;
				}

				if (!node.right) {
					node = node.left;
					return node;
				}
			}

			let minFromRight = node.right;
			while (minFromRight.left) {
				minFromRight = minFromRight.left;
			}
			node.data = minFromRight.data;

			node.right = removeNode(node.right, minFromRight.data);

			return node;
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