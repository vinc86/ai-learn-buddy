'use client';
import { useDeckData } from '@/app/hooks/useDeckData';
import { useParams } from 'next/navigation';
import React from 'react';

export default function Deck() {
  // const { getDeckContent } = useDeckData();

  const { slug } = useParams();

  console.log(slug);
  return <div>Deck</div>;
}
