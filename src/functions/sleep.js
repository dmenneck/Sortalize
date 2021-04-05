export function Sleep(whichAlgorithm) {

  let speed;

  // check if mobile or desktop sleep slider
  if ( window.innerWidth < 770 ) {
    if ( document.getElementsByClassName("slidecontainer-1").item(1) == null ) {
      speed = 0;
    } else {
      speed = document.getElementsByClassName("slidecontainer-1").item(1).children[0].lastChild.firstChild.firstChild.firstChild.innerHTML;
    }
  } else {
    speed = document
  .getElementsByClassName("MuiSlider-root")
  .item(1)
  .children.item(2).value;
  }

  // get "reversed" timeout value
  let sleep;
  let arr;
  if (whichAlgorithm == "quicksort") {
    sleep = 2000;
  } else {
    arr = [200, 180, 160, 140, 120, 100, 80, 60, 40, 20, 0];
    sleep = arr[speed];
  }
  
  return new Promise((resolve) => setTimeout(resolve, sleep));
}
