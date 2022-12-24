import fs from 'fs';

/** @type {import('./$types').PageServerLoad} */
export function load() {
    return {
        images: fs.readdirSync('src/images/carousel')
    };
}