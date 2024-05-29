const $popup = document.querySelector("#popup");
$popup.children[1].addEventListener("click", dat);

const $footer = document.querySelector("#popup button");
$footer.addEventListener("click", bo);

function dat(){
    $popup.style.display = "none";
}

function bo(){
    $footer.style.display = "none";
}
