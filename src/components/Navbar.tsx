import { NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition ${
    isActive
      ? 'bg-slate-900 text-white shadow-soft'
      : 'text-slate-600 hover:bg-white hover:text-slate-950'
  }`;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
            MF
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700 uppercase">
              3xample
            </p>
            <p className="text-xs text-slate-500">UI animation playground</p>
          </div>
        </NavLink>

        <nav className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 p-1 shadow-soft">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/playground" className={navLinkClass}>
            Playground
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
