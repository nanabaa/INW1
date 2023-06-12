function calcular(){

let nome =String(document.getElementById("inputNomeMed").value);
let valor =parseFloat(document.getElementById("inputValorMed").value);
let quantidade =parseFloat(document.getElementById("inputQuantMed").value);
let res=0;

if (quantidade>1){
res=(Math.floor(`${valor}`)*quantidade);

}
else{
    res=valor
}

document.getElementById("textoPromocao").innerHTML=`O produto é ${nome} e com deconto você pagará ${res}`;
}