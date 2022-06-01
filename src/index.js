import './styles.css';

// Importación de funciones
import { obtenerHeroesArr } from './js/await.js';

obtenerHeroesArr().then(console.table);
