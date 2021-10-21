const scrollSpeed = 2;

document.addEventListener("mousemove", parallaxText);

function parallaxText(e) {
  this.querySelectorAll(".layer").forEach(layer => {
    let x = (window.innerWidth - e.pageX * scrollSpeed) / 2;
    layer.style.transform = `translateX(${x}px)`
  })
}
