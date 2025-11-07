import React, { ReactNode } from 'react';
import { DeckCard } from './DeckCard';
import { type DeckType } from '@/app/types';

export const Deck = ({ data }: { data: DeckType[] }): ReactNode => {
  return (
    <section className="flex flex-col gap-2 sm:flex-row m-auto w-full">
      {data.map((deck: DeckType) => (
        <DeckCard
          key={deck.deckName}
          title={deck.deckName}
          description={deck.description}
          numberOfSections={deck.content.length}
          timeForCompletion={deck.timeForCompletion}
        />
      ))}
    </section>
  );
};
