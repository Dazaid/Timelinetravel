var miVariable = 0;
var miVariable2 = 0;
var miVariable3 = 0;
var miVariable4 = 0;
var miVariable5 = 0;
var miVariable6 = 0;


function setHora1up() {
// Obtener referencia al botón y al span donde mostraremos el valor
// Variable que queremos cambiar

var boton = document.getElementById('botonup');
var valorSpan = document.getElementById('valorVariable');

// Función que se ejecuta cuando se hace clic en el botón
boton.addEventListener('click', function() {
// Cambiar el valor de la variable
miVariable++;
if (miVariable == 3) {
miVariable = 0
}
// Mostrar el nuevo valor en el span
valorSpan.textContent = miVariable;
});
}
setHora1up();

function setHora1down() {
    var boton = document.getElementById('botondown');
    var valorSpan = document.getElementById('valorVariable');
    
    boton.addEventListener('click', function() {

    miVariable--;
    if (miVariable == -1 || miVariable > 2) {
    miVariable = 2
    }
    valorSpan.textContent = miVariable;
    });
    }
setHora1down();





function setHora2up() {
    var boton = document.getElementById('botonup2');
    var valorSpan = document.getElementById('valorVariable2');
    
    boton.addEventListener('click', function() {

    miVariable2++;
    if (miVariable2 == 4) {
    miVariable2 = 0
    }
    valorSpan.textContent = miVariable2;
    });
    }
setHora2up();

function setHora2down() {
    var boton = document.getElementById('botondown2');
    var valorSpan = document.getElementById('valorVariable2');
    
    boton.addEventListener('click', function() {

    miVariable2--;
    if (miVariable2 == -1 || miVariable2 > 3) {
    miVariable2 = 3
    }
    valorSpan.textContent = miVariable2;
    });
    }
setHora2down();





// minutos 

function setMin1up() {
  
    var boton = document.getElementById('botondown3');
    var valorSpan = document.getElementById('valorVariable3');

    boton.addEventListener('click', function() {

    miVariable3--;
    if (miVariable3 == -1 || miVariable3 > 5) {
    miVariable3 = 5
    }
    valorSpan.textContent = miVariable3;
    });
    }
setMin1up();

function setMin1down() {
  
    var boton = document.getElementById('botonup3');
    var valorSpan = document.getElementById('valorVariable3');

    boton.addEventListener('click', function() {

    miVariable3++;
    if (miVariable3 == 6) {
    miVariable3 = 0
    }
    valorSpan.textContent = miVariable3;
    });
    }
setMin1down();

function setMin2up() {
  
    var boton = document.getElementById('botondown4');
    var valorSpan = document.getElementById('valorVariable4');

    boton.addEventListener('click', function() {

    miVariable4--;
    if (miVariable4 == -1 || miVariable4 > 9) {
    miVariable4 = 9
    }
    valorSpan.textContent = miVariable4;
    });
    }
setMin2up();

function setMin2down() {
  
    var boton = document.getElementById('botonup4');
    var valorSpan = document.getElementById('valorVariable4');

    boton.addEventListener('click', function() {

    miVariable4++;
    if (miVariable4 == 10) {
    miVariable4 = 0
    }
    valorSpan.textContent = miVariable4;
    });
    }
setMin2down();

// Dia y mes

function setDia1up() {
  
    var boton = document.getElementById('botonup5');
    var valorSpan = document.getElementById('valorVariable5');

    boton.addEventListener('click', function() {

    miVariable5++;
    if (miVariable5 == 4) {
    miVariable5 = 0
    }
    valorSpan.textContent = miVariable5;
    });
    }
setDia1up();

function setDia1down() {
  
    var boton = document.getElementById('botondown5');
    var valorSpan = document.getElementById('valorVariable5');

    boton.addEventListener('click', function() {

    miVariable5--;
    if (miVariable5 == -1 || miVariable5 > 3) {
    miVariable5 = 3
    }
    valorSpan.textContent = miVariable5;
    });
    }
setDia1down();

function setDia2up() {
  
    var boton = document.getElementById('botonup6');
    var valorSpan = document.getElementById('valorVariable6');

    boton.addEventListener('click', function() {

    miVariable6++;
    if (miVariable6 == 10) {
    miVariable6 = 0
    }
    valorSpan.textContent = miVariable6;
    });
    }
setDia2up();

function setDia2down() {
  
    var boton = document.getElementById('botondown6');
    var valorSpan = document.getElementById('valorVariable6');

    boton.addEventListener('click', function() {

    miVariable6--;
    if (miVariable6 == -1 || miVariable6 > 10) {
    miVariable6 = 9
    }
    valorSpan.textContent = miVariable6;
    });
    }
setDia2down();


// mes