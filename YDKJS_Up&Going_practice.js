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
  numOfPhones = numOfPhones + 1;
  calculatePurchaseAmount();
  console.log("Number of Phones:" + numOfPhones);
}

function buyAccessory() {
  console.log("I'll take the accessory.");
  numOfAccessories = numOfAccessories + 1;
  calculatePurchaseAmount();
  console.log("Number of Accessories:" + numOfAccessories);
}

function addTax() {
  amount = amount + amount * TAX_RATE;
}

function calculatePurchaseAmount() {
  phonePrice = numOfPhones * PHONE_PRICE;
  accessoryPrice = numOfAccessories * ACCESSORY_PRICE;
  amount = phonePrice + accessoryPrice;
  addTax();
}

function formatAmount(amount) {
  amount = amount.toFixed(2);
  console.log("$" + String(amount));
}

function printAmount() {
  calculatePurchaseAmount();
  formatAmount(amount);
}

/*while (bank_balance > (amount+PHONE_PRICE)) {
  buyPhone();
  if (SPENDING > amount) {
    buyAccessory();
  }
  printAmount();
}*/ // <----- alternative apporach

do {
  buyPhone();
  if (SPENDING > amount) {
    buyAccessory();
  }
  printAmount();
} while (bank_balance > amount + PHONE_PRICE);

if (amount + PHONE_PRICE > bank_balance) {
  console.log("You can't afford another purchase.");
}
