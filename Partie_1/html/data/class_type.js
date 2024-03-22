class Type {

    constructor(type) {
        this._type = type;
        this._effectiveness = new Map();
    }

    /* --- */
    get type() { return this._type; }
    get effectiveness() { return this._effectiveness; }

    /* --- */
    toString () {
        return this.type;
    }

    setEffectiveness (value) { this._effectiveness = value; }
}