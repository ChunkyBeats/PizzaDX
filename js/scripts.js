function Pizza(size) {
  this.toppings = [];
  this.size = size;
}

Pizza.prototype.addTopping = function(type) {
  this.toppings.push(type);
  return this.toppings;
}

Pizza.prototype.printOut = function() {
  var string = this.size + " pizza with cheese";

  if (this.toppings.length > 0) {
    for(var i = 0; i < this.toppings.length; i++) {
      string += ", ";
      string += this.toppings[i];
    }
  }
  return string;
}

Pizza.prototype.price = function() {
  var cost;
  if (this.size === "Sheet") {
    cost = 20;
  } else if (this.size === "Large") {
    cost = 14;
  } else if (this.size === "Medium") {
    cost = 11;
  } else {
    cost = 9;
  }
  return cost + (this.toppings.length);
}

function addPizzaField() {
  $("#order").append('<div class="new-pizza-form">' +
                            '<div class="form-group">' +
                              '<label for="pizza-size">Choose a size:</label>' +
                              '<select class="size" name="pizza-size" type="text">' +
                                '<option value="Small"> Small</option>' +
                                '<option value="Medium"> Medium</option>' +
                                '<option value="Large"> Large</option>' +
                                '<option value="Sheet"> Sheet</option>' +
                              '</select>' +
                            '</div>' +
                            '<div class="form-group">' +
                              '<fieldset id="form-toppings">' +
                                '<label for="toppings">Add toppings*:</label><br>' +
                                '<input type="checkbox" name="toppings" value="mushrooms"> Mushrooms<br>' +
                                '<input type="checkbox" name="toppings" value="olives"> Olives<br>' +
                                '<input type="checkbox" name="toppings" value="pepperoni"> Pepperoni<br>' +
                                '<input type="checkbox" name="toppings" value="pineapple"> Pineapple<br>' +
                                '<input type="checkbox" name="toppings" value="sausage"> Sausage<br>' +
                              '</fieldset>' +
                              '<br><p>*The first topping is free! Additional toppings cost $1 each.</p>' +
                            '</div>' +
                          '</div>');
}

$(document).ready(function(){
  var pizzas = [];
  var totalCost = 0;

  $("#more-pizza").click(function() {
    addPizzaField();
  });

  $("#pizza-form").submit(function(event) {
    event.preventDefault();

    $(".new-pizza-form").each(function() {
      var size = $(this).find("select.size").val();
      var pizza = new Pizza(size);
      $(this).find("fieldset#form-toppings :checked").each(function() {
        pizza.addTopping($(this).val());
      });

      pizzas.push(pizza);
      totalCost += pizza.price();
    });

    $("#step-1").hide();
    for(var i = 0; i < pizzas.length; i++) {
      pizza = pizzas[i];
      $("ul#pizzas").append("<li>" + pizza.printOut() + "</li>");
    }
    $("h4#cost").append("Your order costs: $" + totalCost);
    $("#step-2").show();
  });
});
