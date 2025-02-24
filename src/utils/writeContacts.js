import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export function writeContacts(data) {
  try {
    fs.writeFileSync(PATH_DB, JSON.stringify(data, null, 2));
    console.log('Contacts have been written to the file.');
  } catch (err) {
    console.error('Error writing contacts to file:', err);
  }
}
