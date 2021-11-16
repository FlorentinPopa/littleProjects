// Exercitiul 1 - Scrieti o functie cu 3 parametri (a,b,c), care sa returneze un array cu toate numerele de la a pana la b, divizibile cu c.

function numere_divizibile(a, b, c) {
var numere = [];
for(i = a; i <= b; i++){
    if(i % c == 0){
        numere.push(i);
    }
}
return numere;
}
var a = 1;
var b = 200;
var c = 7;
//var a = prompt('Introduceti numarul de inceput');
//var b = prompt('Introduceti numarul de sfarsit');
//var c = prompt('Introduceti numarul cu care doriti sa fie sir-ul divizibil');
document.getElementById('ex1').innerHTML = 'Numerele divizibile cu ' + c + ' in intervalul: ' + a + ' - ' + b + ' sunt: <br />' + numere_divizibile(a, b, c);


//Exercitiul 2 - Write a function with will output a multiplication table with size of a given argument. - aici veti folosi matrice (array de array)
function tabel(n){
var m = [];
var ht = '';
for (var i = 1; i <= n; i++) {
    m[i] = [];
    ht += '<p>';
    for (var j = 1; j <= n; j++) {
        m[i][j] = (i*j);
        ht += m[i][j] + ' ';
    }
    ht += '</p>';
}
m.pop();
return ht;
}

document.getElementById('ex2').innerHTML = tabel(3);
//Exercitiul 3 - Write a function, outputting a christmas tree of a given height, made of asterisk * character

function copac(h1){
    var t = '';
    for(var i = 1; i <= h1; i++){
        for(var j = i; j < h1; j++){
            t += '';
        }
        for(j = 1; j <=(2*i-1); j++){
            t += '*';
        }
        t += '<br />';
    }
    return t;
}
document.getElementById('ex3').innerHTML = copac(8);

/*
function drawTree(height) {
  for (var i = 0; i < height; i++) {
    // 2n+1 stars per row i.e. 1, 3, 5, 7, ...
    var stars = '*'.repeat(2 * i + 1);
    var spacesBefore = ' '.repeat(height - i - 1);
    console.log(spacesBefore + stars);
    }
  }


drawTree(prompt('How many levels high should be the tree?'));
*/

//Exemplu cum definim o matrice in JS (mot a mot);
var tt = [];
tt[0] = [];
tt[0][0] = 'A';
tt[0][1] = 'B';
tt[0][2] = 'C';
tt[1] = [];
tt[1][0] = 'A1';
tt[1][1] = 'B1';
tt[1][2] = 'C1';
tt[2] = [];
tt[2][0] = 'A2';
tt[2][1] = 'B2';
tt[2][2] = 'C2';
console.log(tt);



function copac2(h1){
    var t = '';
    for (var k = 1; k <= 2*h1-1; k++){
        t += '*';
    }
    t += '<br />';
    for(var i = 1; i < h1; i++){
        for(var j = i; j < h1; j++){
            t += '*';
        }
        for(j = 1; j <=(2*i-1); j++){
            t += ' ';
        }
        for(var j = i; j < h1; j++){
            t += '*';
        }
        if (i !== h1){ t += '<br />'; }
    }
    for (var k = 1; k <= 2*h1-1; k++){
        t += '*';
    }
    return t;
}
document.getElementById('ex4').innerHTML = copac2(8);