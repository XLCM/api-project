import "../css/styles.scss";

import CurrencyExchange from "./currencyConverter";

CurrencyExchange.populateCurrencySelection();

// UI Logic
document.getElementById("formSubmit").addEventListener("click", (e) => {
  e.preventDefault();
  let amount = document.getElementById("amount").value;
  let convertFrom = document.getElementById("convertFromOptions").value;
  let convertTo = document.getElementById("convertToOptions").value;
  let result = document.getElementById("result");
  let errorMessage = document.getElementById("errors");

  CurrencyExchange.convertCurrency(convertFrom, convertTo, amount, errorMessage)
    .then((response) => {
      if (!response.ok) {
        errorMessage.textContent =
          "convertCurrency.js error: " + response.message;
      }
      return response;
    })
    .then((response) => {
      result.innerHTML = `${amount} of ${response.base_code} is ${response.conversion_result} of ${response.target_code}.`;
    });
});
