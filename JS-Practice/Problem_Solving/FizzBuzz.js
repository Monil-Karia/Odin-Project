let num = parseInt(prompt('Please Enter the Number you would like: '));

for(let i =0; i <= num ; i++){
    if( i % 3 === 0) console.log('FIZZ');
    else if(i % 5 === 0) console.log('BUZZ');
    else if( i% 3 === 0 && i % 5 ===0 ) console.log('FIZZBUZZ');
    else console.log(`${i}`);
}