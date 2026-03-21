export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="max-w-2xl">
          3xample helps teams preview interface motion quickly with instant feedback and copy-ready
          CSS.
        </p>
        <p className="font-medium text-slate-600">&copy; {new Date().getFullYear()} 3xample</p>
      </div>
    </footer>
  );
}
