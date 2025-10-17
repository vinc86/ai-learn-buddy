import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Your study companion app</title>
      <body className="bg-gray-50">
        <main className="md:w-200 w-full m-auto">
          <header className="flex bg-white md:m-2 p-3 justify-between md:rounded-2xl shadow-lg">
            <nav>
              <ul className="flex gap-2">
                <li className="text-lg tracking-wide hover:bg-gray-200 px-3 py-2 rounded-lg transition-all ease-in">
                  <Link href="/">Board</Link>
                </li>
                <li className="text-lg tracking-wide hover:bg-gray-200 px-3 py-2 rounded-lg transition-all ease-in-out">
                  <Link href="/upload">Upload</Link>
                </li>
              </ul>
            </nav>
            {/* <button className="border px-5 rounded-xl bg-linear-120 from-orange-500 to-orange-700 text-white font-bold">
              Logout
            </button> */}
          </header>
          <div className="min-h-screen sm:p-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
