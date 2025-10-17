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
      <body>
        <main className="w-3/5 m-auto">
          <header className="flex border-b-orange-700/20 border border-x-0 border-t-0 m-2 p-2 justify-between">
            <nav className="">
              <ul className="flex p-3 gap-10">
                <li className="text-md font-bold text-orange-700 tracking-wide">
                  <Link href="/">Board</Link>
                </li>
                <li className="text-md font-bold text-orange-700 tracking-wide">
                  <Link href="/upload">Upload</Link>
                </li>
              </ul>
            </nav>
            {/* <button className="border px-5 rounded-xl bg-linear-120 from-orange-500 to-orange-700 text-white font-bold">
              Logout
            </button> */}
          </header>
          <div className="items-center m-2 rounded-xl justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
