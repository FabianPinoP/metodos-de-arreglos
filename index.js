// activacion de conceptos

// ¿que muestra el siguiente codigo?

// const a = [1,2,3,4,]
// console.log("ejercicio1-->>>", a[0])

// respuesta = 1

// ---------------------------------------------------

// ¿que muestra el siguiente codigo?

// const a = [1,2,3,4,5]
// console.log("ejercicio2-->>>", a[6])

// respuesta = undefined

// ---------------------------------------------------

// ¿que muestra el siguiente codigo?

// const a = [1,2,3,4,5]
// console.log("ejercicio3-->>>", a[a.length - 1])
// explicacion el largo de a es 5 por que tiene 5
// eleementos al restar 1 queda en 4 entonces el
// ejercicio quedaria asi a[4]
// respuesta = 5

// ---------------------------------------------------

// ¿que debemos reemplazar en xxx para obtener 1?

// const a = [{id: 1},{id: 2},{id: 3}]

// console.log("ejercicio4-->>>", a[0].xxx)

// respuesta = id

// ------------------fin activacion de conceptos-------

// ------------------ejercicios------------------------

// metodo push

// sintaxis

// array.push(elemento);

// ejemplo con codigo  push

// const frutas = ['manzana', 'plátano', 'pera'];
// const nuevaFruta = 'naranja';

// frutas.push(nuevaFruta);

// console.log(frutas); // Output: ['manzana', 'plátano', 'pera', 'naranja']

// ejemplo agregando varios elementos de una vez

// const numeros = [1, 2, 3];
// const nuevosNumeros = [4, 5, 6];

// numeros.push(...nuevosNumeros);

// console.log(numeros); // Output: [1, 2, 3, 4, 5, 6]

// ---------------------------------------------------

// metodo pop

// sintaxis
// array.pop();

// ejemplo con codigo  pop

// const frutas = ['manzana', 'plátano', 'pera'];
// const ultimaFruta = frutas.pop();

// console.log(ultimaFruta); // Output: 'pera'
// console.log(frutas); // Output: ['manzana', 'plátano']

// ---------------------------------------------------

// metodo shift

// sintaxis

// array.shift();

// ejemplo con codigo  shift

// const frutas = ['manzana', 'plátano', 'pera'];
// const primeraFruta = frutas.shift();

// console.log(primeraFruta); // Output: 'manzana'
// console.log(frutas); // Output: ['plátano', 'pera']

// ---------------------------------------------------

// metodo unshift

// sintaxis
// array.unshift(elemento);

// ejemplo con codigo  unshift

// const frutas = ['manzana', 'plátano', 'pera'];
// const nuevaFruta = 'naranja';

// frutas.unshift(nuevaFruta);

// console.log(frutas); // Output: ['naranja', 'manzana', 'plátano', 'pera']

// ejemplo agregando varios elementos de una vez

// const numeros = [4, 5, 6];
// const nuevosNumeros = [1, 2, 3];

// numeros.unshift(...nuevosNumeros);

// console.log(numeros); // Output: [1, 2, 3, 4, 5, 6]

// ---------------------------------------------------

// metodo concat

// sintaxis

// nuevoArray = array1.concat(array2, array3);

// ejemplo con codigo  concat

// const frutas1 = ['manzana', 'plátano'];
// const frutas2 = ['pera', 'naranja'];
// const frutasCombinadas = frutas1.concat(frutas2);

// console.log(frutasCombinadas); // Output: ['manzana', 'plátano', 'pera', 'naranja']

// ---------------------------------------------------

// metodo join

// sintaxis
// cadena = array.join(separador);

// ejemplo con codigo  join

// const frutas = ['manzana', 'plátano', 'pera'];
// const cadenaFrutas = frutas.join(', ');

// console.log(cadenaFrutas); // Output: 'manzana, plátano, pera'

// usando otros separadores

// const palabras = ['Hola', 'mundo', 'cómo', 'estás'];
// const frase = palabras.join(' ');

// console.log(frase); // Output: 'Hola mundo cómo estás'

// ejemplo sin separador

// const numeros = [1, 2, 3, 4];
// const cadenaNumeros = numeros.join();

// console.log(cadenaNumeros); // Output: '1,2,3,4'

// ---------------------------------------------------

// metodo splice

// sintaxis

// array.splice(indice, cantidad, elemento1, elemento2, elementoN);

// ejemplo con codigo  splice eliminando elementos

// const numeros = [1, 2, 3, 4, 5];
// const elementosEliminados = numeros.splice(2, 2);

// console.log(elementosEliminados); // Output: [3, 4]
// console.log(numeros); // Output: [1, 2, 5]

// ejemplo con codigo  splice agregando elementos

