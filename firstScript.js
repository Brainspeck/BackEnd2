
// const nombre = process.argv[2];
// console.log(nombre.toUpperCase());


const input = process.argv[2];
let array = input.split('');
let newString = '';

const reverse = (array) => {
    let reverseArray = [];
    for ( let i = array.length -1 ; i >= 0 ; i--){
        reverseArray.push(array[i]);
    }
    return reverseArray.join('');
}

newString = reverse(array);
console.log(newString);
