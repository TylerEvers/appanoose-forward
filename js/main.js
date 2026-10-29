"use strict";

// Left empty for the production (root) deployment. The GitHub Pages preview workflow
// rewrites this to the repository's path segment (e.g. "/appanoose-forward") in the built
// artifact only, so routing still matches the bare paths used as keys in `routes` below.
const BASE_PATH = "";

const routes = {
  "/": {
    title: "Appanoose Forward",
    description:
      "Appanoose Forward opposes Public Measure AM, a proposal to replace the existing 7% county hotel/motel tax on November 3, 2026.",
    content: `
      <section class="hero" aria-labelledby="page-title">
        <p class="eyebrow">Supporting local communities. Protecting transparency in tourism funding.</p>
        <h1 id="page-title">Appanoose Forward</h1>
        <p class="hero-copy">
          Appanoose Forward is a bipartisan political action committee made up of Appanoose County
          residents committed to making our county a great place to live, work, visit, and thrive.
          We oppose Public Measure AM on the November 3, 2026 ballot.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="/measure" data-route-link>Understand Public Measure AM</a>
          <a class="button button-secondary" href="/vote" data-route-link>Who can vote</a>
        </div>
      </section>
      <figure class="campaign-image">
        <img
          src="/assets/vote-no.jpg"
          width="1920"
          height="1080"
          alt="Vote NO on Public Measure AM, November 3rd."
        />
      </figure>
      <section class="facts-strip" aria-label="Key dates and facts">
        <div class="fact">
          <p class="fact-label">Election Day</p>
          <p class="fact-value">November 3, 2026</p>
        </div>
        <div class="fact">
          <p class="fact-label">Ballot measure</p>
          <p class="fact-value">Public Measure AM</p>
        </div>
        <div class="fact">
          <p class="fact-label">Proposed tax rate</p>
          <p class="fact-value">7% (unchanged)</p>
        </div>
      </section>
      <section class="page-content" aria-labelledby="change-title">
        <h2 id="change-title">What would Public Measure AM change?</h2>
        <p>
          Public Measure AM asks voters to repeal Appanoose County's existing 7% hotel/motel tax
          and replace it with a new 7% tax beginning January 1, 2027.
        </p>
        <p>
          The tax rate would stay the same. What would change is who controls the revenue.
        </p>
        <p>
          Under the current arrangement, county hotel/motel tax revenue is administered through
          the nine-member Appanoose County Tourism Commission. If the measure passes,
          administration would return to the three-member Appanoose County Board of Supervisors.
        </p>
        <p>
          The measure does not specify whether funding would continue to be allocated to the
          Tourism Commission or at what level.
        </p>
        <a class="button button-secondary" href="/measure" data-route-link>See what a YES or NO vote means</a>
      </section>
      <section class="page-content" aria-labelledby="funding-today-title">
        <h2 id="funding-today-title">How is tourism funding managed today?</h2>
        <p>
          Appanoose County Tourism is overseen by a nine-member commission with three
          representatives each from Appanoose County, the City of Centerville, and PACT.
        </p>
        <p>
          The Commission maintains separate operating and reserve bank accounts from PACT,
          reviews financial reports at its meetings, and develops an annual tourism budget.
          Tourism updates and financial information are also shared with the Board of Supervisors
          and Centerville City Council.
        </p>
        <p>
          Tourism grant applications are evaluated using a standardized scoring process, and
          final funding decisions are made by voting members of the Commission.
        </p>
      </section>
      <section class="page-content" aria-labelledby="grant-process-title">
        <h2 id="grant-process-title">How are tourism grants awarded, and how is the money accounted for?</h2>
        <p>
          Appanoose County Tourism uses a competitive grant process that is open to eligible
          businesses, attractions, municipalities, and nonprofit organizations throughout the
          county.
        </p>
        <p>
          Commission members independently score applications using a standardized rubric before
          reviewing projects together and voting on funding awards.
        </p>
        <p>
          Grant recipients must submit year-end reports documenting project results and receipts
          for approved expenditures. Funds used for unapproved purposes, or not properly
          documented, are subject to repayment. Recipients who fail to complete the required
          reporting are ineligible to apply in the following grant cycle.
        </p>
      </section>
      <section class="page-content" aria-labelledby="investment-title">
        <h2 id="investment-title">Two decades of local investment</h2>
        <div class="facts-strip" aria-label="Tourism investment figures">
          <div class="fact"><p class="fact-label">Invested over 20 years</p><p class="fact-value">$3.2 million</p></div>
          <div class="fact"><p class="fact-label">Tourism grants awarded</p><p class="fact-value">$815,000</p></div>
          <div class="fact"><p class="fact-label">Local grant recipients</p><p class="fact-value">96</p></div>
        </div>
        <p>
          Tourism grants, marketing, events, and initiatives have supported Centerville, Moravia,
          Moulton, Rathbun, and other parts of the county, including historic preservation, parks
          and recreation, downtown revitalization, community events, and destination marketing.
        </p>
      </section>
      <section class="page-content" aria-labelledby="questions-title">
        <h2 id="questions-title">Questions about future funding remain</h2>
        <p>
          Iowa law requires at least 50% of local hotel/motel tax revenue to be spent on qualifying
          tourism-related purposes, but does not require the money to pass through Appanoose County
          Tourism. The ballot does not establish how much revenue would continue to support the
          Commission's grants, events, or other programs.
        </p>
        <p>
          Visitors spent an estimated $37.3 million in Appanoose County in 2025. Tourism spending
          supports local businesses, employment, and public tax revenue.
        </p>
        <a class="button button-secondary" href="/faq" data-route-link>Read the funding questions</a>
      </section>
      <section class="page-content" aria-labelledby="visitor-impact-title">
        <h2 id="visitor-impact-title">Tourism's economic impact</h2>
        <p>
          Visitors spent an estimated <strong>$37.3 million</strong> in Appanoose County in 2025.
          Tourism spending reaches restaurants, lodging properties, local retailers, attractions,
          and other businesses. It also contributes to employment and generates public tax revenue.
        </p>
        <p>
          Appanoose County Tourism's historical investments have supported visitor attractions
          and amenities enjoyed by local residents.
        </p>
      </section>
      <section class="page-content" aria-labelledby="about-title">
        <h2 id="about-title">About Appanoose Forward</h2>
        <p>
          Our committee currently opposes Public Measure AM and supports retaining the existing
          Tourism Commission funding arrangement. We engage with issues affecting the long-term
          success of Appanoose County and encourage community involvement in public decisions.
        </p>
        <a href="/sources" data-route-link>Review additional resources</a>
      </section>
    `
  },
  "/measure": {
    title: "Public Measure AM | Appanoose Forward",
    description: "What Public Measure AM would change, what a YES or NO vote means, and what remains unknown.",
    content: `
      <section class="hero page-content" aria-labelledby="page-title">
        <p class="eyebrow">Public Measure AM</p>
        <h1 id="page-title">What's really changing?</h1>
        <p>
          The ballot asks voters in unincorporated Appanoose County to repeal the existing 7%
          hotel/motel tax and replace it with another 7% tax. The tax rate would remain 7%. The
          proposed change concerns who administers the revenue.
        </p>
      </section>
      <section class="page-content" aria-labelledby="vote-meaning">
        <h2 id="vote-meaning">What does your vote mean?</h2>
        <h3>A YES vote</h3>
        <p>
          Approves repeal of the existing 7% tax on December 31, 2026, and establishes a
          replacement 7% tax on January 1, 2027. Under the proposed administrative arrangement,
          the Board of Supervisors would assume responsibility for administering the county's
          portion of the revenue.
        </p>
        <h3>A NO vote</h3>
        <p>
          Rejects the repeal-and-replacement proposal, leaving the existing tax in effect. The
          current Tourism Commission arrangement would not be changed by this ballot measure,
          although separate future actions concerning funding agreements remain possible.
        </p>
      </section>
      <section class="page-content" aria-labelledby="tourism-system">
        <h2 id="tourism-system">A tourism funding system established more than 20 years ago</h2>
        <p>
          Following voter-approved ballot measures in 2004, Appanoose County Tourism began
          administering hotel/motel tax funds for the City of Centerville and unincorporated
          Appanoose County in 2005.
        </p>
        <p>The nine-member Tourism Commission includes:</p>
        <ul class="vote-steps">
          <li>Three representatives appointed by the Appanoose County Board of Supervisors</li>
          <li>Three representatives appointed by the City of Centerville</li>
          <li>Three representatives appointed by PACT</li>
        </ul>
        <p>
          This arrangement provides representation from three appointing organizations when
          reviewing tourism priorities and investment opportunities.
        </p>
      </section>
      <section class="page-content" aria-labelledby="oversight-title">
        <h2 id="oversight-title">How are the funds overseen?</h2>
        <p>
          The Board of Supervisors currently has three appointed representatives on the Commission,
          receives access to monthly financial reports and an annual report, and has an opportunity
          to review and comment on the proposed annual budget.
        </p>
        <p>
          According to Appanoose Forward's review of the existing process, the Board has not
          requested changes to the Commission's proposed budgets.
        </p>
      </section>
      <section class="page-content" aria-labelledby="investments-title">
        <h2 id="investments-title">Two decades of local investments</h2>
        <div class="facts-strip" aria-label="Tourism investment figures">
          <div class="fact"><p class="fact-label">Invested over 20 years</p><p class="fact-value">$3.2 million</p></div>
          <div class="fact"><p class="fact-label">Tourism grants awarded</p><p class="fact-value">$815,000</p></div>
          <div class="fact"><p class="fact-label">Local grant recipients</p><p class="fact-value">96</p></div>
        </div>
        <p>
          Tourism grants have supported projects in Centerville, Moravia, Moulton, Rathbun, and
          other parts of the county. Funded projects include historic preservation, parks and
          recreation, downtown revitalization, community events, and destination marketing.
        </p>
        <p>
          Annual tourism funding has also supported longstanding traditions such as Pancake Day,
          the Moravia Fall Festival, and the Moulton Jamboree. These programs rely on predictable
          funding sources for annual planning. A future reduction in Appanoose County Tourism's
          revenue could affect support available for community events and grant applicants.
        </p>
      </section>
      <section class="page-content" aria-labelledby="visitor-impact-title">
        <h2 id="visitor-impact-title">Tourism's economic impact</h2>
        <p>
          Visitors spent an estimated $37.3 million in Appanoose County in 2025. Tourism spending
          reaches restaurants, lodging properties, local retailers, attractions, and other
          businesses. It also contributes to employment and generates public tax revenue.
        </p>
        <p>
          Appanoose County Tourism's historical investments have supported both visitor
          attractions and amenities enjoyed by local residents.
        </p>
      </section>
      <section class="page-content" aria-labelledby="funding-questions">
        <h2 id="funding-questions">Why the funding arrangement matters</h2>
        <p>
          Iowa law requires at least 50% of local hotel/motel tax revenue to be spent on qualifying
          tourism-related purposes. It does not require that money to pass through Appanoose County
          Tourism. Under a new administrative arrangement, the Board of Supervisors could direct
          the required tourism portion toward other qualifying expenses rather than continuing the
          Commission's existing grant and funding programs.
        </p>
        <p>The ballot itself does not establish how much revenue would continue to flow through Appanoose County Tourism. Important questions include:</p>
        <ul class="vote-steps">
          <li>Would Appanoose County Tourism continue to receive a designated share of the county's hotel/motel tax revenue?</li>
          <li>Would the current community grant program continue?</li>
          <li>Would existing annual event funding remain available?</li>
          <li>What review and reporting processes would apply to future funding decisions?</li>
        </ul>
        <p>These are among the funding questions Appanoose Forward has identified in explaining its opposition to Public Measure AM.</p>
        <a class="button button-primary" href="/sources" data-route-link>Review additional resources</a>
      </section>
    `
  },
  "/faq": {
    title: "FAQ | Appanoose Forward",
    description: "Answers about Public Measure AM, who can vote, the tax rate, and tourism funding.",
    content: `
      <section class="hero page-content" aria-labelledby="page-title">
        <p class="eyebrow">Public Measure AM</p>
        <h1 id="page-title">Frequently asked questions</h1>
      </section>
      <section class="page-content">
        <div class="faq-list">
          <details class="faq-item">
            <summary>Does Public Measure AM increase the hotel/motel tax rate?</summary>
            <p>No. The existing rate is 7%, and the proposed replacement tax would also be 7%. The proposed change concerns administration of the revenue.</p>
          </details>
          <details class="faq-item">
            <summary>Who can vote on Public Measure AM?</summary>
            <p>Only eligible voters in the unincorporated areas of Appanoose County will see the measure on their ballots. Residents within incorporated city limits will not vote on it.</p>
          </details>
          <details class="faq-item">
            <summary>What happens if I vote YES?</summary>
            <p>A YES vote approves repeal of the existing 7% tax on December 31, 2026, and establishes a replacement 7% tax on January 1, 2027. Under the proposed administrative arrangement, the Board of Supervisors would administer the county's portion of the revenue.</p>
          </details>
          <details class="faq-item">
            <summary>What happens if I vote NO?</summary>
            <p>A NO vote rejects the repeal-and-replacement proposal, leaving the existing tax in effect. This ballot measure would not change the current Tourism Commission arrangement. Separate future actions concerning funding agreements remain possible.</p>
          </details>
          <details class="faq-item">
            <summary>Does Iowa law require hotel/motel tax revenue to go through Appanoose County Tourism?</summary>
            <p>No. Iowa law requires at least 50% of local hotel/motel tax revenue to be spent on qualifying tourism-related purposes, but it does not require those funds to pass through the Commission.</p>
          </details>
          <details class="faq-item">
            <summary>What tourism investments have been made?</summary>
            <p>Over 20 years, tourism grants, marketing, events, and initiatives have represented $3.2 million in investment, including $815,000 in tourism grants awarded to 96 local grant recipients.</p>
          </details>
        </div>
        <a class="button button-secondary" href="/contact" data-route-link>Questions about the measure?</a>
      </section>
    `
  },
  "/vote": {
    title: "How to Vote | Appanoose Forward",
    description: "Election date and voter eligibility for Public Measure AM in Appanoose County.",
    content: `
      <section class="hero page-content" aria-labelledby="page-title">
        <p class="eyebrow">Election information</p>
        <h1 id="page-title">Who can vote on Public Measure AM?</h1>
        <p>
          Only eligible voters in the unincorporated areas of Appanoose County will see Public
          Measure AM on their ballots. Residents living within incorporated city limits will not
          vote on this measure.
        </p>
      </section>
      <section class="page-content">
        <h2>Election Day</h2>
        <p><strong>Tuesday, November 3, 2026</strong></p>
        <p>For the official ballot language and additional resources, see the <a href="/sources" data-route-link>resources page</a>.</p>
        <a class="button button-primary" href="/measure" data-route-link>Understand the measure</a>
      </section>
    `
  },
  "/sources": {
    title: "Sources | Appanoose Forward",
    description: "Additional resources about Public Measure AM, tourism investment, visitor spending, and Iowa law.",
    content: `
      <section class="hero page-content" aria-labelledby="page-title">
        <p class="eyebrow">Learn more about Public Measure AM</p>
        <h1 id="page-title">Additional resources</h1>
        <p>
          Review the ballot language, tourism investment information, visitor spending data, and
          the Iowa law governing hotel/motel tax revenue.
        </p>
      </section>
      <section class="page-content">
        <ul class="source-list">
          <li>Official Public Measure AM ballot language</li>
          <li>
            <a href="/assets/20%20Year%20Appanoose%20County%20Tourism%20Report%20-%20Final%20.pdf" target="_blank" rel="noopener noreferrer">
              20-Year Appanoose County Tourism Report (opens in a new tab)
            </a>
            &middot;
            <a href="/assets/20%20Year%20Appanoose%20County%20Tourism%20Report%20-%20Final%20.pdf" download="20 Year Appanoose County Tourism Report - Final.pdf">
              Download PDF
            </a>
          </li>
          <li>
            <a href="/assets/Appanoose%20County%20Tourism%20Graphic%20(2025%20Report)%20.pdf" target="_blank" rel="noopener noreferrer">
              Appanoose County Tourism Graphic (2025 Report) (opens in a new tab)
            </a>
            &middot;
            <a href="/assets/Appanoose%20County%20Tourism%20Graphic%20(2025%20Report)%20.pdf" download="Appanoose County Tourism Graphic (2025 Report).pdf">
              Download PDF
            </a>
          </li>
          <li>
            <a href="https://www.legis.iowa.gov/docs/code/2025/423A.7.pdf" target="_blank" rel="noopener noreferrer">
              Iowa Code Section 423A.7 (PDF)
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61595228097470" target="_blank" rel="noopener noreferrer">
              Appanoose Forward on Facebook
            </a>
          </li>
        </ul>
        <p>Questions about the measure or the existing tourism funding process can be directed to Appanoose Forward.</p>
      </section>
    `
  },
  "/contact": {
    title: "Contact | Appanoose Forward",
    description: "Information for questions about Public Measure AM and Appanoose County tourism funding.",
    content: `
      <section class="hero page-content" aria-labelledby="page-title">
        <p class="eyebrow">Appanoose Forward</p>
        <h1 id="page-title">Questions about the measure?</h1>
        <p>
          Questions about Public Measure AM or the existing tourism funding process can be
          directed to Appanoose Forward. See the Appanoose Forward Facebook page listed on our
          <a href="/sources" data-route-link>additional resources page</a>.
        </p>
        <p>Paid For By Appanoose Forward PAC</p>
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
