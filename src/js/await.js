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
    const heroesArr = [];

    for(const id of heroesId) {
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }

    return heroesArr;
}