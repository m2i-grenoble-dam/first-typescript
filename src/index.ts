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