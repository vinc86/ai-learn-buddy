import { FlashcardGeneratorService } from '@/lib/ai/services/flashcardGeneratorService';
import { FlashcardDatabaseService } from '@/lib/services/flashcardDatabaseService';
import { NextRequest, NextResponse } from 'next/server';
import { validateFileContent } from './validators';

export const POST = async (req: NextRequest) => {
  const { content } = await req.json();

  validateFileContent(content);

  const flashCards = await FlashcardGeneratorService.generateFromContent(
    content
  );

  await FlashcardDatabaseService.saveFlashcardsDeck(flashCards);
  return NextResponse.json({ flashCards, status: 200 });
};

export const GET = async () => {
  try {
    const decks = await FlashcardDatabaseService.getFlashcardDecks();
    return NextResponse.json({ data: decks, status: 200 });
  } catch (error) {
    throw new Error(error);
  }
};
