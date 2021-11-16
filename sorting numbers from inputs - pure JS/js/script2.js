let arr = [];
const sorteaza = document.querySelector(`#go`);
const afisare = document.querySelector(`.afisare`);
const mesaj = document.querySelector(`.numere`);




sorteaza.onclick = function(e){
    e.preventDefault();
    
    nr1ok = isNumeric(document.forms[`bubleSort`][`input-one`].value);
    nr2ok = isNumeric(document.forms[`bubleSort`][`input-two`].value);
    nr3ok = isNumeric(document.forms[`bubleSort`][`input-three`].value);
    nr4ok = isNumeric(document.forms[`bubleSort`][`input-four`].value);
    nr5ok = isNumeric(document.forms[`bubleSort`][`input-five`].value);

    function BubleSort(arr) {
        for (let i = 0; i < (arr.length - 1); i++){
            for (let j = 0; j < (arr.length -i - 1); j++){
                if (arr[j] > arr[j+1]){
                    let aux = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = aux;
                }
            }
        }
    }
    
    function isNumeric(n) {
        return !isNaN(parseInt(n)) && isFinite(n);
      }

    

    if (nr1ok) {arr.push(parseInt(document.forms[`bubleSort`][`input-one`].value));}
    else {alert(`Primul camp nu contine un numar valid`)};

    if (nr2ok) {arr.push(parseInt(document.forms[`bubleSort`][`input-two`].value));}
    else {alert(`Al doilea camp nu contine un numar valid`)};

    if (nr3ok) {arr.push(parseInt(document.forms[`bubleSort`][`input-three`].value));}
    else {alert(`Al 3-lea camp nu contine un numar valid`)};

    if (nr4ok) {arr.push(parseInt(document.forms[`bubleSort`][`input-four`].value));}
    else {alert(`Al 4-lea camp nu contine un numar valid`)};

    if (nr5ok) {arr.push(parseInt(document.forms[`bubleSort`][`input-five`].value));}
    else {alert(`Al 5-lea camp nu contine un numar valid`)};
    
    if (nr1ok && nr2ok && nr3ok && nr4ok && nr5ok) {
        BubleSort(arr);
        afisare.style.display = `block`;
        mesaj.innerText = arr;
    }
}
