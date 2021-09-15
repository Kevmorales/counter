// låt count börja på 0. 
let count = 0;

//få tag på knapp tryck och värdet
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); //istället för att välja dem en och en så valde vi alla via klassen
console.log(btns); // kolla så alla buttons hämtas


//väljer varje button för sig
btns.forEach(function (btn) {

    console.log(btn);

        btn.addEventListener("click", function (e){ 

             const styles = e.currentTarget.classList;
                console.log(styles); // visar dens clas

                if (styles.contains("decrease")) {
                 count--; // räknar ner
                 console.log(count); // checka så de funkar
             } else if (styles.contains("increase")) {
                 count++;
                 console.log(count);
             } else{ // finns bara tre knappar så else funkar bra
                 count = 0;
                 console.log(count);
             }

             if (count < 0) {
                 value.style.color = "red"
             }

             if (count > 0) {
                value.style.color = "green"
            }
                if (count === 0) {
                    value.style.color = "#222"
                }

                value.textContent = count; //span med id value överskrivs av count

});

});