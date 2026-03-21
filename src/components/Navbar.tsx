import { NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2.5 text-sm font-semibold transition ${
    isActive
      ? 'bg-slate-950 text-white shadow-lift'
      : 'text-slate-600 hover:bg-white hover:text-slate-950'
  }`;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-[1.35rem] bg-slate-950 text-sm font-bold tracking-[0.14em] text-white shadow-soft transition group-hover:-translate-y-0.5 group-hover:shadow-lift">
            3X
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-blue-700 uppercase">
              3xample
            </p>
            <p className="text-sm text-slate-500">UI animation playground</p>
          </div>
        </NavLink>

        <nav className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 p-1.5 shadow-soft">
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
