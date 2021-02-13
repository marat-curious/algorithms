export function bubbleSort(arr: number[]): number[] {
  let swapped = false;
  const array = [...arr];
  for (let i = 1; i < array.length; i++) {
    swapped = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j + 1] < array[j]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
        swapped = true;
      }
    }

    if (!swapped) {
      return array;
    }
  }
  return array;
};
