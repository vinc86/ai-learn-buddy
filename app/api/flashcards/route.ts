import { FlashcardService } from '@/lib/ai/services/flashcardService';
import { NextRequest, NextResponse } from 'next/server';
import { validateFileContent } from './validators';

export const POST = async (req: NextRequest) => {
  const { content } = await req.json();

  validateFileContent(content);

  const flashCards = await FlashcardService.generateFromContent(content);
  return NextResponse.json({ flashCards });
};
