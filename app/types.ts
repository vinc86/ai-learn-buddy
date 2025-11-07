type Card = {
  question: string;
  answer: string;
};

export type Content = {
  section: string;
  cards: Card[];
};

export type DeckType = {
  deckName: string;
  description: string;
  timeForCompletion: string;
  numberOfSections: number;
  numberOfCards: number;
  content: Content[];
};
