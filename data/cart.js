const cart = [
  {
    productName: 'Ibala',
    quantity: 1
  }
];

function addToCart(productId) {
  let matchItem

  //=== Check if we already have the same product first in the cart ===
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchItem = cartItem
    }
  })
  if (matchItem) {
    console.log(matchItem)
    matchItem.quantity += 1
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    })
  }
}
export { cart, addToCart }