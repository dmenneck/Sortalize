import { Sleep } from "../functions/sleep";
import { swapNodes } from "../functions/swap";

export const Gnomesort = async (data, svg) => {
  // sleep value

  let index = 0;
  let swapCounter = 0;

  while (index < data.length) {
    svg[index].style.fill = "#ff8c00";

    if (index == 0) index++;

    if (data[index] >= data[index - 1]) {
      index++;
    } else {
      await Sleep(); // pause loop

      // swap nodes
      let rect_i, rect_iMinus1, temp;
      // loop over svgs to get the svgs with the values who get swapped
      for (let k = 0; k < svg.length; k++) {
        if (data[index] == svg[k].getAttribute("height")) {
          rect_i = k;
        }

        if (data[index - 1] == svg[k].getAttribute("height")) {
          rect_iMinus1 = k;
        }
      }

      svg[rect_iMinus1].style.fill = "#ff8c00";
      svg[rect_i].style.fill = "red";

      swapNodes(svg[rect_i], svg[rect_iMinus1]);

      temp = data[index];
      data[index] = data[index - 1];
      data[index - 1] = temp;
      index--;

      swapCounter++;
    }
  }

  let dataObj = {
    data: data,
    swaps: swapCounter
  }

  return dataObj;
};
