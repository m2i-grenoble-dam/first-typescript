
function greeting(name:string):string {
    //Bonus avec validation et déclenchement d'une erreur
    // if(name.trim().length < 2 ){
    //     throw new Error('Please enter a valid name');

    // }
    return `Bonjour ${name}`;
}

console.log(greeting('da'));
console.log(greeting('Marie'));

let text = greeting('Marie');
console.log(text);


function calcul(a:number, b:number, operateur:string):number {
    if(operateur === '+') {
        return a+b;
    }

    if(operateur === '-') {
        return a-b;
    }
    
    if(operateur === '*') {
        return a*b;
    }
    
    if(operateur === '/') {
        if(b === 0) { //Bonus
            throw new Error('Division by Zero');
        }
        return a/b;
    }
    //Bonus
    throw new Error('Invalid operator');
}

console.log(calcul(1,3, '+'));
console.log(calcul(1,3, '-'));
console.log(calcul(1,3, '*'));
console.log(calcul(1,3, '/'));

