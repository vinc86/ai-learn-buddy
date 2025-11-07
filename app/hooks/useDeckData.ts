import { useEffect, useState } from 'react';
import { type DeckType } from '../types';

export const useDeckData = () => {
  const [data, setData] = useState<DeckType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchdata = async (): Promise<void> => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch('/api/decks');
        const jsonResponse = await response.json();
        setData(jsonResponse.data);
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
