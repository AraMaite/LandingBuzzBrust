let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", function(e){
    e.preventDefault();
    if(contador==0){
        enlaces.className = ("enlaces dos")
        contador=1;
    }else{
        enlaces.classList.remove("dos")
        enlaces.className = ("enlaces uno")
        contador=0;
    }
})
document.addEventListener('DOMContentLoaded', funcion(){
    const link = document.querySelectorAll('a[href^="#"]');

    for (le link of links) {
        link.addEventListener('click', funcion(e) {
            e.preventDefault();

            const targetID = this.getAtribute('href').substring(1);
            const tragetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
