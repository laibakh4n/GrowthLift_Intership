let name = "Laiba";
const site = "GrowthLift";

let greeting = "Hello World";
let price = 15000;
let isOnline = true;
let skills = ["HTML", "CSS", "JavaScript"];
let intern = { name: "Laiba", week: 2, city: "Lahore" };

function greet(name) {
  return "Hello " + name;
}

const greetArrow = (name) => "Hello " + name;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

skills.forEach(skill => console.log(skill));

if (isOnline) {
  console.log("User is online");
} else {
  console.log("Offline");
}

console.log(`Welcome to ${site}, ${name}!`);

document.querySelector("h1")
document.querySelectorAll(".card")
document.getElementById("about")


document.querySelector(".card").classList.add("highlighted");
document.querySelector(".card").classList.remove("highlighted");
document.querySelector(".card").classList.toggle("highlighted");

const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

fetch("https://api.quotable.io/random")
  .then(response => response.json())
  .then(data => console.log(data.content))
  .catch(error => console.log("Error:", error));

function getQuote() {
  document.getElementById("quote-text").textContent = "Loading...";

  fetch("https://dummyjson.com/quotes/random")
    .then(response => response.json())
    .then(data => {
      document.getElementById("quote-text").textContent = data.quote;
    })
    .catch(error => {
      document.getElementById("quote-text").textContent = "Couldn't load quote.";
    });
}

getQuote();
document.getElementById("new-quote").addEventListener("click", getQuote);