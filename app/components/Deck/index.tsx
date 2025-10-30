'use client';
import React, { ReactNode } from 'react';
import { DeckCard } from './DeckCard';
import { useDeckData } from '@/app/hooks/useDeckData';

export const Deck = (): ReactNode => {
  const { deckData, isLoading, error } = useDeckData();

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div className="w-8 h-8 rounded-full relative">
          <div className="absolute top-0 right-0 border-3 border-orange-600/20 w-full h-full rounded-full"></div>
          <div className="absolute top-0 right-0 border-3 border-t-orange-700 animate-spin border-b-transparent border-x-transparent w-full h-full rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <DeckCard
      title={deckData?.data.deckName}
      description={deckData?.data.description}
      numberOfCards={deckData?.data.content.length}
      timeForCompletion={deckData?.data.timeForCompletion}
    />
  );
};
