import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


function removeLastContact() {
  const contacts = readContacts();
  contacts.pop();
  writeContacts(contacts);
}

removeLastContact();

