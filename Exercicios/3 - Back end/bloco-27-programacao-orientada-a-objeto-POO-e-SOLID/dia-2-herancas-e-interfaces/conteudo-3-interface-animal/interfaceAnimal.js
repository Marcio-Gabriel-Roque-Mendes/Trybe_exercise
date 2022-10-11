var Bird = /** @class */ (function () {
    function Bird(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    Object.defineProperty(Bird.prototype, "age", {
        get: function () {
            var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
            return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        },
        enumerable: false,
        configurable: true
    });
    Bird.prototype.getBirthDate = function () { return this.birthDate; };
    Bird.prototype.fly = function () { console.log("".concat(this.name, " est\u00E1 voando!")); };
    return Bird;
}());
var parrot = new Bird('Papagaio', new Date(Date.parse('Aug 16, 2015')));
console.log(parrot.age);
parrot.fly();
/*
Saída (código executado em Mar/2022):
6
Papagaio está voando!
*/ 
