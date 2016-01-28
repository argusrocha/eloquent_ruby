// Your code here.
function reverseArray(array) {
  var new_array = [];
  for (var i = 0; i < array.length; i++)
    new_array.unshift(array[i]);
  return new_array;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < array.length / 2; i++) {
    var temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
  return array;
}

