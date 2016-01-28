// Your code here.
var size = 8;
for (var line = 0; line < size; line++) {
  var str = "";
  for (var column = 0; column < size; column++) {
    if ((line + column) % 2 == 0)
      str += ' ';
    else
      str += '#';
  }
  console.log(str);
}

