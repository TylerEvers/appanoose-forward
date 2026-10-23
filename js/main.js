"use strict";

// Left empty for the production (root) deployment. The GitHub Pages preview workflow
// rewrites this to the repository's path segment (e.g. "/appanoose-forward") in the built
// artifact only, so routing still matches the bare paths used as keys in `routes` below.
const BASE_PATH = "";

const routes = {
  "/": {
    title: "Appanoose Forward",
    description:
      "Plain-language information about the upcoming ballot measure: what it does, key election dates, and how to vote.",
    content: `
      <section class="hero" aria-labelledby="page-title">
        <p class="eyebrow">Ballot measure information</p>
        <h1 id="page-title">Understand Measure [name/number] before you vote</h1>
        <p class="hero-copy">
          Add an approved, plain-language, one- or two-sentence summary of the measure here.
          Replace this sample copy with the organization's verified information before launch.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="/measure" data-route-link>What the measure does</a>
          <a class="button button-secondary" href="/vote" data-route-link>How to vote</a>
        </div>
      </section>
      <section class="facts-strip" aria-label="Key dates and facts">
        <div class="fact">
          <p class="fact-label">Election Day</p>
          <p class="fact-value">[Month Day, Year]</p>
        </div>
        <div class="fact">
          <p class="fact-label">Registration deadline</p>
          <p class="fact-value">[Month Day, Year]</p>
        </div>
        <div class="fact">
          <p class="fact-label">On the ballot as</p>
          <p class="fact-value">[Measure name or number]</p>
        </div>
      </section>
    `
  },
  "/measure": {
    title: "The Measure | Appanoose Forward",
    description: "What the ballot measure does and how it got on the ballot.",
    content: `
      <section class="hero page-content" aria-labelledby="page-title">
        <p class="eyebrow">The measure</p>
        <h1 id="page-title">What Measure [name/number] would do</h1>
        <p>
          Add an approved explanation of what the measure does here, written in plain language and
          checked against the official ballot text. Link to the full measure text on the
          <a href="/sources" data-route-link>sources page</a>.
        </p>
      </section>
      <section class="page-content timeline-section" aria-labelledby="timeline-title">
        <h2 id="timeline-title">How it got on the ballot</h2>
        <ol class="timeline">
          <li class="timeline-item">
            <p class="timeline-date">[Month Year]</p>
            <p class="timeline-copy">Add the first milestone in the measure's history here.</p>
          </li>
          <li class="timeline-item">
            <p class="timeline-date">[Month Year]</p>
            <p class="timeline-copy">Add the next milestone here.</p>
          </li>
          <li class="timeline-item">
            <p class="timeline-date">[Month Year]</p>
            <p class="timeline-copy">
              Add the final milestone, such as certification for the ballot, here.
            </p>
          </li>
        </ol>
        <a class="button button-primary" href="/faq" data-route-link>Read frequently asked questions</a>
      </section>
    `
  },
  "/faq": {
    title: "FAQ | Appanoose Forward",
    description: "Frequently asked questions about the ballot measure.",
    content: `
      <section class="hero page-content" aria-labelledby="page-title">
        <p class="eyebrow">FAQ</p>
        <h1 id="page-title">Frequently asked questions</h1>
      </section>
      <section class="page-content">
        <div class="faq-list">
          <details class="faq-item">
            <summary>Add a frequently asked question here.</summary>
            <p>Add the approved answer here, with a link to a source when possible.</p>
          </details>
          <details class="faq-item">
            <summary>Add another frequently asked question here.</summary>
            <p>Add the approved answer here, with a link to a source when possible.</p>
          </details>
          <details class="faq-item">
            <summary>Add a third frequently asked question here.</summary>
            <p>Add the approved answer here, with a link to a source when possible.</p>
          </details>
          <details class="faq-item">
            <summary>Add a fourth frequently asked question here.</summary>
            <p>Add the approved answer here, with a link to a source when possible.</p>
          </details>
        </div>
        <a class="button button-secondary" href="/contact" data-route-link>Ask a question</a>
      </section>
    `
  },
  "/vote": {
    title: "How to Vote | Appanoose Forward",
    description: "How to register, check your registration, and vote on this measure.",
    content: `
      <section class="hero page-content" aria-labelledby="page-title">
        <p class="eyebrow">How to vote</p>
        <h1 id="page-title">How to vote on this measure</h1>
        <p>Add approved, verified voting information for this election here.</p>
      </section>
      <section class="page-content">
        <ul class="vote-steps">
          <li>
            <strong>Register to vote</strong> &mdash; Add a link to the official state or county
            voter registration page here.
          </li>
          <li>
            <strong>Check your registration</strong> &mdash; Add a link to the official
            registration lookup tool here.
          </li>
          <li>
            <strong>Vote early or by mail</strong> &mdash; Add approved absentee and early voting
            dates and links here.
          </li>
          <li>
            <strong>Find your polling place</strong> &mdash; Add a link to the official polling
            place lookup tool here.
          </li>
        </ul>
        <a class="button button-primary" href="/sources" data-route-link>See official sources</a>
      </section>
    `
  },
  "/sources": {
    title: "Sources | Appanoose Forward",
    description: "Official, verifiable sources behind this page.",
    content: `
      <section class="hero page-content" aria-labelledby="page-title">
        <p class="eyebrow">Sources</p>
        <h1 id="page-title">Sources and official resources</h1>
        <p>
          Add links to the official, verifiable sources behind this page here, such as the full
          ballot measure text, county elections office, and public meeting records.
        </p>
      </section>
      <section class="page-content">
        <ul class="source-list">
          <li><a href="#">Add a link to the full measure text here</a></li>
          <li><a href="#">Add a link to the county or state elections office here</a></li>
          <li><a href="#">Add a link to relevant public meeting minutes or agendas here</a></li>
        </ul>
      </section>
    `
  },
  "/contact": {
    title: "Contact | Appanoose Forward",
    description: "Contact Appanoose Forward.",
    content: `
      <section class="hero page-content" aria-labelledby="page-title">
        <p class="eyebrow">Contact</p>
        <h1 id="page-title">Get in touch</h1>
        <p>
          Add an approved public contact method here, or link to a secure contact form when one
          is available.
        </p>
        <a class="button button-primary" href="/" data-route-link>Return home</a>
      </section>
    `
  }
};

