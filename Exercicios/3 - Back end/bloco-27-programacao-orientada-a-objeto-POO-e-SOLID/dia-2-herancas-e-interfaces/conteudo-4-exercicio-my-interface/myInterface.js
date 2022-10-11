var MyClass = /** @class */ (function () {
    function MyClass(myNumber) {
        var _this = this;
        this.myNumber = myNumber;
        this.myFunc = function (myParam) {
            return "O total \u00E9 ".concat(_this.myNumber + myParam);
        };
    }
    return MyClass;
}());
var sum = new MyClass(18);
console.log(sum.myNumber);
console.log(sum.myFunc(21));
