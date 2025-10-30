import { Deck } from '@/app/types';
import { Schema, model, models } from 'mongoose';

// const CardSchema = new Schema({
//   question: {
//     type: String,
//     required: true
//   },
//   answer: {
//     type: String,
//     required: true
//   }
// });

const flashcardDeckSchema = new Schema<Deck>(
  {
    deckName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    content: [
      {
        section: String,
        cards: [
          {
            question: {
              type: String,
              required: true
            },
            answer: {
              type: String,
              required: true
            }
          }
        ]
      }
    ],
    timeForCompletion: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default models.FlashcardDeck ||
  model('deck', flashcardDeckSchema, 'decks');
