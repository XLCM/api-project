# Phil's Currency Converter

#### By: Phil Curran / pecurran@hotmail.com

#### An app that converts a given amount of currency from and to over 160 currencies.

## Technologies Used

* HTML
* Vanilla Js
* Bulma CSS / SCSS
* NPM
* Webpack
* Babel
* ESLint
* ExchangeRateAPI

## Description

* Enter a numerical amount of currency into the first field, select your currency to convert from, select your currency to conver to, and click the 'Convert!' button.
* A text field will appear below the form and show the converted currency.

## Setup / Installation Requirements

* Get the repo: git clone
* Install packages: npm install
* Start liveserver: npm start

## Working with the API

This app requests data from the Exchange Rate API, and you will need your own API key to use it.

Do the following: 

1. Navigate to [openweathermap.org](https://home.openweathermap.org/users/sign_up), register an account, and create your own API Key.

2. Then, create a .env file in the root directory of the project.

3. Then, enter your API key in that .env file like so: API_Key={ your api key }

4. Finally, reference your stored API Key within the script by using: ${process.env.API_KEY}
                      *specifically on Line 3 on currencyConverter.js, in the API call.*

## Known Bugs

* Error message shows even if there isn't a reported error, and returns 'undefined.'  Still working on it.

## License

Find a bug?  Want to make this app even more rad?  Fork and tweak to your heart's content!  Then let me know what you did.  

## Contact Me

Copyright (c) 02JAN2022 Phil Curran / pecurran@hotmail.com