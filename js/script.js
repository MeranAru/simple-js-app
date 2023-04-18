/*IIFE*/
let pokemonRepository = (function () { 
    let pokemonList = [];

    let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
    /*adds pokemons to the array if they meet the right conditions*/
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

    /*Shows buttons of pokemons with their names*/
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        pokemonList.classList.add('list-group');
        
        let listPokemon = document.createElement('li');
        listPokemon.classList.add('list-group-item');
        
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('my-class');
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", ".modal");

        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        /*eventListener shows details of pokemon*/
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
    /*Shows specific details of the pokemon pulled form the API*/
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

    /*Details of pokemon shown when using a modal*/
    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            console.log (pokemon);
            pokemonName = pokemon.name;
            pokemonHeight = pokemon.height;
            pokemonImg = pokemon.imageUrl;
            pokemonType = pokemon.types;
            showModal(pokemon)
        });    
    }

    function showModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');
        let modalHeader = $('.modal-header');

        modalTitle.empty();
        modalBody.empty();

        /*create a name element on modal*/
        let pokemonName = $('<h1>' + pokemon.name + '</h1>');
        /*create a front img element on modal*/
        let pokemonImg = $("<img class='modal-img' style='width:50%'>");
        pokemonImg.attr('src', pokemon.imageUrl);
        /*create a height element*/
        let pokemonHeight = $('<p>' + 'height : ' + pokemon.height + '</p>');
        /*create a types element*/
        let pokemonType = $('<p>' + 'types : ' + pokemon.types + '<p/>');

        modalTitle.append(pokemonName);
        modalBody.append(pokemonImg);
        modalBody.append(pokemonHeight);
        modalBody.append(pokemonType);

    }
    
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
        };
})();

pokemonRepository.loadList().then(function () {
/*use the for each method to make code cleaner*/
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon)
    });   
});
