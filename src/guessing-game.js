class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this._minValue = min;
        this._maxValue = max;
    }

    guess() {
        this._assumption = this._maxValue - this._minValue;
        this._assumption = this._assumption/2;
        this._assumption = Math.floor(this._assumption);
        this._assumption = this._maxValue - this._assumption;
        return this._assumption;
    }

    lower() {
        this._maxValue = this._assumption;
    }

    greater() {
        this._minValue = this._assumption;
    }
}

module.exports = GuessingGame;
