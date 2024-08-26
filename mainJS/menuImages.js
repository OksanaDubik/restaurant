//Присваивание id элементу li / ul class ="menu-block__left-list"
let getList = document.querySelector(".menu-block__left-list")
let listItem = getList.querySelectorAll("li")

for (let i = 0; i < listItem.length; i++) {
    listItem[i].setAttribute("id", i)
}

let menuLeft = document.querySelector(".menu-left")
let menuRight = document.querySelector(".menu-right")

//добавление класса анимации
function toggleAnimationClass() {
    menuLeft.classList.add("animationMenuImage")
    menuRight.classList.add("animationMenuImage1")
}

//смена изображения в зависимости от выбранного пункта меню
listItem.forEach(elem => {

    elem.addEventListener("click", function () {
        menuLeft.style.cssText = `background-image: url(./images/animation/${elem.id * 2}.jpg);`
        menuRight.style.cssText = `background-image: url(./images/animation/${elem.id * 2 + 1}.jpg);`
        toggleAnimationClass()
    })

})
document.querySelector(".menu-block__right").addEventListener("click", function () {
    menuLeft.style.cssText = `
    background-image: url(./images/secondPage/leftImage.jpg);
      `
    menuRight.style.cssText = `
     background-image: url("./images/secondPage/rightImage.jpg")
    `
})









