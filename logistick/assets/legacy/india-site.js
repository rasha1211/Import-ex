(function () {
  "use strict";

  const pages = {
    "index.html": {
      nav: "Home",
      title: "India moves. We make every mile count.",
      eyebrow: "Freight, built around India",
      intro: "One dependable partner for road freight, time-critical parcels and the supply chains that keep Indian businesses moving.",
      image: "photo-1601584115197-04ecc0da31d7",
      stats: [["28", "states connected"], ["640+", "serviceable districts"], ["24/7", "shipment visibility"]],
      sectionTitle: "Good logistics feels effortless.",
      sectionCopy: "The work behind a reliable delivery is anything but simple. We bring people, vehicles and clear information together around your promise to the customer.",
      cards: [
        ["Road freight", "Part-load or full truck, planned around your dispatch window and delivery commitment.", "service-details.html", "01"],
        ["Commerce delivery", "A considered last mile for growing brands, from first pickup to customer doorstep.", "index-3.html", "02"],
        ["Temperature care", "Cold-chain movements with handover discipline for sensitive goods.", "index-4.html", "03"]
      ],
      cta: ["Plan a movement", "contact.html"]
    },
    "index-2.html": {
      nav: "For growing business",
      title: "Your next market is closer than it looks.",
      eyebrow: "For India's growing businesses",
      intro: "Flexible freight for manufacturers, distributors and local brands ready to serve customers beyond their home city.",
      image: "photo-1566576912321-d58ddd7a6088",
      stats: [["1–20", "pallet-friendly loads"], ["48 hr", "typical lane planning"], ["1 team", "from pickup to POD"]],
      sectionTitle: "Capacity that grows with you.",
      sectionCopy: "Start with one consignment and scale into a regular dispatch rhythm. Clear paperwork, practical pickup windows and a real person to call keep expansion manageable.",
      cards: [["Part-load freight", "Pay for the space you need and keep smaller consignments moving on dependable schedules.", "service-details.html", "Flexible"], ["Find your next lane", "Explore the city pairs and regional routes that connect your business to new buyers.", "project.html", "Network"], ["Talk through a quote", "Share your origin, destination and cargo details with our operations team.", "contact.html", "Next step"]],
      cta: ["Request a business quote", "contact.html"]
    },
    "index-3.html": {
      nav: "Commerce delivery",
      title: "A better delivery is part of the product.",
      eyebrow: "For digital-first brands",
      intro: "Make every order feel considered with flexible fulfilment, reliable last-mile handovers and shipment updates customers can understand.",
      image: "photo-1586528116311-ad8dd3c8310d",
      stats: [["Same day", "dispatch coordination"], ["2-way", "delivery & returns"], ["Live", "milestone updates"]],
      sectionTitle: "From checkout to doorstep.",
      sectionCopy: "A smooth customer experience starts well before a parcel reaches the doorstep. We coordinate the small, important handovers that make the whole journey feel joined up.",
      cards: [["First-mile pickup", "Scheduled collection from your store, studio or fulfilment partner.", "service.html", "Pickup"], ["Delivery & returns", "A clear process for successful delivery, customer exceptions and reverse movement.", "service-details.html", "Last mile"], ["Shipment tracking", "Give customers a direct route to the latest milestone on their parcel.", "tracking.html", "Visibility"]],
      cta: ["Build your delivery plan", "contact.html"]
    },
    "index-4.html": {
      nav: "Cold-chain logistics",
      title: "When freshness cannot wait.",
      eyebrow: "For food, pharma & sensitive cargo",
      intro: "Temperature-aware transport starts with disciplined handling, agreed handovers and a team that treats every delay as meaningful.",
      image: "photo-1607623814075-e51df1bdc82f",
      stats: [["2–8°C", "planned cold-chain band"], ["Every handoff", "recorded & checked"], ["By lane", "route qualification"]],
      sectionTitle: "Protect the promise inside the box.",
      sectionCopy: "Each movement is planned to suit the cargo, the route and the receiving team. Temperature ranges and operating capability are confirmed before dispatch, not assumed.",
      cards: [["Temperature planning", "Agree the required range, handling method and escalation path before pickup.", "service-details.html", "Plan"], ["Qualified corridors", "Discuss route suitability and realistic transit windows with our operations desk.", "project.html", "Routes"], ["Specialist enquiry", "Tell us about your product and compliance needs so we can scope a suitable movement.", "contact.html", "Speak to us"]],
      cta: ["Discuss a cold-chain lane", "contact.html"]
    },
    "index-5.html": {
      nav: "Enterprise logistics",
      title: "One operating rhythm. A wider network.",
      eyebrow: "For complex supply chains",
      intro: "A responsive logistics partner for multi-location businesses balancing service levels, cost, capacity and changing demand.",
      image: "photo-1494412519320-aa613dfb7738",
      stats: [["Multi-site", "dispatch coordination"], ["Lane-level", "service reviews"], ["Named", "operations contact"]],
      sectionTitle: "Built for the moving parts.",
      sectionCopy: "We work with your procurement and operations teams to agree service measures, escalation ownership and a review cadence that helps decisions happen sooner.",
      cards: [["Dedicated capacity", "Plan recurring and seasonal requirements against real operating constraints.", "service-details.html", "Capacity"], ["Network design", "Map your origins, destinations and transfer points into a practical lane plan.", "project.html", "Design"], ["Operating review", "Bring delivery performance, exceptions and upcoming demand to one conversation.", "contact.html", "Partner"]],
      cta: ["Talk to enterprise operations", "contact.html"]
    },
    "about.html": {
      nav: "About",
      title: "Local understanding. A wider point of view.",
      eyebrow: "Who we are",
      intro: "BharatRoute is a logistics company concept shaped around the realities of doing business across India's many markets.",
      image: "photo-1519003722824-194d4455a60c",
      stats: [["People first", "at every handover"], ["Clear plans", "before dispatch"], ["Honest updates", "when plans change"]],
      sectionTitle: "Reliable is a team sport.",
      sectionCopy: "Our approach joins careful planning with practical communication. We make commitments that operations can support, and keep customers informed when the unexpected happens.",
      cards: [["Our service approach", "Learn how we plan freight, parcel and specialist movements.", "service.html", "What we do"], ["Meet the people", "Get to know the teams who coordinate a shipment from hub to handover.", "team.html", "Our team"], ["See us in action", "Read a corridor story about a distribution movement between two busy markets.", "project-details.html", "Case study"]],
      cta: ["Start a conversation", "contact.html"]
    },
    "service.html": {
      nav: "Services",
      title: "The right movement for the job.",
      eyebrow: "Our services",
      intro: "Choose a service around your cargo, timeline and customer promise. We will help you work through the route and operating detail.",
      image: "photo-1580674285054-bed31e145f59",
      stats: [["Road", "part & full loads"], ["Parcel", "commerce delivery"], ["Specialist", "temperature-aware"]],
      sectionTitle: "A practical service menu.",
      sectionCopy: "Every service begins with the same basics: clear cargo information, a suitable route, confirmed handovers and a useful update when you need one.",
      cards: [["Part-load & full truck", "Road freight matched to consignment size and route requirements.", "service-details.html", "Freight"], ["E-commerce delivery", "First mile, last mile and reverse movement for online businesses.", "index-3.html", "Commerce"], ["Temperature-aware freight", "Plan a sensitive movement with handling requirements agreed in advance.", "index-4.html", "Specialist"]],
      cta: ["Tell us what you need to move", "contact.html"]
    },
    "service-details.html": {
      nav: "Road freight detail",
      title: "Road freight, planned around your load.",
      eyebrow: "Part-load & full truck movement",
      intro: "Whether you are shipping a few pallets or filling a vehicle, good planning makes the difference between a dispatch and a dependable delivery.",
      image: "photo-1601584115197-04ecc0da31d7",
      stats: [["PTL", "shared capacity"], ["FTL", "dedicated vehicle"], ["POD", "delivery confirmation"]],
      sectionTitle: "The details that keep freight moving.",
      sectionCopy: "We confirm commodity, dimensions, loading needs, access constraints and receiving hours early. That gives dispatch and destination teams the information to prepare properly.",
      cards: [["Before pickup", "Prepare the invoice, e-way bill where applicable, packaging and contact details.", "contact.html", "Checklist"], ["During transit", "Follow key handovers and raise a question with the operations team.", "team-details.html", "Operations"], ["At delivery", "Confirm receipt, note exceptions and keep your proof of delivery together.", "tracking.html", "POD"]],
      cta: ["Plan a freight movement", "contact.html"]
    },
    "project.html": {
      nav: "Network",
      title: "Connecting India's working corridors.",
      eyebrow: "Network & service lanes",
      intro: "A useful network is more than a pin on a map. It is a route with suitable capacity, realistic handovers and people ready at both ends.",
      image: "photo-1473448912268-2022ce9509d8",
      stats: [["West", "Mumbai · Pune · Surat"], ["South", "Bengaluru · Chennai · Kochi"], ["North & East", "Delhi · Jaipur · Kolkata"]],
      sectionTitle: "Routes shaped by real demand.",
      sectionCopy: "Our sample network focuses on major commercial corridors. Share your origin, destination and dispatch frequency to confirm current serviceability and transit expectations.",
      cards: [["Mumbai to Pune", "A high-frequency corridor serving manufacturing, retail and regional distribution.", "project-details.html", "Featured lane"], ["Bengaluru to Chennai", "A southern industrial connection for scheduled and business-critical freight.", "contact.html", "South"], ["Delhi NCR to Jaipur", "Regional movement connecting North Indian distribution and consumer markets.", "contact.html", "North"]],
      cta: ["Check a route", "contact.html"]
    },
    "project-details.html": {
      nav: "Mumbai–Pune case study",
      title: "A steadier rhythm on the Mumbai–Pune run.",
      eyebrow: "Corridor note · West India",
      intro: "A sample distribution plan showing how dispatch cut-offs, loading readiness and receiving windows can make a busy regional lane easier to manage.",
      image: "photo-1501700493788-fa1a4fc9fe62",
      stats: [["Origin", "Mumbai region"], ["Destination", "Pune region"], ["Focus", "predictable handover"]],
      sectionTitle: "The plan behind the movement.",
      sectionCopy: "The shipper aligned its warehouse cut-off with a recurring departure window. Consignment data arrived before loading, and the destination team received an estimated arrival with time to prepare.",
      cards: [["01 · Align dispatch", "Set a realistic cut-off that gives the loading team room to stage and verify freight.", "service-details.html", "Step one"], ["02 · Confirm the handover", "Share receiving hours, site access and an on-site contact before the vehicle departs.", "team-details.html", "Step two"], ["03 · Review exceptions", "Use delivery notes and proof of delivery to improve the next cycle.", "contact.html", "Step three"]],
      cta: ["Discuss your corridor", "contact.html"]
    },
    "team.html": {
      nav: "Our people",
      title: "Good logistics starts with good listening.",
      eyebrow: "The people behind the plan",
      intro: "Dispatchers, hub teams, drivers and customer partners all shape the moment a shipment changes hands.",
      image: "photo-1521737711867-e3b97375f902",
      stats: [["One team", "across each handover"], ["Clear owners", "for every exception"], ["Shared context", "from pickup to POD"]],
      sectionTitle: "A real person, accountable for the detail.",
      sectionCopy: "We value practical knowledge, direct communication and the quiet discipline of doing the basics well. Meet the operations lead who keeps a busy hub moving.",
      cards: [["Hub operations", "Meet Ananya Rao and explore a day coordinating arrivals, loading and departures.", "team-details.html", "Featured profile"], ["Our operating approach", "Learn how a clear handover reduces friction for customers and teams.", "about.html", "Our values"], ["Join the conversation", "Tell us what your business needs from a logistics partner.", "contact.html", "Contact"]],
      cta: ["Talk with our team", "contact.html"]
    },
    "team-details.html": {
      nav: "Ananya Rao",
      title: "“Every good handover begins before the vehicle arrives.”",
      eyebrow: "People at work · Ananya Rao",
      intro: "Hub operations lead, Bengaluru. Ananya coordinates the people, paperwork and timing that turn a daily plan into a smooth departure.",
      image: "photo-1551836022-d5d88e9218df",
      stats: [["Role", "Hub operations lead"], ["Base", "Bengaluru, Karnataka"], ["Focus", "safe, ready handovers"]],
      sectionTitle: "A calm start makes a better shift.",
      sectionCopy: "Ananya starts with the arrivals board, checks which consignments need special handling and makes sure each dock team has the information it needs. When plans move, she updates the next person in the chain before it becomes a surprise.",
      cards: [["Our wider team", "Discover the principles shared by our customer and operations teams.", "team.html", "People"], ["How we work", "See the service approach that guides each customer movement.", "about.html", "Approach"], ["Need a hand with a shipment?", "Reach our operations desk with a route or consignment question.", "contact.html", "Get in touch"]],
      cta: ["Contact operations", "contact.html"]
    },
    "blog.html": {
      nav: "Journal",
      title: "Notes from the road and the warehouse.",
      eyebrow: "The BharatRoute journal",
      intro: "Straightforward thinking on Indian freight, fulfilment, customer experience and the small operational choices that make a difference.",
      image: "photo-1494412519320-aa613dfb7738",
      stats: [["Field notes", "from daily operations"], ["Useful ideas", "for growing teams"], ["India focused", "always"]],
      sectionTitle: "Latest from the journal.",
      sectionCopy: "A practical read for anyone responsible for moving goods, supporting customers or keeping a supply chain resilient.",
      cards: [["The five handovers that shape a delivery", "A shipment's journey is made of small moments. Here is how to make each one count.", "blog-details.html", "Operations · 6 min read"], ["Planning a new regional lane", "Questions to answer before adding a new city to your distribution map.", "project.html", "Network · 4 min read"], ["A clearer returns experience", "How a thoughtful reverse journey can protect customer trust.", "index-3.html", "Commerce · 5 min read"]],
      cta: ["Ask us a logistics question", "contact.html"]
    },
    "blog-details.html": {
      nav: "Journal article",
      title: "The five handovers that shape a delivery.",
      eyebrow: "Operations · 6 minute read",
      intro: "A useful delivery is a chain of people passing the right information at the right time. These five moments deserve a little more attention.",
      image: "photo-1586528116311-ad8dd3c8310d",
      stats: [["01", "Booking"], ["02", "Pickup"], ["03", "Receipt"]],
      sectionTitle: "Make the invisible work visible.",
      sectionCopy: "Start with a complete booking: accurate dimensions, commodity details, site contacts and receiving hours. At pickup, confirm the count and condition before the vehicle leaves. At every transfer, pass on exceptions as well as the manifest. At destination, prepare the receiving team with an arrival estimate. Finally, close the loop with a delivery confirmation that the shipper can actually use.",
      cards: [["Read the journal", "Return to practical notes for freight and fulfilment teams.", "blog.html", "More reading"], ["Plan a better handover", "Tell us where your current process feels harder than it should.", "contact.html", "Next step"], ["Track a sample consignment", "Try the local shipment-status demo.", "tracking.html", "Try tracking"]],
      cta: ["Talk through your operation", "contact.html"]
    },
    "contact.html": {
      nav: "Contact",
      title: "Let's get the first details moving.",
      eyebrow: "Contact BharatRoute",
      intro: "Tell us what you need to move, where it is going and when it should arrive. Our sample enquiry form will confirm locally in this prototype.",
      image: "photo-1494412519320-aa613dfb7738",
      stats: [["Freight desk", "+91 80 4567 8900"], ["Email", "hello@bharatroute.in"], ["Office", "Bengaluru, Karnataka"]],
      sectionTitle: "A useful conversation starts here.",
      sectionCopy: "Share a few details and the right team can take the next step. The contact information shown is sample business content for this website prototype.",
      cards: [["Need a status update?", "Use the tracking demo to check a sample consignment reference.", "tracking.html", "Tracking"], ["Not sure which service fits?", "Compare the road, commerce and specialist options.", "service.html", "Services"], ["Want to check a lane?", "See featured Indian corridors and ask us about your route.", "project.html", "Network"]],
      cta: ["Explore our services", "service.html"],
      form: true
    },
    "tracking.html": {
      nav: "Track shipment",
      title: "Know where your shipment stands.",
      eyebrow: "Shipment tracking",
      intro: "Enter a BharatRoute reference to see a sample milestone journey. This front-end demo uses local sample records and is not connected to a live carrier system.",
      image: "photo-1580674285054-bed31e145f59",
      stats: [["Booked", "consignment received"], ["In transit", "moving between hubs"], ["Delivered", "proof of delivery"]],
      sectionTitle: "A clear view, from pickup to delivery.",
      sectionCopy: "Try sample reference BR-IND-24816 or BR-IND-73104. For a real shipment, connect this interface to your carrier or transport-management API.",
      cards: [["Need a new movement?", "Share your origin, destination and cargo details with our team.", "contact.html", "Book freight"], ["Understand the service", "Explore the road freight options behind a shipment journey.", "service-details.html", "Our service"], ["Questions about a handover?", "Meet a hub operations lead and see how the work comes together.", "team-details.html", "People"]],
      cta: ["Speak with the freight desk", "contact.html"],
      tracking: true
    }
  };

  const filename = window.location.pathname.split("/").filter(Boolean).pop() || "index.html";
  const page = pages[filename] || pages["index.html"];
  const routeFiles = Object.keys(pages);
  const pageIndex = Math.max(routeFiles.indexOf(filename), 0) + 1;
  const app = document.createElement("div");
  app.id = "bharat-app";
  app.innerHTML = renderPage(page, filename, pageIndex, routeFiles.length);
  document.body.appendChild(app);
  document.addEventListener("DOMContentLoaded", () => {
    Array.from(document.body.children).filter((child) => child !== app).forEach((child) => child.remove());
  }, { once: true });
  document.title = `${page.nav} | BharatRoute Logistics`;
  document.documentElement.lang = "en-IN";

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function renderCards(cards) {
    return cards.map(([title, copy, href, label]) => `
      <a class="story-link" href="${href}">
        <span class="story-index">${escapeHtml(label)}</span>
        <span class="story-title">${escapeHtml(title)}</span>
        <span class="story-copy">${escapeHtml(copy)}</span>
        <span class="story-arrow" aria-hidden="true">↗</span>
      </a>`).join("");
  }

  function renderPage(data, currentFile, currentIndex, totalPages) {
    const nav = [
      ["Home", "index.html"], ["Solutions", "service.html"], ["Network", "project.html"],
      ["Track", "tracking.html"], ["Journal", "blog.html"], ["About", "about.html"], ["Contact", "contact.html"]
    ];
    const navLinks = nav.map(([label, href]) => `<a href="${href}"${currentFile === href ? ' aria-current="page"' : ""}>${label}</a>`).join("");
    const extraLinks = Object.entries(pages).filter(([href]) => href !== "index.html").map(([href, item]) => `<a href="${href}">${escapeHtml(item.nav)}</a>`).join("");
    const stats = data.stats.map(([value, label]) => `<div class="metric"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join("");
    const form = data.tracking ? `
      <form class="lookup-form" id="tracking-form">
        <label for="tracking-number">Shipment reference</label>
        <div class="field-row"><input id="tracking-number" name="reference" autocomplete="off" placeholder="Try BR-IND-24816" required><button class="button button-dark" type="submit">Find shipment <span aria-hidden="true">↗</span></button></div>
        <p class="form-hint">Sample references: BR-IND-24816 and BR-IND-73104</p>
        <div class="form-result" id="tracking-result" role="status" aria-live="polite"></div>
      </form>` : data.form ? `
      <form class="contact-form" id="contact-form">
        <div class="form-grid">
          <label>Your name<input name="name" autocomplete="name" required placeholder="Name"></label>
          <label>Work email<input name="email" type="email" autocomplete="email" required placeholder="you@company.in"></label>
          <label>Origin city<input name="origin" required placeholder="e.g. Bengaluru"></label>
          <label>Destination city<input name="destination" required placeholder="e.g. Pune"></label>
          <label class="wide-field">What are you moving?<textarea name="cargo" rows="3" required placeholder="Cargo, approximate weight and preferred dispatch date"></textarea></label>
        </div>
        <button class="button button-dark" type="submit">Send enquiry <span aria-hidden="true">↗</span></button>
        <p class="form-hint">Prototype only: your details stay in this page and are not sent to a server.</p>
        <div class="form-result" id="contact-result" role="status" aria-live="polite"></div>
      </form>` : "";

    return `
      <a class="skip-link" href="#main-content">Skip to content</a>
      <div class="topline"><span>Logistics, with an Indian point of view</span><span>Sample business identity · Bengaluru, India</span></div>
      <header class="site-header">
        <a class="brand" href="index.html" aria-label="BharatRoute home"><span class="brand-mark">B<span>R</span></span><span class="brand-name">Bharat<span>Route</span><small>MOVE WITH MEANING</small></span></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation"><span></span><span></span><span></span><b>Menu</b></button>
        <nav class="primary-nav" id="primary-navigation" aria-label="Main navigation">${navLinks}</nav>
        <a class="header-track" href="tracking.html">Track a shipment <span aria-hidden="true">↗</span></a>
      </header>
      <main id="main-content">
        <section class="hero" style="--hero-image:url('https://images.unsplash.com/${data.image}?auto=format&fit=crop&w=2000&q=88')">
          <div class="hero-content">
            <p class="eyebrow"><span></span>${escapeHtml(data.eyebrow)}</p>
            <h1>${escapeHtml(data.title)}</h1>
            <p class="hero-intro">${escapeHtml(data.intro)}</p>
            <div class="hero-actions"><a class="button button-orange" href="${data.cta[1]}">${escapeHtml(data.cta[0])}<span aria-hidden="true">↗</span></a><a class="text-link" href="tracking.html">Track a shipment <span aria-hidden="true">→</span></a></div>
          </div>
          <div class="hero-caption"><span>${String(currentIndex).padStart(2, "0")} / ${totalPages}</span><span>Across the distances that matter.</span></div>
          <div class="hero-seal"><span>MADE FOR</span><strong>India</strong><span>BUILT ON TRUST</span></div>
        </section>
        <section class="metrics" aria-label="Service principles">${stats}</section>
        <section class="intro-section">
          <div class="section-kicker">${escapeHtml(data.eyebrow)}</div>
          <div><h2>${escapeHtml(data.sectionTitle)}</h2><p>${escapeHtml(data.sectionCopy)}</p></div>
        </section>
        ${form ? `<section class="form-section"><div class="form-heading"><p class="section-kicker">${data.tracking ? "Live view" : "Tell us about your move"}</p><h2>${data.tracking ? "Check a sample shipment" : "Start with the route."}</h2></div>${form}</section>` : ""}
        <section class="stories-section">
          <div class="stories-heading"><div><p class="section-kicker">${data.tracking ? "Useful next steps" : "Explore BharatRoute"}</p><h2>${data.tracking ? "Keep the journey moving." : "The next useful detail."}</h2></div><a href="service.html" class="text-link">All solutions <span aria-hidden="true">→</span></a></div>
          <div class="stories-grid">${renderCards(data.cards)}</div>
        </section>
        <section class="closing-band"><div><p class="section-kicker">A clearer way forward</p><h2>Let's get your next movement right.</h2></div><a class="button button-light" href="contact.html">Talk to our team <span aria-hidden="true">↗</span></a></section>
      </main>
      <footer class="site-footer">
        <div class="footer-main"><div class="footer-about"><a class="brand brand-footer" href="index.html"><span class="brand-mark">B<span>R</span></span><span class="brand-name">Bharat<span>Route</span><small>MOVE WITH MEANING</small></span></a><p>Freight and fulfilment for the many ways India does business.</p><a href="mailto:hello@bharatroute.in">hello@bharatroute.in</a><a href="tel:+918045678900">+91 80 4567 8900</a><small class="prototype-note">Sample identity and contact details for a website prototype.</small></div><div class="footer-links"><h2>Explore every page</h2><div>${extraLinks}</div></div><div class="footer-address"><h2>Based in Bengaluru</h2><p>Karnataka, India<br>Serving business corridors across India</p><a class="text-link" href="contact.html">Plan a conversation <span aria-hidden="true">↗</span></a></div></div>
        <div class="footer-bottom"><span>© 2026 BharatRoute Logistics · Prototype website</span><a href="tracking.html">Track a shipment</a><a href="contact.html">Contact</a><span>Made for the miles ahead.</span></div>
      </footer>`;
  }

  const menuToggle = app.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    app.querySelector(".primary-nav").classList.toggle("is-open", !expanded);
  });

  const trackingForm = app.querySelector("#tracking-form");
  if (trackingForm) trackingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const reference = new FormData(trackingForm).get("reference").trim().toUpperCase();
    const result = app.querySelector("#tracking-result");
    const journeys = {
      "BR-IND-24816": ["In transit to Pune", "Picked up in Mumbai · Departed origin hub · Estimated delivery tomorrow by 18:00"],
      "BR-IND-73104": ["Delivered in Bengaluru", "Picked up in Chennai · Arrived at Bengaluru hub · Delivered today at 11:42 · Proof of delivery recorded"]
    };
    const journey = journeys[reference];
    result.classList.add("is-visible");
    result.innerHTML = journey ? `<strong>${escapeHtml(journey[0])}</strong><span>${escapeHtml(journey[1])}</span><small>Demo status for ${escapeHtml(reference)} · Not connected to a live carrier</small>` : `<strong>No sample shipment found</strong><span>Check the reference and try BR-IND-24816 or BR-IND-73104.</span>`;
  });

  const contactForm = app.querySelector("#contact-form");
  if (contactForm) contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const details = new FormData(contactForm);
    const result = app.querySelector("#contact-result");
    result.textContent = `Thanks, ${details.get("name")}. Your sample enquiry for ${details.get("origin")} to ${details.get("destination")} is ready. Connect a backend to send it to your team.`;
    result.classList.add("is-visible");
    contactForm.reset();
  });
})();