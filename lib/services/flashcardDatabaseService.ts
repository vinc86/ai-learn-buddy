import { type DeckType } from '@/app/types';
import { connectDB } from '../database/mongodb';
import FlaschcardDeck from '../models/FleshcardDeck';

export class FlashcardDatabaseService {
  static async saveFlashcardsDeck(deck: DeckType) {
    try {
      await connectDB();
      await FlaschcardDeck.create(deck);
    } catch (error) {
      throw new Error(error);
    }
  }
  static async getFlashcardDecks() {
    try {
      await connectDB();
      const data = await FlaschcardDeck.find({});
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
