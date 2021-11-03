const translationAmount = -1.5 * 2;

createText('Times New Roman!', 'Times New Roman', 20, 75, 0, 300, 0);
createText('Poppins!', 'Poppins', 10, 150, -500, -300, 0);
createText('Pacifico!', 'Pacifico', 20, 300, 0, 0, 0);

function createText(
  text,
  fontFamily,
  layerCount,
  fontSize,
  xOffset,
  yOffset,
  zOffset
) {
  const textContainer = document.createElement('div');
  textContainer.classList.add('layer-container');
  document.body.appendChild(textContainer);

  for (let i = 0; i < layerCount; i++) {
    const layer = document.createElement('div');
    layer.classList.add('layer');
    layer.style.transform = `translateX(${xOffset}px) translateY(${yOffset}px) translateZ(${zOffset}px)`;

    layer.style.setProperty('--translation', `${i * translationAmount}px`);
    // Can't seem to do this method to set the "content" property of CSS
    // layer.style.setProperty('--text', 'Purea    css!');
    // Use this isntead to change :after "content" !
    layer.setAttribute('data-after', text);
    layer.style.setProperty('--size', `${fontSize}px`);
    layer.style.setProperty('--fontFamily', fontFamily);

    // Maybe make these based on % of layerCount?
    if (i >= layerCount * 0.6) layer.classList.add('test1');
    if (i >= layerCount * 0.6 + 1) layer.classList.add('test2');
    if (i >= layerCount * 0.6 + 2) layer.classList.add('test3');

    textContainer.appendChild(layer);
  }
}

// Example of how to read property's of an ":after' element"
function test() {
  const layer = document.querySelector('.layer');
  const layerAfter = window.getComputedStyle(layer, ':after');
  console.log(layerAfter.getPropertyValue('content'));
}
