// export const currencyGBP = new Intl.NumberFormat('en-UK', {
//   style: 'currency',
//   currency: 'GBP',
//   minimumFractionDigits: 2
// });

import 'number-to-locale-string'; //polyfill TODO optimize import

export const currencyGBP = {
  format: (number) => {
    return number.toLocaleString('en-GB', {
      style: 'currency', 
      currency: 'GBP', 
      minimumFractionDigits: 2 
    });
  }
}