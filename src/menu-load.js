let menuLoad = () => {

  let display = document.querySelector("#content");
  
  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  
  let title = document.createElement("h2");
  title.innerText = "Menu";
  menuContainer.appendChild(title);

  // let img = document.createElement("img");
  // img.setAttribute("src", "https://i.pinimg.com/originals/18/5f/44/185f44a6f0058cee2e2777ea3bed7268.jpg");
  // img.setAttribute("height", "300px");
  // img.setAttribute("width", "300px");

  let title1 = document.createElement("h4");
  title1.innerText = "Big E-Z";
  let p1 = document.createElement("p");
  p1.innerText = "Powdered sugar and locally harvested honey"
  menuContainer.appendChild(title1);
  menuContainer.appendChild(p1);

  let title2 = document.createElement("h4");
  title2.innerText = "Birthday Donut";
  let p2 = document.createElement("p");
  p2.innerText = "Birthday cake batter and SPRINKLES!"
  menuContainer.appendChild(title2);
  menuContainer.appendChild(p2);

  let title3 = document.createElement("h4");
  title3.innerText = "Donut Pudding";
  let p3 = document.createElement("p");
  p3.innerText = "Southern style bread pudding topped with a sweet rum sauce"
  menuContainer.appendChild(title3);
  menuContainer.appendChild(p3);

  display.appendChild(menuContainer);

  // Update Tab display
  document.querySelector("#menu").classList.add("selected");
  document.querySelector("#contact").classList.remove("selected");
  document.querySelector("#home").classList.remove("selected");

};

export { menuLoad };