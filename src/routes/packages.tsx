import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Pachete și tarife — Cristina Bujoreanu" },
      {
        name: "description",
        content:
          "Tarife transparente pentru ședințe de psihoterapie: 100 lei pentru studenți, 200 lei pentru adulți. Fizic în București sau online.",
      },
      { property: "og:title", content: "Pachete și tarife — Cristina Bujoreanu" },
      {
        property: "og:description",
        content: "Tarife transparente: 100 lei studenți, 200 lei adulți.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Packages,
});

const packages = [
  {
    name: "Ședință pentru studenți",
    price: "100 lei",
    unit: "50 de minute",
    description:
      "Pentru că terapia este o nevoie, nu un privilegiu. Tarif redus pentru studenți — pe bază de legitimație.",
    features: [
      "Fizic în București sau online",
      "Programare flexibilă",
      "Spațiu sigur, LGBTQ+ friendly",
      "Suport pentru adaptare, presiune academică și identitate",
    ],
    highlighted: true,
    cta: "Programează o ședință",
  },
  {
    name: "Ședință pentru adulți",
    price: "200 lei",
    unit: "50 de minute",
    description:
      "Ședințe individuale pentru adulți — anxietate, tranziții de viață, relații, traumă și autocunoaștere.",
    features: [
      "Fizic în București sau online",
      "Abordare integrativă a traumei",
      "Confidențialitate totală",
      "LGBTQ+ friendly",
    ],
    highlighted: false,
    cta: "Programează o ședință",
  },
];

function Packages() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Pachete</p>
        <h1 className="mt-3 text-4xl text-foreground sm:text-5xl">
          Tarife clare, fără surprize.
        </h1>
        <p className="mt-5 text-muted-foreground">
          💛 Cred că terapia este o nevoie, nu un privilegiu — de aceea ofer un tarif
          redus pentru studenți. Ședințele se plătesc după fiecare întâlnire.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {packages.map((p) => (
          <article
            key={p.name}
            className={
              "flex flex-col rounded-3xl border p-7 transition " +
              (p.highlighted
                ? "border-primary bg-secondary/60 shadow-sm"
                : "border-border bg-card")
            }
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-2xl">{p.name}</h3>
              {p.highlighted && (
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Tarif student
                </span>
              )}
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-serif text-5xl text-primary">{p.price}</span>
              <span className="text-sm text-muted-foreground">/ {p.unit}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={
                "mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition " +
                (p.highlighted
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "border border-border bg-background text-foreground hover:bg-secondary")
              }
            >
              {p.cta}
            </Link>
          </article>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        Pentru situații financiare deosebite, te rog să menționezi acest lucru când îmi
        scrii — găsim împreună o soluție.
      </p>
    </div>
  );
}
