// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    var matriz = [];
    for (var element in objeto) {
      matriz.push([element, objeto[element]]);
    }
    return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objetoNuevo = {};
  for ( var i = 0; i < string.length; i++) {
    if(!objetoNuevo[string[i]]){
      objetoNuevo[string[i]] = 0;
    }
        objetoNuevo[string[i]]++
  }
  // for(var i in string){
  //     objetoNuevo[string[i]] = ( objeto[string[i]] || 0 ) + 1;
  // }
  return objetoNuevo;

}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas = '';
  var minisculas = '';
  for (var i in s) {
    if ( s[i] === s[i].toUpperCase()){
      mayusculas = mayusculas + s[i];
    } else {
      minisculas = minisculas + s[i];
    }
  } 
  return mayusculas + minisculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var strArray = str.split(' ');
  var arrayInvertido = strArray.map( function(element) {
    return element.split('').reverse().join('');
  })
  return arrayInvertido.join(' ');
} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  // var numString = String(numero)
  // var validador = false;

  // for (var i = 0; i < (numString.length/2); i++){
  //   if(numString[i] == numString[numString.length-i-1]){
  //     validador = true;
  //   } else {
  //     validador = false;
  //   }
  //   if(!validador)
  //   break;
  // }

  // if(validador) {
  //   return "Es capicua";
  // } else {
  //   return "No es capicua"
  // }

  var numString = String(numero);
  var nuevoNum = numString.split('').reverse().join('');

  if(nuevoNum === numString) {
    return"Es capicua";
  } else{
    return "No es capicua"
  }
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenaArray = cadena.split('');
  var nuevoArray = []
  cadenaArray.forEach( function(element){
      if (element !== 'a' && element !== 'b' && element !== 'c'){
        nuevoArray.push(element);
      }
    }
  )
  return nuevoArray.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  // var nuevoArray = [];
  // var i = 0;

  // while( nuevoArray.length < arr.length) {
    
  //   arr.forEach(function(element){
  //     if(element.length === i){
  //       nuevoArray.push(element);
  //     }
  //   })

  //   i++;
  // }
  // return nuevoArray;
  arr.sort(function(a,b){
    return a.length - b.length;
    // Si el resultado es positivo a va a la izquierda
    //Si es 0, se quedan en su lugar
    //Si es negativo b va a la izquierda
  })
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArray = [];
  arreglo1.forEach(function(element1){
    arreglo2.forEach(function(element2){
       if(element1 === element2){
        nuevoArray.push(element1);
       }
    })
  })
  return nuevoArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

