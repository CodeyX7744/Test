let container = document.querySelector("#container");
let ptag = document.createElement("p");
ptag.textContent = "Hey I'm tired";
ptag.style.color ="red";
container.appendChild(ptag);

let h3tag = document.createElement("h3");
h3tag.textContent = "I’m a blue h3!";
h3tag.style.color ="blue";
container.appendChild(h3tag);

let divtag = document.createElement("div");
divtag.style.backgroundColor = "pink";
divtag.style.border = "1px solid black";
let h1tag = document.createElement("h1");
h1tag.textContent = "I’m in a div!";
let p1tag = document.createElement("p");
p1tag.textContent = "ME TOO!";
divtag.appendChild(h1tag);
divtag.appendChild(p1tag);
container.appendChild(divtag);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", (e) => {
  alert("Hello World");
  console.log(e.target);
  e.target.style.background = "yellow";
});


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("dblclick", () => {
    alert(button.id);
  });
});
