import { createFileRoute } from "@tanstack/react-router";
import cristina from "@/assets/cristina.png";

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

function About() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">Despre mine</p>
      <h1 className="mt-3 text-4xl text-foreground sm:text-5xl">
        Bună! 😄 Sunt Cristina.
      </h1>

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-border">
        <img
          src={cristina}
          alt="Cristina Bujoreanu"
          width={1200}
          height={1400}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="prose prose-neutral mt-10 max-w-none space-y-5 text-base leading-relaxed text-foreground/90">
        <p>
          Sunt psiholog clinician și psihoterapeut în formare. Mi-ar face mare plăcere să
          lucrăm împreună.
        </p>
        <p>
          💛 <strong>Ești student?</strong> Ofer ședințe la <strong>100 lei</strong> (față
          de tariful standard de 200 lei) — pentru că terapia este o nevoie, nu un
          privilegiu.
        </p>
        <p>
          📚 Mă pregătesc în cadrul programului de master și al formării în
          <em> Psihoterapia Traumei</em> — ceea ce înseamnă că aduc în cabinet cunoștințe
          actuale, validate, și o înțelegere profundă a modului în care experiențele
          noastre ne modelează (și, în același timp, înțeleg viața de student).
        </p>
        <p>
          Îți dorești să te descoperi, să înțelegi de ce anumite tipare se repetă în viața
          ta și cum să îmbunătățești comunicarea și relațiile pe care le ai cu ceilalți —
          și mai ales cu tine însuți? Putem porni în această călătorie împreună. ✨
        </p>
        <p>
          Cred că orice poveste merită să fie auzită fără judecată și încerc să creez un
          spațiu sigur (<strong>LGBTQ+ friendly</strong>).
        </p>
      </div>

      <blockquote className="mt-12 rounded-2xl border-l-4 border-primary bg-secondary/50 p-6 font-serif text-2xl leading-snug text-foreground">
        „Terapia nu este despre a deveni altcineva. Este despre a ajunge acasă, la cine
        ești deja.”
      </blockquote>
    </div>
  );
}
