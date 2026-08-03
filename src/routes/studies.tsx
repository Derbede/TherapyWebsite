import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, BookOpen, Award, Briefcase } from "lucide-react";

export const Route = createFileRoute("/studies")({
  head: () => ({
    meta: [
      { title: "Studii și formare — Cristina Bujoreanu" },
      {
        name: "description",
        content:
          "Formarea academică și profesională a psihologului Cristina Bujoreanu — Universitatea din București, Institutul pentru Studiul și Tratamentul Traumei.",
      },
      { property: "og:title", content: "Studii și formare — Cristina Bujoreanu" },
      {
        property: "og:description",
        content: "Formarea academică și profesională a Cristinei Bujoreanu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Studies,
});

const timeline = [
  {
    year: "2026 — În curs",
    icon: BookOpen,
    title: "Formare în Psihoterapia Integrativă a Traumei",
    org: "Institutul pentru Studiul și Tratamentul Traumei (ISTT), București",
    body: "Formare în psihotraumatologie, cu focus pe experiențele adverse timpurii și impactul lor asupra dezvoltării.",
  },
  {
    year: "2025 — În curs",
    icon: GraduationCap,
    title: "Master în Psihologia Traumei",
    org: "Facultatea de Psihologie și Științele Educației, Universitatea din București",
    body: "Program de master — evaluare clinică și intervenție terapeutică în psihologia traumei.",
  },
  {
    year: "2026",
    icon: Briefcase,
    title: "Cabinet Individual de Psihologie",
    org: "București, România",
    body: "Psiholog în specialitatea psihologie clinică sub supervizare — evaluare, consiliere individuală pentru tineri, studenți, adulți și persoane din comunitatea LGBTQ+.",
  },
  {
    year: "2024",
    icon: Briefcase,
    title: "Practică — Penitenciarul „Rahova”",
    org: "București, România",
    body: "Practică în psihologie judiciară.",
  },
  {
    year: "2022 — 2025",
    icon: GraduationCap,
    title: "Licență în Psihologie — Științe Cognitive",
    org: "Facultatea de Psihologie și Științele Educației, Universitatea din București",
    body: "Licență scris: 9,93; Prezentare lucrare: 10. Lucrare de diplomă: „Rolul mediator al rezilienței în relația dintre experiențele adverse timpurii și burnoutul parental”.",
  },
  {
    year: "2018 — 2022",
    icon: Award,
    title: "Bacalaureat — Filologie bilingv engleză",
    org: "Colegiul Național „Vasile Alecsandri”, Galați",
    body: "Notă bacalaureat: 9,90. Cambridge Certificate of Proficiency in English (2021).",
  },
];

function Studies() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 md:py-24">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">Studiile mele</p>
      <h1 className="mt-3 text-4xl text-foreground sm:text-5xl">
        O formare construită din curiozitate.
      </h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        Un rezumat al formării academice și clinice care îmi ghidează astăzi practica.
        Continui să investesc în supervizare și formare continuă în domeniul psihotraumatologiei.
      </p>

      <ol className="mt-12 space-y-4">
        {timeline.map((item) => (
          <li
            key={item.title}
            className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 rounded-2xl border border-border bg-card p-5 sm:p-6"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary text-primary">
              <item.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-widest text-primary">
                {item.year}
              </p>
              <h3 className="mt-1 text-xl">{item.title}</h3>
              <p className="text-sm font-medium text-foreground/80">{item.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
