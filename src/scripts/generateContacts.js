import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


function generateContacts(number) {
  const contacts = readContacts();
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }
  writeContacts(contacts);
}

const numberOfContacts = process.argv[2] || 5; 
generateContacts(Number(numberOfContacts));
