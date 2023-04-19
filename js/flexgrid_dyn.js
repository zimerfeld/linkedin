const userInput = window.prompt("quantos quadrados ?");

let spans = document.getElementsByTagName("span");
spans[0].style.display = "flex";
// default row
// spans[0].style.flexDirection = "row";
// spans[0].style.flexDirection = "column";
spans[0].style.flexWrap = "wrap";
spans[0].style.margin = "10px";



const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "blue";
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.flexWrap = "wrap";
    newDiv.style.margin = "10px";
    newDiv.style.justifyContent = "space-between";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
}


for (let i = 1; i <= userInput; i++) {
    createDivs(spans[0], i);
}

// const navbar = document.querySelector("h1");
// navbar.innerHTML = "<h1>Hello</h1> <p>this should separate</p>";
// navbar.style.justifyContent = "space-between";

const myHeading = document.getElementById('my-heading');
myHeading.innerHTML = "<p>OK</p> <p>Cancel</p>";
myHeading.style.justifyContent = 'space-between';


// colour all first
let divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "red";
    divs[i].style.width = "200px";
    divs[i].style.height = "200px";
}

// colour only even
// let evenDivs = document.getElementsByTagName("div:nth-of-type(2n)");
let evenDivs = document.querySelectorAll("div:nth-of-type(2n)");
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "blue";
    evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px";
}
