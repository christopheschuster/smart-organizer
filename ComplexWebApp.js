/* 
Filename: ComplexWebApp.js
Content: A complex web application code demonstrating advanced functionalities and interactions.
Note: This code is for demonstration purposes only and may not be fully functional or optimized.
*/

// Helper function to generate random numbers
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Object representing a Product
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getInfo() {
    return `Product: ${this.name}, Price: ${this.price}`;
  }
}

// Object representing a User
class User {
  constructor(name) {
    this.name = name;
    this.cart = [];
  }
  addToCart(product, quantity) {
    for (let i = 0; i < quantity; i++) {
      this.cart.push(product);
    }
  }
  getTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.cart.length; i++) {
      totalPrice += this.cart[i].price;
    }
    return totalPrice;
  }
}

// Create some example products
const products = [
  new Product("Book", 10),
  new Product("Phone", 500),
  new Product("Headphones", 100),
  new Product("Shirt", 20),
  new Product("Guitar", 200),
  new Product("Camera", 300),
];

// Create a sample user
const user = new User("John");

// Simulate user interaction
user.addToCart(products[getRandomNumber(0, products.length - 1)], getRandomNumber(1, 5));
user.addToCart(products[getRandomNumber(0, products.length - 1)], getRandomNumber(1, 5));
user.addToCart(products[getRandomNumber(0, products.length - 1)], getRandomNumber(1, 5));

// Output user's cart and total price
console.log(`User: ${user.name}`);
console.log("Cart:");
user.cart.forEach((product, index) => {
  console.log(`${index + 1}. ${product.getInfo()}`);
});
console.log(`Total Price: $${user.getTotalPrice()}`);

// Other complex functionalities and interactions can be added below this line...