var display = false;
const elem = document.querySelector(".elem");
const ToggleImage = document.querySelector(".ToggleMenu");
const swiper = document.querySelector(".right");
const about = document.querySelector(".about");
const collection = document.getElementsByTagName("li");
const line = document.querySelector(".icon");
const scrollValArr = [
  { name: "home", val: 40 },
  { name: "about", val: 550 },
  { name: "service", val: 3000 },
  { name: "portfolio", val: 40 },
  { name: "team", val: 40 },
  { name: "contact", val: 40 },
];
Array.from(collection).forEach((element, index) => {
  element.addEventListener("click", (e) => {
    // put the scroll top value to make scroll-y of window on click to li element according to their position
    //put this condition of all li element for smooth scroll on click at thier exact location.
    smooth_Scroll(index);
  });
});

line.addEventListener(
  "click",
  () => {
    Display();
  },
  true
);

function Display() {
  !display ? elem.classList.remove("hidden") : elem.classList.add("hidden");
  !display ? (ToggleImage.src = "close.svg") : (ToggleImage.src = "menu.svg");
  !display ? (display = true) : (display = false);
  !display ? swiper.classList.remove("ml-20") : swiper.classList.add("ml-20");
}

function smooth_Scroll(index) {
  display = true;
  Display(display);
  window.scrollTo({
    top: scrollValArr[index].val /*top value */,
    behavior: "smooth",
  });
}
