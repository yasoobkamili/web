let ct = document.querySelector("#count");
let nm = document.querySelector("#buttun");
let c = 0;
let name = `<p class="arabic-text">سبحان الله</p>`;
nm.innerHTML = name;
ct.innerHTML = `<p>${c}</p>`;

let flag = 0;
function tasbih() {
  if (c == 33) {
    if (flag == 1) {
      c = 0;
      nm.innerHTML = `<p class="arabic-text">الله أكبر</p>`;
      flag = 2;
    } else if (flag == 0) {
      c = 0;
      nm.innerHTML = `<p class="arabic-text">الحمد لله</p>`;
      flag++;
    } else {
      c = 0;
      nm.innerHTML = `<p class="arabic-text">سبحان الله</p>`;
      flag = 0;
    }
  }
  c++;
  ct.innerHTML = `<p>${c}</p>`;
}
