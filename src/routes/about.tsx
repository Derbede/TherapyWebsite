import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf } from "lucide-react";
import cristina from "@/assets/cristina2.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Despre mine — Cristina Bujoreanu" },
      {
        name: "description",
        content:
          "Cristina Bujoreanu — psiholog clinician și psihoterapeut în formare. Povestea, valorile și abordarea mea terapeutică.",
      },
      { property: "og:title", content: "Despre mine — Cristina Bujoreanu" },
      {
        property: "og:description",
        content: "Povestea și abordarea psihologului Cristina Bujoreanu.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: cristina },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: cristina },
    ],
  }),
  component: About,
});

const credentials = [
  "Psiholog clinician",
  "Psihoterapeut în formare",
  "București · online",
  "LGBTQ+ friendly",
];

function About() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
      <header className="border-b border-border pb-10">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Despre mine</p>
        <h1 className="mt-3 max-w-2xl text-4xl leading-tight text-foreground sm:text-5xl">
          Bună! Sunt Cristina.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Psiholog clinician și psihoterapeut în formare cu plăcere aș lucra împreună cu tine.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-14">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={cristina}
              alt="Cristina Bujoreanu"
              width={1200}
              height={1400}
              loading="eager"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <ul className="mt-5 space-y-2">
            {credentials.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Leaf className="h-3.5 w-3.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <article className="min-w-0 space-y-8 text-justify text-base leading-relaxed text-foreground/90">
          <p>
            Sunt psiholog clinician și psihoterapeut în formare. Mi-ar face mare plăcere să
            lucrăm împreună.
          </p>

          <div className="rounded-2xl border border-primary/20 bg-secondary/50 px-5 py-5 sm:px-6">
            <p>
              <strong>Ești student?</strong> Ofer ședințe la <strong>100 lei</strong> (față
              de tariful standard de 200 lei) pentru că terapia este o nevoie, nu un
              privilegiu.
            </p>
          </div>

          <div className="space-y-8 text-foreground font-weight-bold">
            <p>
              Mă pregătesc în cadrul programului de master și al formării în
              <em> Psihoterapia Traumei</em>, ceea ce înseamnă că aduc în cabinet cunoștințe
              actuale, validate, și o înțelegere profundă a modului în care experiențele
              noastre ne modelează (și, în același timp, înțeleg viața de student).
            </p>

            <p>
              Îți dorești să te descoperi, să înțelegi de ce anumite tipare se repetă în viața
              ta și cum să îmbunătățești comunicarea și relațiile pe care le ai cu ceilalți
              și mai ales cu tine însuți? Putem porni în această călătorie împreună.
            </p>

            <p>
              Cred că orice poveste merită să fie auzită fără judecată și încerc să creez un
              spațiu sigur (<strong>LGBTQ+ friendly</strong>).
            </p>
          </div>
        </article>
      </div>

      <figure className="mt-16 text-center">
        <blockquote className="mx-auto max-w-2xl rounded-3xl border border-border bg-secondary/45 px-8 py-12 font-serif text-2xl leading-snug text-foreground sm:px-10 sm:py-14 sm:text-3xl">
          „Terapia nu este despre a deveni altcineva. Este despre a ajunge acasă, la cine
          ești deja.”
        </blockquote>
      </figure>

      <footer className="mt-16 flex flex-col items-start gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Vrei să afli mai multe despre formarea mea sau să programezi o ședință?
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/studies"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
          >
            Studiile mele
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Contactează-mă <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
