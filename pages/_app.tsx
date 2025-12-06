import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#f7f8fa] min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
