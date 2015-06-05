function Pizza(size) {
  this.toppings = [];
  this.size = size;
}

Pizza.prototype.addTopping = function(type) {
  this.toppings.push(type);
  return this.toppings;
}

Pizza.prototype.price = function() {
  var cost;
  if (this.size === "sheet") {
    cost = 20;
  } else if (this.size === "large") {
    cost = 14;
  } else if (this.size === "medium") {
    cost = 11;
  } else {
    cost = 9;
  }

  return cost + this.toppings.length;
}
