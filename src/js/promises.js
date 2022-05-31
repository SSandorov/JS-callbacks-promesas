/*
Una promesa en programación, al igual que una promesa en la vida real, supone:
    - Un acuerdo entre dos partes a través de la cual una de las partes se compromete a
    realizar algo ante el cumplimiento de una condición o el vencimiento de un plazo
*/

// Esta suele ser la estructura de bases de datos no relacionales como Mongo o Firebase
const heroes = {
    capi : {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Iron Man',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spider Man',
        poder: 'La mejor reacción alérgica a las picaduras de arañas'
    }
}

// Así es como definimos una promesa
export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    // la promesa se define en el retorno de la función
    // Como argumento recibe un callback, el cual tiene dos argumentos opcionales, los
    // cuales controlan cuando todo sale correctamente o cuando hay algún error
                // también escritos como res, rej
    return new Promise((resolve, reject) => {
        if(heroe) {
            // dentro del resolve podemos mandar todos los argumentos que queramos
            // incluidos objetos o arreglos
            resolve(heroe);
        } else {
            reject(`No existe un héroe con el id ${id}`);
        }
    });
}