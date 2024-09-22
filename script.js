let header = document.querySelectorAll(".heading span");
let option = document.querySelectorAll(".option");
let question = document.querySelectorAll(".question");
let answer = document.querySelectorAll(".answer");
let arowUp = document.querySelectorAll(".arrow-up-img");
let arowdown = document.querySelectorAll(".arrow-img");

header.forEach((head, index) => {
  head.addEventListener("click", () => {
    header.forEach((e) => {
      e.style.borderBottom = "none";
    });

    option.forEach((opt) => {
      opt.style.display = "none";
    });

    option[index].style.display = "flex";
    head.style.borderBottom = "2px solid red";
  });
});

function line() {
  if (!(option[0].style.display == "flex")) {
    header[0].style.borderBottom = "2px solid red";
  }
}

question.forEach((q, index) => {
  q.addEventListener("click", () => {
    answer[index].classList.toggle("hidden");
    arowUp[index].classList.toggle("hidden");
    arowdown[index].classList.toggle("hidden");
  });
});

let inputEmail = document.querySelector("#input");
let redbox = document.querySelector(".red-box");
let redBox = document.querySelector(".red-box p");

function submit() {

  if (
    inputEmail.value.match(
      /^[A-Za-z0-9._#$%^&*]{3,}@[A-Za-z]{3,}.[A-Za-z]{3,}$/
    )
  ) {
    redBox.style.display= "none";
    inputEmail.value = "";
    redbox.style.border = "";
  } else {
    redbox.style.border = "2px solid red";
    inputEmail.value = "";
    redBox.style.display = "flex";
  }
}

let facebookWhite = document.querySelector("#facebook-white");
let twitterWhite = document.querySelector("#twitter-white");
let rightFooter = document.querySelector(".right-footer");

rightFooter.addEventListener("mouseover", (e) => {
  if (e.target == rightFooter) {
    facebookWhite.src = "./images/icon-facebook.svg";
    twitterWhite.src = "./images/icon-twitter.svg";
  } else if (e.target == facebookWhite) {
    facebookWhite.src = "./images/icon-facebook red.svg";
  } else if (e.target == twitterWhite) {
    twitterWhite.src = "./images/icon-twitter white.svg";
  }
});

let navlist = document.querySelector(".nav-list ul");

function show() {
  console.log(navlist);
  navlist.style.display = "flex";
}

function hide() {
  navlist.style.display = "none";
}
