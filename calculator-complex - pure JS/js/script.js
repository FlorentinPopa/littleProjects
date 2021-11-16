let adunare = (a, b) => a + b;
let scadere = (a, b) => a - b;
let inmultire = (a, b) => a * b;
let impartire = (a, b) => {
    if (b !== 0) return (a / b).toFixed(2);
}
let divizor = (a, b) => ((a*b)/100).toFixed(2);

window.onload = function() {
    const buttons = document.querySelectorAll(`button`);
    const operator = document.querySelectorAll(`operator`);
    const punct = document.querySelector(`.punct`);
    const afiseaza = document.querySelector(`#result p`);
    const submit = document.getElementById(`go`);
    // const egal = document.querySelector(`.egal`);
    const stergere = document.getElementById(`goleste`);
    
    

    buttons.forEach(function(button) {

        
        button.addEventListener('click', calculeaza);

    });
        stergere.addEventListener('click', sterge);

        let nrOne = '';
        let nrTwo = '';
        let aux = '';
    
        function sterge(){
            nrOne = "";
            nrTwo = "";
            aux = "";
            result = "";
            afiseaza.innerText = "0";
        }

        function calculeaza(event) {
        
        let clear = '';
        let clickedButtonValue = event.target.value;
        
        console.log(clickedButtonValue);
        console.log("\n");

        if (clickedButtonValue !== "inmultire" && clickedButtonValue !== `impartire` && clickedButtonValue !== `adunare` && clickedButtonValue !== `scadere` && clickedButtonValue !== `punct` && clickedButtonValue !== `egal` && clickedButtonValue !== `la-suta`) { 
        nrOne += parseInt(clickedButtonValue);
        afiseaza.innerText = nrOne;
        }

        else if (clickedButtonValue === "inmultire" || clickedButtonValue === `impartire` || clickedButtonValue === `adunare` || clickedButtonValue === `scadere` || clickedButtonValue === `la-suta`){
            if (!!nrOne){
            nrTwo = nrOne;
            }
            nrOne = "";
            aux  = clickedButtonValue;
            afiseaza.innerText = aux;
        }

    
        function rezultatFinal (x, y, oper) {
            let result = oper(x, y);
            afiseaza.innerText = result;
        }

    
    function egal() {
        switch (aux) {
            case `adunare`:
                rezultatFinal(nrTwo, nrOne, adunare);
                break
            
            case `scadere`:
                rezultatFinal(nrTwo, nrOne, scadere);
                break

            case `inmultire`:
                rezultatFinal(nrTwo, nrOne, inmultire);
                break

            case `impartire`:
                rezultatFinal(nrTwo, nrOne, impartire);
                break

            case `la-suta`:
                rezultatFinal(nrTwo, nrOne, divizor);
                break
        }
    }

    if (clickedButtonValue === `egal`){
        egal()
    }
    console.log(nrOne);
    console.log(nrTwo);
    console.log(aux);
    }   
}