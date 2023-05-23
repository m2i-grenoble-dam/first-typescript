let maVariable = 'une valeur';


if(maVariable.length > 3) {
    console.log(maVariable);
} else {
    console.log('condition fausse');
}

for(let i = 0; i < 10; i++) {
    console.log(maVariable, i);

}

//les types primitifs 

let chaineDeCaracteres = 'null';


let nombres = 10;
nombres = 10.44;
nombres = 1000000000000000;

let booleens = true;
booleens = false;

let nonDefini = undefined;
let pasDeValeur = null;


maFonction(10);

function maFonction(monArgument:number):string {
    return "bonjour";
}

let uneVariable = 'bonjour';
/**
 * En général, on fait en sorte que nos tableaux contiennent un seul et même type de 
 * données, afin d'éviter les erreurs et de 
 */
let unTableau:string[] = ['bonjour', 'true', 'null', '10'];

for (const item of unTableau) {
    console.log(item);
}

for (let index = 0; index < unTableau.length; index++) {
    const item = unTableau[index];
    console.log(item);
}

unTableau.forEach((item) => {
    console.log(item);
})