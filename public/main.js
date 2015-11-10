/* globals items */
(function() {
  //used reduce to find the total sum and then divided it by the number of items to get the average.
  var priceSum = items.reduce((currentSum, item) => {
    return currentSum + item.price;
  }, 0);

  var averagePrice = priceSum / items.length;

  //later I added Math.round to get it to 23.63
  console.log(Math.round(100 * averagePrice) / 100);

  //used the > and < item.price correctly but had an extra if statement that served no purpose.
  var rangePrice = items.filter((item) => {
    return item.price > 14 && item.price < 18;
  }).map(function(item) {   //After you helped correct my original code, I then wanted to get just the titles so I used map to pull those.
    return item.title;
  });

  console.log(rangePrice);

  //filtered the items through currency code = GBP, then used map to get the title and price along with costs in between
  var pound = items.filter((item) => {
    return item.currencyCode === 'GBP';
  }).map(function(item) {
    return item.title + ' costs ' + item.price;
  });

  console.log(pound);

  //filtered the items using an indexOf to search the materials array for wood, then used map to get the titles of each with wood.
  var woodMade = items.filter((item) => {
    if (item.materials) {
      return item.materials.indexOf('wood') !== -1;
    }
  }).map(function(item) {
    return item.title;
  });

  console.log(woodMade);

  //filtered using an if statement that said return if materials array was greater than or equal to 8, then map with title and materials.
  var minMaterials = items.filter((item) => {
    if (item.materials) {
      return item.materials.length >= 8;
    }
  }).map(function(item) {
    return item.title + item.materials;
  }
);

  console.log(minMaterials);

  var madeBy = items.filter((item) => {
    if (item.whoMade) {
      return item.whoMade.indexOf('i_did') !== -1;
    }
  });

  var soldBy = items.reduce(() => {
    return madeBy.length;
  });

  console.log(soldBy + ' were made by their sellers');

})();
