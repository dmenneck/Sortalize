export const swapNodes = (node1, node2) => {
  let tmpX = node1.getAttribute("x");

  node1.setAttribute("x", node2.getAttribute("x"));
  node2.setAttribute("x", tmpX);
};
