const fizzbuzz = (num) => {
    for (let i = 1; i <= num; i++){
        if ( i % 3 === 0 && i % 5 === 0){
            console.log( i + ' fizzbuz');
        }
        else if (i % 3=== 0){
            console.log (i + ' fizz');
        }
        else if ( i % 5 === 0){
            console.log( i + ' buzz');
        }
        else console.log(i);
    }
}
fizzbuzz(100);