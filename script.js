const kensakuran = document.querySelector(".kensakuran");
const searchbutton = document.querySelector(".search");
const basho = document.querySelector(".basho");
const kensakukekka = document.querySelector(".kensakukekka");
const form = document.querySelector(".form");
function show(thing) {
    thing.classList.add("show");
    thing.classList.remove("none");
}
function none(thing) {
    thing.classList.add("none");
    thing.classList.remove("show");
}
function search(event) {
    event.preventDefault();
    var ving = kensakuran.value;
    console.log("検索ワード:", ving); 
    if (ving === "フラット") {
        show(kensakukekka);
        none(basho);
    } else if (ving === "マップ") {

    }
};
form.addEventListener('submit', search);