const bubbleSort2 = array => {
  for (let j = 0; j < array.length; j++) {
    for (i = 0; i < array.length; i++) {
      let pivot = array[i];
      let comparePivot = array[i - 1];
      if (pivot < comparePivot) {
        array[i - 1] = pivot;
        array[i] = comparePivot;
      }
    }
  }
  return array;
};
