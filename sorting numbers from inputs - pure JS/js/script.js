const nrOne = document.querySelector(`#input-one`);
const nrTwo = document.querySelector(`#input-two`);
const nrThree = document.querySelector(`#input-three`);
const nrFour = document.querySelector(`#input-four`);
const nrFive = document.querySelector(`#input-five`);
const sorteaza = document.querySelector(`#go`);
const afisare = document.querySelector(`.afisare`);
const mesaj = document.querySelector(`.numere`);



sorteaza.onclick = function(e){
    e.preventDefault();

    let arr = [];
function BubleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j+1]){
                let aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
            }
        }
    }
}

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }

    nr1ok = isNumber(nrOne.value);
    nr2ok = isNumber(nrTwo.value);
    nr3ok = isNumber(nrThree.value);
    nr4ok = isNumber(nrFour.value);
    nr5ok = isNumber(nrFive.value);

    if (nr1ok) {arr.push(nrOne.value);}
    else {alert(`Primul camp nu contine un numar valid`)};

    if (nr2ok) {arr.push(nrTwo.value);}
    else {alert(`Al doilea camp nu contine un numar valid`)};

    if (nr3ok) {arr.push(nrThree.value);}
    else {alert(`Al 3-lea camp nu contine un numar valid`)};

    if (nr4ok) {arr.push(nrFour.value);}
    else {alert(`Al 4-lea camp nu contine un numar valid`)};

    if (nr5ok) {arr.push(nrFive.value);}
    else {alert(`Al 5-lea camp nu contine un numar valid`)};
    
    if (nr1ok && nr2ok && nr3ok && nr4ok && nr5ok) {
        BubleSort(arr);
        afisare.style.display = `block`;
        mesaj.innerText = arr;

    }

    
}