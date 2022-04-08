
import { loadFile, loadFilePromisify, getProducts, sleepDate } from "./utils";
export default {
    Query: {
        hello() {
            return 'world'
        },
        totalPosts: () => 42,
        booksloadFile: async () => { return await loadFile() },
        booksloadFilePromisify: async () => { return await loadFilePromisify() },
        books: async () => { return await getProducts() },
        getCurrentDate: () => Date.now(),
       getCurrentDateSleepDate: async () => { return await sleepDate() }
    },
}