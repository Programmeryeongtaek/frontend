// 3.6 CSS in Javascript
// 클릭할 때마다 색상반복

const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
/*
    if(h1.style.color === "blue") {
        h1.style.color = "tomato";
    } else {
        h1.style.color = "blue";
    }
*/
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);