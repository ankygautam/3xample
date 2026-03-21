import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { DocsLayout } from './components/docs/DocsLayout';
import { HomePage } from './pages/HomePage';
import { DocsPage } from './pages/DocsPage';
import { PlaygroundPage } from './pages/PlaygroundPage';
import { animationOptions } from './data/animations';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-950">
      <style>{animationOptions.map((animation) => animation.keyframes).join('\n\n')}</style>
      <Navbar />
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<Navigate to="introduction" replace />} />
            <Route path=":slug" element={<DocsPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