const mainContent = document.querySelector("#main-content");
const descriptionMeta = document.querySelector('meta[name="description"]');
const openGraphTitle = document.querySelector('meta[property="og:title"]');
const openGraphDescription = document.querySelector('meta[property="og:description"]');
const openGraphUrl = document.querySelector('meta[property="og:url"]');
const canonicalLink = document.querySelector('link[rel="canonical"]');
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
const deadlineBanner = document.querySelector("#deadline-banner");
const deadlineBannerDismiss = document.querySelector(".deadline-banner-dismiss");
const DEADLINE_BANNER_DISMISSED_KEY = "af-deadline-banner-dismissed";

document.querySelector("#current-year").textContent = String(new Date().getFullYear());

if (deadlineBanner && deadlineBannerDismiss) {
  try {
    if (window.localStorage.getItem(DEADLINE_BANNER_DISMISSED_KEY) === "true") {
      deadlineBanner.hidden = true;
    }
  } catch {
    // Ignore storage access errors (e.g. disabled in the browser) and keep the banner visible.
  }

  deadlineBannerDismiss.addEventListener("click", () => {
    deadlineBanner.hidden = true;
    try {
      window.localStorage.setItem(DEADLINE_BANNER_DISMISSED_KEY, "true");
    } catch {
      // Ignore storage access errors; the banner still dismisses for this page view.
    }
  });
}

function normalizePath(pathname) {
  let path = pathname;
  if (BASE_PATH && path.startsWith(BASE_PATH)) {
    path = path.slice(BASE_PATH.length) || "/";
  }
  const normalized = path.replace(/\/+$/, "");
  return normalized || "/";
}

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
  navMenu.classList.remove("is-open");
}

function renderRoute({ focus = false } = {}) {
  const path = normalizePath(window.location.pathname);
  const route = routes[path];

  if (route) {
    mainContent.innerHTML = route.content;
    document.title = route.title;
    descriptionMeta.content = route.description;
    openGraphTitle.content = route.title;
    openGraphDescription.content = route.description;
  } else {
    mainContent.innerHTML = `
      <section class="hero page-content" aria-labelledby="page-title">
        <p class="eyebrow">Page not found</p>
        <h1 id="page-title">We couldn't find that page.</h1>
        <p>Check the address or return to the home page.</p>
        <a class="button button-primary" href="/" data-route-link>Return home</a>
      </section>
    `;
    document.title = "Page not found | Appanoose Forward";
    descriptionMeta.content = "The requested page could not be found.";
    openGraphTitle.content = document.title;
    openGraphDescription.content = descriptionMeta.content;
  }

  const canonicalUrl = new URL(path, "https://appanooseforward.org");
  canonicalLink.href = canonicalUrl.href;
  openGraphUrl.content = canonicalUrl.href;

  document.querySelectorAll(".nav-menu a[data-route-link]").forEach((link) => {
    if (normalizePath(new URL(link.href).pathname) === path) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  closeMenu();

  if (focus) {
    mainContent.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-route-link]");
  if (
    !link ||
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    link.target ||
    new URL(link.href).origin !== window.location.origin
  ) {
    return;
  }

  event.preventDefault();
  window.history.pushState({}, "", link.href);
  renderRoute({ focus: true });
});

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute(
    "aria-label",
    isExpanded ? "Open navigation menu" : "Close navigation menu"
  );
  navMenu.classList.toggle("is-open", !isExpanded);
});

window.addEventListener("popstate", () => renderRoute({ focus: true }));

renderRoute();
