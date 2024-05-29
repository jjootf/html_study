const $popup = document.querySelector("#popup");
$popup.children[1].addEventListener("click", dat);

function dat(){
    $popup.style.display = "none";
}

function bo(){
    $popup.style.display = "block";
}