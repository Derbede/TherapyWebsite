import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Leaf } from "lucide-react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-medium text-foreground">Pagina nu a fost găsită</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Pagina pe care o cauți nu există.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Înapoi la pagina principală
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-medium text-foreground">Pagina nu a putut fi încărcată</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ceva nu a mers cum trebuie. Te rog încearcă din nou.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Încearcă din nou
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-accent"
          >
            Pagina principală
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Cristina Bujoreanu, Psiholog" },
      { name: "theme-color", content: "#e8efe4" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const NAV = [
  { to: "/", label: "Acasă" },
  { to: "/about", label: "Despre mine" },
  { to: "/studies", label: "Studii" },
  { to: "/packages", label: "Pachete" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2 text-foreground">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary text-primary">
            <Leaf className="h-4 w-4" />
          </span>
          <span className="min-w-0 truncate font-serif text-xl">Cristina Bujoreanu - Pisholog</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Programează o ședință
          </Link>
        </nav>
        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
          aria-label="Meniu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-lg px-3 py-3 text-sm text-muted-foreground"
                activeProps={{ className: "text-foreground bg-secondary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-foreground">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-background text-primary">
              <Leaf className="h-4 w-4" />
            </span>
            <span className="font-serif text-xl">Cristina Bujoreanu</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Psiholog clinician și psihoterapeut în formare. Un spațiu sigur, cald și lipsit
            de judecată — LGBTQ+ friendly.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-foreground">Explorează</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {NAV.slice(1).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium text-foreground">Cabinet</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>București, România</li>
            <li>cristinabujoreanu24@gmail.com</li>
            <li>+40 765 757 740</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Cristina Bujoreanu. Toate drepturile rezervate.
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
