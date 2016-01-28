// Your code here.
function countChar(string, char) {
  var result = 0;
  for (var position = 0; position < string.length; position++)
    if (string.charAt(position) === char)
      result++;
  return result;
}

function countBs(string) {
  return countChar(string, 'B');
}

