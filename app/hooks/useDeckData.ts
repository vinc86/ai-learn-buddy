import { useEffect, useState } from 'react';
import { Deck } from '../types';

export const useDeckData = () => {
  const [deckData, setDeckData] = useState<Deck>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDeckData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        fetch('/api/flashcards')
          .then((res) => res.json())
          .then((res) => setDeckData(res));
      } catch (err) {
        setError('Error fetching deck data');
        console.error('Error fetching deck data', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDeckData();
  }, []);

  return {
    deckData,
    isLoading,
    error
  };
};
