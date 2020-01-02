let loadIndex = () => {
  let display = document.querySelector("#content");

  let title = document.createElement("h2");
  title.innerText = "Ramen - with DONUTS!";

  let img = document.createElement("img");
  img.setAttribute("src", "https://s.abcnews.com/images/Lifestyle/ht_Ramnut_Cover_kb_141113_16x9_992.jpg");
  img.setAttribute("height", "300px");
  img.setAttribute("width", "500px");

  let p = document.createElement("p");
  p.innerText = `"We want to educate people on what ramen truly is. It's the soul food of Japan." Ramen Tatsu-ya is the long-awaited collaboration between local chefs/DJs, Tatsu Aikawa and Takuya Matsumoto. The two of them first met as they were busy making their marks on the Austin scene as hip-hop DJs. After following an eerily parallel timeline, honing their crafts at notable Austin establishments such as Musashino and Second Bar + Kitchen, Tatsu took a leap and moved to Los Angeles. There, he worked in one of the nation's most respected Kaiseki/Sushi bars, the two Michelin star restaurant Urasawa. On his return, he began working with Takuya on birthing Tatsu-ya. "I was craving good ramen after having lived in Japan and LA. I wanted to provide that same quality and authenticity in Austin, the city I call home." says Tatsu. "We want to educate people on what ramen truly is. It's the soul food of Japan. The process of broth-making can take an extremely long time in order to draw out the flavors from each ingredient." A far cry from the 10-cent package ramen most of us know all too well.`;

  display.appendChild(title);
  display.appendChild(img);
  display.appendChild(p);

  document.querySelector("#home").classList.add("selected");
  document.querySelector("#menu").classList.remove("selected");
  document.querySelector("#contact").classList.remove("selected");

}

export { loadIndex };