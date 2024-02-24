let L = document.querySelectorAll(".nav-list li");

let button = document.getElementById("btn");

let drop = document.getElementsByClassName("drop-down");

let list = document.querySelector("ul");

L.forEach((list) => {
  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
    }
  });
});

button.addEventListener("click", () => {
  if (button.classList.contains("active-2")) {
    button.classList.remove("active-2");
  } else {
    button.classList.add("active-2");
  }
});

drop[0].addEventListener("click", () => {
  if (list.classList.contains("nav-list")) {
    list.classList.remove("nav-list");
    list.classList.add("visible");
  } else {
    list.classList.remove("visible");
    list.classList.add("nav-list");
  }
});
