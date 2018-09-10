var text = "Hallo Welt!"
var content = document.getElementById("content");
var images = ["1.jpg", "2.jpg", "3.jpg"];
//zähler für Bilder
var currentImage = 0;

//dem HTML eine Überschrift hinzufügen
var h1 = document.createElement("h1");
var textNode =  document.createTextNode(text);
h1.appendChild(textNode);
content.appendChild(h1);

//dem HTML ein Bild hinzufügen
var div = document.createElement("div");
var img = document.createElement("img");
img.src=images[currentImage];
div.appendChild(img);
content.appendChild(div);

//dem HTML ein Button hinzufügen
var button = document.createElement("button");
button.addEventListener("click",toggleImage);
button.innerHTML= "Nächstes Bild";
content.appendChild(button);

//Funktion die vom Button aufgerufen wird
function toggleImage(){
  //zähler um eins erhöhen
  currentImage++;
  //überprüfen, ob zähler zurückgesetzt werden muss
  if(currentImage > images.length -1){
    currentImage = 0;
  }
  //neues Bild setzen (globale var variable ist hier gültig)
  img.src=images[currentImage];
}
