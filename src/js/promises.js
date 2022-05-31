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

// Así es como definimos una función asíncrona
// con el async no tenemos que crear una nueva instancia de la clase Promise
export const buscarHeroeAsync = async(id) => {

    const heroe = heroes[id];

    if(heroe) {
        // es igual que el resolve en la promesa
        return heroe;
    } else {
        // esta es la manera que manejamos los errores
        // si fuese un error inesperado le añadiríamos throw Error() para espeficicarnos
        // la línea del error y cual puede ser el fallo
        throw `No existe un héroe con el id ${id}`;
    }
}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa Rapida'), 1000);
});

// Manera alternativa de exportar funciones
export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}