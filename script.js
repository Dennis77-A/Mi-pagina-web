const avatar = document.getElementById("avatar");
avatar.addEventListener("click", function(){
    avatar.classList.toggle("agrandado");
});

const cuadros = document.querySelectorAll(".intereses li, .skills li, .tarjeta");
cuadros.forEach(function(cuadro){
    cuadro.addEventListener("click", function(){
        cuadro.classList.toggle("seleccionado");
    });
});

let boton = document.getElementById("botonM");
let menu = document.getElementById("menu");

boton.addEventListener("click",function(){
    menu.classList.toggle("abierto");
});

const imagenes=["imagen/captura1.png","imagen/captura2.png","imagen/captura3.png"];
const textos=["Escribiendo el codigo","Subiendo los cambios","Estructurando el HTML"];
let indice=0;

const imagenGaleria=document.getElementById("imagen-galeria");
const textoGaleria=document.getElementById("texto-galeria");

document.getElementById("flecha-der").addEventListener("click",function(){
    indice=indice+1;
    if (indice>imagenes.length-1) {
        indice=0;
    }
    imagenGaleria.src=imagenes[indice];
    textoGaleria.textContent=textos[indice];
});
document.getElementById("flecha-izq").addEventListener("click",function(){
    indice=indice-1;
    if (indice<0) {
        indice=imagenes.length-1;
    }
    imagenGaleria.src=imagenes[indice];
    textoGaleria.textContent=textos[indice];
});