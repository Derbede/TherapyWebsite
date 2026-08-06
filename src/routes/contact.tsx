import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Check } from "lucide-react";
import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Consiliere pentru studenți",
  "Consiliere pentru adulți",
  "Evaluare pentru studenți",
  "Evaluare pentru adulți",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

const contactSearchSchema = z.object({
  serviciu: z.enum(SERVICE_OPTIONS).optional().catch(undefined),
});

export const Route = createFileRoute("/contact")({
  validateSearch: contactSearchSchema,
  head: () => ({
    meta: [
      { title: "Contact și programări — Cristina Bujoreanu" },
      {
        name: "description",
        content:
          "Programează o ședință cu psihologul Cristina Bujoreanu — fizic în București sau online prin video call securizat.",
      },
      { property: "og:title", content: "Contact și programări — Cristina Bujoreanu" },
      {
        property: "og:description",
        content: "Programează o ședință în București sau online.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

const PRACTICE_EMAIL = "cristinabujoreanu24@gmail.com";

function Contact() {
  const { serviciu } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "Feminin",
    city: "",
    phone: "",
    email: "",
    service: serviciu ?? "Consiliere pentru studenți",
    format: "Fizic (București)",
    concern: "",
    other: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Programare — ${form.name}`);
    const body = encodeURIComponent(
      `Nume și prenume: ${form.name}\n` +
        `Vârstă: ${form.age}\n` +
        `Gen: ${form.gender}\n` +
        `Oraș: ${form.city}\n` +
        `Telefon: ${form.phone}\n` +
        `Email: ${form.email}\n` +
        `Serviciu solicitat: ${form.service}\n` +
        `Preferință colaborare: ${form.format}\n\n` +
        `Problematica (ce te deranjează? de cât timp?):\n${form.concern}\n\n` +
        `Altceva de menționat:\n${form.other}`,
    );
    window.location.href = `mailto:${PRACTICE_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Contact și programări
        </p>
        <h1 className="mt-3 text-4xl text-foreground sm:text-5xl">
          Hai să găsim un moment potrivit.
        </h1>
        <p className="mt-5 text-muted-foreground">
          Completează formularul de mai jos și îți voi răspunde în cel mult două zile
          lucrătoare pentru a confirma o programare. Pentru situații urgente, te rog să
          suni direct.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nume și prenume" className="sm:col-span-2">
              <input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={inputCls}
                placeholder="Popescu Ana"
              />
            </Field>
            <Field label="Vârstă">
              <input
                required
                type="number"
                min={14}
                max={110}
                value={form.age}
                onChange={(e) => update("age", e.target.value)}
                className={inputCls}
                placeholder="24"
              />
            </Field>
            <Field label="Gen">
              <select
                value={form.gender}
                onChange={(e) => update("gender", e.target.value)}
                className={inputCls}
              >
                <option>Feminin</option>
                <option>Masculin</option>
                <option>Non-binar</option>
                <option>Prefer să nu spun</option>
                <option>Altul</option>
              </select>
            </Field>
            <Field label="Oraș">
              <input
                required
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                className={inputCls}
                placeholder="București"
              />
            </Field>
            <Field label="Număr de telefon">
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={inputCls}
                placeholder="+40 7XX XXX XXX"
              />
            </Field>
            <Field label="Adresă de email" className="sm:col-span-2">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputCls}
                placeholder="nume@example.com"
              />
            </Field>
            <Field label="Serviciu solicitat" className="sm:col-span-2">
              <RadioPills
                name="service"
                options={SERVICE_OPTIONS}
                value={form.service}
                onChange={(value) => update("service", value)}
              />
            </Field>
            <Field label="Preferință colaborare" className="sm:col-span-2">
              <RadioPills
                name="format"
                options={["Fizic (București)", "Online"] as const}
                value={form.format}
                onChange={(value) => update("format", value)}
              />
            </Field>
            <Field
              label="Problematica (ce te deranjează? de cât timp?)"
              className="sm:col-span-2"
            >
              <textarea
                required
                rows={5}
                value={form.concern}
                onChange={(e) => update("concern", e.target.value)}
                className={inputCls + " resize-y"}
                placeholder="Descrie pe scurt ceea ce te aduce în terapie…"
              />
            </Field>
            <Field
              label="Dorești să îmi transmiți altceva? (opțional)"
              className="sm:col-span-2"
            >
              <textarea
                rows={3}
                value={form.other}
                onChange={(e) => update("other", e.target.value)}
                className={inputCls + " resize-y"}
                placeholder="Orice altceva ai vrea să știu înainte de prima noastră discuție."
              />
            </Field>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:w-auto"
          >
            {sent ? (
              <>
                <Check className="h-4 w-4" /> Email deschis
              </>
            ) : (
              "Trimite cererea"
            )}
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            Mesajul se va deschide în aplicația ta de email pentru a-l putea verifica
            înainte de trimitere. Tot ce îmi împărtășești rămâne strict confidențial.
          </p>
        </form>

        <aside className="space-y-4">
          <InfoCard icon={MapPin} title="Cabinet">
            București, România
            <br />
            Adresa exactă se comunică la programare
          </InfoCard>
          <InfoCard icon={Mail} title="Email">
            <a className="text-primary hover:underline" href={`mailto:${PRACTICE_EMAIL}`}>
              {PRACTICE_EMAIL}
            </a>
          </InfoCard>
          <InfoCard icon={Phone} title="Telefon">
            <a className="text-primary hover:underline" href="tel:+40765757740">
              +40 765 757 740
            </a>
          </InfoCard>
          <InfoCard icon={Clock} title="Program">
            Luni — Vineri · 10:00 — 19:00
            <br />
            Sâmbătă · pe bază de programare
          </InfoCard>
        </aside>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

function RadioPills<T extends string>({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {options.map((opt) => (
        <label
          key={opt}
          className={
            "flex w-full cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition " +
            (value === opt
              ? "border-primary bg-secondary text-foreground"
              : "border-border bg-background text-muted-foreground hover:bg-secondary/50")
          }
        >
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="sr-only"
          />
          <span
            className={
              "grid h-4 w-4 place-items-center rounded-full border " +
              (value === opt ? "border-primary" : "border-muted-foreground/40")
            }
          >
            {value === opt && <span className="h-2 w-2 rounded-full bg-primary" />}
          </span>
          {opt}
        </label>
      ))}
    </div>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={"block " + className}>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 rounded-2xl border border-border bg-card p-5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {title}
        </p>
        <div className="mt-1 text-sm leading-relaxed text-foreground">{children}</div>
      </div>
    </div>
  );
}
