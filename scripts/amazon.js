let productsHtml = '';
products.forEach((product) => {
  productsHtml += `<div class="product-container">
                  <div class="product-image-container">
                    <img
                      class="product-image"
                      src="${product.image}"
                    />
                  </div>

                  <div class="product-name limit-text-to-2-lines">
                    ${product.name}
                  </div>

                  <div class="product-rating-container">
                    <img
                      class="product-rating-stars"
                      src="images/ratings/rating-${product.rating.stars * 10}.png"
                    />
                    <div class="product-rating-count link-primary">${product.rating.count}</div>
                  </div>

                  <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>

                  <div class="product-quantity-container">
                    <select>
                      <option selected value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  <div class="product-spacer"></div>

                  <div class="added-to-cart">
                    <img src="images/icons/checkmark.png" />
                    Added
                  </div>

                  <button data-product-id="${product.id}" class="add-to-cart-button button-primary js-add-to-cart-button">Add to Cart</button>
                </div>`;
})
//console.log(productsHtml)

//=== Incorporate our prudcts into the DOM ===
document.querySelector(".js-products-grid").innerHTML = productsHtml

//=== Add to cart button ===
document.querySelectorAll(".js-add-to-cart-button")
  .forEach((button) => {
    button.addEventListener('click', () => {
      let productId = button.dataset.productId
      let matchItem

      //=== Check if we already have the same product first in the cart ===
      cart.forEach((item) => {
        if (productId === item.productId) {
          matchItem = item
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

      //=== Calculate Cart qty ===
      let cartQuantity = 0
      cart.forEach((qty) => {
        cartQuantity += qty.quantity
      })

      //=== Add it to the cart using the DOM ===
      document.querySelector(".js-cart-quantity").innerHTML = cartQuantity

      // console.log(cartQuantity, "CART QTY MY FRIEND")

      // console.log(cart, "THE CARTTTT")
    })
  })

