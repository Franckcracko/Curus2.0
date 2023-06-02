import path from 'path';
import fsPromises from 'fs/promises';

export async function getCasos () {
    const filePath = path.join(process.cwd(), 'json/casos_desapariciones_mexico.json');
    const json = await fsPromises.readFile(filePath, 'utf8');
    return JSON.parse(json);

}