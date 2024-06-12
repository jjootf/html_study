/* for(초기값; 조건식; 증감식){

} */

/*for(let i=0; i<10; i++){
    alert(i);
    if(i == 3){
        document.getElementById("s4").innerHTML = i;
    }
}*/

const ss = document.getElementById("s4");

for(let i = 2; i <=9; i++){
    ss.innerHTML += ( i + "단<br>");
    for(let j=1; j<=9; j++){
        ss.innerHTML += (i + "*" + j + "=" + (i*j) + "<br>");
        console.log(i,j,i*j);
        if(j==9){
            ss.innerHTML += "<br>";
        }
    }
}