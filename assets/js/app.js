var panda1 = document.getElementById("panda1");
var panda2 = document.getElementById("panda2");
var panda3 = document.getElementById("panda3");
var panda4 = document.getElementById("panda4");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");
var span4 = document.getElementById("span4");
var origen = document.getElementById("origen");
var extension = document.getElementById("extension");
var restaurar =  document.getElementById("restaurar");
var origenParraf = document.getElementsByClassName("origen");
var extinParraf = document.getElementsByClassName("extin");



span1.addEventListener("click", function(){
      panda1.style.display = "none";
});

span2.addEventListener("click", function(){
      panda2.style.display = "none";
});
span3.addEventListener("click", function(){
      panda3.style.display = "none";
});
span4.addEventListener("click", function(){
      panda4.style.display = "none";
});
origen.addEventListener("click", function(){
  for (var i =0; i<origenParraf.length; i++){
    origenParraf[i].classList.toggle("show");
  }
});

extension.addEventListener("click", function(){
  for (var i =0; i<extinParraf.length; i++){
    extinParraf[i].classList.toggle("show");
  }
});

restaurar.addEventListener("click", function(){
  panda1.style.display = "inline-block";
  panda2.style.display = "inline-block";
  panda3.style.display = "inline-block";
  panda4.style.display = "inline-block";

});
