const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
var bank_balance = prompt("Please enter bank balance");
const SPENDING = prompt("What's your spending threshold?");
var amount = 0;
var numOfPhones = 0;
var numOfAccessories = 0;
var phonePrice = 0;
var accessoryPrice = 0;

function buyPhone() {
  console.log("I want to buy the phone.");
  amount = amount + PHONE_PRICE;
  numOfPhones = numOfPhones + 1;
  console.log("Number of Phones:" + numOfPhones);
  console.log("Balance:" + amount);
}

function buyAccessory() {
  console.log("I'll take the accessory.");
  amount = amount + ACCESSORY_PRICE;
  numOfAccessories = numOfAccessories + 1;
  console.log("Number of Accessories:" + numOfAccessories);
  console.log("Balance:" + amount);
}

function addTax(amount) {
  return amount * TAX_RATE;
  console.log(amount.toFixed(2));
}

function calculatePurchaseamount(amount) {
  phonePrice = numOfPhones * PHONE_PRICE;
  accessoryPrice = numOfAccessories * ACCESSORY_PRICE;
  amount = numOfPhones + numOfAccessories;
  addTax(amount);
  amount = Number(amount); //coerce to number value
  console.log(amount.toFixed(2));
}

function formatAmount(amount) {
  amount = "$" + String(amount);
  //console.log(amount.toFixed(2));
}

function printAmount(amount) {
  calculatePurchaseamount(amount);
  formatAmount(amount);
  console.log(amount)
}

while (bank_balance > amount) {
  buyPhone();
    if (SPENDING > amount) {
    buyAccessory();
  }
  printAmount();
}
console.log("Your purchase:" + printAmount(amount));

if (amount > bank_balance) {
  console.log("You can't afford another purchase.");
}
