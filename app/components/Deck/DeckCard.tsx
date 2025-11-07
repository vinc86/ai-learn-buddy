import React, { ReactNode } from 'react';
import { FaPlay } from 'react-icons/fa';

type Props = {
  title: string;
  description: string;
  numberOfSections: number;
  timeForCompletion: string;
};

export const DeckCard = ({
  title,
  description,
  numberOfSections,
  timeForCompletion
}: Props): ReactNode => {
  function handleClick() {}
  return (
    <div className="flex flex-col h-60 justify-between p-4 bg-white sm:w-1/2 shadow-lg border-2 border-gray-300 hover:border-orange-700 hover:shadow-2xl hover:-translate-y-3 transition-all rounded-xl w-full">
      <div className="mt-3">
        <h3 className="text-xl font-bold text-orange-700">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="flex gap-10">
        <p>{numberOfSections} Sections</p>
        <p>{timeForCompletion} min</p>
      </div>

      <button className="self-end cursor-pointer rounded-full bg-orange-700 p-3 hover:bg-orange-600">
        <FaPlay color="#fff" />
      </button>
    </div>
  );
};
