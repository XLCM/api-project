export default class CurrencyExchange {
  static populateCurrencySelection() {
    fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((response) => {
        response.supported_codes.forEach((code) => {
          console.log(`<option value="${code[0]}">${code[1]}</option>`);
        });
      })
      .catch(function (error) {
        return error;
      });
  }

  static convertCurrency(convertFrom, convertTo) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${convertFrom}/${convertTo}
    `)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}
