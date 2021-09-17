// Implementando o desafio. Colocando o "toFixed()" no final de uma linha, fazendoo assim o código ficar mais limpo e legível.
// Completo

var nome = "Thallia";

var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 8;
var notaDoTerceiroBimestre = 9.6;
var notaDoQuartoBimestre = 10;

var notaFinal = ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1);

console.log("Bem vinda " + nome + "! Sua média foi de " + notaFinal);