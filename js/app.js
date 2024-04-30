//Primer modal normal de éxito
const submitBtn = document.getElementById("btn__submit");
const successModal = document.getElementById("successModal");
const closeModal = document.getElementById("close");

submitBtn.addEventListener("click", () =>{
    successModal.classList.add("show");
});

closeModal.addEventListener("click", () => {
    successModal.classList.remove("show");
});

//Responsive primer modal de éxito

const submitResponsive = document.getElementById("btn__responsive");
const responsiveModal = document.getElementById("form__responsive");
const closeResponsiveModal = document.getElementById("close__responsive");

submitResponsive.addEventListener("click", () =>{
    responsiveModal.classList.add("show");
});

closeResponsiveModal.addEventListener("click", () => {
    responsiveModal.classList.remove("show");
});
//===============================================================================

//Modales de precios en full resolution
const priceLP = document.getElementById("price__LP");
const priceEC = document.getElementById("price__EC");
const priceSL = document.getElementById("price__SL");
const modalLP = document.getElementById("priceModal__LP");
const modalEC = document.getElementById("priceModal__EC");
const modalSL = document.getElementById("priceModal__SL");
const closeLP = document.getElementById("close__LP");
const closeEC = document.getElementById("close__EC");
const closeSL = document.getElementById("close__SL");
const cancelLP = document.getElementById("cancel__LP");
const cancelEC = document.getElementById("cancel__EC");
const cancelSL = document.getElementById("cancel__SL");

priceLP.addEventListener("click", () => {
    modalLP.classList.add("show");
});
priceEC.addEventListener("click", () => {
    modalEC.classList.add("show");
});
priceSL.addEventListener("click", () => {
    modalSL.classList.add("show");
});

closeLP.addEventListener("click", () => {
    modalLP.classList.remove("show");
});
closeEC.addEventListener("click", () => {
    modalEC.classList.remove("show");
});
closeSL.addEventListener("click", () => {
    modalSL.classList.remove("show");
});

cancelLP.addEventListener("click", () => {
    modalLP.classList.remove("show");
});
cancelEC.addEventListener("click", () => {
    modalEC.classList.remove("show");
});
cancelSL.addEventListener("click", () => {
    modalSL.classList.remove("show");
});

//========================================================================

//Modales de precios responsive

const priceResponsiveLP = document.getElementById("priceResponsive__LP");
const priceResponsiveEC = document.getElementById("priceResponsive__EC");
const priceResponsiveSL = document.getElementById("priceResponsive__SL");
const modalResponsiveLP = document.getElementById("priceModalResponsive__LP");
const modalResponsiveEC = document.getElementById("priceModalResponsive__EC");
const modalResponsiveSL = document.getElementById("priceModalResponsive__SL");
const closeResponsiveLP = document.getElementById("closeResponsive__LP");
const closeResponsiveEC = document.getElementById("closeResponsive__EC");
const closeResponsiveSL = document.getElementById("closeResponsive__SL");
const cancelResponsiveLP = document.getElementById("cancel__responsive__LP");
const cancelResponsiveEC = document.getElementById("cancel__responsive__EC");
const cancelResponsiveSL = document.getElementById("cancel__responsive__SL");

priceResponsiveLP.addEventListener("click", () => {
    modalResponsiveLP.classList.add("show");
});
priceResponsiveEC.addEventListener("click", () => {
    modalResponsiveEC.classList.add("show");
});
priceResponsiveSL.addEventListener("click", () => {
    modalResponsiveSL.classList.add("show");
});

closeResponsiveLP.addEventListener("click", () => {
    modalResponsiveLP.classList.remove("show");
});
closeResponsiveEC.addEventListener("click", () => {
    modalResponsiveEC.classList.remove("show");
});
closeResponsiveSL.addEventListener("click", () => {
    modalResponsiveSL.classList.remove("show");
});

cancelResponsiveLP.addEventListener("click", () => {
    modalResponsiveLP.classList.remove("show");
});
cancelResponsiveEC.addEventListener("click", () => {
    modalResponsiveEC.classList.remove("show");
});
cancelResponsiveSL.addEventListener("click", () => {
    modalResponsiveSL.classList.remove("show");
});