// 3 - Build BST CLASS

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // if tree already exists, then start at the root and compare it to the key you want to insert.
    if (this.key == null) {
      this.key = key;
      this.value = value;
      // if new key is less than the node's key, then new node needs to live in the left-hand branch.
    } else if (key < this.key) {
      // if the existing node does not have a left child, meaning that if the left pointer is empty, then we can just instantiate and insert the node as the left child of that node, passing 'this' as the parent
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      // similarly, if the new key is greater than the node's key then you do the same thing, but on the right hand side
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      //If the node only has a left child, then you replace the node with its left child
      else if (this.left) {
        this._replaceWith(this.left);
      }
      //If the node only has a right child, then you replace the node with its right child
      else if (this.right) {
        this._replaceWith(this.right);
      } else {
        /* If the node has no children then
           simply remove it and any references to it 
           by calling "this._replaceWith(null)" */
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }

  find(key) {
    // if the item is found at the root then return that value
    if (this.key == key) {
      return this.value;
    }
    // if item you are looking for is less than the root, then follow the left child.
    // if there is an existing left child, then recursively check its left and/or right item until you find the item
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    // if item you are looking for is greater than the root, then follow the right child.
    // if there is an existing right child, then recursively check its left and/or right child until you find the item
    else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error('Key Error');
    }
  }

  inOrder() {
    // let values = []
    if (this.left) {
      this.left.inOrder();
    }
    // values.push(this.value);
    console.log(this.key, this.value);
    if (this.right) {
      this.right.inOrder();
    }
    // return values;
  }

  preOrder() {
    console.log(this.key, this.value);
    if (this.left) {
      this.left.preOrder();
    }
    if (this.right) {
      this.right.preOrder();
    }
  }

  postOrder() {
    if (this.left) {
      this.left.postOrder();
    }
    if (this.right) {
      this.right.postOrder();
    }
    console.log(this.key, this.value);
  }

  _replaceWith(node) {
    // check if node has a parent. if it does and this node is equal to parent's left, then set parent left pointer to node. else if this node is equal to parent's right, set parent right pointer node.
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }
      // if node, set node's parent to this parent.
      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

function createTree() {
  const newTree = new BinarySearchTree();

  newTree.insert(25);
  newTree.insert(15);
  newTree.insert(50);
  newTree.insert(10);
  newTree.insert(24);
  newTree.insert(35);
  newTree.insert(70);
  newTree.insert(4);
  newTree.insert(12);
  newTree.insert(18);
  newTree.insert(31);
  newTree.insert(44);
  newTree.insert(66);
  newTree.insert(90);
  newTree.insert(22);
  // console.log(newTree.inOrder());
  // console.log(newTree.postOrder());
  console.log(newTree.preOrder());

  // return newTree;
}

console.log(createTree());

function createStarTrekTree() {
  const starTrekTree = new BinarySearchTree();

  starTrekTree.insert(50, 'Picard');
  starTrekTree.insert(40, 'Riker');
  starTrekTree.insert(60, 'Data');
  starTrekTree.insert(35, 'Worf');
  starTrekTree.insert(45, 'LaForge');
  starTrekTree.insert(30, 'Lt security-officer');
  starTrekTree.insert(70, 'Crusher');
  starTrekTree.insert(65, 'Selar');

  console.log(starTrekTree.preOrder());
  console.log(starTrekTree.postOrder());
  console.log(starTrekTree.inOrder());

  // return starTrekTree;
}

console.log(createStarTrekTree());

// Star Trek Output = Picard, Riker, Data, Worf, LaForge, Crusher, officer, Selar

// module.exports = { BinarySearchTree, createTree };

// Expected tree:
//        3
//    1 2   4
//           6
//         5  9
//           7