// const frutas = ['manzana', 'plátano', 'pera'];
// frutas.splice(1, 0, 'naranja', 'uva');

// console.log(frutas); // Output: ['manzana', 'naranja', 'uva', 'plátano', 'pera']

// reemplazando elementos con splice

// const colores = ['rojo', 'verde', 'azul'];
// colores.splice(1, 1, 'amarillo');

// console.log(colores); // Output: ['rojo', 'amarillo', 'azul']

// ---------------------------------------------------

// metodo slice

// sintaxis

// array.slice([inicio[fin]]);

// ejemplo con codigo  slice

// const originalArray = [1, 2, 3, 4, 5];
// const slicedArray = originalArray.slice(1, 4);
// // En este ejemplo, slice(1, 4) crea una copia superficial de los elementos desde el
// // índice 1 (inclusive) hasta el índice 4 (exclusivo) del originalArray, resultando
// // en [2, 3, 4].
// console.log(slicedArray); // Resultado: [2, 3, 4]

// ---------------------------------------------------

// metodo map

// sintaxis

// const arrayOriginal = [1, 2, 3, 4, 5];

// const nuevoArray = arrayOriginal.map((elemento, indice) => {
//   // Código para transformar el elemento
//   return nuevoValor;
// });

// ejemplo con codigo  map

// const numeros = [1, 2, 3, 4, 5];
// const cuadrados = numeros.map(numero => numero * numero);

// console.log(cuadrados); // Output: [1, 4, 9, 16, 25]

// otro ejemplo con codigo  map

// const personas = [
//   { nombre: 'Juan', edad: 30 },
//   { nombre: 'María', edad: 25 },
//   { nombre: 'Carlos', edad: 35 }
// ];

// // Utilizando map para extraer solo los nombres
// const nombres = personas.map(persona => persona.nombre);

// console.log(nombres); // Output: ['Juan', 'María', 'Carlos']

// ---------------------------------------------------

// metodo filter

// sintaxis

// const nuevoArrayFiltrado = arrayOriginal.filter((elemento, indice) => {
//   // Condición para filtrar el elemento
//   return true_o_false;
// });

// ejemplo con codigo  filter

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const pares = numeros.filter(numero => numero % 2 === 0);

// console.log(pares); // Output: [2, 4, 6, 8]

// ---------------------------------------------------

// metodo reduce

// sintaxis

// const valorFinal = arrayOriginal.reduce((acumulador, elemento, indice) => {
//   // Código para reducir el array
//   return nuevoAcumulador;
// }, valorInicial);

// ejemplo con codigo  reduce

// const numeros = [1, 2, 3, 4, 5];
// const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

// console.log(suma); // Output: 15

// ---------------------------------------------------

// metodo sort

// sintaxis
// frutas.sort();

// // ejemplo con codigo  sort
// const frutas = ['manzana', 'plátano', 'naranja', 'uva'];
// frutas.sort(); // Ordena las frutas alfabéticamente

// console.log(frutas); // Output: ['manzana', 'naranja', 'plátano', 'uva']

// // ordenando numeros

// const numeros = [10, 5, 20, 2, 30];
// numeros.sort((a, b) => a - b); // Ordena los números en orden ascendente

// console.log(numeros); // Output: [2, 5, 10, 20, 30]

// // ejemplo con array de objetos

// const personas = [
//   { nombre: 'Juan', edad: 30 },
//   { nombre: 'María', edad: 25 },
//   { nombre: 'Carlos', edad: 35 }
// ];

// personas.sort((a, b) => a.edad - b.edad); // Ordena las personas por edad

// console.log(personas);/* Output:[{ nombre: 'María', edad: 25 },{ nombre: 'Juan', edad: 30 },{ nombre: 'Carlos', edad: 35 }]*/

// ---------------------------------------------------

// metodo indexOf

// sintaxis

// array.indexOf(elemento);

// ejemplo con codigo  indexOf

// const frutas = ['manzana', 'plátano', 'naranja', 'uva'];

// const indiceNaranja = frutas.indexOf('naranja');
// console.log(indiceNaranja); // Output: 2 (índice de 'naranja' en el array)

// ---------------------------------------------------

// metodo lastIndexOf

// sintaxis

// array.lastIndexOf(elemento);

// ejemplo con codigo  lastIndexOf

// const colores = ['rojo', 'verde', 'azul', 'verde', 'amarillo'];

// const ultimoIndiceVerde = colores.lastIndexOf('verde');
// console.log(ultimoIndiceVerde); // Output: 3 (índice de la última aparición de 'verde' en el array)

// ---------------------------------------------------

// metodo includes

// sintaxis

// array.includes(elemento);

// ejemplo con codigo  includes

// const frutas = ['manzana', 'plátano', 'naranja'];

