
// alert("alerta!");
let spans = document.getElementsByTagName("span");
spans[0].style.display = "flex";
let divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "red";
    divs[i].style.width = "200px";
    divs[i].style.height = "200px";
}

// let evenDivs = document.getElementsByTagName("div:nth-of-type(2n)");
let evenDivs = document.querySelectorAll("div:nth-of-type(2n)");
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "blue";
    evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px";
}