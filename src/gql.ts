
import { sleepDate } from "./utils";
export default {
    Query: {      
       getCurrentDate: () => Date.now(),
       getCurrentDateSleepDate: async () => { return await sleepDate() }
    },
}