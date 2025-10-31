import { useEffect, useState } from 'react';
import { type DeckType } from '../types';

export const useDeckData = () => {
  const [data, setData] = useState<DeckType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchdata = async (): Promise<void> => {
      try {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        fetch('/api/flashcards')
          .then((res) => res.json())
          .then((res) => setData(res.data));
      } catch (err) {
        setError('Error fetching deck data');
        console.error('Error fetching deck data', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchdata();
  }, []);

  return {
    data,
    isLoading,
    error
  };
};
