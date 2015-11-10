/* globals items */
(function() {

  var priceSum = items.reduce((currentSum, item) => {
    return currentSum + item.price;
  }, 0);

  var averagePrice = priceSum / items.length;

  console.log(averagePrice);

  //I had the > and < item.price correct but had an extra if statement that served no purpose.
  var rangePrice = items.filter((item) => {
    return item.price > 14 && item.price < 18;
  }).map(function(item) {   //After you helped correct my original code, I then wanted to get just the titles so I used map to pull those.
    return item.title;
  });

  console.log(rangePrice);

})();
