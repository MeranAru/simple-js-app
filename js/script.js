let pokemonList=[
    {name:"Bulbasaur", height:0.7, type:["Grass, Poison"]}, 
    {name:"Charmander", height:0.6, type:"Fire"}, 
    {name:"Squirle", height:0.5, type:"Water"}
];

let pokemonList2=[
    {name:"Ivysaur", height:1.0, type:["Grass,Posion"]},
    {name:"Charmeleon", height:1.1, type:"Fire"},
    {name:"Wartortle", height:1.0, type:"Water"},
];

/*use the for each method to make code cleaner*/
pokemonList.forEach(function(item){
            /*use document.write to show on the webpage and use console.log to show on the console page*/
    console.log(item);
});

pokemonList2.forEach(function(item){
    /*use document.write to show on the webpage and use console.log to show on the console page*/
console.log(item);
});

