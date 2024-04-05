let cart = [
  {
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  },
  {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 3
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

//=== f(X) to remove cart item ===
function removeCartItem(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem)
    }
  })

  cart = newCart;
}
export { cart, addToCart, removeCartItem }