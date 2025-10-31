'use client';
import React, { ReactNode } from 'react';
import { DeckCard } from './DeckCard';
import { useDeckData } from '@/app/hooks/useDeckData';
import { type DeckType } from '@/app/types';

export const Deck = (): ReactNode => {
  const { data, isLoading, error } = useDeckData();

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex justify-center m-auto">
        <div className="w-8 h-8 rounded-full relative">
          <div className="absolute top-0 right-0 border-3 border-orange-600/20 w-full h-full rounded-full"></div>
          <div className="absolute top-0 right-0 border-3 border-t-orange-700 animate-spin border-b-transparent border-x-transparent w-full h-full rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-2 sm:flex-row m-auto w-full">
      {data.map((deck: DeckType) => (
        <DeckCard
          key={deck.deckName}
          title={deck.deckName}
          description={deck.description}
          numberOfCards={deck.content.length}
          timeForCompletion={deck.timeForCompletion}
        />
      ))}
    </section>
  );
};
