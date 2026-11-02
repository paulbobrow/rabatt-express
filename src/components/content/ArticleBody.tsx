import type { Article } from "@/content/types";

export function ArticleBody({ article }: { article: Article }) {
  return (
    <div className="prose-re">
      {article.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </section>
      ))}

      {article.faq?.length ? (
        <section>
          <h2>Häufige Fragen</h2>
          <div className="space-y-4">
            {article.faq.map((item) => (
              <div key={item.q} className="rounded-xl border border-line bg-surface p-4">
                <p className="font-bold text-ink">{item.q}</p>
                <p className="mt-2 mb-0 text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
