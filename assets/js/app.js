var panda = document.getElementsByClassName("panda");
var menu = document.getElementsByClassName("menu");
var span = document.getElementsByClassName("spanda");

var origen = document.getElementById("origen");
var extension = document.getElementById("extension");
var restaurar =  document.getElementById("restaurar");
var origenParraf = document.getElementsByClassName("origen");
var extinParraf = document.getElementsByClassName("extin");

function closeImg(){
    for(var i=0; i<span.length; i++){
        span[i].addEventListener("click", function(event){
        event.preventDefault();
        this.parentNode.style.display = "none";
        });
    }
}

function rest(){
    for(var i=0; i<panda.length; i++){
        panda[i].style.display = "inline-block";
    }
}

window.addEventListener("load", function(){
      closeImg();
      restaurar.addEventListener("click", function(event){
          event.preventDefault();
          rest();
        });
        origen.addEventListener("click", function(event){
          event.preventDefault();
          for (var i =0; i<origenParraf.length; i++){
            origenParraf[i].classList.toggle("show");
          }
        });

        extension.addEventListener("click", function(event){
          event.preventDefault();
          for (var i =0; i<extinParraf.length; i++){
            extinParraf[i].classList.toggle("show");
          }
        });
});
