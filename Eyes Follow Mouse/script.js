const eyes = document.querySelectorAll(".eye");

document.querySelector("body").addEventListener("mousemove", moveEye);

function moveEye() {
  eyes.forEach(eye => {
    let x = (eye.getBoundingClientRect().left) +(eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = (radian * (180 / Math.PI) * -1) + 270;
    eye.style.transform = `rotate(${rotation}deg)`;

    console.log("MOVING EYE: ", eye, " by ", rotation);
  });
}
