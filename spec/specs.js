describe('Pizza', function() {
  it("will create a pizza with no toppings", function() {
    var tastyPizza = new Pizza("large");
    expect(tastyPizza.size).to.eql("large");
  });

  it("will add a topping", function() {
    var pizza = new Pizza();
    pizza.addTopping("pepperoni");
    expect(pizza.toppings).to.eql(["pepperoni"]);
  });

  it("returns the cost of the pizza", function() {
    var pizza = new Pizza("large");
    pizza.addTopping("pepperoni");
    expect(pizza.price()).to.equal(15);
  })

});
