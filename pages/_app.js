import '../styles/globals.css'
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav className="bg-gray-100 p-4 space-x-4">
        <Link href="/">Form Page</Link>
        <Link href="/data">Display Page</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}