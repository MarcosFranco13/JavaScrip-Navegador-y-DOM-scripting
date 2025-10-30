//querySelector
//Retorna ninguno o hasta un elemento que concuerde con el selector que estas escribiendo
//Selectores son similares a los de CSS .clase #id

//NOTA: Se recomienda los id para los selectores de java Script

const heading = document.querySelector(".header__texto h2"); // 0 o 1 elemento
heading.textContent = "Nuevo Heading"; //cambia el texto del h2

heading.classList.add("nueva-clase"); //añade nueva clase
console.log(heading);

//querySelectorAll
//Retorna hasta 0 elementos si esta mal escrito o todos los elementos que coincidan con el selector tipo css

const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces[0]);

enlaces[0].textContent = "Nuevo texto para Enlace";
// enlaces[0].href = 'http://google.com'
enlaces[0].classList.add("nueva-clases");
// enlaces[0].classList.remove('navegacion__enlace')

//getElementByd
const heading2 = document.getElementById("heading");
console.log(heading2);

//*-Crear HTML con CreateElement-*

const nuevoEnlace = document.createElement("A");

//Agregar el href
nuevoEnlace.href = "nuevo_enlace.html";

//Agregar el texto
nuevoEnlace.textContent = "Tienda Virtual";

//Agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");

//Agregarlo al documento ubicacion
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//**Eventos en JavaScript**
// console.log(1);

// //Documento esta listo evento

// window.addEventListener("load", function () {
//   //Load espera a que el JS y los archivos que dependen del HTML estén listos
//   // call back cuando este evento ocurre sucede esta funcion
//   console.log(2);
// });

// window.addEventListener("load",imprimir);

// window.onload = function () {
//   console.log(3);
// };

// document.addEventListener("DOMContentLoaded", function () {
//   //Espera a que se descarge el HTML, pero no espera CSS o imagenes
//   console.log(5);
// });

// console.log(5);

// function imprimir(){
//     console.log(6);
// }

// window.onscroll = function(){
//     console.log('Scrolling...');
// }

//**Seleccionar elements y asociarles un evento**

// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function (evento) {
//   console.log(evento);
//   evento.preventDefault; //PreventDefault ayuda validar un formulario

//   console.log("enviar formulario");
// });


//Eventos de los Inputs y Textarea

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombreInput = document.querySelector("#nombre");
const emailInput = document.querySelector("#email");
const mensajeInput = document.querySelector("#mensaje");
const formulario = document.querySelector('.formulario');


nombreInput.addEventListener("input", leeTexto);

emailInput.addEventListener("input", leeTexto);

mensajeInput.addEventListener("input", leeTexto);

//**El Evento de Submit**

formulario.addEventListener('submit',function(evento){

  evento.preventDefault();

  //Validar el formulario

  const {nombre, email, mensaje} = datos;

  if (nombre === '' || email === '' || mensaje === '') {
    mostrarError('Todos los campos son obligatorios')

    // console.log('Todos los campos son obligatorios');
    return; //Corta la ejecución del código
  }
  
  //Enviar el formulario
  mostrarEnvio('Formulario enviado correctamente')

});

function leeTexto(e) {
  //  console.log(e.target.value);
  // console.log(e.target);

  datos[e.target.id] = e.target.value;

  // console.log(datos);
};

//Muestra un error en pantalla
function mostrarError(mensaje){
  const error = document.createElement('P');
  error.textContent = mensaje;

  error.classList.add('error');

  formulario.appendChild(error);

  //Desaparezca despues de 5 segundos
  setTimeout(()=> {
    error.remove();

  }, 2000);
}

//Muestra envio correcto de formulario

function mostrarEnvio(mensaje){
  const envio = document.createElement('P');
  envio.textContent = mensaje;

  envio.classList.add('correcto');
  formulario.appendChild(envio);

  setTimeout(()=> {
    envio.remove();

  }, 2000);

}

