var Person = /** @class */ (function () {
    function Person(a, n) {
        this.Age = a;
        this.Name = n;
    }
    Person.prototype.display = function () {
        console.log(this.Age, this.Name);
    };
    return Person;
}());
var objperson = new Person(21, "HIMANSHU");
objperson.display();
var objperson1 = new Person(23, "HIMANSHU");
objperson1.display();
