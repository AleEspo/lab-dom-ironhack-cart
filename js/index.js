// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const subtotalPrice = price.innerText * quantity.value
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = subtotalPrice
  return subtotalPrice
  //console.log(price.innerText)
  //console.log(quantity.value)
  //console.log(subtotalPrice)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName("product");
  let total = 0;
  let totalDisplaied = document.querySelector('#total-value span')
  for (i=0; i<products.length; i++){
    updateSubtotal (products[i])
    total += updateSubtotal (products[i])
  }

  // ITERATION 3
  //... your code goes here
  totalDisplaied.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const removeButtons = document.getElementsByClassName("btn btn-remove")
  
  for (i=0; i<removeButtons.length; i++){
    removeButtons[i].addEventListener("click", removeProduct)
  }
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
