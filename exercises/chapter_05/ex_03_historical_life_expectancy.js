function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.
function personCentury(person) {
  return Math.ceil(person.died / 100);
}

function age(person) {
  return person.died - person.born;
}

function groupBy(array, computeGroup) {
  var groups = {};
  array.forEach(function(element) {
    var group = computeGroup(element);
    if (!groups[group])
      groups[group] = [age(element)];
    else
      groups[group].push(age(element));
  });
  return groups;
}

var centuries = groupBy(ancestry, personCentury);
for (century in centuries)
  console.log(century + ": " + average(centuries[century]));

