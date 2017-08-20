function Phone(brand, price, color, size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", size is " + this.size + " and the price is " + this.price + ".");
}
var SamsungGalaxyS6 = new Phone("Samsung", 2000, "black", 14);
var iPhone6S = new Phone("Apple", 2250, "silver", 12);
var OnePlusOne = new Phone("OnePlusOne", 1800, "red", 16);

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();