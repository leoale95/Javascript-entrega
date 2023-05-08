function AdivinarNumero(){
    //Variables
    const numeroganador = 4 /* no varia por eso const */
    let aciertos = 0 
    let numero;

    // loop para ingresar datos via prompt
    for (let i = 0; i < 2; i++) {
        numero = parseInt(prompt(`Ingrese un numero (Menos de 10)`));
        // Validar los datos ingresados con IF
        if (numero < 1 || numero > 10 || isNaN(numero) ) {
            alert("Numero invalido. Ingrese un numero del 1 al 10");
            i--;
            continue;
        }

        // verificar numero ingresado sea igual al numero elegido
        if (numero === numeroganador) {
            aciertos++
        }
    }

    
    //Determinar el premio
    let premio = " "
    if (aciertos === 1) {
        premio = "Ganaste la loteria"
    } else {
        premio = "Segui participando";
    }

    // Resultado
    alert (`Numeros ganadores: ${numeroganador}
    Aciertos: ${aciertos}
    Premio:${premio}    
    `);
        
    console.log(`Numeros ganadores: ${numeroganador}
    Aciertos: ${aciertos}
    Premio:${premio}    
    `);
}

AdivinarNumero();




   