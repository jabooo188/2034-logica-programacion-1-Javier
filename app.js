let numSecret = Math.floor(Math.random() * 100)+1;
let num1 = 0;
let intentos = 1;
let maxIntentos = 4;

//let palabraVeces = 'vez'
//console.log(num1);

//comparacion
while (numSecret != num1, numSecret > 1) {
    
    let num1 = parseInt(prompt('Adivina el número entre 1 y 100'));

    if (num1 == numSecret){
        alert(`Exacto! ese es el numero. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (num1 > numSecret){
            alert('El numero es menor');
        } else {
            alert('El numero es mayor');
        }
        
        intentos++;
        //palabraVeces = 'veces'

        if (intentos > maxIntentos){
            alert(`Excediste el numero de intentos. El numero es ${numSecret}`);
            break;
        }
    };
    
};

console.log(numSecret);