const myCar = {};
myCar.color = "Black";
myCar.brand = "Ford";
myCar.make = "Mustang";
myCar.price = 50000;
myCar.year = 1965;
myCar.drive = function () {
    console.log(`I'm driving my ${this.make} , vroooom vroooom`);
}
myCar.park = function () {
    console.log(`Parking the ${this.brand}`);
}