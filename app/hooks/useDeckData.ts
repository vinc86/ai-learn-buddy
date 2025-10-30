import { useEffect, useState } from 'react';
import { DeckType } from '../types';

export const useDeckData = () => {
  const [deckData, setDeckData] = useState<DeckType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDeckData: Promise<void> = async () => {
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
