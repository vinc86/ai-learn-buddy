import { FaPlay } from 'react-icons/fa';

export default function Home() {
  return (
    <section className="flex flex-col w-full h-fit justify-between gap-20">
      <div className="">
        <h1 className="text-3xl font-bold mb-2 text-orange-700">My board</h1>
        <p className="text-gray-600">Decks: 0 • Total Cards: 0</p>
      </div>
      <div className="">
        <h1 className="text-3xl font-bold mb-10 text-orange-700">My Decks</h1>
        <div className="w-full h-40">
          {/* card */}

          <div className="flex flex-col h-fit justify-between p-4 bg-white w-1/2 shadow-lg border-2 border-gray-300 hover:border-orange-700 hover:shadow-2xl hover:-translate-y-3 transition-all rounded-xl">
            <div className="mt-3">
              <h3 className="text-xl font-bold text-orange-700">Card Title</h3>
              <p>Card description</p>
            </div>
            <div className="flex gap-10 my-5">
              <p>23 cards</p>
              <p>10 min</p>
            </div>

            <button className="self-end cursor-pointer rounded-full bg-orange-700 p-3 hover:bg-orange-600">
              <FaPlay color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
