import { buscarHeroeAsync } from "./promises.js";

const heroesId = ['capi', 'iron', 'spider'];

/*
El await nos permite esperar que se ejecuten las promesas antes de ejecutar alguna
funcionalidad específica

En este caso queremos que nos devuelva un arreglo con los resultados de la función 
asíncrona buscarHeroeAsync()

El await sólo se puede llamar con una función asíncrona, por lo que primero la definimos
como tal, y luego podemos emplear el await

Su funcionalidad queda más clara con las llamadas http, ya que la espera de la respuesta
a la llamada varía en tiempo (desde milésimas hasta segundos), por lo que no podemos ni
debemos configurarlo con un setTimeOut(), es una mala práctica, para eso tenemos el await
*/
export const obtenerHeroesArr = async() => {
    // const heroesArr = [];

    /*
    Pro tip1: no se recomienda añadir el await dentro del bucle for, ya que ejecutaría
    varias veces seguidas, con lo que no estaría bien optimizado. En lugar de ello es mejor
    resolver todas las promesas y luego en el return añadimos el await
    */
    // for(const id of heroesId) {
        // const heroe = await buscarHeroeAsync(id);
        // heroesArr.push(buscarHeroeAsync(id));
    // }

    // return await Promise.all(heroesArr);
    // Pro tip2: manera elegante de resolver la promesa
    return await Promise.all(heroesId.map(buscarHeroeAsync));
}

// Manejo de errores en el await

export const obtenerHeroeAwait = async(id) => {
    /* 
    Para poder manejar los errores del await en lugar de la promesa asíncrona
    debemos emplear el try y catch. Con el try y el catch ya nos devolverá el error
    sin la necesidad de emplear el .catch cuando llamemos la función en el index.js

    Es muy util emplear el catch ya que podríamos devolcer un objeto predterminado
    para no jodernos el código
    */
    try{
        const heroe = await buscarHeroeAsync(id);
        return heroe;

    }catch(err){
        console.log('Catch!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
    }
}