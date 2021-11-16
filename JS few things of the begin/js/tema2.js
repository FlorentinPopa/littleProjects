//declararea unei functii se face cu function

//exemplu f(x) = x * x

function inmultire(x){
    var p = x * x;

    return p;
}

document.write(inmultire(5) + '<br />');


//exercitiu - se creaza o functie ce are ca parametru 2 variabile(numere) si returneaza numarul mai mare
//iar daca numerele sunt egale, sa afiseze rezultatul cu 'numerele sunt egale'

function comparare(a, b){
    if(a > b){
        return a;
    }
    else if(a < b){ 
        return b;}
    else{ return 'Numerele sunt egale'}
}
document.write(comparare(6, 6) + '<br /><hr />');

//Scrieti o functie ce calculeaza aria unei suprafete a unei forme geometrice;
//triunghi dreptunghic, dreptunghi, trapez, etc... folosing 'switch'
// a * b / 2 - aria triunghiului
// a * b - aria dreptunghiului
// ((a + b) * c) / 2 - aria trapezului -> (baza mare * baza mica) * inaltime / 2


function arie(forma, a, b, c){
    var rezultat;
    var pi = 3.14;
    switch(forma){
        case 'triunghi':
            rezultat = a * b / 2;
        break;
        
        case 'dreptunghi':
            rezultat = a * b;
        break;

        case 'trapez':
            rezultat = ((a + b) * c) / 2;
        break;
        
        case 'cerc':
            rezultat = (pi * a * a);
        break;

        default:
            rezultat = 'forma' + forma + 'nu este recunoscuta';
        break;
    }
    return rezultat;
}
document.write('aria triunghiului este: ' + arie('triunghi', 20 , 5) + '<br />');
document.write('aria dreptunghiului este: ' + arie('dreptunghi', 10 , 5) + '<br />');
document.write('aria trapezului este: ' + arie('trapez', 20 , 10 , 15 ) + '<br />');
document.write('Aria cercului este: ' + arie('cerc', 11) + '<br />');
document.write('<br /><hr />');



//Creati o fc ce are 2 param si returneaza nr mai mare sau un mesaj daca sunt egale
function comparatie(x, y){
    if (x > y) return x;
    //return "Numarul mai mare este " + x;
    else if (x < y) return y;
    else return "Numerele sunt egale";
}
document.write("Numarul mai mare este ", comparatie(6,0), "<br>");
var a = 7 + comparatie(5,9);
document.write(a, "<br> <br>");


//functie cu 2 parametri cu afisare numere de la x la y folosing odata for, odata do... while

function numere_for(x ,y){
    var rezultat = [];
    for(i = x; i <= y; i++){
        rezultat.push(i);
    }
    return rezultat;
}

function numere_do_while(x, y){
    var rezultat = [];
    i = x;
    do{
        rezultat.push(i);
        i++;
    }while(i <= y);

    return rezultat;
}

document.write('Afisare numere intre 1 si 10 ' + numere_for(10, 20) + '<br /><hr />');
document.write('Afisare numere intre 15 si 25 ' + numere_do_while(15, 25) + '<br /><hr />');



//exercitiu refacut de Ana:
function afisareFor(x, y){
    for (i = x; i <= y; i++){
      console.log(i);
    }
  }
  function afisareDoWhile(x,y){
    i = x;
    do {
     console.log(i);
     i++;
    }while(i <= y);
  }
  afisareFor(6,5);
  afisareDoWhile(6,5);


  //functie cu 3 parametri care sa returneze un array cu toate numerele de la a -> b divizibile cu c


  document.write('<br /><hr />');




var a = 0;
var b = 500;
function range(a, b) {
  return Array(b - a + 1).fill().map((_, idx) => a + idx)
}
var result = range(a, b - 1);
console.log(result);
var x = result[123];
output = [];
sx = x.toString();
for (i = 0; i < sx.length; i++) {
  output.push(+sx[i]);
}
//document.write(output);
console.log(output);
for (i = 0, sum = 0; i < output.length; sum += output[i++]);
console.log(sum);
if (sum == x) {
  document.write("Numarul " + x + " este un numar Armstrong");
}
else {
  document.write("Numarul " + x + " nu este un numar Armstrong");
}
var prod = 1;
for (i = 0; i < output.length; i++) {
  prod *= output[i];
}
console.log(prod);
if (prod == x) {
  document.write("Numarul " + x + " este un numar Armstrong");
}
else {
  document.write("Numarul " + x + " nu este un numar Armstrong");
}
for (j = 0; j < output.length; j++){
  var z = output[j];
  for (i = 0; i < output.length - 1; i++) {
    output[j] = output[j] * z;
    }
}
console.log(output);