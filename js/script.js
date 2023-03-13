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

/*add function field to make code*/
function printArrayDetails(list) {
    for (let i=0; i < list.length; i++){
            /*use document.write to show on the webpage and use console.log to show on the console page*/
            console.log(list[i].name);
            document.write("<p>" + list[i].name + "</p>");
    }
}

printArrayDetails(pokemonList);
printArrayDetails(pokemonList2);

function divide(dividend, divisor){
    if (divisor === 0) {
        return "You’re trying to divide by zero."
    }else{
        let result= dividend / divisor;
        return result;
    };
}

console.log(divide(4, 2));
console.log(divide(7, 0));
console.log(divide(1, 4));
console.log(divide(12, -3));