import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import NeverPage from './pages/NeverPage';
import EditorPage from './pages/EditorPage';
import SingIn from './pages/SingIn';
import SingOut from './pages/SingOut';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<EditorPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/singin" element={<SingIn />} />
          <Route path="/singout" element={<SingOut />} />
          <Route path="/*" element={<NeverPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
