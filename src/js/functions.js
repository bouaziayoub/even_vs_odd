import {
  mostrarCollectionNumber,
  arr,
  mostrarEnTextarea,
  result,
} from "./constants";

// The function add number to texteara.
export function addNumberTextarea(num) {
  arr.push(num);
  mostrarEnTextarea.value = `${arr}`;
}

// The function Even vs Odd.
export function getResultaFinal() {
  const resultPares = arr
    .filter((num) => num % 2 === 0)
    .reduce((acc, elemnt) => parseFloat(acc) + parseFloat(elemnt), 0);

  const resultImPares = arr
    .filter((num) => num % 2 != 0)
    .reduce((acc, elemnt) => parseFloat(acc) + parseFloat(elemnt), 0);

  // the rest even of odd.
  const resultaFinal = resultPares - resultImPares;
  result.value = resultaFinal;
}

// The function Charge Select
export function chargeSelect() {
  const orderArray = arr.sort(function (a, b) {
    return a - b;
  });
  mostrarCollectionNumber.innerHTML = "";
  for (let i in orderArray) {
    mostrarCollectionNumber.innerHTML +=
      "<option value='" + orderArray[i] + "'>" + orderArray[i] + "</option>";
  }
}

// CHECK NUMBER IF EXISTE
export function checkNumberExiste(array, element) {
  if (array.indexOf(element) >= 0) {
    alert("The Number IS ALREADY EXISTE!");
  }
}

// REMOVE ITEM
export function removeSelectItem() {
  mostrarCollectionNumber.remove(mostrarCollectionNumber.selectedIndex);
}
