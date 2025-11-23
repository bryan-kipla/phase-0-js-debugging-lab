  function calculateDiscountedPrice(quantity, pricePerItem) {
      let totalPrice = quantity * pricePerItem;

      if (quantity >= 10) {
          totalPrice *= 0.9;
      }

      return totalPrice;
  }

  module.exports = calculateDiscountedPrice;
  
module.exports = calculateDiscountedPrice;