// const contieneNaranja = frutas.includes('naranja');
// console.log(contieneNaranja); // Output: true (el array contiene 'naranja')

// ---------------------------------------------------

// metodo find

// sintaxis

// array.find((elemento, indice) => {
//   // Condición para encontrar el elemento
//   return true_o_false;
// });

// ejemplo con codigo find

// const personas = [
//   { nombre: 'Juan', edad: 30 },
//   { nombre: 'María', edad: 25 },
//   { nombre: 'Carlos', edad: 35 }
// ];

// const personaEncontrada = personas.find(persona => persona.edad === 25);
// console.log(personaEncontrada);// Output: { nombre: 'María', edad: 25 }

// ---------------------------------------------------

// metodo reverse

// sintaxis

// array.reverse();

// // ejemplo con codigo reverse

// const frutas = ['manzana', 'plátano', 'naranja', 'uva'];

// frutas.reverse();
// console.log(frutas);// Output: ['uva', 'naranja', 'plátano', 'manzana']

// ---------------------------------------------------

// agregar elementos a travess de un input

// const listaDeInvitados = document.querySelector("#invitados");
// const invitadoInput = document.querySelector("#nuevoInvitado");
// const btnAgregar = document.querySelector("#agregarInvitado");

// const invitados = [];
// btnAgregar.addEventListener("click", () => {
//   const nuevoInvitado = invitadoInput.value;
//   invitados.push(nuevoInvitado);
//   invitadoInput.value = ""; /* Vaciamos el input */

//   /* Actualizamos la información en el HTML */
//   let html = "";
//   for (let invitado of invitados) {
//     html += `<li>${invitado}</li>`;
//   }
//   listaDeInvitados.innerHTML = html;
// });

// ---------------------------------------------------

// eliminar elementos a travess de un boton

// const listaDeInvitados = [
//   { id: 1, nombre: "Juan" },
//   { id: 2, nombre: "María" },
//   { id: 3, nombre: "Carlos" },
// ];

// const listaDeInvitadosElement = document.querySelector("#invitados");
// const invitadoInput = document.querySelector("#nuevoInvitado");
// const btnAgregar = document.querySelector("#agregarInvitado");

// let html = "";
// for (let invitado of listaDeInvitados) {
//   html += `<li>${invitado.nombre}<button onclick="borrar(${invitado.id})">borrar</button></li></li>`;
// }
// listaDeInvitadosElement.innerHTML = html;

// btnAgregar.addEventListener("click", () => {
//   const nuevoInvitado = { id: Date.now(), nombre: invitadoInput.value };
//   listaDeInvitados.push(nuevoInvitado);
//   invitadoInput.value = ""; /* Vaciamos el input */

//   /* Actualizamos la información en el HTML */
//   let html = "";
//   for (let invitado of listaDeInvitados) {
//     html += `<li>${invitado.nombre} <button onclick="borrar(${invitado.id})">borrar</button></li>`;
//   }
//   listaDeInvitadosElement.innerHTML = html;
// });

// function borrar(id) {
//   const index = listaDeInvitados.findIndex((invitado) => invitado.id === id);
//   listaDeInvitados.splice(index, 1);

//   let html = "";
//   for (let invitado of listaDeInvitados) {
//     html += `<li>${invitado.nombre} <button onclick="borrar(${invitado.id})">borrar</button></li>`;
//   }
//   listaDeInvitadosElement.innerHTML = html;
// }

// ---------------------------------------------------

// refactorizando el codigo anterior mas es6
const listaDeInvitados = [
  { id: 1, nombre: "Juan"},
  { id: 2, nombre: "María" },
  { id: 3, nombre: "Carlos" },
];

const listaDeInvitadosElement = document.querySelector("#invitados");
const invitadoInput = document.querySelector("#nuevoInvitado");
const btnAgregar = document.querySelector("#agregarInvitado");

const createList = (list) => {
  let html = "";
  for (let invitado of list) {
    html += `<li>${invitado.nombre}<button onclick="borrar(${invitado.id})">borrar</button></li></li>`;
  }
  listaDeInvitadosElement.innerHTML = html;
};

// llamamos a la funcion para que se ejecute al cargar la pagina no se puede llamar antes por que la funcion no existe
createList(listaDeInvitados);

btnAgregar.addEventListener("click", () => {
  const nuevoInvitado = { id: Date.now(), nombre: invitadoInput.value };
  listaDeInvitados.push(nuevoInvitado);
  invitadoInput.value = ""; /* Vaciamos el input */

  createList(listaDeInvitados);
});

const borrar = (id) => {
  const index = listaDeInvitados.findIndex((invitado) => invitado.id === id);
  listaDeInvitados.splice(index, 1);

  createList(listaDeInvitados);
};
