const wrapper = document.querySelector(".wrapper");

function addElement(countElement, typeElement, className, textContent, parent) {
  for (let i = 0; i < countElement; i++) {
    const item = document.createElement(typeElement);
    item.classList.add(className);
    item.innerHTML = textContent;
    parent.append(item);
  }
}
addElement(5, "button", "button", "Нажми меня!", wrapper);

addElement(
  1,
  "div",
  "counter-wrapper",
  "Общее количесиво нажатий: ",
  document.body
);

const counter = document.querySelector(".counter-wrapper");
addElement(1, "span", "counter", 0, counter);

const span = document.querySelector(".counter");

let count = 0;

wrapper.addEventListener("click", (event) => {
  if (event.target != wrapper) {
    if (event.target.innerHTML == "Нажми меня!") {
      [...wrapper.children].forEach((item) => (item.innerHTML = "Нажми меня!"));
      event.target.innerHTML = "Нажата!";
    } else {
      event.target.innerHTML = "Нажми меня!";
    }
  }
  count++;
  span.innerHTML = count;
});
