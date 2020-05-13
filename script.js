const container = document.querySelector("div.container");

const xSize = 23*2;
const ySize = 29*2;

container.style["grid-template-rows"] = `repeat(${xSize}, auto)`;
container.style["grid-template-columns"] = `repeat(${ySize}, auto)`;


for (let y = 0; y < ySize; y++) {
   for (let x = 0; x < xSize; x++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      container.appendChild(pixel);
   }
}
const pixels = Array.from(document.querySelectorAll("div.pixel"));
console.log(pixels);

pixels.forEach(pixel => {
   pixel.addEventListener("mouseover", (e) => {
      console.log(e.target.style['background-color']);
      e.target.style['background-color'] = "#221B20";
   })
})