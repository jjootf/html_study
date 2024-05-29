const $popup = document.querySelector("#popup");
$popup.children[1].addEventListener("click", dat);

const $footer = document.querySelector("#popup button");

function dat(){
    $popup.style.display = "none";
}