const layers = document.querySelectorAll(".layer");
const SPEED_FACTOR = 0.1;

document.addEventListener("mousemove", (event) => {
  move(event.pageX, event.pageY);
});

// layers.forEach(layer => move(0, 0));

function move(xOffset, yOffset) {
  console.log("MOVE");
  layers.forEach(layer => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - xOffset * speed) * SPEED_FACTOR;
    const y = (window.innerHeight - yOffset * speed) * SPEED_FACTOR;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
