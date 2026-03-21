import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { PlaygroundPage } from './pages/PlaygroundPage';
import { animationOptions } from './data/animations';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-950">
      <style>{animationOptions.map((animation) => animation.keyframes).join('\n\n')}</style>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
