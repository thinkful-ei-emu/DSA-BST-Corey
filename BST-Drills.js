const BinarySearchTree = require('./BST');

//---------------------#1--------------------- 
//Drawings turned out correct *upload

//---------------------#2--------------------- 
//Removed the root in drawings *upload

//---------------------#3--------------------- 
//Walk through the binary search tree code in the curriculum and understand it well. 
//  Then write a BinarySearchTree class with its core functions (insert(), remove(), find()) 
//  from scratch. 
//  *See above

const newBST = new BinarySearchTree();

newBST.insert(3);
newBST.insert(1);
newBST.insert(4);
newBST.insert(6);
newBST.insert(9);
newBST.insert(2);
newBST.insert(5);
newBST.insert(7);
// newBST.insert('E');
// newBST.insert('A');
// newBST.insert('S');
// newBST.insert('Y');
// newBST.insert('Q');
// newBST.insert('U');
// newBST.insert('E');
// newBST.insert('S');
// newBST.insert('T');
// newBST.insert('I');
// newBST.insert('O');
// newBST.insert('N');

//console.log(newBST);

//---------------------#4---------------------
/*Without running this code in your code editor, explain what the following 
program does. Show with an example the result of executing this program. 
What is the runtime of this algorithm? 

A) This is a recursive function to find the sum of tree.
O(2n)

function tree(t){
  if(!t){
      return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}
*/

//---------------------#5---------------------
/*Write an algorithm to find the height of a binary search tree. 
  What is the time complexity of your algorithm?*/

function height(BST) {
  if (BST === null) {
    return 0;
  }
  else {
    let lHeight = height(BST.left);
    let rHeight = height(BST.right);

    if (lHeight > rHeight) {
      return (lHeight + 1);
    }
    else {
      return (rHeight + 1);
    }
  }
}

console.log(height(newBST));

//---------------------#6---------------------
/*Write an algorithm to check whether an arbitrary binary tree is a 
  binary search tree, assuming the tree does not contain duplicates.*/

function bstCheck(BST) {
  if (BST === null) {
    return 'empty tree';
  }
  let lTree = bstCheck(BST.left);
  let rTree = bstCheck(BST.right);

  if (lTree < rTree && rTree > lTree) {
    return console.log(('binary search tree'));
  } else {
    return console.log('tree is not a binary search tree');
  }

}

bstCheck(newBST);











//GROUP SESSION WALKTHROUGH
// function arrayToBST(arr, start=0, end=arr.length-1){
//   if(start>end){
//     return;
//   }
//   let middle = Math.floow((start+end)/2)
//   let tree = new arrayToBST(arr[index])
//   tree.left = arrayToBST(arr, start, middle-1)
//   tree.right = arrayToBST(arr, middle+1, end)
//   return tree;
// }