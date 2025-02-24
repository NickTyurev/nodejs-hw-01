import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


function addOneContact() {
  const contacts = readContacts();
  contacts.push(createFakeContact());
  writeContacts(contacts);
}

addOneContact();
