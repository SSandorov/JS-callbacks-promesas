import './styles.css';

// Importamos las funciones
import { promesaLenta, promesaMedia, promesaRapida } from './js/promises.js';
import { buscarHeroe, buscarHeroeAsync } from './js/promises.js';

// estas son dos formas idénticas de hacer la llamada con una solo argumento
promesaLenta.then(mensaje => console.log(mensaje));
promesaMedia.then(console.log);
promesaRapida.then(console.log);

// El Promise.race nos devuelve el valor de la primera promesa que se ejecuta
// eso quiere decir, que aunque las promesas más lentas tienen un error, este nunca llega
// a ejecutarse

Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then(console.log);

// Comparación entre promesas y funciones asíncronas
buscarHeroe('capi2')
    .then(heroe => console.log(heroe))
    .catch(console.error);
buscarHeroeAsync('iron2')
    .then(heroe => console.log(heroe))
    .catch(console.error);
