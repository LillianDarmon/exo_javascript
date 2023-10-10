function click_(){
var age = document.getElementById("age").value;
if(age >= 18){
  document.getElementById("ef").innerHTML = "Majeur"
}
else{  document.getElementById("ef").innerHTML = "Mineur"
}
}

