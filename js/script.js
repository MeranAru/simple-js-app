/*IIFE*/
let pokemonRepository= (function () { 
    /*pokemon list*/
    let pokemonList=[
        {name:"Bulbasaur", height:0.7, type:["Grass, Poison"]}, 
        {name:"Charmander", height:0.6, type:"Fire"}, 
        {name:"Squirle", height:0.5, type:"Water"},
        {name:"Ivysaur", height:1.0, type:["Grass,Posion"]},
        {name:"Charmeleon", height:1.1, type:"Fire"},
        {name:"Wartortle", height:1.0, type:"Water"},
    ]

    return {
        add:function (pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function() {
            return pokemonList
        }
    };
})();

/*testing return function*/
console.log(pokemonRepository.getAll());
pokemonRepository.add({name:'Charizard'});
console.log(pokemonRepository.getAll());


/*use the for each method to make code cleaner*/
pokemonList.forEach(function (pokemon) {
    if (pokemon.height >= 1.0) {
        document.write ("<p>" + pokemon.name + " " + pokemon.height + "Wow, that is a big pokemon" + "</p>");
    } else if (pokemon.height) {
        document.write ("<p>" + pokemon.name + " " + pokemon.height)
    }
});

