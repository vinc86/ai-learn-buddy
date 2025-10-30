import { Deck } from './components/Deck';

export default function Home() {
  return (
    <section className="flex flex-col w-full h-fit justify-between gap-20">
      <div className="">
        <h1 className="text-3xl font-bold mb-2 text-orange-700">My board</h1>
        <p className="text-gray-600">Decks: 0 • Total Cards: 0</p>
      </div>
      <div className="">
        <h1 className="text-3xl font-bold mb-10 text-orange-700">My Decks</h1>
        <div className="w-full flex sm:flex-col">
          <Deck />
        </div>
      </div>
    </section>
  );
}
