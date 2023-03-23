/*IIFE*/
var pokemonRepository= (function () { 
    let pokemonList= [];
    let apiURL= 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    /*pokemon list*/

    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon &&
            'detailsUrl' in pokemon 
        ) { 
            pokemonList.push(pokemon);
        } else {
            console.log('pokemon is not correct');
        }
    }
    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('my-class');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
    });
}
    /*loadList will fetch the the data from the API*/
    function loadList() {
        return fetch(apiURL).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error (e);
        })
    }
    function loadDetails(item) {
        let url=item.detailsUrl;
        return fetch(url).then (function (response) {
            return response.json();
        }).then (function (details) {
            /*add details to the items*/
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch (function(e) {
            console.error(e);
        })
    }
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            console.log(item);
        });
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
        };
})();

pokemonRepository.loadList().then(function () {
/*use the for each method to make code cleaner*/
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon)
    });   
});
