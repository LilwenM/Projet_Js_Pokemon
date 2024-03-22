function getPokemonsByType(typeName) {
    let liste = new Array();

    for (let [k, v] of all_pokemons) {
        v.getTypes().forEach(element => {
            if (element.type === typeName) {
                liste.push(v);
            }
        });
    }

    return liste;
}

function getPokemonByName(name) {
    for (let [k, v] of all_pokemons) {
        if (v.name === name) {
            return v;
        }
    }
}

function getAttackByName(name) {
    for (let [k, v] of all_attacks) {
        if (v.name === name) {
            return v;
        }
    }
}

function getPokemonsByAttack(attackName) {
    let liste = new Array();

    for (let [k, v] of all_pokemons) {
        v.getAttacks().forEach(element => {
            if (element.id === attackName) {
                liste.push(v);
            }
        });
    }

    return liste;
}

function getAttacksByType(typeName) {
    let liste = new Array();

    for (let [k, v] of all_attacks) {
        if (v.type.type === typeName) {
                liste.push(v);
        }
    }

    return liste;
}

function sortPokemonByName() {
    let liste = new Array();
    let listeID = new Array();
    let e; 

    /* Fonction imbriquée, retournant le premier pokémon par ordre alphapétique */
    function sort(listeID) {
        let minimun;
        for (let [k, v] of all_pokemons) {
            if (!listeID.includes(v.id) && (minimun === undefined || v.name < minimun.name)) {
                minimun = v;
            }
        }
        return minimun;
    }
    
    while (liste.length < all_pokemons.size) {
        e = sort(listeID);
        liste.push(e);
        listeID.push(e.id);
    }
    
    return liste; 
}

function sortPokemonByStamina() {
    let liste = new Array();
    let listeID = new Array();
    let e; 

    /* Fonction imbriquée, retournant le pokémon avec la plus petite endurance */
    function sort(listeID) {
        let minimun;
        for (let [k, v] of all_pokemons) {
            if (!listeID.includes(v.id) && (minimun === undefined || v.base_stamina < minimun.base_stamina)) {
                minimun = v;
            }
        }
        return minimun;
    }
    
    while (liste.length < all_pokemons.size) {
        e = sort(listeID);
        liste.push(e);
        listeID.push(e.id);
    }
    
    return liste; 
}

function getWeakestEnemies(attack) {
    let liste = new Array();
    let type_attack = getAttackByName(attack).type.type;
    let type_attack_eff;

    for (let [k, v] of all_pokemons) {
        for (let i = 0 ; i < v.types.length ; i++) {
            type_attack_eff = v.types[i].effectiveness;
            if (type_attack_eff[type_attack] > 1) {
                liste.push(all_pokemons.get(k));
            }
        }
    }

    return liste; 
}

function getBestAttackTypesForEnemy(name) {
    let liste = new Array();
    let liste_type_pokemon = getPokemonByName(name).types;
    let type_attack_eff;

    for (let [k, v] of all_attacks) {
        type_attack_eff = v.type.effectiveness;
        for (let i = 0 ; i < liste_type_pokemon.length ; i++) {
            if (type_attack_eff[liste_type_pokemon[i]] > 1) {
                liste.push(all_attacks.get(k));
            }
        }
    }

    return liste; 
}


const inputtypeP = document.getElementById('typeP');
inputtypeP.addEventListener('input', function () {
    typeP = inputtypeP.value;
});

const inputnomP1 = document.getElementById('nameP1');
inputnomP1.addEventListener('input', function () {
    nameP1 = inputnomP1.value;
});

const inputtypeA = document.getElementById('typeA');
inputtypeA.addEventListener('input', function () {
    typeA = inputtypeA.value;
});

const inputnomA = document.getElementById('nameA');
inputnomA.addEventListener('input', function () {
    nameA = inputnomA.value;
});

const inputnomP2 = document.getElementById('nameP2');
inputnomP2.addEventListener('input', function () {
    nameP2 = inputnomP2.value;
});