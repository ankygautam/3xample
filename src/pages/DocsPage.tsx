import { Navigate, useParams } from 'react-router-dom';
import { docsLookup, isDocSlug } from '../data/docs';

export function DocsPage() {
  const { slug = 'introduction' } = useParams();

  if (!isDocSlug(slug)) {
    return <Navigate to="/docs/introduction" replace />;
  }

  const page = docsLookup[slug];

  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-panel">
      <div className="border-b border-slate-200/90 px-5 py-7 sm:px-8 sm:py-10">
        <p className="text-sm font-semibold tracking-[0.24em] text-blue-700 uppercase">
          Docs
        </p>
        <h1 className="mt-4 text-[2.6rem] font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {page.title}
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:mt-4 sm:text-lg sm:leading-8">
          {page.description}
        </p>
      </div>

      <div className="px-5 py-7 sm:px-8 sm:py-10">
        <div className="space-y-9 sm:space-y-10">
          {page.sections.map((section) => (
            <section
              key={section.title}
              className="border-b border-slate-200/90 pb-8 last:border-b-0 last:pb-0 sm:pb-9"
            >
              <h2 className="text-[1.8rem] font-semibold tracking-tight text-slate-950 sm:text-2xl">
                {section.title}
              </h2>

              {section.paragraphs ? (
                <div className="mt-3.5 space-y-3.5 text-base leading-7 text-slate-600 sm:mt-4 sm:space-y-4 sm:text-[1.02rem] sm:leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}

              {section.bullets ? (
                <ul className="mt-4.5 space-y-2.5 text-base leading-7 text-slate-600 sm:mt-5 sm:space-y-3 sm:text-[1.02rem] sm:leading-8">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.code ? (
                <pre className="mt-5 overflow-x-auto rounded-[1.6rem] border border-slate-200 bg-slate-950 p-4 text-sm leading-7 text-slate-200 sm:mt-6 sm:p-5">
                  <code>{section.code}</code>
                </pre>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
