
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