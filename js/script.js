/*IIFE*/
var pokemonRepository= (function () { 
    /*pokemon list*/
    let repository = [
        {name:"Bulbasaur", height:0.7, types:["Grass, Poison"]}, 
        {name:"Charmander", height:0.6, types:"Fire"}, 
        {name:"Squirle", height:0.5, types:"Water"},
        {name:"Ivysaur", height:1.0, types:["Grass,Posion"]},
        {name:"Charmeleon", height:1.1, types:"Fire"},
        {name:"Wartortle", height:1.0, types:"Water"},
    ];

    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon &&
            'height' in pokemon &&
            'types' in pokemon 
        ) { 
            repository.push(pokemon);
        } else {
            console.log('pokemon is not correct');
        }
    }
    function getAll() {
        return repository;
    }
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('my-class');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem)
        button.addEventListener('click', function () {
            console.log(pokemon);
    });}
    function showDetails(pokemon) {
        console.log(pokemon)
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
        };
})();

/*testing return function*/
console.log(pokemonRepository.getAll());
pokemonRepository.add({name:'Charizard', height:1.7, types:'Fire, Flying'});

console.log(pokemonRepository.getAll());


/*use the for each method to make code cleaner*/
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon)
});

