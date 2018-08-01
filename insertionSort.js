function insertionSort() {
  for (let i = 0; i < unsortedArray.length; i++) {
    let currentValue = unsortedArray[i];
    sortedArray.push(currentValue);

    for (let j = sortedArray.length - 1; j > 0; j--) {
      if (currentValue < sortedArray[j - 1]) {
        sortedArray[j] = sortedArray[j - 1];
        sortedArray[j - 1] = currentValue;
      }
    }
  }
  return sortedArray;
}
