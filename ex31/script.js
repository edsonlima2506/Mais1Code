const p = document.getElementById("contador")
const btnIncrementar = document.getElementById("increaseBtn");
const btndecrementar = document.getElementById("decreaseBtn");
const btnzerar = document.getElementById("resetBtn")


let contador = 0;

p.innerHTML = contador;

btnIncrementar.addEventListener('click', function() {
    contador++;

    p.innerHTML = contador;

});

btndecrementar.addEventListener('click', function() {
    contador--;

    p.innerHTML = contador;

});

btnzerar.addEventListener('click', function() {
    
    p.innerHTML = contador = 0;

});