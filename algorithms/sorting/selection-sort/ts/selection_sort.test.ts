import { assertEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { selectionSort } from './selection_sort.ts';

Deno.test('selection sorting', function(): void {
  const unsortedArray = [7, 4, 8, 2, 3];
  const sortedArray = [2, 3, 4, 7, 8];
  assertEquals(sortedArray, selectionSort(unsortedArray));
});
