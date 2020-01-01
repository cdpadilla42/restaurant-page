import { loadIndex } from './page-load.js';
import { contactLoad } from './contact-load';

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