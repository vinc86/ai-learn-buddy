import { readFileContent } from './readFileContent';
import { readPDF } from './readPDF';

export const sendFlashcardRequest = async (file: File) => {
  let content = null;

  if (file.type === 'text/plain') {
    content = await readFileContent(file);
  }

  if (file.type === 'application/pdf') {
    content = await readPDF(file);
  }

  const response = await fetch('/api/decks/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content })
  });

  if (!response.ok) {
    throw new Error(`Failed to generate flashcards: ${response.text}`);
  }
  const data = await response.json();
  return data;
};
