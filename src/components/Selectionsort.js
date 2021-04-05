import react, { useEffect } from "react";
import { swapNodes } from "../functions/swap";
import { Sleep } from "../functions/sleep";

export const Selectionsort = async (data, svg) => {
  let swapCounter = 0;

  for (let i = 0; i < data.length; i++) {
    // Finding the smallest number in the subarray
    let min = i;

    for (let j = i + 1; j < data.length; j++) {
      svg[j].style.fill = "grey";
      svg[min].style.fill = "red";

      if (data[min] > data[j]) {
        svg[min].style.fill = "#ff8c00";
        min = j;
        svg[min].style.fill = "grey";
      }

      await Sleep(); // pause loop

      svg[j].style.fill = "#ff8c00";
    }

    if (min != i) {
      // Swapping the elements
      // get index of min and i in html collection (svg)
      let rect_i, rect_min;
      for (let k = 0; k < svg.length; k++) {
        if (data[i] == svg[k].getAttribute("height")) {
          rect_i = k;
        }

        if (data[min] == svg[k].getAttribute("height")) {
          rect_min = k;
        }
      }

      swapNodes(svg[rect_i], svg[rect_min]);
      swapCounter++;

      let tmp = data[i];

      data[i] = data[min];

      data[min] = tmp;
    }

    // reset color of current i
    svg[i].style.fill = "#ff8c00";
  }

  let dataObj = {
    data: data,
    swaps: swapCounter
  }

  return dataObj;
};
