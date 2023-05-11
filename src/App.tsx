import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import NeverPage from './pages/NeverPage';
import EditorPage from './pages/EditorPage';
import SingIn from './pages/SingIn';
import SingOut from './pages/SingOut';
import Footer from './components/Footer';
import { TranslationProvider, Translation } from 'i18nano';
import { translations } from './translations';


function App() {
  return (
    <TranslationProvider   language="ru" translations={translations.main}>
      <div className="App min-h-screen flex flex-col bg-BGcolor">
        <Header />
        <main className="flex-auto lg:px-10 lg:py-4 sm:px-4 sm:py-2 p-3 bg-BGcolor">
          <Routes>
            <Route path="/" element={<EditorPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/singin" element={<SingIn />} />
            <Route path="/singout" element={<SingOut />} />
            <Route path="/*" element={<NeverPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </TranslationProvider>
  );
}

export default App;
