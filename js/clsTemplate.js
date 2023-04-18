export default class clsTemplate {
    constructor (_x) {
        this._x = _x;
    }

    get x() {
        return this._x;
    }

    set y(value) {
        this.x = value;
    }
}