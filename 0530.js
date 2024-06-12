const cell_1 = document.getElementById("s1");
const cell_2 = document.getElementById("s2");
const cell_3 = document.getElementById("s3");
const cell_4 = document.getElementById("s4");

const cc1 = Number(cell_1.innerHTML);
//alert(cc1);
const cc2 = Number(cell_2.innerHTML);
//alert(cc2);

cell_3.innerHTML = ((cc1+cc2)/2);