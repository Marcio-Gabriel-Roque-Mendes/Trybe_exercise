var Tv = /** @class */ (function () {
    function Tv(brand, size, resolution, connections) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
        // this._connectedTo = connectedTo;
    }
    Tv.prototype.turnOn = function () {
        console.log("Creiando uma nova TV ".concat(this._brand, " de ").concat(this._size, " \n\t\tpolegadas, mais especificamentd sua resolu\u00E7\u00E3o \u00E9 de ").concat(this._resolution, " \n\t\te entradas para conex\u00F5es ").concat(this._connections));
    };
    Object.defineProperty(Tv.prototype, "connectedTo", {
        get: function () {
            return this._connectedTo;
        },
        set: function (newValue) {
            if (!newValue || this._connections.includes(newValue)) {
                this._connectedTo = newValue;
                console.log(this._connectedTo);
            }
            else {
                console.log('Sorry, connection unavailable!');
                console.log(this._connections, 'connections AQUI');
                ;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Tv;
}());
var tv2 = new Tv('Samsung', 50, 'Full HD', ['HDMI', 'USB', 'Ethernet']);
tv2.turnOn();
tv2.connectedTo = 'Wi-fi';
console.log('Nova conexão, ', tv2.connectedTo);
