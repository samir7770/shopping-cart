// Phone Input Field

function total() {
  const subTotalFieldElement = document.getElementById("sub-total");
  const subTotalString = subTotalFieldElement.innerText;
  const subTotal = parseFloat(subTotalString);

  const taxFieldElement = document.getElementById("tax");
  const taxString = taxFieldElement.innerText;
  const tax = parseFloat(taxString);

  const totalElement = document.getElementById("final-total");
  totalElement.innerText = subTotal + tax;
  // const totalPrice = totalElement.innerText;
  // return totalPrice;
}

document.getElementById("phonePlusBtn").addEventListener("click", function () {
  const phoneFinalQuantity = phoneInput(true);
  phonePrice(phoneFinalQuantity);

  // subTotal, tax, total
  subTotalSet();
  tax();
  total();
});
document.getElementById("phoneMinusBtn").addEventListener("click", function () {
  const phoneFinalQuantity = phoneInput(false);
  phonePrice(phoneFinalQuantity);
  // subTotal, tax, total
  subTotalSet();
  tax();
  total();
});

// Case Input Field

document.getElementById("casePlusBtn").addEventListener("click", function () {
  const caseFinalQuantity = caseInput(true);
  casePrice(caseFinalQuantity);
  // subTotal, tax, total
  subTotalSet();
  tax();
  total();
});
document.getElementById("caseMinusBtn").addEventListener("click", function () {
  const caseFinalQuantity = caseInput(false);
  casePrice(caseFinalQuantity);
  // subTotal, tax, total
  subTotalSet();
  tax();
  total();
});
