'use client';
import { useEffect } from 'react';
import { Deck } from '../components/Deck';
import { useDeckData } from '../hooks/useDeckData';
import { useRouter } from 'next/navigation';

export default function Board() {
  const { data, isLoading, error } = useDeckData();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !error && data.length === 0) {
      router.push('/');
    }
  }, [data, router, error, isLoading]);
  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex justify-center w-full h-screen">
        <div className="w-8 h-8 rounded-full relative m-60">
          <div className="absolute top-0 right-0 border-3 border-orange-600/20 w-full h-full rounded-full"></div>
          <div className="absolute top-0 right-0 border-3 border-t-orange-700 animate-spin border-b-transparent border-x-transparent w-full h-full rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="flex flex-col w-full h-fit justify-between gap-20">
      <div className="">
        <h1 className="text-3xl font-bold mb-2 text-orange-700">My board</h1>
        <p className="text-gray-600">Decks: 0 • Total Cards: 0</p>
      </div>
      <div className="">
        <h1 className="text-3xl font-bold mb-10 text-orange-700">My Decks</h1>
        <div className="w-full flex sm:flex-col">
          <Deck data={data} />
        </div>
      </div>
    </section>
  );
}
