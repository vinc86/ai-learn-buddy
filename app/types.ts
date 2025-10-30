type Card = {
  question: string;
  answer: string;
};

type Content = {
  section: string;
  cards: Card[];
};

export type Deck = {
  deckName: string;
  description: string;
  timeForCompletion: string;
  content: Content[];
};
