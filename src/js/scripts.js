import "../css/styles.scss";

import CurrencyExchange from "./currencyConverter";

CurrencyExchange.populateCurrencySelection();

// console.log(CurrencyExchange.convertCurrency("USD", "GBP", 100));

document.getElementById("formSubmit").addEventListener("click", (event) => {
  event.preventDefault();
  let amount = document.getElementById("amount").value;
  let convertFrom = document.getElementById("convertFromOptions").value;
  let convertTo = document.getElementById("convertToOptions").value;

  console.log("amount is: " + amount);
  console.log("convert from is: " + convertFrom);
  console.log("convert to is: " + convertTo);
});
