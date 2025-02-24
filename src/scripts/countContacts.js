import { readContacts } from '../utils/readContacts.js';


function countContacts() {
  const contacts = readContacts();
  console.log(`Total contacts: ${contacts.length}`);
}

countContacts();
