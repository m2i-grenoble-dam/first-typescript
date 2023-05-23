let etoiles = '*';

for (let i = 0; i < 5; i++) {

    let espaces = '';
    for(let j = 0; j < 4-i; j++) {
        espaces += ' ';
    }
    console.log(espaces + etoiles);
    etoiles+='**'; 
    
}



//version avec boucles imbriquées
/*
let nbEtoile = 1;

for (let i = 0; i < 5; i++) {    
    
    let etoiles = '';
    for (let j = 0; j < nbEtoile; j++) {
        etoiles += '*';
    }

    console.log(etoiles);
    nbEtoile+=2;
    
}

*/

