var a = '4.2';
var b = 9;

console.log(a, b);

console.log(`variable a = ${a} is type "${typeof(a)}"
and variable b = ${b} is type "${typeof(b)}"`); //grawis ` odwórcony apostrof


let pa = parseFloat(a);

const 
addition = pa+b,
subtraction = a-b,
multiplicpation = a*b,
division = a/b,
modulus = a%b,
exponentiation = a**b,
postincrement = b++,
postdecrement = b--,
preincrement = --b,
predecrement = ++b;


console.log(
`addition a+b = ${addition}
subtraction a-b = ${subtraction}
multiplicpation a*b = ${multiplicpation}
division a/b = ${division}
modulus a%b = ${modulus}
exponentiation a**b = ${exponentiation}
postincrement b++ = ${postincrement}
postdecrement b-- = ${postdecrement}
preincrement --b = ${preincrement}
predecrement ++b = ${predecrement}

`)

console.log( addition<20 ? 'addition jest mniejsze od 20' : 'addition jest większe od 20');
console.log( subtraction<20 ? 'subtraction jest mniejsze od 20' : 'subtraction jest większe od 20')
console.log( multiplicpation<20 ? 'multiplicpation jest mniejsze od 20' : 'multiplicpation jest większe od 20')
console.log( division<20 ? 'division jest mniejsze od 20' : 'division jest większe od 20')
console.log( modulus<20 ? 'modulus jest mniejsze od 20' : 'modulus jest większe od 20')
console.log( exponentiation<20 ? 'exponentiation jest mniejsze od 20' : 'exponentiation jest większe od 20')
console.log( postincrement<20 ? 'postincrement jest mniejsze od 20' : 'postincrement jest większe od 20')
console.log( postdecrement<20 ? 'postdecrement jest mniejsze od 20' : 'postdecrement jest większe od 20')
console.log( preincrement<20 ? 'preincrement jest mniejsze od 20' : 'preincrement jest większe od 20')
console.log( predecrement<20 ? 'predecrement jest mniejsze od 20' : 'predecrement jest większe od 20')




