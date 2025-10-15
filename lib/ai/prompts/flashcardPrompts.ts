import { PromptTemplate } from '@langchain/core/prompts';
import { flashcardParser } from '../parsers/flashcardsParser';

const formatInstructions = flashcardParser.getFormatInstructions();

const flashcardPromptTemplate = new PromptTemplate({
  inputVariables: ['entry'],
  partialVariables: { formatInstructions },
  template:
    'From the provided text create a deck of flashcards focused on optimizing the content for maximum rentention and learning effectiveness.\nFollow the instructions and format your response to match the format instructions, no matter what!\n{formatInstructions}\n{entry}'
});

export const generateFlashcardsPrompt = async (content: string) => {
  const input = await flashcardPromptTemplate.format({
    entry: content
  });
  return input;
};
