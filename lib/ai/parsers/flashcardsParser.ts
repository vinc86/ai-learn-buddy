import { StructuredOutputParser } from '@langchain/core/output_parsers';
import { flashCardsSchema } from '../schemas/flashCardsSchema';

export const flashcardParser =
  StructuredOutputParser.fromZodSchema(flashCardsSchema);
