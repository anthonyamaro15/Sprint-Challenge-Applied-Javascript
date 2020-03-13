/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselParent = document.querySelector(".carousel-container");
carouselParent.appendChild(createCarusel());

const rightBtn = document.querySelector(".right-button");
const leftBtn = document.querySelector(".left-button");
const imgs = document.querySelector(".carousel-container .carousel img");

let count = 1;

function createCarusel() {
  const carousel = document.createElement("div");
  const left = document.createElement("div");
  const img = document.createElement("img");
  const right = document.createElement("div");

  carousel.classList.add("carousel");
  left.classList.add("left-button");
  right.classList.add("right-button");

  carousel.appendChild(left);
  carousel.appendChild(img);
  carousel.appendChild(right);

  img.src = "../../assets/carousel/img1.jpeg";
  return carousel;
}

rightBtn.addEventListener("click", () => {
  count++;
  imgs.src = `../../assets/carousel/img${count}.jpeg`;
  if (count === 3) {
    count = -1;
  }
});

leftBtn.addEventListener("click", () => {
  if (count === 0) {
    count = 4;
  }
  count--;
  imgs.src = `../../assets/carousel/img${count}.jpeg`;
});
