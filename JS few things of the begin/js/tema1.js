console.log('Mai jos urmeaza tema 1 - lectia 1')
var T1 = 28;
var T2 = 16;
var T3 = 7;
var T4 = 11;
var T5 = 8;
var T6 = 3;
var diferenta = T1 - T2;
var inmultire = T1 * T2 * T3;
var impartire = T1 / T2;
var rest_impartire = T1 % T2;
var exercitiu = (T1 + T2 + T3 + T4 + T5 + T6)*T5/T3;
var exercitiu_modulo = (T1 + T2 + T3 + T4 + T5 + T6)*T5%T3;

console.log('Diferenta intre ' + T1 + ' si ' + T2 + ' este: ' + diferenta);
console.log('Rezultatul inmultirii intre ' + T1 + T2 +' si ' + T3 + ' este: ' + inmultire);
console.log('Rezultatul impartirii intre ' + T1 + ' si ' + T2 + ' este: ' + impartire);
console.log('Restul impartirii intre ' + T1 + ' si ' + T2 + ' este: ' + rest_impartire);


console.log('Mai jos urmeaza un exercitiu de test');
console.log('('+T1+ '+' +T2+ '+' +T3+ '+' +T4+ '+' +T5+ '+' +T6+')*'+T5+'/'+T3+';');
console.log('Rezultatul este: '+exercitiu+', iar restul impartirii exacte este: '+ exercitiu_modulo);
/* console.log('Rezultatul scaderii intre 28 si 16 este: ' + diferenta);
console.log('rezultatul inmultirii dintre 28 si 16 este: ' + inmultire);
console.log('Rezultatul intreg impartirii intre 28 si 16 este: ' + impartire);
console.log('Restul impartirii intre 28 si 16 este: ' + rest_impartire); */
document.getElementById("ex_diferenta").innerHTML = diferenta;
document.getElementById("ex_inmultire").innerHTML = inmultire;
document.getElementById("ex_impartire").innerHTML = impartire;
document.getElementById("ex_modulo").innerHTML = rest_impartire;
document.getElementById("ex_exercitiu").innerHTML = exercitiu;