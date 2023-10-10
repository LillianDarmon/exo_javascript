

function click_(){
  var nombre_1 = document.getElementById('nombre_1').value;
  var nombre_2 = document.getElementById('nombre_2').value;
  var resultat = parseFloat(nombre_1) + parseFloat(nombre_2);

  if (isNaN(resultat)){
    alert("erreur");
  }
  
  console.log(resultat);
  

document.getElementById("resultat").innerHTML = resultat;
}

