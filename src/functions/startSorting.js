import { Selectionsort } from "../components/Selectionsort";
import { Gnomesort } from "../components/Gnomesort.js";
import { Bubblesort } from "../components/Bubblesort.js";
import { Insertionsort } from "../components/InsertionSort.js";
import { Shakersort } from "../components/Shakersort.js";

export const startSorting = async (whichAlgorithm) => {

    let svg = document.getElementById("svg").children;

    let values = [];
    for (let i = 0; i < svg.length; i++) {
      values.push(svg[i].height.animVal.value);
    }

    // check which algorithm to run
    let time, start, end, sorted_data;
    switch (whichAlgorithm) {
      case "selectionsort":
        // get execution time
        start = performance.now()
        sorted_data = await Selectionsort(values, svg);
        end = performance.now()
        time = end - start;
        break;
      case "gnomesort":
        start = performance.now()
        sorted_data = await Gnomesort(values, svg);
        end = performance.now()
        time = end - start;
        break;
      case "bubblesort":
        start = performance.now()
        sorted_data = await Bubblesort(values, svg);
        end = performance.now()
        time = end - start;
        break;
      case "insertionsort":
        start = performance.now()
        sorted_data = await Insertionsort(values, svg);
        end = performance.now()
        time = end - start;
        break;
      case "shakersort":
        start = performance.now()
        sorted_data = await Shakersort(values, svg);
        console.log(sorted_data)
        end = performance.now()
        time = end - start;
        break;
    }

    let sortingdata = {
      swaps: sorted_data.swaps,
      time: time
    }

    return sortingdata;
};