const screen = document.querySelector(".calculator__display");
const nhs = document.querySelectorAll(".btn-keys");
const dot = document.querySelector(".dots");
const operators = document.querySelectorAll(".btn-operator");
const enter = document.querySelector(".equal");
const bksp = document.querySelector(".right");
const clear = document.querySelector(".rigt");

enter.addEventListener("click", () => {
  screen.innerHTML = eval(screen.innerHTML);
});

dot.addEventListener("click", () => {
  if (screen.innerHTML.includes(".")) {
    dot.classList.add("is-depressed");
  } else {
    screen.innerHTML += ".";
  }
});

enter.addEventListener("click", () => {
  let p = eval(screen.innerHTML);
  screen.innerHTML = p;
});

bksp.addEventListener("click", () => {
  if (screen.innerHTML.length > 1) {
    screen.innerHTML = screen.innerHTML.substring(
      0,
      screen.innerHTML.length - 1
    );
  }
});

clear.addEventListener("click", () => {
  screen.innerHTML = "0";
});

operators.forEach((items) => {
  items.addEventListener("click", () => {
    if (screen.innerHTML.includes(items.innerText)) {
      items.classList.add("is-depressed");
    } else {
      screen.innerHTML += items.innerText;
    }
  });
});

nhs.forEach((item) => {
  item.addEventListener("click", () => {
    if (screen.innerHTML == 0) {
      screen.innerHTML = item.innerHTML;
    } else {
      screen.innerHTML += item.innerHTML;
    }
  });
});
