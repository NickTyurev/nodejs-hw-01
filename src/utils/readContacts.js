import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export function readContacts() {
  try {
    const data = fs.readFileSync(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading contacts file:', err);
    return [];
  }
}
