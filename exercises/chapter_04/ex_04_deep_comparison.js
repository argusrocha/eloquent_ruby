// Your code here.
function deepEqual(elementA, elementB) {
  // Objects
  if (typeof elementA == "object" && elementA != null && typeof elementB == "object" && elementB != null) {
    var propertiesInElementA = 0, propertiesInElementB = 0;
    for (var propertyName in elementA)
      propertiesInElementA++;
    for (var propertyName in elementB)
      propertiesInElementB++;
    for (var propertyName in elementA) {
      if (!(propertyName in elementB) || !deepEqual(elementA[propertyName], elementB[propertyName]))
        return false;
    }
    return propertiesInElementA == propertiesInElementB;
  }
  else
    return elementA === elementB;
}

