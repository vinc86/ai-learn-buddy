import { Deck } from '@/app/types';
import { connectDB } from '../database/mongodb';
import FlaschcardDeck from '../models/FleshcardDeck';

export class FlashcardDatabaseService {
  static async saveFlashcards(deck: Deck) {
    try {
      await connectDB();
      await FlaschcardDeck.create(deck);
    } catch (error) {
      throw new Error(error);
    }
  }
}
