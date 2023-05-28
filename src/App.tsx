import { TranslationProvider } from 'i18nano';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { translations } from './translations';
import ErrorBoundary from './components/ErrorBoundary';

export const App = () => {
  return (
    <TranslationProvider language="en" translations={translations.header}>
      <div className="App h-screen flex flex-col bg-BGcolor">
        <Header />
        <main className="flex-auto lg:px-10 lg:py-4 sm:px-4 sm:py-2 p-3 bg-BGcolor flex flex-col">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </TranslationProvider>
  );
};

export default App;
