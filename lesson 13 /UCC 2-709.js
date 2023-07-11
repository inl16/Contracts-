//logic for section 1 

function buyerFailsToPayThePrice(goods, buyer, seller) {
    // Check if the buyer has failed to pay the price.
    if (!buyer.hasPaidPrice()) {
      // Check if the goods have been accepted or lost or damaged.
      if (goods.isAccepted() || goods.isLostOrDamaged()) {
        // The seller can recover the price of the goods.
        seller.recoverPrice(goods.getPrice());
      } else if (goods.isIdentifiedToTheContract()) {
        // Check if the seller is able to resell the goods.
        if (!seller.canResellGoods(goods)) {
          // The seller can recover the price of the goods.
          seller.recoverPrice(goods.getPrice());
        }
      }
    }
}


//logic for section 2 

