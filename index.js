console.log(`Hello, bro`);

import * as contactSevice from "./contacts.js"

const invokeAction = async ({ action }) => {
    switch (action) {
        case "list":
            const allContacts = await contactSevice.listContacts();
            return console.log(allContacts);
    }
}

invokeAction({ action: "list" });