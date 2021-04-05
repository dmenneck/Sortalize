import { Sleep } from "../functions/sleep";
import { swapNodes } from "../functions/swap";

export const Insertionsort = async (data, svg) => {

    let rect_i, rect_j, swapCounter = 0;
    let j;
   
    for (let i = 1; i < data.length; i++) {
        j = i;

        while (j > 0 && data[j] < data[j - 1]) {

            await Sleep();

            // loop over svgs to get the svgs with the values who get swapped
            for (let k = 0; k < svg.length; k++) {
                if (data[j] == svg[k].getAttribute("height")) {
                    rect_i = k;
                }
    
                if (data[j - 1] == svg[k].getAttribute("height")) {
                    rect_j = k;
                }
            }

            svg[rect_j].style.fill = "#ff8c00";
            svg[rect_i].style.fill = "red";
    
            swapNodes(svg[rect_i], svg[rect_j]);
            swapCounter++;
            
            let temp = data[j];
            data[j] = data[j - 1];
            data[j - 1] = temp;

            j--;
        }

      // loop over svgs to get the svgs with the values who get swapped
      for (let k = 0; k < svg.length; k++) {
        if (data[j] == svg[k].getAttribute("height")) {
          rect_i = k;
        }
      }

      svg[rect_i].style.fill = "#ff8c00";

    }
    
    let dataObj = {
        data: data,
        swaps: swapCounter
      }
    
    return dataObj;
};

// #ff8c00