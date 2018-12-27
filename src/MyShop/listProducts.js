var faker = require("faker");

var randomProduct = faker.commerce.productName();
var randomPrice = faker.commerce.price();

for (let i = 0; i < 10; i++) {
  console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}
