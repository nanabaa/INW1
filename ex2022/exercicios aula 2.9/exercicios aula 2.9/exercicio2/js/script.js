function calcular(){

let raio =parseFloat(document.getElementById("inputRaio").value);
let area;
let comprimento;

area= (Math.PI) * Math.pow(raio,2);
comprimento=2*(Math.PI)*raio;

document.getElementById("resultado").innerHTML=`A area do circulo é ${area.toFixed(2)} e o comprimento é ${comprimento.toFixed(2)}`;
}