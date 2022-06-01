import './styles.css';

// Importación de funciones
import { obtenerHeroeAwait, obtenerHeroesArr } from './js/await.js';

// obtenerHeroesArr().then(console.table);

obtenerHeroeAwait('capi').then(console.log);
obtenerHeroeAwait('capi2').then(console.log);