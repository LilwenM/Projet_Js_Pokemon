class Attack {

    constructor(id, name, type, duration, energy_delta, power, stamina_loss_scaler) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._duration = duration;
        this._energy_delta = energy_delta;
        this._power = power;
        this._stamina_loss_scaler = stamina_loss_scaler;
    }

    /* --- */
    get id() { return this._id; }
    get name() { return this._name; }
    get type() { return this._type; }
    get duration() { return this._duration; }
    get energy_delta() { return this._energy_delta; }
    get power() { return this._power; }
    get stamina_loss_scaler() { return this._stamina_loss_scaler; }

    /* --- */
    toString() {
        return this.name + " (" + this.type + ")";
    }

}


class Charged extends Attack {

    constructor(id, name, type, duration, energy_delta, power, stamina_loss_scaler, critical_chance) {
        super(id, name, type, duration, energy_delta, power, stamina_loss_scaler);
        this._critical_chance = critical_chance;
    }

    /* --- */
    get critical_chance() { return this._critical_chance; }

}

class Fast extends Attack {

    constructor(id, name, type, duration, energy_delta, power, stamina_loss_scaler, ) {
        super(id, name, type, duration, energy_delta, power, stamina_loss_scaler);
    }

}