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
    <div className="mx-auto max-w-5xl px-5 pt-16 pb-6 sm:px-8 md:pt-24 md:pb-10">
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
            Sunt Cristina, studentă și psiholog, în propriul proces de dezvoltare personală. Îmi doresc să 
            ofer oamenilor alături de care lucrez profesionalism și, în același timp, empatie.
          </p>

          <div className="rounded-2xl border border-primary/20 bg-secondary/50 px-5 py-5 sm:px-6">
            <p>
              <strong>Cum ai putea să mă recunoști?</strong> Discut adesea despre importanța evenimentelor 
              din copilărie, stimei de sine, relațiilor interumane și despre nevoia de odihnă. Rezonez foarte
              mult cu tinerii, deoarece sunt și eu în această etapă a vieții și sunt de părere că <strong>nu este 
              niciodată prea târziu</strong> să începi să te cunoști.
            </p>
          </div>

          <div className="space-y-8 text-foreground font-weight-bold">
            <p>
              <strong>Câteva lucruri despre mine:</strong> am de obicei în mână un latte cu caramel sărat, iar în pauzele mele
              sunt la un picnic, mâncând o patiserie bună și făcând sudoku. Într-o seară ideală pentru mine mă
              aflu alături de prietenii mei, jucând un joc de societate. 
            </p>

            <p>
              Am avut șansa să cunosc oameni diferiți de-a lungul vieții, fiecare cu <strong>propriul său drum</strong> și am simțit
              cât de multe putem învăța unii de la alții. Doar ascultând, putem înțelege esența unei persoane și îî
              putem fi alături cu adevărat.
            </p>

            <p>
              <strong>Cred că orice poveste merită să fie auzită fără judecată și încerc să creez un
              spațiu sigur, indiferent de vârstă.</strong>
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
        <p className="text-base text-muted-foreground">
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
