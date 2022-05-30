// Aquí definiremos nuestra función de buscarHeroe() que tiene un callback como argumento

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

// El argumento del callback lo podríamos llamar de cualquier manera, pero es el estándar
// llamarlo callback para saber lo que es sólo con verlo
export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];

    callback(heroe);
}