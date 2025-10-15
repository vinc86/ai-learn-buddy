import z from 'zod';

export const flashCardsSchema = z.object({
  deckName: z.string(),
  description: z.string(),
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

/* 

deckName: string,
description: string,
content: [
  {
    section: string
    cards: [
      {
        question: string,
        answer: string
      }
    ]

  }
]

*/
