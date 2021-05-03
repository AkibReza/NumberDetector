let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let number = document.getElementById("number");
let indicator = document.getElementById("indicator");
let reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  number.value = 0;
  indicatorFunction();
});

increment.addEventListener("click", () => {
  number.value = parseInt(number.value) + 1;
  indicatorFunction();
});

decrement.addEventListener("click", () => {
  number.value = parseInt(number.value) - 1;
  indicatorFunction();
});

const indicatorFunction = () => {
  if (number.value % 2) {
    indicator.innerHTML = "The number is odd";
  } else {
    indicator.innerHTML = "The number is even";
  }
};
