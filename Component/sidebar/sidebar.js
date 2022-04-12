let list = document.querySelectorAll(".list");
let navigation = document.querySelector(".navigation");
let toggle = document.querySelector(".toggle");
let darkMode = document.querySelector(".darkMode");
let img = document.querySelector(".side-img");
let logo = document.querySelector(".side-img-logo");
let body = document.querySelector("body");
let bigCard = document.querySelector('.card-big');
let homeCards = document.getElementsByClassName('.card');
let dataBar = document.querySelector('#dataBar');
// 
for (let i = 0; i < list.length; i++) {
  list[i].onclick = () => {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  };
}
//  Sidebar 
toggle.onclick = () => {
  navigation.classList.toggle("navigation-active");
  toggle.classList.toggle("active");
  img.classList.toggle("on");
  // logo.classList.toogle("hide")
};