const left = document.querySelector(".leftarrow");
const right = document.querySelector(".rightarrow");
const slider = document.querySelector(".slider1");
const image = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slidenumber = 1;
const length = image.length;

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNumber = i + 1;
    button.style.backgroundColor = "white";
  });
});

const nxtslide = () => {
  slider.style.transform = `translateX(-${slidenumber * 800}px)`;
  slidenumber++;
};

const prevslide = () => {
  slider.style.transform = `translateX(-${(slidenumber - 2) * 800}px)`;
  slidenumber--;
};

const getfirstslide = () => {
  slider.style.transform = `translateX(0px)`;
  slidenumber = 1;
};

const getlastslide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slidenumber = length;
};

const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "white";
};

right.addEventListener("click", () => {
  //   console.log("clicked");
  slidenumber < length ? nxtslide() : getfirstslide();
  changeColor;
});

left.addEventListener("click", () => {
  slidenumber > 1 ? prevslide() : getlastslide();
  changeColor;
});
