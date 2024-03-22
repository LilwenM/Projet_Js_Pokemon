class Pokemon {

    constructor (id, name, niveau, base_attack, base_defense, base_stamina, multiplier) {
        this._id            = id;
        this._generation    = "";
        this._name          = name;
        this._niveau        = niveau;
        this._types         = new Array();
        this._attacks       = new Array();
        this._base_attack   = base_attack; 
        this._base_defense  = base_defense;
        this._base_stamina  = base_stamina;
        this._multiplier    = multiplier;
    }

    /* --- */
    get id() { return this._id; }
    get generation() { return this._generation; }
    get name() { return this._name; }
    get niveau() { return this._niveau; }
    get types() { return this._types; }
    get attacks() { return this._attacks; }
    get base_attack() { return this._base_attack; }
    get base_defense() { return this._base_defense; }
    get base_stamina() { return this._base_stamina; }
    get multiplier() { return this._multiplier; }

    /* --- */
    toString() {
        return    "- Pokemon -"
                + "\nID : "                 + this.id 
                + "\ngeneration : "         + this.generation
                + "\nname : "               + this.name
                + "\nniveau : "             + this.niveau
                + "\ntypes : "              + this.types.join(", ")
                + "\nattacks : "            + this.attacks.join(", ")
                + "\nattaque de base : "    + this.base_attack
                + "\ndéfense de base : "    + this.base_defense
                + "\nstamina de base : "    + this.base_stamina
                + "\nmultiplicateur : "     + this.multiplier;
    }

    getTypes() { return this.types; }
    getAttacks() { return this.attacks; }


    initGeneration (generation) { this._generation = generation; }
    ajouterType (type) { this.types.push(type); }
    ajouterAttack (attack) { this.attacks.push(attack); }
    setNiveau (niveau) { this._niveau = niveau; }
    setMultiplier (multiplier) { this._multiplier = multiplier; }

}