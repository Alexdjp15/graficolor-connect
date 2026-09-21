import { useEffect, useMemo, useState } from "react";
import { Check, Download, ExternalLink, Moon, Sun } from "lucide-react";
import logoAsset from "@/assets/graficolor-logo.jpg.asset.json";
import { actionIcons, ecardConfig, whatsappUrl } from "@/data/ecard-config";

type Theme = "light" | "dark";

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button type="button" className="icon-button" aria-label={label} title={label} onClick={onClick}>
      {children}
    </button>
  );
}

function ActionTile({
  label,
  icon: Icon,
  href,
  onClick,
  download,
}: {
  label: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  href?: string;
  onClick?: () => void;
  download?: boolean;
}) {
  const content = (
    <>
      <span className="action-icon"><Icon size={22} strokeWidth={1.8} /></span>
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <a className="action-tile" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" download={download}>
        {content}
      </a>
    );
  }
  return <button type="button" className="action-tile" onClick={onClick}>{content}</button>;
}

export function ECard() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("graficolor-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    setTheme(saved === "light" || saved === "dark" ? saved : preferred);
  }, []);

  useEffect(() => {
    document.documentElement.dataset["theme"] = theme;
    window.localStorage.setItem("graficolor-theme", theme);
  }, [theme]);

  const contactHref = useMemo(() => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${ecardConfig.businessName}`,
      `ORG:${ecardConfig.legalName}`,
      `TITLE:${ecardConfig.activity}`,
      `TEL;TYPE=CELL:${ecardConfig.phoneHref}`,
      `EMAIL;TYPE=WORK:${ecardConfig.email}`,
      `ADR;TYPE=WORK:;;${ecardConfig.location};;;;Colombia`,
      `URL:${ecardConfig.website}`,
      "END:VCARD",
    ].join("\r\n");
    return URL.createObjectURL(new Blob([vcard], { type: "text/vcard;charset=utf-8" }));
  }, []);

  useEffect(() => () => URL.revokeObjectURL(contactHref), [contactHref]);

  async function shareCard() {
    const shareData = { title: `${ecardConfig.businessName} · ${ecardConfig.activity}`, text: ecardConfig.tagline, url: window.location.href };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setCopied(false);
    }
  }

  const actions = [
    { label: "WhatsApp", icon: actionIcons.whatsapp, href: whatsappUrl("Hola, vengo de su E-Card y quisiera más información.") },
    { label: "Llamar", icon: actionIcons.call, href: `tel:${ecardConfig.phoneHref}` },
    { label: "Correo", icon: actionIcons.email, href: `mailto:${ecardConfig.email}` },
    { label: "Sitio web", icon: actionIcons.website, href: ecardConfig.website },
    { label: "Instagram", icon: actionIcons.instagram, href: ecardConfig.instagram },
    { label: "Ubicación", icon: actionIcons.location, href: ecardConfig.map },
    { label: "Portafolio", icon: actionIcons.portfolio, href: ecardConfig.portfolio },
    { label: "Cotizar", icon: actionIcons.quote, href: whatsappUrl(ecardConfig.quoteMessage) },
  ];

  return (
    <main className="ecard-page">
      <article className="ecard-shell" aria-label={`E-Card de ${ecardConfig.businessName}`}>
        <header className="ecard-hero reveal">
          <div className="hero-grid" aria-hidden="true" />
          <div className="registration-marks" aria-hidden="true"><i /><i /><i /></div>
          <div className="topbar">
            <span className="edition">E-CARD / SM · 2026</span>
            <IconButton label={`Activar modo ${theme === "dark" ? "claro" : "oscuro"}`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
            </IconButton>
          </div>
          <div className="brand-lockup">
            <div className="logo-frame"><img src={logoAsset.url} alt="Logo de Graficolor" /></div>
            <p className="activity">{ecardConfig.activity}</p>
            <h1>{ecardConfig.businessName}</h1>
            <p className="tagline">{ecardConfig.tagline}</p>
            <p className="hero-description">{ecardConfig.description}</p>
          </div>
        </header>

        <div className="ecard-content">
          <a className="primary-cta reveal delay-1" href={whatsappUrl("Hola, vengo de su E-Card y quisiera cotizar un trabajo.")} target="_blank" rel="noreferrer">
            <actionIcons.whatsapp size={22} />
            <span>Escríbenos por WhatsApp</span>
            <ExternalLink size={17} />
          </a>

          <section className="section reveal delay-2" aria-labelledby="acciones-title">
            <div className="section-heading"><span>01</span><h2 id="acciones-title">Conecta con nosotros</h2></div>
            <div className="actions-grid">
              {actions.map((action) => <ActionTile key={action.label} {...action} />)}
              <ActionTile label={copied ? "Enlace copiado" : "Compartir"} icon={copied ? Check : actionIcons.share} onClick={shareCard} />
              <ActionTile label="Guardar contacto" icon={Download} href={contactHref} download />
            </div>
            <p className="share-feedback" aria-live="polite">{copied ? "Enlace copiado al portapapeles." : ""}</p>
          </section>

          <section className="section reveal delay-3" id="servicios" aria-labelledby="servicios-title">
            <div className="section-heading"><span>02</span><h2 id="servicios-title">Nuestros servicios</h2></div>
            <div className="services-list">
              {ecardConfig.services.map((service, index) => {
                const Icon = service.icon;
                const body = <><span className="service-number">0{index + 1}</span><Icon size={23} /><span className="service-copy"><strong>{service.name}</strong><small>{service.description}</small></span></>;
                return service.href ? <a className="service-row" href={service.href} key={service.id}>{body}</a> : <div className="service-row" key={service.id}>{body}</div>;
              })}
            </div>
          </section>

          <section className="portfolio-band reveal" aria-labelledby="portafolio-title">
            <div><span className="eyebrow">Trabajo que habla por tu marca</span><h2 id="portafolio-title">Ideas que pasan<br />del concepto al papel.</h2></div>
            <a href={ecardConfig.portfolio} target="_blank" rel="noreferrer">Ver portafolio <ExternalLink size={17} /></a>
          </section>

          <section className="section contact-section reveal" aria-labelledby="contacto-title">
            <div className="section-heading"><span>03</span><h2 id="contacto-title">Contacto</h2></div>
            <address>
              <strong>{ecardConfig.legalName}</strong>
              <span>{ecardConfig.location}</span>
              <a href={`tel:${ecardConfig.phoneHref}`}>{ecardConfig.phone}</a>
              <a href={`mailto:${ecardConfig.email}`}>{ecardConfig.email}</a>
              <a href={ecardConfig.website} target="_blank" rel="noreferrer">graficolorsm.com</a>
            </address>
          </section>
        </div>

        <footer>
          <img src={logoAsset.url} alt="" aria-hidden="true" />
          <div><strong>{ecardConfig.businessName}</strong><span>{ecardConfig.activity}</span></div>
          <p>Santa Marta, Colombia</p>
        </footer>
      </article>
    </main>
  );
}