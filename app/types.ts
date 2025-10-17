type Card = {
  question: string;
  answer: string;
};

type Content = {
  section: string;
  cards: Card[];
};

export type CardSchema = {
  deckName: string;
  description: string;
  content: Content[];
};
