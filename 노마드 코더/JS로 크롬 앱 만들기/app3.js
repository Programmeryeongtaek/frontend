// 3.7 CSS in Javascript
// css의 .active 활용

const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    h1.className = "active";
}

function handleMouseEnter() {
    h1.className = "active2";
}

function handleMouseLeave() {
    h1.className = "active3";
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseEnter", handleMouseEnter);
h1.addEventListener("mouseLeave", handleMouseLeave);