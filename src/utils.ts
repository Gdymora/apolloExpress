import fs from "fs";
import { promisify } from 'util'

export const sleepDate = async () => {
    const sleep = promisify(setTimeout);
    const ts = Date.now()
    await sleep(5000)
    return Promise.resolve({ time: Date.now() - ts, date: Date.now() });
}