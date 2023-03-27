/*IIFE*/
let pokemonRepository= (function () { 
    let pokemonList= [];

    let apiURL= 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    let modalContainer = document.querySelector('#modal-container');
    

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
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('my-class');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
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
        loadDetails(pokemon).then(function () {
            showDetails(pokemon.name + pokemon.height + pokemon.imageUrl)
        });    
    }

    /* Creates a modal*/
    function showModal(title, text, image) {

        modalContainer.innerHTML = "";
    
        let modal = document.createElement('div');
        modal.classList.add('modal');
        /*Close Button in Modal*/
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);
        /*Title in Modal*/
        let titleElement = document.createElement('h1');
        titleElement.innerText = title;
        /*Text in Modal*/
        let contentElement = document.createElement('p');
        contentElement.innerText = text;
        /*image in Modal*/
        let imageElement = document.createElement('img');
        imageElement.src = image
    
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(imageElement);
        modalContainer.appendChild(modal);
    
        modalContainer.classList.add('is-visible');
    }

    /*Hides a modal*/
    function hideModal() {
        modalContainer.classList.remove('is-visible');
    }
    
    /*Closes the modal when you click the ESC button*/
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });
    /*Closes the modal when clicking outside the area of the modal*/
    modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });

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
