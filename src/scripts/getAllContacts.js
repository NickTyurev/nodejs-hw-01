import { readContacts } from '../utils/readContacts.js';


function getAllContacts() {
  const contacts = readContacts();
  console.log(contacts);
}

getAllContacts();

