import { NavLink, useLocation } from 'react-router-dom';
import { docsGroups } from '../../data/docs';

const docsLinkClass = (isActive: boolean) =>
  `flex h-10 items-center rounded-xl px-3 text-sm font-medium leading-5 transition-colors ${
    isActive
      ? 'bg-blue-50 text-blue-700 shadow-[inset_0_0_0_1px_rgba(191,219,254,0.95)]'
      : 'bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900'
  }`;

export function DocsSidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="self-start overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-panel">
      <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
        <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-slate-500 uppercase">
          Documentation
        </p>
        <h2 className="mt-3 text-[1.05rem] font-semibold tracking-tight text-slate-950">
          3xample docs
        </h2>
      </div>

      <div className="max-h-[24rem] overflow-y-auto px-4 py-4 sm:px-5 xl:max-h-none xl:overflow-visible">
        <nav aria-label="Documentation navigation" className="space-y-4.5">
          {docsGroups.map((group) => (
            <div key={group.title}>
              <p className="px-2 text-xs font-semibold tracking-[0.18em] text-slate-600 uppercase">
                {group.title}
              </p>
              <div className="mt-1.5 space-y-1 border-l border-slate-200/90 pl-3">
                {group.pages.map((page) => {
                  const isIntroRoute = page.slug === 'introduction' && pathname === '/docs';
                  const isActive = isIntroRoute || pathname === `/docs/${page.slug}`;

                  return (
                    <NavLink
                      key={page.slug}
                      to={`/docs/${page.slug}`}
                      className={docsLinkClass(isActive)}
                    >
                      {page.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
