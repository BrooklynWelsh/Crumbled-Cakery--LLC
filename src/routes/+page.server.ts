// import fs from 'fs';

// /** @type {import('./$types').PageServerLoad} */
// export function load() {
//     const dirents = fs.readdirSync(`/images/products/`, { withFileTypes: true });
//     return {
//         images: dirents
//             .filter(dirent => dirent.isFile())
//             .map(dirent => dirent.name)
//     };
// }