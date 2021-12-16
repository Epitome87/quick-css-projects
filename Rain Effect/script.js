const body = document.querySelector("body");
const amount = 200;

const rain = () => {
    for (let i = 0; i < amount; i++) {
        let drop = document.createElement("i");

        let randomSize = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let randomDelay = Math.random() * -20;
        let randomDuration = Math.random() * 5;

        drop.style.background = `linear-gradient(transparent, ${randomColor()})`;
        drop.style.width = 0.2 + randomSize + "px";
        drop.style.left = posX + "px";
        drop.style.animationDelay = randomDelay + "s";
        drop.style.animationDuration = 1 + randomDuration + "s";
        body.appendChild(drop);
    }
}

const randomColor = () => {
    randomR = Math.floor(Math.random() * 256);
    randomG = Math.floor(Math.random() * 256);
    randomB = Math.floor(Math.random() * 256);

    return `rgb(${randomR}, ${randomG}, ${randomB})`;
}

rain();