import z from 'zod';

export const flashCardsSchema = z.object({
  deckName: z.string().describe('Title for the deck, max 4 words'),
  timeForCompletion: z
    .string()
    .describe(
      'Estimated time for completion. In minutes and only the number of minutes, example: 12'
    ),
  description: z
    .string()
    .describe('Desxcription for the card set, max 8 words'),
  content: z
    .array(
      z.object({
        section: z
          .string()
          .describe('The title of the section for the flashcards set'),
        cards: z
          .array(
            z.object({
              question: z
                .string()
                .describe('The question generated for the flashcard'),
              answer: z
                .string()
                .describe('The answer generated for the flashcard')
            })
          )
          .describe('Array containing the set of cards')
      })
    )
    .describe('Deck of flashcards sets')
});
