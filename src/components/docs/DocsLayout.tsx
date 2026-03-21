import { Outlet } from 'react-router-dom';
import { DocsSidebar } from './DocsSidebar';

export function DocsLayout() {
  return (
    <div className="relative min-h-[calc(100vh-10rem)] overflow-hidden pb-10 pt-6 sm:pb-12 sm:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.75),_transparent_60%)]" />
      <div className="pointer-events-none absolute right-0 top-24 h-[20rem] w-[20rem] rounded-full bg-blue-200/35 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid items-start gap-5 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-6">
          <DocsSidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
