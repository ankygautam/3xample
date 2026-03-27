import { NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold transition-all ${
    isActive
      ? 'bg-slate-950 text-white shadow-[0_14px_30px_-16px_rgba(15,23,42,0.55),inset_0_1px_0_rgba(255,255,255,0.08)]'
      : 'text-slate-600 hover:bg-white hover:text-slate-950'
  }`;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-3 self-start sm:self-auto">
          <div className="flex h-11 w-11 items-center justify-center rounded-[1.2rem] bg-slate-950 text-sm font-bold tracking-[0.14em] text-white shadow-soft transition group-hover:-translate-y-0.5 group-hover:shadow-lift sm:h-12 sm:w-12 sm:rounded-[1.35rem]">
            3X
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-blue-700 uppercase sm:text-sm">
              3xample
            </p>
            <p className="text-xs text-slate-500 sm:text-sm">UI animation playground</p>
          </div>
        </NavLink>

        <nav className="grid w-full grid-cols-3 gap-1 rounded-full border border-slate-200/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.92))] p-1.5 shadow-[0_16px_36px_-26px_rgba(15,23,42,0.28),inset_0_1px_0_rgba(255,255,255,0.95)] sm:flex sm:w-auto sm:items-center sm:gap-1.5">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/playground" className={navLinkClass}>
            Playground
          </NavLink>
          <NavLink to="/docs" className={navLinkClass}>
            Docs
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
