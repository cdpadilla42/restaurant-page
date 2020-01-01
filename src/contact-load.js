let contactLoad = () => {

  let display = document.querySelector("#content");
  
  let contactContainer = document.createElement("div");
  contactContainer.classList.add("content-container");
  
  let title = document.createElement("h2");
  title.innerText = "Let's talk";

  let img = document.createElement("img");
  img.setAttribute("src", "https://i.pinimg.com/originals/18/5f/44/185f44a6f0058cee2e2777ea3bed7268.jpg");
  img.setAttribute("height", "300px");
  img.setAttribute("width", "300px");

  let p = document.createElement("p");
  p.innerHTML = "<h3>GENERAL/CATERING/EVENTS</h3>info@tatsu-ya.com<h3>PRESS</h3>ramentatsu-ya@giantnoise.com"

  contactContainer.appendChild(title);
  contactContainer.appendChild(img);
  contactContainer.appendChild(p);

  display.appendChild(contactContainer);
};

export { contactLoad };