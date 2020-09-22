const honda = new Car("Red", "Honda", "Accord", 45000, 2020);
const mustang = new Car("Black", "Ford", "Mustang", 50000, 1965);

function Car(color, brand, make, price, year) {
    this.color = color;
    this.brand = brand;
    this.make = make;
    this.price = price;
    this.year = year;
    this.wheels = 4;
    this.drive = function () {
        console.log(`I'm driving my ${this.year} ${this.brand}, vroom vroom `);
    }
    this.park = function () {
        console.log(`Parking the ${this.make}`);
    }
    this.sell = function () {
        console.log(`I want to sell my  ${this.make} for at least $${this.price*0.9} since I paid $${this.price}`);
    }
}