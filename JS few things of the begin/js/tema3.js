
//Exercitiul 1
// Write a program to print out all Armstrong numbers between 1 and 500. 
// If sum of cubes of each digit of the number is equal to the number itself, then the number is called an Armstrong number.
// For example, 153 = ( 1 * 1 * 1 ) + ( 5 * 5 * 5 ) + ( 3 * 3 * 3 )

var numar;
var cifra;
var sum = 0;
var ams = [];
for(var i = 1; i<=500; i++){
    numar = i;
    while(numar > 0){
        cifra = numar % 10;
        sum = sum + (cifra * cifra * cifra);
        numar = parseInt(numar / 10);
    }
    if(sum == i){
        ams.push(i+" ");
    }
    sum = 0;
}
document.write('Numerele lui Amstrong in intervalul 1-500 sunt: <br />' + ams + '<br /><hr />');


//Exercitiul 2
// Ex2:  Scrieti un program care verifica daca un string este palindrom. 
// Un cuvant palindrom este un cuvant care citit de la cap la coada, sau de la coada la cap, este identic 
// (Ex: ANA, COJOC).

var text = 'ana';
var lungime = text.length;
var palindrom;
for(var i = 0; i < lungime / 2; i++){
    if(text[i] !== text[lungime - 1 -i]){
        palindrom = false;
    }
    else{
        palindrom = true;
    }
}
if(palindrom === true){
document.write('Cuvantul ' + text + ' este palindrom.');
}
else{
    document.write('Cuvantul <strong>' + text + '</strong> nu este palindrom.');
}
console.log(palindrom);