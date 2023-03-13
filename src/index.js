// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = price.innerText;
  const quantityValue = quantity.value;

  const subTotalValue = priceValue * quantityValue;
  console.log(subTotalValue);

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subTotalValue;
  return subTotalValue;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  const products = document.getElementsByClassName('product');
  const productsArray = [...products]; // converting to an array
  const subtotalValuesArray = productsArray.map(product =>
    updateSubtotal(product)
  );
  const totalValue = subtotalValuesArray.reduce((acc, curr) => acc + curr, 0);
  document.querySelector('#total-value span').innerText = totalValue;
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parent = target.parentNode.parentNode;
  parent.parentNode.removeChild(parent);

  calculateAll();
}
//... your code goes here

// ITERATION 5

function createProduct() {}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
});
