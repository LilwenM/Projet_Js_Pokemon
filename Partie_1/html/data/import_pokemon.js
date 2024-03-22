const all_pokemons  = new Map();
const all_types     = new Map();
const all_attacks   = new Map();

let indiceDernierPokemon;

const import_pokemon = { 

    import_pokemon : function import_pokemon() {
        let i, j, l;
        let type;
        let attack;
        
        /* - Base Pokemon - */
        for (i = 0; i < json_pokemon.length; i++) {
            if (json_pokemon[i].form === "Normal") {   
                all_pokemons.set(
                    json_pokemon[i].pokemon_id, 
                    new Pokemon (
                        json_pokemon[i].pokemon_id, 
                        json_pokemon[i].pokemon_name, 
                        json_cp_multiplier[0].level,
                        json_pokemon[i].base_attack, 
                        json_pokemon[i].base_defense, 
                        json_pokemon[i].base_stamina,
                        json_cp_multiplier[0].multiplier
                    )
                );
            }
        }

        /* - Generation Pokemon - */
        for (i = 1; i < 9; i++) {
            for (j = 0 ; j < json_generation["Generation " + i].length ; j++) {
                if (all_pokemons.get(json_generation["Generation " + i][j].id) !== undefined) {
                    all_pokemons.get(json_generation["Generation " + i][j].id).initGeneration(json_generation["Generation " + i][j].generation_number);
                }
            }
        }

        /* Supprimer les pokémons sans génération (9ème) */
        for ([k, v] of all_pokemons) {
            if (v.generation === "") {
                all_pokemons.delete(k);
            }
            else { indiceDernierPokemon = k; } /* Recupère la clé du dernier pokémon */
        }

        /* - Type - Type Pokemon - */
        for (i = 0; i < json_pokemon_type.length; i++) {
            if (json_pokemon_type[i].form === "Normal") {
                for (j = 0; j < json_pokemon_type[i].type.length ; j++) {
                    type = new Type (json_pokemon_type[i].type[j]);
                    type.setEffectiveness(json_type_effectiveness[0][json_pokemon_type[i].type[j]]);

                    all_types.set(json_pokemon_type[i].type[j], type);

                    if (all_pokemons.get(json_pokemon_type[i].pokemon_id) !== undefined) {
                        all_pokemons.get(json_pokemon_type[i].pokemon_id).ajouterType(type);
                    }
                }
            }
        }

        /* - Attack - Attack Pokemon - */
        for (i = 0; i < json_pokemon_moves.length; i++) {
            if (json_pokemon_moves[i].form === "Normal") {
                
                for (j = 0; j < json_pokemon_moves[i].charged_moves.length ; j++) {
                    for (l = 0 ; l < json_charged_moves.length ; l++) {
                        if (json_charged_moves[l].name === json_pokemon_moves[i].charged_moves[j]) {
                            type = all_types.get(json_charged_moves[l].type);

                            attack = new Charged (
                                json_charged_moves[l].move_id, 
                                json_charged_moves[l].name,
                                type,
                                json_charged_moves[l].duration,
                                json_charged_moves[l].energy_delta,
                                json_charged_moves[l].power,
                                json_charged_moves[l].stamina_loss_scaler,
                                json_charged_moves[l].critical_chance
                            );

                            all_attacks.set(json_charged_moves[l].move_id, attack);
                            if (all_pokemons.get(json_pokemon_moves[i].pokemon_id) !== undefined) {
                                all_pokemons.get(json_pokemon_moves[i].pokemon_id).ajouterAttack(attack);
                            }
                        }
                    }
                }

                for (j = 0; j < json_pokemon_moves[i].fast_moves.length ; j++) {
                    for (l = 0 ; l < json_fast_moves.length ; l++) {
                        if (json_fast_moves[l].name === json_pokemon_moves[i].fast_moves[j]) {
                            type = all_types.get(json_fast_moves[l].type);

                            attack = new Fast (
                                json_fast_moves[l].move_id, 
                                json_fast_moves[l].name,
                                type,
                                json_fast_moves[l].duration,
                                json_fast_moves[l].energy_delta,
                                json_fast_moves[l].power,
                                json_fast_moves[l].stamina_loss_scaler
                            );

                            all_attacks.set(json_fast_moves[l].move_id, attack);
                            if (all_pokemons.get(json_pokemon_moves[i].pokemon_id) !== undefined) {
                                all_pokemons.get(json_pokemon_moves[i].pokemon_id).ajouterAttack(attack);
                            }
                        }
                    }
                }
            }
        }
    }
} 

import_pokemon.import_pokemon();