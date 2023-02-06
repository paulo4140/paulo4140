let time = 5000

currentImageIdex=0, images=document.querySelectorAll(".slide img")
max=images.length;

function trocarImage(){
    images[currentImageIdex]
 .classList.remove("selecionado")
 currentImageIdex++  
 console.log(currentImageIdex);
    
    if(currentImageIdex>=max){
        currentImageIdex=0

console.log(currentImageIdex);

    }
    images[currentImageIdex]
    .classList.add("selecionado")
    
}
function start(){
    setInterval(()=>{
        trocarImage() 
    },time)
   
    console.log("carrega tudo")
}
const foren=document.getElementById("formulario");
    
function encomdas(){
    foren.classList.add("formulariov");
    
}
function sai(){
    foren.classList.remove("formulariov")
}
window.addEventListener("load", start)



