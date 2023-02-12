let switchCtn = document.getElementById("switch-cnt");
let switchC1 = document.getElementById("switch-c1");
let switchC2 = document.getElementById("switch-c2");
let switchCircle = document.getElementsByClassName("switch_circle");
let switchBtn = document.getElementsByClassName("switch-btn");
let aContainer = document.getElementById("a-container");
let bContainer = document.getElementById("b-container");
let allButtons = document.getElementsByClassName("submit");

let getButtons = (e) => e.preventDefault();
let changeForm = () => {
  // 修改类名
  switchCtn.classList.add("is-gx");
  setTimeout(function () {
    switchCtn.classList.remove("is-gx");
  }, 1500);
  switchCtn.classList.toggle("is-txr");
  switchCircle[0].classList.toggle("is-txr");
  switchCircle[1].classList.toggle("is-txr");

  switchC1.classList.toggle("is-hidden");
  switchC2.classList.toggle("is-hidden");
  aContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-z");
};
// 点击切换
let shell = () => {
  for (var i = 0; i < allButtons.length; i++)
    allButtons[i].addEventListener("click", getButtons);
  for (var i = 0; i < switchBtn.length; i++)
    switchBtn[i].addEventListener("click", changeForm);
};
window.addEventListener("load", shell);
