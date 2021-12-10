import fs from 'fs';
import movies from '../data/movies.js';

// afegiu codi per llegir './data/movies.json'
//ller json y devuele array de pelis
const path = '../data/movies.json';

try {
    const data = JSON.parse(fs.readFileSync(path, 'utf-8'));
    console.log("Contenido", data)
} catch (error) {
    console.log(error.message);
}

export default{
    data
}



