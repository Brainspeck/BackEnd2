const prompt = require('prompt-sync')();

let names = [];
let addName = true;

console.log('Ingrese los nombres deseados, cuando desee terminar escriba "fin"');

while (addName === true) {
    let newName = prompt('Ingrese un nombre ');
    if ( newName === 'fin') {
        addName = false;
    }
   else names.push(newName);
}

let duplicate = 'no hay entradas repetidss';

for (let i = 0 ; i <= names.length ; i++){
    for ( let j = i + 1 ; j <= names.length; j++) {
        if (names[i] === names[j]){
            duplicate = 'hay entradas repetidas'
        }
    }
    
    }

let longest = names[0];
let shortest = names[0];

for (let i = 0 ; i <= names.length-1 ; i ++){
    if( names[i].length > longest.length){
        longest = names[i];
    }
    if( names[i].length < shortest.length){
        shortest = names[i];
    }
}


console.log('Se ingresaron correctamente ', names.length, ' nombres');
console.log(duplicate);
console.log('El nombre mas largo es: ', longest);
console.log('El nombre mas corto es: ', shortest);