let count = document.querySelector(".count");
let c = 0;
let prev = document.querySelector(".entries");
let p = [];
count.innerHTML = `<p class="count" >${c}</p>`;
function increment() {
  c++;
  count.innerHTML = `<p class="count" >${c}</p>`;
}
function save() {
  if (p.length >= 20) {
    p = [];
  }
  p.push(c);

  c = 0;
  count.innerHTML = `<p class="count" >${c}</p>`;
  prev.innerHTML = `<p> Recent Entries:\n ${p}</p>`;
}
