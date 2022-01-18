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

  let response = CurrencyExchange.convertCurrency(
    convertFrom,
    convertTo,
    amount
  )
    .then((data) => {
      result.innerHTML = `${amount} of ${data.base_code} is ${data.conversion_result} of ${data.target_code}.`;
    })
    .catch((error) => {
      errorMessage.innerHTML = error;
    });
});
