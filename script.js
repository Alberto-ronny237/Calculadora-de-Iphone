

function calcular(){
var resultado = document.getElementById('resultado').innerHTML;
if(resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado);
}}
function limparCampoInput(resultado) {
    var campoInput = document.getElementById('resultado');
    campoInput.innerHTML = '';
}

function pegar(num){
    let n = num;
var numero = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = numero + n;
}
function removerNumero(){
var resultado = document.getElementById('resultado').innerHTML;   
document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) 
}