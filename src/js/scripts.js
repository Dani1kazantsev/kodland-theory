var btnStructure = document.querySelector("#structure__btn")
var btnTeg = document.querySelector('#teg__btn')
var btnTegs = document.querySelector('#tegs__btn')
var structure = document.querySelector('#structure')
var teg = document.querySelector('#teg')
var tegs = document.querySelector('#tegs')
btnStructure.onclick = () => {
    if(teg.classList !== "none"){
        teg.classList.add("none")
        structure.classList.remove("none")
        btnStructure.classList.add("active-btn")
        btnTeg.classList.remove("active-btn")
    }
    if(tegs.classList !== "none"){
        tegs.classList.add("none")
        structure.classList.remove("none")
        btnStructure.classList.add("active-btn")
        btnTegs.classList.remove("active-btn")
    }
}
btnTeg.onclick = () => {
    if(structure.classList !== "none"){
        structure.classList.add("none")
        teg.classList.remove("none")
        btnTeg.classList.add("active-btn")
        btnStructure.classList.remove("active-btn")
    }
    if(tegs.classList !== "none"){
        tegs.classList.add("none")
        teg.classList.remove("none")
        btnTegs.classList.remove("active-btn")
    }
}
btnTegs.onclick = () => {
    if(teg.classList !== "none"){
        teg.classList.add("none")
        tegs.classList.remove("none")
        btnTegs.classList.add("active-btn")
        btnTeg.classList.remove("active-btn")
    }
    if(structure.classList !== "none"){
        structure.classList.add("none")
        tegs.classList.remove("none")
        btnTegs.classList.add("active-btn")
        btnStructure.classList.remove("active-btn")
    }
}
