import "../css/styles.scss";

import CurrencyExchange from "./currencyConverter";

CurrencyExchange.populateCurrencySelection();

let convertFrom = document.getElementById("convertFromOptions");
let convertTo = document.getElementById("convertToOptions");

convertFrom.onchange = function () {
  console.log(this.value);
};

convertTo.onchange = function () {
  console.log(this.value);
};
