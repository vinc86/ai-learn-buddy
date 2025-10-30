import { geminiAI } from '../models/ai';
import { flashcardParser } from '../parsers/flashcardsParser';
import { generateFlashcardsPrompt } from '../prompts/flashcardPrompts';

export class FlashcardGeneratorService {
  static async generateFromContent(content: string) {
    try {
      const input = await generateFlashcardsPrompt(content);
      const result = await geminiAI.invoke(input);
      const parsedResult = await flashcardParser.parse(
        result.content as string
      );
      return parsedResult;
    } catch (error) {
      console.error('Error generating flashcards:', error);
      throw new Error('Failed to generate flashcards');
    }
  }
}
