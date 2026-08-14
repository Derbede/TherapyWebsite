import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Sprout, Sun } from "lucide-react";
import cristina from "@/assets/cristina.png";
import leaves from "@/assets/leaves.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cristina Bujoreanu — Psiholog clinician în București" },
      {
        name: "description",
        content:
          "Psiholog clinician și psihoterapeut în formare. Ședințe de terapie pentru studenți și adulți, în București sau online. Spațiu sigur, LGBTQ+ friendly.",
      },
      { property: "og:title", content: "Cristina Bujoreanu — Psiholog clinician în București" },
      {
        property: "og:description",
        content:
          "Ședințe de terapie pentru studenți și adulți, în București sau online. Spațiu sigur, LGBTQ+ friendly.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: cristina },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: cristina },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <Sprout className="h-3.5 w-3.5" /> Psiholog clinician · Psihoterapeut în formare
            </span>
            <h1 className="mt-5 text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
              Un spațiu în care<br />
              <em className="not-italic text-primary">poți fi tu însuți.</em>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Bună! Sunt Cristina — psiholog clinician și psihoterapeut în formare în
              Psihoterapia Traumei. Cred că orice poveste merită să fie auzită fără
              judecată. Te aștept într-un spațiu cald, sigur și LGBTQ+ friendly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Programează o ședință <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                Despre mine
              </Link>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-2 text-sm text-foreground">
             💚 <span>Ești student? Ședințe la <strong>100 lei</strong> (față de 200 lei).</span>
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-accent/50 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-sm">
              <img
                src={cristina}
                alt="Portret Cristina Bujoreanu"
                width={1200}
                height={1400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-8 md:grid-cols-3">
          {[
            {
              icon: HeartHandshake,
              title: "Cald și confidențial",
              body: "Un spațiu în care poți vorbi liber, fără judecată, în ritmul tău.",
            },
            {
              icon: Sprout,
              title: "Formare în Psihotraumatologie",
              body: "Cunoștințe actuale și validate despre traumă, reziliență și dezvoltare.",
            },
            {
              icon: Sun,
              title: "Fizic sau online",
              body: "Ședințe la cabinetul din București sau prin video call, oriunde te-ai afla.",
            },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-background p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16 pb-6 sm:px-8 md:pt-24 md:pb-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-border">
          <img
            src={leaves}
            alt=""
            width={1600}
            height={900}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="relative grid gap-6 p-8 sm:p-14 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-xl text-3xl text-foreground sm:text-4xl">
                Îți dorești să te descoperi?
              </h2>
              <p className="mt-3 max-w-lg text-muted-foreground">
                Să înțelegi de ce anumite tipare se repetă în viața ta și cum să
                îmbunătățești relațiile cu ceilalți — și mai ales cu tine însuți. Putem
                porni în această călătorie împreună.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 md:self-end"
            >
              Scrie-mi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
