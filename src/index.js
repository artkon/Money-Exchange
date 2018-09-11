// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if(currency < 1) return {};
  if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

  var result = {};
  if(Math.floor(currency / 50) > 0){
    result.H = Math.floor(currency / 50);
    currency = currency % 50;
  }
  if( Math.floor(currency / 25) > 0){
    result.Q = Math.floor(currency / 25);
    currency = currency % 25;
  }
  if(Math.floor(currency / 10) > 0){
    result.D = Math.floor(currency / 10);
    currency = currency % 10;
  }
  if(Math.floor(currency / 5) > 0){
    result.N = Math.floor(currency / 5);
    currency = currency % 5;
  }
  if(currency > 0){
    result.P = currency;
  }

  return result;
}