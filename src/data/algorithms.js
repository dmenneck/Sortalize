const selection_sort = `for (let i = 0; i < data.length; i++) {
    let min = i;

    for (let j = i + 1; j < data.length; j++) {
      if (data[min] > data[j]) {
        min = j;
    }

    if (min != i) {
      let tmp = data[i];
      data[i] = data[min];
      data[min] = tmp;
    }
  }
  return data;
}
`;

const bubble_sort = `for (let i = 0; i < data.length; i++) {  
   for (let j = 0; j < data.length; j++) {
 
    if (data[j] > data[j + 1]) {

      let tmp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = tmp;
    }
  }

  return data;
}
`;

const gnome_sort = `let index = 0;
while (index < data.length) {
  if (index == 0) index++;
  if (data[index] >= data[index - 1]) {
    index++;
  } else {
    temp = data[index];
    data[index] = data[index - 1];
    data[index - 1] = temp;
    index--;
  }
}

return data;
`;

const quick_sort = `const swap = (items, leftIndex, rightIndex) => {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

const partition = (items, left, right) => {

  let pivot = items[Math.floor((right + left) / 2)]; //middle element
  let i = left; //left pointer
  let j = right; //right pointer

  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }

      while (items[j] > pivot) {
          j--;
      }

      if (i <= j) {
          swap(items, i, j); //swapping two elements

          i++;
          j--;
      }
  }
  return i;
}

const quickSort = async (items, left, right) => {
  await Sleep();

  var index;
  if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
          quickSort(items, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
          quickSort(items, index, right);
      }
  }
  return items;
}

let sortedArray = quickSort(data, 0, data.length - 1);
`;

const insertion_sort = `for (let i = 1; i < data.length; i++) {
  j = i;

  while (j > 0 && data[j] < data[j - 1]) {
      
      let temp = data[j];
      data[j] = data[j - 1];
      data[j - 1] = temp;

      j--;
  }

  return data;
}
`;

const shaker_sort = `let isSorted = true;

    while (isSorted){
        for (let i = 0; i < data.length - 1;i++){
                if (data[i] > data[i + 1])
                 {
                    let temp = data[i];
                    data[i] = data[i + 1];
                    data[i+1] = temp;
                    isSorted = true;
                 }
        }
     
        if (!isSorted) {
            break;
        }
            
        isSorted = false;
     
        for (let j = data.length - 1; j > 0; j--){
            await Sleep();
                if (data[j-1] > data[j])
                 {
                    let temp = data[j];
                    data[j] = data[j - 1];
                    data[j - 1] = temp;
                    isSorted = true;
                 }
        }
    }

    return data;
`;

const algorithms = {
  selectionsort: {
    information: {
      name: "Selection Sort",
      text: `Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.
                The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.`,
    },
    complexity: {
      text: ["O(n2)", "O(n2)", "O(n2)", "?"],
    },
    code: {
      link:
        "https://github.com/dmenneck/Sortalize/blob/master/src/components/Selectionsort.js",
      js: selection_sort,
    },
  },
  bubblesort: {
    information: {
      name: "Bubble Sort",
      text: `Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.`,
    },
    complexity: {
      text: ["O(n)", "O(n2)", "O(n2)", "?"],
    },
    code: {
      link:
        "https://github.com/dmenneck/Sortalize/blob/master/src/components/Bubblesort.js",
      js: bubble_sort,
    },
  },
  gnomesort: {
    information: {
      name: "Gnome Sort",
      text: `Gnome sort is a sorting algorithm which is similar to Insertion sort, except that moving an element to its proper place is accomplished by a series of swaps, as in Bubble Sort.`,
    },
    complexity: {
      text: ["O(n)", "O(n2)", "O(n2)", "?"],
    },
    code: {
      link:
        "https://github.com/dmenneck/Sortalize/blob/master/src/components/Gnomesort.js",
      js: gnome_sort,
    },
  },
  insertionsort: {
    information: {
      name: "Insertion Sort",
      text: `Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.`,
    },
    complexity: {
      text: ["O(n)", "O(n2)", "O(n2)", "?"],
    },
    code: {
      link:
        "https://github.com/dmenneck/Sortalize/blob/master/src/components/InsertionSort.js",
      js: insertion_sort,
    },
  },
  quicksort: {
    information: {
      name: "Quick Sort",
      text: `Quick Sort is a sorting algorithm, which is commonly used in computer science. Quick Sort is a divide and conquer algorithm. It creates two empty arrays to hold elements less than the pivot value and elements greater than the pivot value, and then recursively sort the sub arrays. There are two basic operations in the algorithm, swapping items in place and partitioning a section of the array.`,
    },
    complexity: {
      text: ["O(n log n)", "O(n log n)", "O(n2)", "?"],
    },
    code: {
      link:
        "https://github.com/dmenneck/Sortalize/blob/master/src/components/Selectionsort.js",
      js: quick_sort,
    },
  },
  shakersort: {
    information: {
      name: "Shakersort",
      text: `Cocktail shaker sort,also known as bidirectional bubble sort, cocktail sort, shaker sort (which can also refer to a variant of selection sort), ripple sort, shuffle sort, or shuttle sort, is an extension of bubble sort. The algorithm extends bubble sort by operating in two directions. While it improves on bubble sort by more quickly moving items to the beginning of the list, it provides only marginal performance improvements.`,
    },
    complexity: {
      text: ["O(n)", "O(n2)", "O(n2)", "?"],
    },
    code: {
      link:
        "https://github.com/dmenneck/Sortalize/blob/master/src/components/Shakersort.js",
      js: shaker_sort,
    },
  },
};

export const getCurrentAlgoData = (whichAlgorithm) => {
  let asArray = Object.entries(algorithms);

  let data = asArray.map((i) => {
    if (i[0] == whichAlgorithm) return i;
  });

  let filtered = data.filter(function (el) {
    return el != null;
  });

  return filtered[0][1];
};
