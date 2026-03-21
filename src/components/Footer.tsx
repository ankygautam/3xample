export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>MotionForge helps teams shape motion faster with instant previews and copy-ready CSS.</p>
        <p>&copy; {new Date().getFullYear()} MotionForge</p>
      </div>
    </footer>
  );
}
