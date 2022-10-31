// Phone Input Field
function phoneInput(isIncrease) {
  const phoneQuantityElement = document.getElementById("phoneInputField");
  const phoneQuantityString = phoneQuantityElement.value;
  const phoneQuantity = parseInt(phoneQuantityString);

  let phoneUpdatedQuantity;

  if (isIncrease) {
    phoneUpdatedQuantity = phoneQuantity + 1;
  } else {
    phoneUpdatedQuantity = phoneQuantity - 1;
  }

  phoneQuantityElement.value = phoneUpdatedQuantity;
  return phoneUpdatedQuantity;
}

// Phone Price Update
function phonePrice(phoneFinalQuantity) {
  const phonePriceElement = document.getElementById("phone-price");
  const updatedPhonePrice = 1219 * phoneFinalQuantity;
  phonePriceElement.innerText = updatedPhonePrice;
}

// Case Input Field
function caseInput(isIncrease) {
  const caseQuantityElement = document.getElementById("caseInputField");
  const caseQuantityString = caseQuantityElement.value;
  const caseQuantity = parseInt(caseQuantityString);

  let caseUpdatedQuantity;

  if (isIncrease) {
    caseUpdatedQuantity = caseQuantity + 1;
  } else {
    caseUpdatedQuantity = caseQuantity - 1;
  }

  caseQuantityElement.value = caseUpdatedQuantity;
  return caseUpdatedQuantity;
}

// Case Price Update
function casePrice(caseFinalQuantity) {
  const casePriceElement = document.getElementById("case-price");
  const updatedCasePrice = 59 * caseFinalQuantity;
  casePriceElement.innerText = updatedCasePrice;
}

function subTotal(elementId) {
  const priceElement = document.getElementById(elementId);
  const elementString = priceElement.innerText;
  const price = parseInt(elementString);
  return price;
}
function subTotalSet() {
  const phonesPrice = subTotal("phone-price");
  const casesPrice = subTotal("case-price");
  const finalSubTotal = phonesPrice + casesPrice;
  const subTotalField = document.getElementById("sub-total");
  subTotalField.innerText = finalSubTotal;
}

function tax() {
  const finalSubTotal = subTotal("sub-total");
  const tax = (finalSubTotal * 0.1).toFixed(2);
  const taxFieldElement = document.getElementById("tax");
  const taxField = taxFieldElement.innerText;
  taxFieldElement.innerText = tax;
  return taxField;
}

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
