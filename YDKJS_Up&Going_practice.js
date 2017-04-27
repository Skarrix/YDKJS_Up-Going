const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
var bank_balance = prompt("Please enter bank balance");
const SPENDING = prompt("What's your spending threshold?");
var amount = PHONE_PRICE;
numOfPhones = 0;
numOfAccessories = 0;

function buyPhone() {
  console.log("I want to buy this phone.");
  amount = amount + PHONE_PRICE;
  numOfPhones = numOfPhones + 1;
  console.log(numOfPhones);
}

function buyAccessory() {
  console.log("I'll take the accessory.");
  amount = amount + ACCESSORY_PRICE;
  numOfAccessories = numOfAccessories + 1;
  console.log(numOfAccessories);
}

function addTax() {
  amount = amount + (amount * TAX_RATE); //adds tax
}

function printAmount() {
  function calculatePurchaseamount() {
    amount = numOfPhones + numOfAccessories;
    addTax();
    console.log(amount.toFixed(2));
  }
  function formatAmount() {
    amount = "$" + String(amount);
    console.log(amount.toFixed(2)); //for decimal rounding
  }
}

while (bank_balance > amount) {
  buyPhone();
  calculatePurchaseamount();
  }
while (SPENDING > amount) {
  buyAccessory();
  calculatePurchaseamount();
}
