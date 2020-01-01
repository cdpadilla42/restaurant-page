import { loadIndex } from './page-load.js';
import { contactLoad } from './contact-load';

let clearDisplay = () => {
  document.querySelector("#content").innerHTML = "";
}

console.log("Hello from webpack! How's the weather up there?");
clearDisplay();
loadIndex();


