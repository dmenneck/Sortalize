import { Sleep } from "../functions/sleep";
import { swapNodes } from "../functions/swap";

export const Bubblesort = async (data, svg) => {
  let rect_i, rect_j, swapCounter = 0;
  
  for (let i = 0; i < data.length; i++) {  
    svg[i].style.fill = "red";


    for (let j = 0; j < data.length; j++) {
      svg[i].style.fill = "#ff8c00";
      svg[j].style.fill = "#ff8c00";

      await Sleep(); // pause loop

      // Comparing and swapping the elements
      if (data[j] > data[j + 1]) {        
        // swap nodes
      
        // loop over svgs to get the svgs with the values who get swapped
        for (let k = 0; k < svg.length; k++) {
          if (data[j] == svg[k].getAttribute("height")) {
            rect_i = k;
          }

          if (data[j + 1] == svg[k].getAttribute("height")) {
            rect_j = k;
          }
        }

        svg[rect_j].style.fill = "#ff8c00";
        svg[rect_i].style.fill = "red";

        
        swapNodes(svg[rect_i], svg[rect_j]);
        swapCounter++;
  
        let tmp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tmp;
      }

      // loop over svgs to get the svgs with the values who get swapped
      for (let k = 0; k < svg.length; k++) {
        if (data[j] == svg[k].getAttribute("height")) {
          rect_i = k;
        }
      }

      svg[rect_i].style.fill = "#ff8c00";
    }
  }

  let dataObj = {
    data: data,
    swaps: swapCounter
  }

  return dataObj;
};