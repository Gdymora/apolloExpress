import fs from "fs";
import { promisify } from 'util'

export async function loadFile() {
    try {
        const text = await fs.promises.readFile("src/data.json", "utf8");
        return JSON.parse(text).books;
    } catch (error) {
        console.log(`There was an error trying to open json: ${error}. discarded file`)
    }
}

export async function loadFilePromisify() {
    const readFileAsync = promisify(fs.readFile)
    try {
        const text = await readFileAsync("src/data.json", { encoding: 'utf8' });
        return JSON.parse(text).books;
    } catch (error) {
        console.error(`There was an error trying to open json: ${error}. discarded file`)
    }
}

export const getProducts = async () => {
    const books =
        [{
            title: 'The Awakening',
            author: 'Kate Chopin',
            getCurrentDate: Date.now()
        },

        {
            title: 'The Awakening',
            author: 'Kate Chopin',
            getCurrentDate: Date.now()
        }];
    return Promise.resolve(books);
}

export const sleepDate = async () => {
    const sleep = promisify(setTimeout);
    const ts = Date.now()
    await sleep(5000)
    return Promise.resolve({ time: Date.now() - ts, date: Date.now() });
}