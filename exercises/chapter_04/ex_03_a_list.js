// Your code here.
function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(element, list) {
  return list = {value: element, rest: list};
}

function nthLoop(list, position) {
  var element = undefined;
  for (var node = list, i = 0; i <= position && node; i++, node = node.rest) {
    if (i == position) {
      element = node.value;
      break;
    }
  }
  return element;
}

function nth(list, number) {
  function recursive(list, position) { // scope: inner list
    if (position > number || list == null)
      return undefined;
    if (position == number)
      return list.value;
    return recursive(list.rest, position + 1);
  }
  return recursive(list, 0);
}

