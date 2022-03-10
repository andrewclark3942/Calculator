"use strict";
//Andrew Clark
//2/16/2022

const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const equals = document.querySelector(".equals");
const previous = document.querySelector(".previous");
const current = document.querySelector(".current");

let previousNum = "";
let currentNum = "";
let operation = "";

function clearDisplay() {
  previousNum = "";
  currentNum = "";
  operation = "";
  updateDisplay();
}
function deleteNum() {
  currentNum = currentNum.toString().slice(0, -1);
}
function appendNumber(number) {
  if (number === "." && currentNum.includes(".")) return;
  currentNum = currentNum.toString() + number.toString();
}
function chooseOperation(opp) {
  if (currentNum === "") return;
  if (previousNum !== "") compute();
  operation = opp;
  previousNum = currentNum;
  currentNum = "";
}
function compute() {
  let computation;
  const previous = parseFloat(previousNum);
  const current = parseFloat(currentNum);
  if (isNaN(previous) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = previous + current;
      break;
    case "-":
      computation = previous - current;
      break;
    case "*":
      computation = previous * current;
      break;
    case "÷":
      computation = previous / current;
      break;
    case "/":
      computation = previous / current;
      break;

    default:
      return;
  }
  currentNum = computation;
  operation = "";
  previousNum = "";
}
function updateDisplay() {
  previous.innerText = `${getDisplayNumber(previousNum)} ${operation}`;
  current.innerText = getDisplayNumber(currentNum);
}
function getDisplayNumber(number) {
  const floatNumber = parseFloat(number);
  if (isNaN(floatNumber)) return "";
  return floatNumber.toLocaleString();
}

//Event listeners -------------------------------------
numbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    appendNumber(button.innerText);
    updateDisplay();
  });
});
operators.forEach((button) => {
  button.addEventListener("click", (e) => {
    chooseOperation(button.innerText);
    updateDisplay();
  });
});

clear.addEventListener("click", (e) => {
  clearDisplay();
});

equals.addEventListener("click", (e) => {
  compute();
  updateDisplay();
});

del.addEventListener("click", () => {
  deleteNum();
  updateDisplay();
});
window.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log(e);
  switch (e.key) {
    case "1":
      appendNumber("1");
      updateDisplay();
      break;
    case "2":
      appendNumber("2");
      updateDisplay();
      break;
    case "3":
      appendNumber("3");
      updateDisplay();
      break;
    case "4":
      appendNumber("4");
      updateDisplay();
      break;
    case "5":
      appendNumber("5");
      updateDisplay();
      break;
    case "6":
      appendNumber("6");
      updateDisplay();
      break;
    case "7":
      appendNumber("7");
      updateDisplay();
      break;
    case "8":
      appendNumber("8");
      updateDisplay();
      break;
    case "9":
      appendNumber("9");
      updateDisplay();
      break;
    case "0":
      appendNumber("0");
      updateDisplay();
      break;
    case "+":
      chooseOperation("+");
      updateDisplay();
      break;
    case "/":
      chooseOperation("/");
      updateDisplay();
      break;
    case "-":
      chooseOperation("-");
      updateDisplay();
      break;
    case "*":
      chooseOperation("*");
      updateDisplay();
      break;
    case "Enter":
      compute();
      updateDisplay();
      break;
    case "Backspace":
      deleteNum();
      updateDisplay();
      break;
  }
});
