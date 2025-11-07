import { DeckType } from '@/app/types';
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

const flashcardDeckSchema = new Schema<DeckType>(
  {
    deckName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    numberOfSections: Number,
    numberOfCards: Number,
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

flashcardDeckSchema.pre('save', function () {
  const sectionsLength = this.content.length || 0;
  const totalCards =
    this.content?.reduce(
      (total, section) => total + (section.cards?.length || 0),
      0
    ) || 0;
  this.numberOfSections = sectionsLength;

  this.numberOfCards = totalCards;
});
export default models.deck || model('deck', flashcardDeckSchema, 'decks');
