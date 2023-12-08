console.log(`Hello, bro`);

import * as contactSevice from "./contacts.js"

const invokeAction = async ({ action, contactId, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contactSevice.listContacts();
            return console.log(allContacts);
        case "getById":
            const getingContact = await contactSevice.getContactById(contactId);
            return console.log(getingContact);
        case "add":
            const newContact = await contactSevice.addContact(name, email, phone);
            return console.log(newContact);

    }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "getById", contactId: 'AeHIrLTr6JkxGE6SN-0Rw' });
// invokeAction({ action: "add", name: 'Paha Som', email: 'paha@gmail.com', phone: '(066) 479-3010'});