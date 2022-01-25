//js для главной
function OpenAnimate(index) {
  let lessonSpoilerText = document.querySelector(".theory-main-spoiler__text" + index);
  let lessonSpoilerBtn = document.querySelector(".theory-main-spoiler__btn" + index);
  lessonSpoilerText.style.opacity = "1";
  lessonSpoilerBtn.style.opacity = "1";
}

function CloseAnimate(index) {
  let lessonSpoilerBlock = document.querySelector(".spoiler-container" + index);
  let lessonSpoilerText = document.querySelector(".theory-main-spoiler__text" + index);
  let lessonSpoilerBtn = document.querySelector(".theory-main-spoiler__btn" + index);
  lessonSpoilerBlock.style.height = "0px";
  lessonSpoilerBlock.style.display = "none";
  lessonSpoilerBlock.style.padding = "0";
  lessonSpoilerText.style.fontSize = "0px";
  lessonSpoilerText.style.display = "none";
  lessonSpoilerText.style.margin = "0";
  lessonSpoilerBtn.style.fontSize = "0px";
  lessonSpoilerBtn.style.display = "none";
}

// eslint-disable-next-line no-unused-vars
function spoilerOpen(index) {
  for (let i = 1; i < 33; i++) {
    if (i === index) {
      let lessonBlock = document.querySelector(".theory-main__item" + index);
      let lessonBlockLi = document.querySelector(".theory-main__link" + index);
      let lessonSpoilerBlock = document.querySelector(".spoiler-container" + index);
      let lessonSpoilerText = document.querySelector(".theory-main-spoiler__text" + index);
      let lessonSpoilerBtn = document.querySelector(".theory-main-spoiler__btn" + index);
      if (lessonBlock.classList.contains("open")) {
        lessonBlock.classList.remove("open");
        lessonBlock.classList.add("close");
        lessonSpoilerText.style.opacity = "0";
        lessonSpoilerBtn.style.opacity = "0";
        lessonBlockLi.style.color = "#fff";
        lessonBlockLi.classList.remove("theory-main__link_green");
        lessonBlockLi.classList.add("theory-main__link_white");
        setTimeout(CloseAnimate, 100, index);
      } else {
        lessonBlockLi.style.color = "#D0FA61";
        lessonBlock.classList.add("open");
        lessonBlock.classList.remove("close");
        lessonSpoilerBlock.style.height = "auto";
        lessonSpoilerBlock.style.display = "flex";
        lessonSpoilerBlock.style.padding = "0 8% 3% 8%";
        lessonSpoilerText.style.fontSize = "1.2vw";
        lessonSpoilerText.style.marginBottom = "5%";
        lessonSpoilerText.style.display = "block";
        lessonSpoilerBtn.style.fontSize = "1.2vw";
        lessonSpoilerBtn.style.display = "block";
        lessonBlockLi.classList.remove("theory-main__link_white");
        lessonBlockLi.classList.add("theory-main__link_green");
        setTimeout(OpenAnimate, 70, index);
      }
    }
    if (i !== index) {
      if (i !== 0) {
        let lessonBlock = document.querySelector(".theory-main__item" + i);
        let lessonBlockLi = document.querySelector(".theory-main__link" + i);
        let lessonSpoilerText = document.querySelector(".theory-main-spoiler__text" + i);
        let lessonSpoilerBtn = document.querySelector(".theory-main-spoiler__btn" + i);
        lessonBlock.classList.remove("open");
        lessonBlock.classList.add("close");
        lessonSpoilerText.style.opacity = "0";
        lessonSpoilerBtn.style.opacity = "0";
        lessonBlockLi.style.color = "#fff";
        lessonBlockLi.classList.remove("theory-main__link_green");
        lessonBlockLi.classList.add("theory-main__link_white");
        setTimeout(CloseAnimate, 100, i);
      }
    }
  }
}

//js для теорий

var btnStructure = document.querySelector("#structure__btn");
var btnTeg = document.querySelector("#teg__btn");
var btnTegs = document.querySelector("#tegs__btn");
var structure = document.querySelector("#structure");
var teg = document.querySelector("#teg");
var tegs = document.querySelector("#tegs");
btnStructure.onclick = () => {
  if (teg.classList !== "none") {
    teg.classList.add("none");
    structure.classList.remove("none");
    btnStructure.classList.add("active-btn");
    btnTeg.classList.remove("active-btn");
  }
  if (tegs.classList !== "none") {
    tegs.classList.add("none");
    structure.classList.remove("none");
    btnStructure.classList.add("active-btn");
    btnTegs.classList.remove("active-btn");
  }
};
btnTeg.onclick = () => {
  if (structure.classList !== "none") {
    structure.classList.add("none");
    teg.classList.remove("none");
    btnTeg.classList.add("active-btn");
    btnStructure.classList.remove("active-btn");
  }
  if (tegs.classList !== "none") {
    tegs.classList.add("none");
    teg.classList.remove("none");
    btnTegs.classList.remove("active-btn");
  }
};
btnTegs.onclick = () => {
  if (teg.classList !== "none") {
    teg.classList.add("none");
    tegs.classList.remove("none");
    btnTegs.classList.add("active-btn");
    btnTeg.classList.remove("active-btn");
  }
  if (structure.classList !== "none") {
    structure.classList.add("none");
    tegs.classList.remove("none");
    btnTegs.classList.add("active-btn");
    btnStructure.classList.remove("active-btn");
  }
};
