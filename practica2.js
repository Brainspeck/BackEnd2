const input = parseInt(process.argv[2]);

const even = (num) => { 
    if (num % 2 === 0) return 'Es par'
    else if ( input % 2 != 0) return 'Es impar'
}

console.log(even(input))
