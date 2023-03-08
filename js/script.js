let pokemonList=[
    {name:"Bulbasaur", height:0.7, type:["Grass, Poison"]}, 
    {name:"Charmander", height:0.6, type:"Fire"}, 
    {name:"Squirle", height:0.5, type:"Water"}
];
/*use document.write to show on the webpage and use console.log to show on the console page*/
for (let i=0; i < pokemonList.length; i++){
    if(pokemonList[i].height <0.6 && pokemonList[i].height >0.4){
        console.log(pokemonList[i].name + pokemonList[i].height + " that's a small pokemon! ");
        document.write(pokemonList[i].name + pokemonList[i].height + " that's a small pokemon! ");
    }else if(pokemonList[i].height <0.7){
        console.log(pokemonList[i].name + pokemonList[i].height + " that's an average size pokemon! ");
        document.write(pokemonList[i].name + pokemonList[i].height + " that's an average size pokemon! ");
    }else {
        console.log(pokemonList[i].name + pokemonList[i].height + " Wow, that's a big pokemon! ")
        document.write(pokemonList[i].name + pokemonList[i].height + " Wow, that's a big pokemon! ")
    }
}

console.log(pokemonList);