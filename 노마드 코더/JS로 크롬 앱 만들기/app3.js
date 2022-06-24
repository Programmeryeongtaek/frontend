// 3.7 CSS in Javascript
// css의 .active 활용

const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    h1.className = "active";
}
h1.addEventListener("click", handleTitleClick);