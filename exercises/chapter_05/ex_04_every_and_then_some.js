// Your code here.
function every(array, predicate_function) {
  for (var i = 0; i < array.length; i++)
    if (!predicate_function(array[i]))
      return false;
  return true;
}

function some(array, predicate_function) {
  for (var i = 0; i < array.length; i++)
    if (predicate_function(array[i]))
      return true;
  return false;
}

