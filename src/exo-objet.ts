/**
 * Interface représentant un objet chien qu'on pourra utiliser pour typer nos 
 * variable et fonctions
 */
interface Dog {
    name:string;
    breed:string;
    hunger:number;
}
/**
 * Fonction qui nourrit un objet chien (fait baisser sa propriété hunger) si le
 * chien a faim
 * @param dogToFeed Le chien à nourrir
 */
function feedDog(dogToFeed:Dog) {
    if(dogToFeed.hunger >= 50){
        dogToFeed.hunger -= 50;
        console.log(`${dogToFeed.name} is eating`);
    } else {
        console.log(`${dogToFeed.name} is not hungry`);

    }
    
}

let chien: Dog = {
    hunger: 100, 
    breed: 'Corgi', 
    name: 'Fido'
};

feedDog(chien);
feedDog(chien);
feedDog(chien);
feedDog(chien);

feedDog({
    name: 'Rex',
    breed: 'dalmatian',
    hunger: 0
})
