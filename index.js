console.log(`Hello, bro`);

import { program } from "commander";
import * as contactSevice from "./contacts.js"

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contactSevice.listContacts();
            return console.log(allContacts);
        case "getById":
            const getingContact = await contactSevice.getContactById(id);
            return console.log(getingContact);
        case "add":
            const newContact = await contactSevice.addContact(name, email, phone);
            return console.log(newContact);
        case "deleteById":
            const deleteContact = await contactSevice.removeContact(id);
            return console.log(deleteContact);
    }
}

invokeAction(argv);
