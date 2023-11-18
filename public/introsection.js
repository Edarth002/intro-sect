let arrow1 = document.getElementById('arrow1');
let arrow2 = document.getElementById('arrow2');
let arrow3 = document.getElementById('arrow3');
let arrow4 = document.getElementById('arrow4');
let features = document.getElementById('features');
let company = document.getElementById('company');
let features1 = document.getElementById('features1');
let company1 = document.getElementById('company1');
let closemenu = document.getElementById('closemenu');
let menuBtn = document.getElementById('menubtn');
let menu = document.getElementById('menu');
arrow1.addEventListener("mouseover", function () {
    features.style.display = "block";
    arrow1.src = "icon-arrow-up.svg";
});
arrow1.addEventListener("mouseout", function () {
    features.style.display = "none";
    arrow1.src = "icon-arrow-down.svg";
});
arrow2.addEventListener("mouseover", function () {
    company.style.display = "block";
    arrow2.src = "icon-arrow-up.svg";
});
arrow2.addEventListener("mouseout", function () {
    company.style.display = "none";
    arrow2.src = "icon-arrow-down.svg";
});
arrow3.addEventListener("mouseover", function () {
    features1.style.display = "block";
    arrow3.src = "icon-arrow-up.svg";
});
arrow3.addEventListener("mouseout", function () {
    features1.style.display = "none";
    arrow3.src = "icon-arrow-down.svg";
});
arrow4.addEventListener("mouseover", function () {
    company1.style.display = "block";
    arrow4.src = "icon-arrow-up.svg";
});
arrow4.addEventListener("mouseout", function () {
    company1.style.display = "none";
    arrow4.src = "icon-arrow-down.svg";
});
menuBtn.addEventListener("click", function () {
    menu.style.display = "block";
});
closemenu.addEventListener("click", function () {
    menu.style.display = "none"
})