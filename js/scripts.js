//querySelector 
//Retorna ninguno o hasta un elemento que concuerde con el selector que estas escribiendo   
//Selectores son similares a los de CSS .clase #id

//NOTA: Se recomienda los id para los selectores de java Script

const heading = document.querySelector(".header__texto h2") // 0 o 1 elemento
heading.textContent = 'Nuevo Heading'//cambia el texto del h2

heading.classList.add('nueva-clase')//añade nueva clase
console.log(heading);


//querySelectorAll 
//Retorna hasta 0 elementos si esta mal escrito o todos los elementos que coincidan con el selector tipo css 

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo texto para Enlace'
// enlaces[0].href = 'http://google.com'
enlaces[0].classList.add('nueva-clases')
enlaces[0].classList.remove('navegacion__enlace')



//getElementByd
const heading2 = document.getElementById('heading');
console.log(heading2)