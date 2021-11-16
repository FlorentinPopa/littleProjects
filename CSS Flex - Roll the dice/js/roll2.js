let fata1 = `<i class="punct">
                </i>`;

let fata2 = `<i class="punct"></i>
                <i class="punct">
                </i>`;

let fata3 = `<i class="punct">
                </i>
                <i class="punct">
                </i>
                <i class="punct">
                </i>`;

let fata4 = `<i class="column">
                <i class="punct"></i>
                <i class="punct"></i>
                </i>
                <i class="column">
                <i class="punct"></i>
                <i class="punct"></i>
                </i>`;

let fata5 = `<i class="column">
                <i class="punct"></i>
                <i class="punct"></i>
                </i>
                <i class="column">
                <i class="punct"></i>
                </i>
                <i class="column">
                <i class="punct"></i>
                <i class="punct"></i>
                </i>`;

let fata6 = `<i class="column">
                <i class="punct"></i>
                <i class="punct"></i>
                <i class="punct"></i>
                </i>
                <i class="column">
                <i class="punct"></i>
                <i class="punct"></i>
                <i class="punct"></i>
                </i>`;

let zar = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }



let result1;
let result2;
let zar1;
let zar2;

function zarul1(){
    zar1 = document.querySelector(`#dice1`);
    if (result1) { 
        zar1.classList.remove(`zar`, `face-${result1}`); 
    }
    zar1.innerHTML = '';
    result1 = zar.roll();
    zar1.style.display = `flex`;
    zar1.classList.add(`zar`, `face-${result1}`);
    
    switch (result1) {
        case 1: zar1.innerHTML = fata1;
            break;
        case 2: zar1.innerHTML = fata2;
            break;
        case 3: zar1.innerHTML = fata3;
            break;
        case 4: zar1.innerHTML = fata4;
            break;
        case 5: zar1.innerHTML = fata5;
            break;
        case 6: zar1.innerHTML = fata6;
            break;
    }
}

function zarul2() {
    zar2 = document.querySelector(`#dice2`);
    if (result2) {
        zar2.classList.remove(`zar`, `face-${result2}`);
    }
    zar2.innerHTML = '';
    result2 = zar.roll();
    zar2.style.display = `flex`;
    zar2.classList.add(`zar`, `face-${result2}`);
    
    switch (result2) {
        case 1: zar2.innerHTML = fata1;
            break;
        case 2: zar2.innerHTML = fata2;
            break;
        case 3:zar2.innerHTML = fata3;
            break;
        case 4: zar2.innerHTML = fata4;
            break;
        case 5: zar2.innerHTML = fata5;
            break;
        case 6: zar2.innerHTML = fata6;
            break;
    }
}


  let button = document.getElementById('button');
  button.onclick = function () {
    
    let hotelVechi;
    if (result1 && result2) {
    hotelVechi = document.querySelector(`#hotel-${result1+result2}`);
    hotelVechi.style.display = null;
    }

    zarul1();
    zarul2();

    let hotel;
    hotel = document.querySelector(`#hotel-${result1+result2}`);
    hotel.style.display = `flex`;
}