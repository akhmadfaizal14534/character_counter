const counter = document.getElementById("counter");
const textarea = document.querySelector("textarea");

textarea.addEventListener("input", function (event) {
  const target = event.target;
  const max = target.getAttribute("maxlength");
  const current = target.value.length;
  counter.innerHTML = `${current}/ ${max}`;
});
