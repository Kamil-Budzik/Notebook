import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <Provider store={store}>
      <AnyComponent {...pageProps} />
    </Provider>
  );
}

export default MyApp;
