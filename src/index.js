import { loadIndex } from './page-load.js';
import { contactLoad } from './contact-load';
import { menuLoad } from './menu-load.js'

let clearDisplay = () => {
  document.querySelector("#content").innerHTML = "";
}

console.log("Hello from webpack! How's the weather up there?");
loadIndex();

let contactBttn = document.querySelector("#contact");
contactBttn.addEventListener("click", () => {
  clearDisplay();
  contactLoad();
});

let homeBttn = document.querySelector("#home");
homeBttn.addEventListener("click", () => {
  clearDisplay();
  loadIndex();
});

let menuBttn = document.querySelector("#menu");
menuBttn.addEventListener("click", () => {
  clearDisplay();
  menuLoad();
});