// Importamos el archivo de estilos global
import './styles.css';

// Importar función buscarHeroe
import { buscarHeroe } from './js/callbacks.js';

const heroeId = 'capi';
const heroeId2 = 'iron';
/*
Los callbacks cada vez están más en desuso a favor de las promesas, pero es importante 
conocerlas para poder emplearlas en un futuro o poder reconocerlas en el código de otras
personas.

Los callbacks se desarrollaron con la finalidad de realizar peticiones que se realizan a 
destiempo aunque los callbacks sean ejecutados de manera sequencial

Un callback es una función mandada como un argumento en un método como el siguiente
*/

                        // Primero recibe el error
buscarHeroe(heroeId, (err, heroe) => {
    // esto es un callback
    //console.log(heroe);

    // sino hay un id correcto nos devuelve undefined, por ello debemos manejar los errores
    // con los callback
    if(err) {
        console.error(err)
    } else {
        console.log(heroe);
    }

    /*
    El callback hell es cuando anidamos muchos callbacks dentro de otros callbacks, lo cual 
    se vuelve insostenible, por ello se desarrollaron las promesas
    */
    buscarHeroe(heroeId2, (err, heroe2) => {
        if(err) {
            console.error(err)
        } else {
            console.log(heroe);
        }

        console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la misión`);
    })
    
});

