// Your code here.
function range(start, end, step) {
  var array = [];
  if (step === undefined)
    step = 1;
  if (end < start && step > 0)
    step *= -1;
  for (var i = start; (step < 0) ? i >= end : i <= end; i += step)
    array.push(i);
  return array;
}

function sum(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++)
    result += array[i];
  return result;
}

