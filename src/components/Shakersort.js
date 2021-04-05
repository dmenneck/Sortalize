import { Sleep } from "../functions/sleep";
import { swapNodes } from "../functions/swap";

export const Shakersort = async (data, svg) => {

    let rect_i, rect_j, swapCounter = 0;
    let isSorted = true;

    while (isSorted){
        for (let i = 0; i < data.length - 1;i++){
            await Sleep();
                if (data[i] > data[i + 1])
                 {
                    // loop over svgs to get the svgs with the values who get swapped
                    for (let k = 0; k < svg.length; k++) {
                        if (data[i] == svg[k].getAttribute("height")) {
                         rect_i = k;
                        }
            
                        if (data[i + 1] == svg[k].getAttribute("height")) {
                         rect_j = k;
                        }
                    }
                    
                    svg[rect_i].style.fill = "red";


                    swapNodes(svg[rect_i], svg[rect_j]);
                    swapCounter++;

                    let temp = data[i];
                    data[i] = data[i + 1];
                    data[i+1] = temp;
                    isSorted = true;
                 }

                 // loop over svgs to get the svgs with the values who get swapped
                for (let k = 0; k < svg.length; k++) {
                    if (data[i] == svg[k].getAttribute("height")) {
                        rect_i = k;
                    }
                }
                
                svg[rect_i].style.fill = "#ff8c00";
        }
     
        if (!isSorted) {
            break;
        }
            
        isSorted = false;
     
        for (let j = data.length - 1; j > 0; j--){
            await Sleep();
                if (data[j-1] > data[j])
                 {
                     
                    // loop over svgs to get the svgs with the values who get swapped
                    for (let k = 0; k < svg.length; k++) {
                        if (data[j] == svg[k].getAttribute("height")) {
                        rect_i = k;
                        }
            
                        if (data[j - 1] == svg[k].getAttribute("height")) {
                        rect_j = k;
                        }
                    }

                    svg[rect_i].style.fill = "red";
                    
                    swapNodes(svg[rect_i], svg[rect_j]);
                    swapCounter++;

                    let temp = data[j];
                    data[j] = data[j - 1];
                    data[j - 1] = temp;
                    isSorted = true;
                 }

                // loop over svgs to get the svgs with the values who get swapped
                for (let k = 0; k < svg.length; k++) {
                    if (data[j] == svg[k].getAttribute("height")) {
                        rect_j = k;
                    }
                }
                
                svg[rect_j].style.fill = "#ff8c00";
        }
    }

    let dataObj = {
        data: data,
        swaps: swapCounter
    }

    return dataObj;
};