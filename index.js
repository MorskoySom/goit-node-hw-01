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

// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: 'AeHIrLTr6JkxGE6SN-0Rw' });
// invokeAction({ action: "add", name: 'Paha Som', email: 'paha@gmail.com', phone: '(066) 479-3010'});
// invokeAction({ action: "deleteById", id: "6HUvUbjJnP_L8RM4J2z3B" });