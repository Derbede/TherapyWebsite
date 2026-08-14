import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Leaf } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

type Audience = "studenti" | "adulti";

type PackageItem = {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
};

const content: Record<Audience, PackageItem[]> = {
  studenti: [
    {
      name: "Consiliere",
      price: "100 lei",
      unit: "50 de minute",
      description:
        "Pentru că terapia este o nevoie, nu un privilegiu. Tarif redus pentru studenți, pe bază de legitimație.",
      features: [
        "Dezvoltarea abilităților de reglare emoțională și de auto-reflecție",
        "Consiliere psihologică individuală",
        "Consiliere pentru gestionarea anxietății și a stresului",
        "Consiliere pentru dificultăți emoționale legate de traumă și evenimente de viață dificile",
        "Consiliere pentru relații interpersonale și de cuplu",
        "Consiliere pentru tranziții de viață (schimbări profesionale, mutări, pierderi)",
        "Psihoeducație despre traumă, stres și reziliență",
      ],
      highlighted: true,
      cta: "Programează o ședință",
    },
    {
      name: "Evaluare",
      price: "150 lei",
      unit: "50 de minute",
      description:
        "Evaluare psihologică clinică la tarif redus pentru studenți, pe bază de legitimație. Include discuție inițială și recomandări.",
      features: [
        "Evaluarea personalității",
        "Evaluare psihologică pentru autocunoaștere și dezvoltare personală",
        "Screening pentru simptome anxioase, depresive și de stres post-traumatic",
        "Evaluarea mecanismelor de coping și a stilurilor de atașament",
        "Interpretarea și feedback-ul rezultatelor testelor psihologice",
      ],
      highlighted: false,
      cta: "Programează o evaluare",
    },
  ],
  adulti: [
    {
      name: "Consiliere",
      price: "200 lei",
      unit: "50 de minute",
      description:
        "Ședințe individuale pentru adulți: anxietate, tranziții de viață, relații, traumă și autocunoaștere.",
      features: [
        "Dezvoltarea abilităților de reglare emoțională și de auto-reflecție",
        "Consiliere psihologică individuală",
        "Consiliere pentru gestionarea anxietății și a stresului",
        "Consiliere pentru dificultăți emoționale legate de traumă și evenimente de viață dificile",
        "Consiliere pentru relații interpersonale și de cuplu",
        "Consiliere pentru tranziții de viață (schimbări profesionale, mutări, pierderi)",
        "Psihoeducație despre traumă, stres și reziliență",
      ],
      highlighted: true,
      cta: "Programează o ședință",
    },
    {
      name: "Evaluare",
      price: "250 lei",
      unit: "50 de minute",
      description:
        "Evaluare psihologică clinică pentru adulți: clarificarea simptomelor, orientare terapeutică și plan de intervenție.",
      features: [
        "Evaluarea personalității",
        "Evaluare psihologică pentru autocunoaștere și dezvoltare personală",
        "Screening pentru simptome anxioase, depresive și de stres post-traumatic",
        "Evaluarea mecanismelor de coping și a stilurilor de atașament",
        "Interpretarea și feedback-ul rezultatelor testelor psihologice",
      ],
      highlighted: false,
      cta: "Programează o evaluare",
    },
  ],
};

const highlights = [
  "Fizic în București sau online",
  "Abordare integrativă a traumei",
  "Confidențialitate totală",
  "LGBTQ+ friendly",
];

function Packages() {
  const [audience, setAudience] = useState<Audience>("studenti");
  const packages = content[audience];
  const audienceLabel = audience === "studenti" ? "studenți" : "adulți";

  return (
    <div className="mx-auto max-w-5xl px-5 pt-16 pb-6 sm:px-8 md:pt-24 md:pb-10">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Pachete</p>
        <h1 className="mt-3 text-4xl text-foreground sm:text-5xl">
          Cum putem colabora?
        </h1>
        <p className="mt-5 text-muted-foreground">
         💚 Cred că terapia este o nevoie, nu un privilegiu, de aceea ofer un tarif
          redus pentru studenți. Ședințele se plătesc după fiecare întâlnire.
        </p>
        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Tabs
        value={audience}
        onValueChange={(value) => setAudience(value as Audience)}
        className="mt-12 flex justify-center"
      >
        <TabsList className="h-11 rounded-full p-1">
          <TabsTrigger value="studenti" className="rounded-full px-6">
            Studenți
          </TabsTrigger>
          <TabsTrigger value="adulti" className="rounded-full px-6">
            Adulți
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {packages.map((p) => {
          const serviceName = `${p.name} pentru ${audienceLabel}`;
          return (
            <article
              key={`${audience}-${p.name}`}
              className={
                "flex h-full flex-col rounded-3xl border p-7 transition " +
                (p.highlighted
                  ? "border-primary bg-secondary/60 shadow-sm"
                  : "border-border bg-card")
              }
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-2xl">{p.name}</h3>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-serif text-5xl text-primary">{p.price}</span>
                <span className="text-sm text-muted-foreground">/ {p.unit}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                search={{ serviciu: serviceName }}
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
          );
        })}
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        Pentru situații financiare deosebite, te rog să menționezi acest lucru când îmi
        scrii. Vom găsi împreună o soluție.
      </p>
    </div>
  );
}
