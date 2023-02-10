let divInput = document.querySelectorAll(".input-text");
let input = document.querySelectorAll(".input");
let submit = document.querySelector("[type=button]");

submit.onclick = () => {
  input.forEach((input) => {
    input.value === "" ? divInput.forEach((el) => el.classList.add("done")) : divInput.forEach((el) => el.classList.remove("done"));
  });
};