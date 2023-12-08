import fs from "fs/promises";
import path from "path";
import { nanoid } from 'nanoid';

const contactsPath = path.resolve("db", "contacts.json");

export const listContacts = async () => {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
}

export const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find(contact => contact.id === contactId);
  return result || null;
}

export const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name: name,
    email: email,
    phone: phone,
  } 
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

export function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}
