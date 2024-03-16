import * as Function from "./functions";
import { numberInput, arr, btnAdd, btnGetResult, btnDelete } from "./constants";

// SHOW ALL NUMBERS IN TEXTAREA AND CHARGE THE SELECT.
btnAdd.addEventListener("click", () => {
  const number = parseFloat(numberInput.value);

  // Call the function check if the number existe.
  Function.checkNumberExiste(arr, number);

  // Call the function addNumberTextarea.
  Function.addNumberTextarea(number);

  // Call The function
  Function.chargeSelect();
});

// SHOW THE RESULT IN INPUT RESULT.
btnGetResult.addEventListener("click", () => {
  Function.getResultaFinal();
});

// BOTTON REMOVE ITEM FROM THE SELECT
btnDelete.addEventListener("click", () => {
  Function.removeSelectItem();
});
