// Lesson 2: Variables, Let, Const & Data Types
// Declaring variables using const for elements like buttons, sections, and card.
const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");
  
// Lesson 2: Variables, Let, Const & Data Types
// Using let to declare a variable targetSection and getting the data-section attribute.
let targetSection = e.target.getAttribute("data-section");

// Lesson 3: Booleans
// Using a ternary operator to check if targetSection is not equal to "#about".
// If true, add "is-active" class to card, else remove it.
targetSection !== "#about" ?
  card.classList.add("is-active") :
  card.classList.remove("is-active");
  
// Lesson 2: Variables, Let, Const & Data Types
// Using const to declare a variable section and selecting the target section.
const section = document.querySelector(targetSection);
  
// Lesson 2: Variables, Let, Const & Data Types
// Using const to declare a variable state and setting the data-state attribute.
const state = targetSection;
card.setAttribute("data-state", state);


