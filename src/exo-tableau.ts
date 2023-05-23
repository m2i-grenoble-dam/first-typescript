let ages:number[] = [10, 24, 54, 45, 23, 65, 4];

for (const item of ages) {
    if(item >= 18) {
        console.log('welcome');
    } else{
        console.log(`${item} is too young`);
    }
}
//Version avec un for classique
for (let index = 0; index < ages.length; index++) {
    const item = ages[index];
    
    if(item >= 18) {
        console.log('welcome');
    } else{
        console.log(`${item} is too young`);
    }
}

//Exo prompt qui ajoute des trucs dans un tableau
let list:string[] = [];

while(true) {

    let valeur = prompt('Rentrez une nouvelle valeur ?');
    if(valeur == 'exit') {
        break;
    }
    
    list.push(valeur);
    
   
    for (const item of list) {
        console.log(item, item.length);
    }
    console.log('--------------');


}