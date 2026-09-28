(function () {
  "use strict";

  /* ------------------------------------------------------------------
     1. Small helpers
     ------------------------------------------------------------------ */
  const esc = function (value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
    });
  };
  const paras = function (value) { return Array.isArray(value) ? value : [value]; };
  const image = function (id, width) {
    return "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=" + (width || 1600) + "&q=86";
  };

  const IMG = {
    road: "photo-1601584115197-04ecc0da31d7",
    parcel: "photo-1586528116311-ad8dd3c8310d",
    cold: "photo-1607623814075-e51df1bdc82f",
    enterprise: "photo-1494412519320-aa613dfb7738",
    warehouse: "photo-1580674285054-bed31e145f59",
    about: "photo-1519003722824-194d4455a60c",
    network: "photo-1473448912268-2022ce9509d8",
    corridor: "photo-1501700493788-fa1a4fc9fe62",
    team: "photo-1521737711867-e3b97375f902",
    hub: "photo-1551836022-d5d88e9218df",
    growing: "photo-1566576912321-d58ddd7a6088"
  };

  const heroGalleries = {
    "index.html": [IMG.road, IMG.network, IMG.warehouse],
    "service.html": [IMG.warehouse, IMG.road, IMG.cold],
    "project.html": [IMG.network, IMG.corridor, IMG.enterprise],
    "tracking.html": [IMG.warehouse, IMG.parcel, IMG.road],
    "blog.html": [IMG.enterprise, IMG.network, IMG.team],
    "about.html": [IMG.about, IMG.team, IMG.growing],
    "contact.html": [IMG.enterprise, IMG.hub, IMG.road]
  };

  const brand = {
    phone: "+91 80 4567 8900",
    phoneHref: "tel:+918045678900",
    email: "hello@bharatroute.in",
    emailHref: "mailto:hello@bharatroute.in",
    city: "Bengaluru, Karnataka"
  };

  /* ------------------------------------------------------------------
     2. Shared sample content reused across pages
     ------------------------------------------------------------------ */
  const solutionLinks = [
    ["Road freight — part load & full truck", "service.html#road-freight"],
    ["E-commerce & last-mile delivery", "service.html#commerce"],
    ["Cold chain & pharma movement", "service.html#cold-chain"],
    ["Contract logistics & dedicated fleet", "service.html#contract-logistics"],
    ["Warehousing & fulfilment", "service.html#warehousing"],
    ["Project & over-dimensional cargo", "service.html#project-cargo"]
  ];

  const companyLinks = [
    ["About BharatRoute", "about.html"],
    ["Our team", "team.html"],
    ["Network & corridors", "project.html"],
    ["Journal", "blog.html"],
    ["Track a shipment", "tracking.html"],
    ["Contact the freight desk", "contact.html"]
  ];

  /* ==================================================================
     3. PAGE CONTENT
     Every navbar item now owns one long, complete page. Detail pages that
     used to stand alone (service-details, project-details, team-details,
     blog-details) are merged in as in-page sections with anchors.
     ================================================================== */
  const pages = {
    "index.html": {
      nav: "Home",
      description: "BharatRoute Logistics — a sample Indian logistics company covering road freight, e-commerce delivery, cold chain, contract logistics and warehousing across 28 states.",
      hero: {
        eyebrow: "Freight, parcels & cold chain — across India",
        title: "India moves. We make every mile count.",
        intro: "One partner for road freight, time-critical parcels, temperature-aware cargo and the supply chains that keep Indian businesses moving. We plan the route, the paperwork and every handover before the vehicle turns a wheel, so your customers only ever see the easy part.",
        image: IMG.road,
        metrics: [["28", "states covered"], ["640+", "serviceable districts"], ["24/7", "milestone visibility"]],
        cta: ["Plan a movement", "contact.html"],
        secondary: ["See all six solutions", "service.html"]
      },
      sections: [
        {
          type: "intro", tone: "paper",
          kicker: "What we do",
          title: "Good logistics feels effortless. The work behind it never is.",
          copy: [
            "Behind one consignment sit dispatch cut-offs, vehicle readiness, route selection, documentation, dock scheduling and a receiving team that needs to know exactly when to expect you. When any one of those pieces is a guess, the customer feels it as a delay, a broken promise or a phone call nobody wants to make.",
            "BharatRoute brings all of that into a single plan with a single owner. You get a written dispatch plan, milestones at every handover and a named person who answers when something changes. That is the whole idea: make the complicated part invisible."
          ],
          points: [
            "One accountable owner for every consignment, from booking to proof of delivery",
            "Practical pickup windows built around your warehouse, not around an ideal schedule",
            "Clear escalation paths when weather, traffic, paperwork or a receiver changes the plan"
          ],
          link: ["Read our operating approach", "about.html"]
        },
        {
          type: "cards", tone: "white", columns: 3,
          id: "solutions",
          kicker: "Solutions",
          title: "Six ways we move your goods",
          copy: "Every service below runs as a one-off movement or as a scheduled lane. Choose the shape that matches your cargo, your timeline and the promise you have already made to your customer.",
          items: [
            ["01", "Road freight — PTL & FTL", "Consolidated part loads or a dedicated vehicle, planned around your dispatch window and your delivery commitment.", "service.html#road-freight", "Explore freight"],
            ["02", "E-commerce & last mile", "First-mile pickup, customer delivery, NDR follow-ups and a disciplined reverse journey for returns.", "service.html#commerce", "Delivery options"],
            ["03", "Cold chain & pharma", "Temperature-aware lanes with documented handovers for pharma, dairy, diagnostics and fresh produce.", "service.html#cold-chain", "Plan a cold lane"],
            ["04", "Contract logistics", "Dedicated fleet, a fixed dispatch rhythm and named operations support for multi-site businesses.", "service.html#contract-logistics", "Talk contracts"],
            ["05", "Warehousing & fulfilment", "Storage, kitting, labelling and dispatch support positioned close to your customers and suppliers.", "service.html#warehousing", "Discuss fulfilment"],
            ["06", "Project & ODC cargo", "Over-dimensional consignments and machinery moves, planned with route surveys and permits in mind.", "service.html#project-cargo", "Scope a move"]
          ],
          link: ["Read the full service menu", "service.html"]
        },
        {
          type: "split", tone: "sand", flip: true,
          kicker: "Built for Indian conditions",
          title: "Planned around the way business actually happens here",
          copy: [
            "A neat national template rarely survives contact with a real dispatch schedule. Indian supply chains run through market-area addresses, multi-city warehouses, GST paperwork and a monsoon calendar that quietly adds a day to long-haul lanes.",
            "So our planning starts with conditions on the ground: who loads, when the gate closes, which weighbridge is nearest, which state border adds documentation time and who signs the receipt at the other end. Then we build the schedule around those facts instead of arguing with them later."
          ],
          points: [
            "E-way bill, invoice and LR support so documentation never holds up a loaded vehicle",
            "Regional language coordination with loading teams, drivers and delivery docks",
            "Monsoon-aware buffers on hill routes and flood-prone corridors",
            "First-mile pickups from industrial estates, market areas and residential addresses"
          ],
          image: IMG.growing,
          imageCaption: "Illustrative freight imagery.",
          link: ["Check serviceable lanes", "project.html#lanes"]
        },
        {
          type: "stats", tone: "green",
          kicker: "Sample operating numbers",
          title: "A network designed around dependable service",
          copy: "The operating figures shown here are illustrative and should be replaced with verified company data before publication.",
          items: [
            ["18,400+", "consignments planned every month"],
            ["112", "scheduled interstate lanes"],
            ["96.4%", "on-time handovers in sample data"],
            ["3.8 hrs", "average first response on an exception"]
          ]
        },
        {
          type: "table", tone: "white", id: "lanes",
          kicker: "Network",
          title: "Popular lanes, planned like clockwork",
          copy: "Indicative transit windows for scheduled departures on our sample network. Add one buffer day for monsoon weeks, festival peaks and long-weekend traffic.",
          head: ["Lane", "Indicative transit", "Service options", "Departures"],
          rows: [
            ["<strong>Mumbai (Bhiwandi) → Pune (Chakan)</strong>", "1 day", "PTL · FTL · Reefer", "Daily, evening cut-off"],
            ["<strong>Delhi NCR (Gurugram) → Jaipur (Sitapura)</strong>", "1 day", "PTL · FTL", "Daily, night departure"],
            ["<strong>Bengaluru (Peenya) → Chennai (Sriperumbudur)</strong>", "1–2 days", "FTL · Contract fleet", "Six departures a week"],
            ["<strong>Ahmedabad (Aslali) → Mumbai (Bhiwandi)</strong>", "1–2 days", "PTL · FTL · Hazmat", "Daily"],
            ["<strong>Hyderabad (Medchal) → Bengaluru (Peenya)</strong>", "2 days", "PTL · Cold chain", "Four departures a week"],
            ["<strong>Kolkata (Dankuni) → Guwahati (Changasari)</strong>", "3–4 days", "FTL · Project cargo", "Three departures a week"]
          ],
          caption: "Transit windows are indicative sample values and are always confirmed per consignment at booking.",
          link: ["See the full network and case studies", "project.html"]
        },
        {
          type: "steps", tone: "paper", columns: 5,
          kicker: "How it works",
          title: "From first enquiry to proof of delivery",
          copy: "Five steps, each with a named owner and a written confirmation. No step depends on somebody remembering to pass a message along.",
          items: [
            ["Enquiry & scoping", "Share cargo, weights, origin, destination and deadline. You get back a route, a price basis and a dispatch plan, usually within one working day."],
            ["Documentation readiness", "Invoice, e-way bill and packing details are checked before pickup so your vehicle is never held at the gate."],
            ["Pickup & handover", "Count and condition are verified at loading. Photographs and a signed LR travel with the consignment."],
            ["In-transit monitoring", "Milestones are recorded at every transfer point and exceptions are raised with a reason and a revised estimate, not just an alert."],
            ["Delivery & proof", "Receipt is confirmed, exceptions are noted and the POD reaches you in a format you can attach to an invoice or a claim."]
          ]
        },
        {
          type: "cards", tone: "mist", columns: 3,
          kicker: "Industries",
          title: "Where our planning fits best",
          copy: "The same discipline works across sectors. Only the priorities change, so the questions we ask at booking change with them.",
          items: [
            ["01", "Manufacturing & auto components", "Inbound vendor replenishment, line-side sequencing deliveries and spare-part distribution on tight plant schedules.", "", ""],
            ["02", "Retail & FMCG distribution", "Regional depot movements, distributor replenishment and store-ready consignments with reliable appointment windows.", "", ""],
            ["03", "Pharma & healthcare", "Temperature-aware lanes, documented chain of custody and delivery records your quality team can file.", "", ""],
            ["04", "Fresh produce & agri", "Harvest-to-market movements with pre-cooling coordination and short dock times at both ends.", "", ""],
            ["05", "E-commerce & D2C brands", "First-mile pickup, last-mile delivery, NDR follow-ups and reverse logistics for returns.", "", ""],
            ["06", "Chemicals & industrial goods", "Classified cargo with handling notes, trained crews and route restrictions respected.", "", ""]
          ]
        },
        {
          type: "split", tone: "white",
          kicker: "Temperature-aware transport",
          title: "Some cargo cannot tolerate a guess",
          copy: [
            "For pharma, dairy, frozen foods and diagnostics the vehicle matters as much as the route. A two-hour wait at a dock can undo a day of careful planning, and there is no way to re-run a spoiled consignment.",
            "So we agree the temperature band, loading method, pre-cooling requirement and escalation contact before the appointment, then document every handover so the chain of custody stays unbroken from your cold room to the receiving dock."
          ],
          points: [
            "2–8 °C chilled, 15–25 °C controlled ambient and frozen ranges planned per product",
            "Data loggers and handover logs available on request for audit files",
            "Route and vehicle qualification completed before the first dispatch",
            "A named escalation contact for deviations, with a written incident note"
          ],
          image: IMG.cold,
          link: ["See cold-chain services", "service.html#cold-chain"]
        },
        {
          type: "split", tone: "sand", flip: true,
          kicker: "Enterprise supply chains",
          title: "When logistics needs a control tower, not a courier",
          copy: [
            "Multi-plant businesses need more than competitive rates. They need capacity that holds up in peak season, service measures the whole team understands and a review rhythm that turns delivery data into decisions.",
            "We build that lane by lane: agree the volume, lock the capacity, publish the cut-offs, then review what actually happened with the people who own the outcome on both sides."
          ],
          points: [
            "Dedicated or ring-fenced capacity for recurring lanes and seasonal peaks",
            "Lane-level service measures with exception analysis, not just averages",
            "Quarterly business reviews with your operations and procurement teams",
            "A single control-tower contact across all your locations"
          ],
          image: IMG.enterprise,
          link: ["Explore contract logistics", "service.html#contract-logistics"]
        },
        {
          type: "quotes", tone: "paper",
          kicker: "What customers say",
          title: "Partnerships built on predictable basics",
          note: "The customer comments on this page are illustrative examples.",
          items: [
            ["We stopped chasing updates. The exception note now usually arrives before we think to ask for it.", "Procurement lead", "Auto components manufacturer, Pune"],
            ["Returns were our biggest service complaint. A structured reverse lane fixed most of it within a quarter.", "Operations manager", "D2C home decor brand, Bengaluru"],
            ["Our cold-chain audit needed documentation, not promises. We had the file the day we asked for it.", "Quality head", "Diagnostics company, Hyderabad"]
          ]
        },
        {
          type: "journal", tone: "white",
          kicker: "Journal",
          title: "Notes from the road and the warehouse",
          copy: "Practical writing for the people who plan dispatches, answer customer calls and reconcile delivery notes at the end of the month.",
          link: ["Read the journal", "blog.html"],
          items: [
            ["Operations · 6 min read", "The five handovers that shape a delivery", "Small moments decide whether a shipment arrives easy or arrives annoyed. Here is how to make each one count.", "blog.html#five-handovers"],
            ["Compliance · 5 min read", "E-way bill basics for first-time shippers", "What to keep ready before the vehicle reaches your gate, and the mistakes that cost a full day.", "blog.html#eway-bill"],
            ["Cold chain · 6 min read", "The two-minute check that protects a reefer load", "A short pre-departure routine that catches most temperature incidents before they start.", "blog.html#reefer-check"]
          ]
        },
        {
          type: "faq", tone: "mist",
          kicker: "Questions we hear often",
          title: "Before you book your first consignment",
          items: [
            ["How quickly can you arrange a pickup?", "For metro and tier-1 lanes we can usually place a vehicle within 24–48 hours of confirmation. Scheduled lanes run to published cut-offs, and urgent full-truck movements are quoted on availability. Exact timelines are confirmed per consignment at booking, in writing."],
            ["Which documents should I keep ready?", "A tax invoice, an e-way bill where applicable, a packing list for multi-item consignments and the receiver's contact details. For cold-chain and pharma movements we also need the required temperature band and any product handling instructions."],
            ["Do you handle part loads for small consignments?", "Yes. Part-load freight is designed for one pallet upward. Your consignment shares a vehicle with other cargo, which keeps the cost sensible while preserving a scheduled departure and a documented handover."],
            ["How will I know where my shipment is?", "Every movement records milestones at pickup, each transfer point, the destination hub and delivery. You can try a sample reference on our tracking page; in a live deployment you would receive updates by email, SMS or API."],
            ["Can you deliver to residential addresses?", "Yes, for e-commerce, document and appliance consignments. Residential deliveries need a reachable contact number and, for larger cargo, advance confirmation of access, lift availability and any society restrictions."],
            ["What happens if something is damaged in transit?", "Note the exception on the POD at the point of delivery, share photographs within 24 hours, and we register the claim with the carrier and insurer. Facilitating cargo insurance is part of our service scope."]
          ]
        },
        {
          type: "cta",
          kicker: "A clearer way forward",
          title: "Let's get your next movement right.",
          button: ["Talk to our team", "contact.html"],
          link: ["Track a sample shipment", "tracking.html"]
        }
      ]
    },
    "service.html": {
      nav: "Solutions",
      description: "BharatRoute solutions: part-load and full-truck road freight, e-commerce and last-mile delivery, cold chain and pharma movement, contract logistics, warehousing and over-dimensional cargo.",
      hero: {
        eyebrow: "Our solutions",
        title: "The right movement for the job.",
        intro: "Road freight, e-commerce delivery, temperature-aware lanes, contract fleets and warehousing. Each one is planned with the same discipline: confirm the details, agree the handovers, document what happened. Nothing here is a surprise service — you can read exactly how each one works below.",
        image: IMG.warehouse,
        metrics: [["Road", "part load & full truck"], ["Parcel", "first mile to returns"], ["Specialist", "cold chain & project cargo"]],
        cta: ["Tell us what needs to move", "contact.html"],
        secondary: ["Check serviceable lanes", "project.html#lanes"]
      },
      sections: [
        {
          type: "jump", tone: "paper",
          kicker: "On this page",
          title: "Everything we offer, in one place",
          copy: "Jump straight to the service you need. Each section explains what the service is, who it suits and what we ask you to confirm before dispatch.",
          items: [
            ["01 · Road freight", "#road-freight"],
            ["02 · E-commerce & last mile", "#commerce"],
            ["03 · Cold chain & pharma", "#cold-chain"],
            ["04 · Contract logistics", "#contract-logistics"],
            ["05 · Warehousing & fulfilment", "#warehousing"],
            ["06 · Project & ODC cargo", "#project-cargo"],
            ["Allied services", "#allied-services"],
            ["Service questions", "#service-faq"]
          ]
        },
        {
          type: "split", tone: "white", id: "road-freight",
          kicker: "01 · Road freight",
          title: "Part load or full truck, planned around your load",
          copy: [
            "Part-load (PTL) freight shares a vehicle with other consignments and suits everything from one pallet upward. Full-truck (FTL) gives you the whole vehicle, which is what you want when cargo is fragile, high-value, time-critical or simply too large to consolidate.",
            "Before the booking is confirmed we collect commodity details, dimensions, weight, loading method, access constraints and receiving hours. That one conversation prevents the most common delay in Indian road freight: a vehicle waiting at a gate while somebody looks for information."
          ],
          points: [
            "PTL for one to eight pallets on published schedules",
            "FTL from 9 ft pickups to 32 ft multi-axle vehicles",
            "Weight, dimension and hazmat declarations verified before dispatch",
            "Signed LR, loading photographs and a single point of contact per consignment"
          ],
          image: IMG.road,
          imageCaption: "Sample imagery. Fleet availability is confirmed per lane at booking.",
          link: ["Compare PTL and FTL below", "#service-compare"]
        },
        {
          type: "table", tone: "sand", id: "service-compare",
          kicker: "Choosing a mode",
          title: "Part load or full truck? A simple comparison",
          copy: "The right answer usually comes down to load size, how delicate the cargo is and how much control you want over transit.",
          head: ["Consideration", "Part load (PTL)", "Full truck (FTL)"],
          rows: [
            ["Load size", "One to about eight pallets, up to roughly five tonnes", "Your consignment fills the vehicle, or you simply want exclusivity"],
            ["Cost basis", "Per kilogram or per cubic metre, shared with other cargo", "Per vehicle, per lane — quoted on distance, vehicle type and season"],
            ["Transit pattern", "Along a published schedule with hub transfers", "Direct run or with planned driver halts"],
            ["Best for", "Regular mid-size dispatches where cost control matters", "Fragile, high-value, bulky, hazardous or urgent cargo"],
            ["Handling", "More transfer points, one accountable owner throughout", "Fewest touches, easier damage accountability"],
            ["Documents", "LR, invoice, e-way bill where applicable", "LR, invoice, e-way bill, loading photographs on request"]
          ],
          caption: "Use this comparison as a planning guide; the operations team confirms the suitable mode for each movement."
        },
        {
          type: "split", tone: "white", id: "commerce", flip: true,
          kicker: "02 · E-commerce & last mile",
          title: "From checkout to doorstep to return",
          copy: [
            "An online order is not finished when it leaves your warehouse. It finishes when a customer opens the door, signs nothing, and decides whether to buy from you again. Everything in between is ours to manage.",
            "We coordinate pickups from studios, stores, dark stores and fulfilment partners, deliver within appointment-friendly windows where the city allows it, and handle the exceptions that decide repeat business: address corrections, non-delivery notices, partial shipments and a structured reverse journey for returns."
          ],
          points: [
            "Same-day dispatch coordination for orders cut before your daily cut-off",
            "Cash-on-delivery and prepaid documentation prepared before pickup",
            "NDR calling support with re-attempt scheduling and reason capture",
            "Reverse pickups that feed back into the same inventory view as forward orders"
          ],
          image: IMG.parcel,
          link: ["Read our returns note in the journal", "blog.html#journal-index"]
        },
        {
          type: "split", tone: "sand", id: "cold-chain",
          kicker: "03 · Cold chain & pharma",
          title: "Temperature you can document, not just promise",
          copy: [
            "Cold-chain transport succeeds or fails at the handover. A pre-cooled vehicle left waiting with the doors open, or a receiving dock that is not ready, undoes the good work done on the road.",
            "So we agree the required band, method of loading, pre-cooling requirement and escalation contact before the appointment. Vehicles and routes are qualified for the product type before the first dispatch, and every transfer is recorded so your quality team has a file, not a reassurance."
          ],
          points: [
            "2–8 °C chilled, 15–25 °C controlled ambient and frozen ranges",
            "Data logger and handover log available on request",
            "Dock-time limits and pre-cooling windows agreed with your quality team",
            "Breakdown and deviation protocol with a named escalation contact"
          ],
          image: IMG.cold,
          note: "For regulated products, handling instructions and any required certifications should be confirmed before booking."
        },
        {
          type: "split", tone: "white", id: "contract-logistics", flip: true,
          kicker: "04 · Contract logistics",
          title: "Dedicated capacity with a review rhythm",
          copy: [
            "Businesses moving freight every week do not need a daily scramble for vehicles. They need capacity that is already there, priced on a basis that holds, and a schedule their warehouse team can plan around.",
            "A contract arrangement dedicates vehicles or ring-fences capacity against your recurring lanes. We agree service measures you can hold us to, publish the cut-offs, and sit down with your team on a fixed calendar to look at what the data actually says."
          ],
          points: [
            "Dedicated fleet with neutral or branded presentation options",
            "Lane-wise service measures, exception reporting and root-cause notes",
            "A named operations contact plus a documented backup",
            "Festive, harvest and year-end peak planning locked in months ahead"
          ],
          image: IMG.enterprise,
          link: ["See how we plan a corridor", "project.html#case-mumbai-pune"]
        },
        {
          type: "split", tone: "sand", id: "warehousing",
          kicker: "05 · Warehousing & fulfilment",
          title: "Storage positioned where your customers are",
          copy: [
            "Distance to the customer is a service decision, not a cost line. Placing inventory in the right region shortens the last mile, improves delivery promises and reduces the freight you pay for on every order.",
            "We help you choose the location, then run the routines around your order profile: inwarding, put-away, picking, kitting, labelling, dispatch and returns grading, with stock hygiene that survives an audit."
          ],
          points: [
            "Ambient storage with racked and floor-stacked options",
            "Batch, expiry and FIFO discipline for food and pharma inventory",
            "Kitting, bundling, labelling and gift-packing support",
            "Returns intake, grading and restocking with a disposition note"
          ],
          image: IMG.hub,
          note: "Warehouse availability, racking type and compliance requirements are confirmed facility by facility before a service commitment."
        },
        {
          type: "split", tone: "white", id: "project-cargo", flip: true,
          kicker: "06 · Project & ODC cargo",
          title: "Movements that deserve a survey first",
          copy: [
            "Over-dimensional, heavy or awkward consignments cannot be priced from a distance table. A transformer, a CNC machine or a fabricated structure needs a route that has actually been checked.",
            "We study the route, note height, width and load restrictions, plan the permit and escort window, and coordinate with the loading and unloading teams so the vehicle arrives when the crane does."
          ],
          points: [
            "Route survey with restriction and clearance notes",
            "Low-bed, semi-low-bed and multi-axle trailer options",
            "Permit and escort coordination documented in the plan",
            "Site access planning with loading and unloading teams"
          ],
          image: IMG.corridor,
          link: ["Talk through a project move", "contact.html"]
        },
        {
          type: "cards", tone: "mist", columns: 3, id: "allied-services",
          kicker: "Allied services",
          title: "The support work around every movement",
          copy: "These are the quiet services that keep a consignment moving when something unexpected happens. They are included or quoted alongside your main movement depending on your account.",
          items: [
            ["Documents", "Documentation support", "LR preparation, e-way bill checks, delivery challans and POD collection consolidated into one file per consignment.", "contact.html", "Ask about documents"],
            ["Risk", "Cargo insurance facilitation", "We help you arrange cover before dispatch and assemble the paperwork needed if a claim has to be filed.", "contact.html", "Discuss cover"],
            ["Care", "Packing & crating", "Export-worthy crating, palletisation, stretch wrapping and edge protection for fragile or high-value cargo.", "contact.html", "Plan packaging"],
            ["Review", "Freight audit & analytics", "Lane-wise cost and service reporting so your procurement team can compare options with real numbers.", "about.html#faq", "See how we report"],
            ["Reverse", "Returns management", "Structured reverse pickups, grading, restocking or disposal notes, with status visibility for your support team.", "service.html#commerce", "Handle returns"],
            ["Oversight", "Control tower desk", "One coordination point across multiple locations, carriers and consignments, with escalations tracked to closure.", "service.html#contract-logistics", "See the desk"]
          ]
        },
        {
          type: "steps", tone: "white", columns: 3,
          kicker: "Getting started",
          title: "How we onboard a new customer",
          copy: "Onboarding takes about two weeks from first conversation to a scheduled dispatch rhythm. Nothing is skipped just because it looks simple.",
          items: [
            ["Discovery call", "We map your origins, destinations, volumes, service expectations and the exceptions that hurt most today."],
            ["Route & rate plan", "You receive written lane options, a price basis, transit windows and the assumptions behind them."],
            ["Trial movement", "One consignment runs with the full process: documents, handovers, milestones and a POD review at the end."],
            ["Service measures agreed", "We agree what on-time means for your lanes, how exceptions are reported and who owns each escalation."],
            ["Scheduled operations", "Published cut-offs, a named contact and a review calendar put the arrangement on autopilot."],
            ["Continuous review", "Monthly exception notes and quarterly reviews keep the plan honest as your volumes change."]
          ]
        },
        {
          type: "faq", tone: "sand", id: "service-faq",
          kicker: "Service questions",
          title: "Practical answers before you book",
          items: [
            ["How accurate are your transit times?", "Published transit windows assume normal road, weather and dock conditions. We quote a window rather than a single hour, confirm it per consignment and tell you immediately when a lane is running longer than usual, for example during monsoon weeks or harvest peaks."],
            ["Do you carry hazardous or classified cargo?", "Select lanes can carry declared hazardous goods where the vehicle, driver training and route restrictions allow it. We need the correct classification, UN details and packing information before booking, and we confirm in writing whether the lane is serviceable."],
            ["What happens if I need to cancel after booking?", "Tell us as early as possible. Cancellations before the vehicle is placed usually attract no charge; once a vehicle is moving toward your gate, placement and detention charges may apply. The exact terms sit in your rate agreement."],
            ["Can I get a rate card for regular lanes?", "Yes. For recurring lanes we issue a written rate agreement with validity, fuel-linked assumptions, waiting or detention terms and the vehicle types covered. Ad-hoc quotes are usually returned within one working day."],
            ["Who do I call after dispatch?", "Every consignment is assigned an owning operations contact whose number appears in your dispatch note. For account-level issues or escalations, your contract customer contact is documented in the service agreement."],
            ["Do you handle both pickup and delivery?", "Yes. We work door to door on most lanes, hub to hub where a customer has its own fleet, and door to hub for distributors who consolidate their own onward movement. Tell us the shape you need at enquiry stage."]
          ]
        },
        {
          type: "cta",
          kicker: "Ready when you are",
          title: "Tell us what needs to move and when.",
          button: ["Request a quote", "contact.html"],
          link: ["Check a lane first", "project.html#lanes"]
        }
      ]
    },
    "project.html": {
      nav: "Network",
      description: "The BharatRoute sample network: regional corridors across India, hub-and-spoke planning, line-haul capacity, fleet types and two detailed corridor case studies.",
      hero: {
        eyebrow: "Network & service lanes",
        title: "Connecting India's working corridors.",
        intro: "A network is not a pin on a map. It is a route with capacity that holds up under pressure, handovers that are documented and people who are ready at both ends. Below is how our sample network is organised, which lanes we run and what actually happens on a busy corridor when the plan meets reality.",
        image: IMG.network,
        metrics: [["West", "Mumbai · Pune · Surat · Ahmedabad"], ["South", "Bengaluru · Chennai · Hyderabad · Kochi"], ["East & North", "Kolkata · Guwahati · Delhi NCR · Jaipur"]],
        cta: ["Check a lane", "contact.html"],
        secondary: ["Read the case studies", "#case-mumbai-pune"]
      },
      sections: [
        {
          type: "intro", tone: "paper",
          kicker: "How the network is planned",
          title: "Hub to hub on a schedule, then out to the district",
          copy: [
            "Long-haul freight moves between operating hubs on fixed line-haul departures. Regional spokes then carry consignments from the destination hub to districts and city addresses. The structure is deliberately boring, because boring is what makes a delivery date dependable.",
            "It also gives you something concrete to ask about. Instead of a vague status, you can ask which hub your consignment is at, when the next line-haul departs and who is receiving it at the far end. Every one of those questions has a documented answer."
          ],
          points: [
            "Line-haul departures on a published cut-off calendar, not on availability",
            "Regional spokes for district-level delivery beyond the main corridors",
            "Dedicated lanes for contract customers with recurring volume",
            "Backup capacity held for regional surges and vehicle breakdowns"
          ],
          link: ["See the lane list", "#lanes"]
        },
        {
          type: "table", tone: "white", id: "lanes",
          kicker: "Lane directory",
          title: "Sample corridors across five regions",
          copy: "Indicative transit windows for scheduled departures. Confirm your exact origin and destination pin code with the freight desk before you plan around them.",
          head: ["Corridor", "Region", "Indicative transit", "Service options"],
          rows: [
            ["<strong>Mumbai (Bhiwandi) → Pune (Chakan)</strong>", "West", "1 day", "PTL · FTL · Reefer"],
            ["<strong>Mumbai (Bhiwandi) → Ahmedabad (Aslali)</strong>", "West", "1–2 days", "PTL · FTL"],
            ["<strong>Pune (Chakan) → Nagpur (Butibori)</strong>", "West & Central", "2 days", "FTL · Contract fleet"],
            ["<strong>Surat (Sachin) → Jaipur (Sitapura)</strong>", "West & North", "2–3 days", "PTL · FTL"],
            ["<strong>Delhi NCR (Gurugram) → Jaipur (Sitapura)</strong>", "North", "1 day", "PTL · FTL"],
            ["<strong>Delhi NCR (Gurugram) → Lucknow (Amausi)</strong>", "North", "1–2 days", "PTL · FTL · Cold chain"],
            ["<strong>Delhi NCR (Ghaziabad) → Chandigarh (Zirakpur)</strong>", "North", "1 day", "FTL · Project cargo"],
            ["<strong>Bengaluru (Peenya) → Chennai (Sriperumbudur)</strong>", "South", "1–2 days", "FTL · Contract fleet"],
            ["<strong>Bengaluru (Peenya) → Hyderabad (Medchal)</strong>", "South", "2 days", "PTL · FTL"],
            ["<strong>Chennai (Sriperumbudur) → Kochi (Aluva)</strong>", "South", "2–3 days", "PTL · Cold chain"],
            ["<strong>Hyderabad (Medchal) → Pune (Chakan)</strong>", "South & West", "2 days", "FTL · Reefer"],
            ["<strong>Kolkata (Dankuni) → Patna (Bihta)</strong>", "East", "2–3 days", "PTL · FTL"],
            ["<strong>Kolkata (Dankuni) → Guwahati (Changasari)</strong>", "East & North-East", "3–4 days", "FTL · Project cargo"],
            ["<strong>Guwahati (Changasari) → Silchar</strong>", "North-East", "2 days", "FTL · Cold chain"],
            ["<strong>Indore (Pithampur) → Mumbai (Bhiwandi)</strong>", "Central & West", "1–2 days", "PTL · FTL"]
          ],
          caption: "Transit windows are indicative and exclude loading-day delays caused by documentation gaps.",
          link: ["Ask about your lane", "contact.html"]
        },
        {
          type: "split", tone: "mist", flip: true,
          kicker: "Line-haul & capacity",
          title: "Where dependable capacity actually comes from",
          copy: [
            "Reliable capacity is built, not booked at the last minute. We keep scheduled departures on high-frequency corridors, maintain a vetted partner fleet for regional spikes, and plan seasonal peaks with contract customers weeks in advance rather than hours before dispatch.",
            "That is also why we are honest about limits. When a lane is fully committed, we say so and offer the next available departure instead of promising a vehicle that does not exist."
          ],
          points: [
            "Scheduled departures on core corridors with published cut-offs",
            "Vetted partner capacity for regional surges and breakdown recovery",
            "Peak planning for festive weeks, harvest season and financial year-end",
            "Reefer, container trailer and low-bed availability mapped by lane"
          ],
          image: IMG.corridor,
          link: ["See the fleet options", "#fleet"]
        },
        {
          type: "cards", tone: "white", columns: 3, id: "fleet",
          kicker: "Fleet & equipment",
          title: "Vehicles matched to the load, not just the lane",
          copy: "Vehicle choice decides how many times your cargo is touched, how it is secured and what it costs. Here is what we plan with.",
          items: [
            ["Small", "9 ft pickup", "Up to roughly 1.5 tonnes for city deliveries, document runs and small parcel movements.", "", ""],
            ["Mid", "19–20 ft truck", "Three to seven tonnes for distributor replenishment and mid-size consignments.", "", ""],
            ["Heavy", "32 ft multi-axle", "Up to about 20 tonnes for full-truck freight on long-haul corridors.", "", ""],
            ["Sealed", "Closed container trailer", "Weather-protected movement for electronics, packaged goods and high-value cargo.", "", ""],
            ["Chilled", "Reefer vehicle", "Temperature-controlled bodies for 2–8 °C, controlled ambient and frozen ranges.", "", ""],
            ["Oversize", "Low-bed & semi-low-bed trailer", "For machinery, fabricated structures and over-dimensional project cargo.", "", ""]
          ],
          note: "Payload figures are indicative and depend on vehicle specifications, permits and axle configuration."
        },
        {
          type: "article", tone: "paper", id: "case-mumbai-pune",
          kicker: "Case study · West India",
          title: "A steadier rhythm on the Mumbai–Pune run",
          meta: ["Manufacturing distribution", "Bhiwandi → Chakan", "An 11-week programme", "Sample case study"],
          image: { id: IMG.corridor, caption: "Illustrative image of a regional freight corridor." },
          body: [
            { p: "A mid-size auto component manufacturer ran daily dispatches from a Bhiwandi warehouse to two customer plants near Chakan. The lane is only about 150 km, yet on-time delivery sat at 82% and the customer's inbound team had started holding safety stock to protect its line." },
            { h: "The problem was not distance" },
            { p: "Every delay traced back to the same four causes. Invoices reached the warehouse after the vehicle had already been placed. Gate paperwork was prepared twice. Vehicles arrived at the customer gate outside the receiving window and waited. And when something did go wrong, nobody at the plant could say which consignment was affected." },
            { ul: ["Documentation arrived in two or three separate messages", "Load plans were built the morning of dispatch", "Receiving windows were known informally", "Exceptions were reported without a reason code"] },
            { h: "What we changed" },
            { ol: ["Fixed a hard documentation cut-off twelve hours before departure, with a checklist signed by the dispatch supervisor.", "Pre-built load plans from the confirmed order file and shared them with the customer's inbound desk a day ahead.", "Booked receiving windows and agreed a single unloading contact per plant, with a backup number.", "Started a two-line daily exception note: what changed, and what we were doing about it."] },
            { h: "The result" },
            { p: "On-time delivery moved to 96% over the following eleven weeks. The more useful outcome was quieter: the customer's inbound team reduced the safety stock it had been holding, and the dispatch team stopped working evenings to chase paperwork." },
            { ul: ["On-time delivery: 82% to 96% across the programme", "Average gate waiting time cut by roughly half", "Documentation rework reduced to near zero", "A shared exception log both teams now review monthly"] },
            { quote: "Nothing about the route changed. What changed was when information reached people and who was responsible for it." },
            { p: "Not every lane responds this quickly. The Mumbai–Pune corridor has high vehicle availability and short transit, which makes gains visible fast. On longer corridors the same discipline works, but the payoff usually takes two to three months to show in the numbers." }
          ],
          foot: ["Discuss your corridor", "contact.html"]
        },
        {
          type: "article", tone: "white", id: "case-bengaluru-chennai",
          kicker: "Case study · South India",
          title: "A scheduled industrial lane that stopped being unpredictable",
          meta: ["Pharma & healthcare", "Bengaluru → Chennai", "Quarterly review cycle", "Sample case study"],
          body: [
            { p: "A healthcare distributor supplied hospital pharmacies across Tamil Nadu from a Bengaluru distribution centre. Volumes per order were small, but the consequences of a missed delivery were significant, and the team was placing vehicles case by case with whatever was available." },
            { h: "The problem" },
            { p: "Ad-hoc vehicle placement meant variable departure times, no consolidation, and invoices that arrived after the vehicle had already left. Hospital receiving hours were treated as a preference rather than a constraint, so deliveries backed up at the end of the day." },
            { h: "The approach" },
            { ul: ["Six scheduled departures a week on the Bengaluru–Chennai lane with published cut-offs", "Consolidation of multiple hospital orders into a single vehicle with a documented load plan", "Agreed receiving slots by hospital cluster, with a named contact at each site", "A daily summary to the distributor's customer service desk, so support calls answered themselves"] },
            { h: "What it changed" },
            { p: "The distributor gained predictability before it gained savings. Vehicles were filled properly, deliveries landed inside receiving hours, and the customer service team stopped spending its mornings on status calls. A quarterly review now looks at missed slots and documentation gaps rather than at individual disputes." },
            { quote: "We did not need a faster lane. We needed a lane that behaved the same way every week." },
            { p: "For regulated products, the same planning discipline matters even more. Temperature bands, shorter dock times and documented handovers were agreed with the distributor's quality team at the start rather than adjusted after the first audit." }
          ],
          foot: ["Plan a scheduled lane", "service.html#contract-logistics"]
        },
        {
          type: "cards", tone: "sand", columns: 3,
          kicker: "Corridor notes",
          title: "Small details that decide a lane's reliability",
          copy: "These are the things our operations desk checks before quoting a new corridor. They look administrative, and on a busy lane they are the difference between a promise and a delivery.",
          items: [
            ["Timing", "Cut-off realism", "A cut-off that the loading team cannot meet produces a late vehicle every single day. We test the window before publishing it.", "", ""],
            ["Access", "Gate and dock you can actually reach", "Narrow approach roads, market-area timing restrictions and dock height all change the plan long before the rate does.", "", ""],
            ["Rules", "State-border and permit reality", "Interstate movement, restricted-city timings and permit validity all add time that a distance table never shows.", "", ""],
            ["Season", "Weather and festival calendars", "Monsoon weeks and festive peaks change transit on long-haul lanes. We plan buffers instead of apologising later.", "", ""],
            ["Backup", "What happens when a vehicle fails", "A documented recovery plan, agreed in advance, keeps a breakdown from becoming a customer conversation.", "", ""],
            ["Proof", "Documentation that closes the loop", "A POD that arrives with photographs and noted exceptions protects both sides when a claim is filed.", "", ""]
          ]
        },
        {
          type: "faq", tone: "white",
          kicker: "Network questions",
          title: "Before you plan around a lane",
          items: [
            ["Do you serve my city?", "Our sample network covers major commercial corridors and 640+ serviceable districts through regional spokes. Send us your origin and destination pin codes and we confirm serviceability, transit window and any access restrictions in writing before you plan around them."],
            ["Can you handle multi-city dispatch?", "Yes. Multi-site dispatch is a planning problem more than a transport one. We map your locations, agree which hub each one feeds, and publish a cut-off per location so orders are collected in the right sequence."],
            ["How much variability should I expect?", "Even on well-run lanes, long-haul transit varies by a day and hill or monsoon-affected routes by more. We quote a window, track the actual against it every month, and show you where the time is really going."],
            ["Do you deliver to tier-3 towns and rural addresses?", "Through regional spokes we deliver to many tier-3 locations and, with a reachable contact number, to addresses beyond them. Where a direct delivery is not practical we nominate the nearest handover point with your approval."],
            ["Can we run a dedicated lane with fixed volumes?", "Yes. Dedicated lanes suit recurring weekly volume, sensitive cargo or customers who need a consistent departure. We agree volume bands, cut-offs, vehicle type and review cadence in a written rate agreement."],
            ["What happens if a lane is fully committed?", "We tell you. If the published departure is full we offer the next available slot or an alternative route, and we flag it in advance for contract customers during known peak weeks."]
          ]
        },
        {
          type: "cta",
          kicker: "Plan with real numbers",
          title: "Tell us the corridor and we will tell you the plan.",
          button: ["Check your lane", "contact.html"],
          link: ["See every solution", "service.html"]
        }
      ]
    },
    "tracking.html": {
      nav: "Track",
      description: "Track a BharatRoute sample shipment reference and see the milestone journey, status meanings and exception handling explained.",
      hero: {
        eyebrow: "Shipment tracking",
        title: "Know where your shipment stands.",
        intro: "Enter a BharatRoute reference to see a sample milestone journey with timestamps, transfer points and delivery confirmation. This front-end demo uses local sample records — it is not connected to a live carrier system and no data leaves your browser.",
        image: IMG.hub,
        metrics: [["Booked", "consignment registered"], ["In transit", "moving between hubs"], ["Delivered", "proof recorded"]],
        cta: ["Talk to the freight desk", "contact.html"],
        secondary: ["Understand the statuses", "#status-guide"]
      },
      sections: [
        { type: "tracking-form", tone: "paper" },
        {
          type: "steps", tone: "white", columns: 3,
          kicker: "Journey stages",
          title: "Six stages between booking and delivery",
          copy: "Every consignment passes through the same stages, whatever the lane. Each stage change is timestamped against a location, so a status always answers 'where' and 'when' together.",
          items: [
            ["01 · Booked", "The consignment is registered with cargo details, documents checked and a dispatch plan confirmed."],
            ["02 · Picked up", "Freight is counted, condition-checked and loaded. Photographs and the signed LR accompany the consignment."],
            ["03 · In transit", "The vehicle is on the line-haul leg, with milestone updates at every planned transfer point."],
            ["04 · At destination hub", "The consignment has reached the destination hub and is staged for the regional or last-mile run."],
            ["05 · Out for delivery", "The local run has started with a delivery window and the receiver's contact confirmed."],
            ["06 · Delivered", "Receipt is confirmed, exceptions are noted on the POD and the delivery time is recorded."]
          ],
          note: "Exception states are tracked too: held for documentation, damage noted, address issue, refused delivery and returned to origin. Each carries a reason, an owner and a next action."
        },
        {
          type: "split", tone: "mist", flip: true,
          kicker: "What good tracking means",
          title: "Beyond a dot on a map",
          copy: [
            "A status is only useful when it answers three questions: where is my consignment, what happens next, and does anything need my decision? A moving dot with no context simply shifts the worry from you to your customer.",
            "So every milestone carries a timestamp, a location and a plain-language note. When something changes, the update states the reason and the revised estimate instead of quietly resetting a delivery date."
          ],
          points: [
            "Milestone timestamps with the location where they were recorded",
            "Exception notes with a reason, an owner and a revised estimate",
            "POD status, delivery time and any remarks recorded at handover",
            "A shareable reference your customer service team can pass on safely"
          ],
          image: IMG.warehouse,
          link: ["See the status guide below", "#status-guide"]
        },
        {
          type: "table", tone: "white", id: "status-guide",
          kicker: "Status guide",
          title: "What each status actually means",
          copy: "The plain-English meaning behind every label, and the one action we recommend at each point.",
          head: ["Status", "What it means", "What you should do"],
          rows: [
            ["<strong>Booked</strong>", "Consignment registered, documents under verification, vehicle being placed", "Check that the invoice and e-way bill details match the booking"],
            ["<strong>Picked up</strong>", "Freight loaded and counted, LR signed, consignment photographed", "Keep the LR number handy for any follow-up"],
            ["<strong>In transit</strong>", "Moving on the line-haul leg between origin and destination hubs", "Nothing. For urgent cargo, ask for the next planned milestone"],
            ["<strong>At destination hub</strong>", "Staged for the regional or last-mile run", "Brief your receiving team and confirm unloading arrangements"],
            ["<strong>Out for delivery</strong>", "Local run started with a delivery window confirmed", "Make sure the receiver's phone is reachable"],
            ["<strong>Delivered</strong>", "Receipt confirmed and delivery time recorded", "File the POD; note any damage in writing before signing"],
            ["<em>Held — documentation</em>", "Movement paused because a document is missing or mismatched", "Correct and resend the document; we retry the same or next departure"],
            ["<em>Damage noted</em>", "Damage or shortage observed and recorded at handover", "Share photographs within 24 hours so a claim can be registered"],
            ["<em>Returned to origin</em>", "Delivery could not be completed after the agreed attempts", "Decide between re-dispatch, an alternate address or inward return"]
          ],
          caption: "Status definitions can be mapped to a carrier or transport-management system when integrated."
        },
        {
          type: "faq", tone: "sand",
          kicker: "Tracking questions",
          title: "Answers to the usual tracking worries",
          items: [
            ["Why has my status not changed today?", "Milestones update at handover points, not continuously. A consignment on a two-day line-haul may show no change for a full day while it is moving. If a planned milestone is missed by more than four hours, our operations desk raises an exception note rather than waiting for you to ask."],
            ["Can I track without a reference number?", "A connected tracking system can support searches by consignment number, invoice number or booked phone number. Try the example references BR-IND-24816, BR-IND-73104 or BR-IND-90572 here."],
            ["Do you provide API or webhook updates?", "A live deployment would expose milestone webhooks and a REST lookup so your own order-management screen can show status without anyone logging into another portal. That integration is scoped during onboarding."],
            ["How long is shipment history available?", "Milestone history and POD documents are typically retained for the period your rate agreement requires, commonly twelve to twenty-four months. Download the POD at the time of delivery so your own records stay complete."],
            ["What is a POD and why does it matter?", "A proof of delivery is the signed or digitally acknowledged receipt of a consignment, including time, receiver name and any remarks. It closes the movement, supports your invoice and forms the basis of any claim."],
            ["What if the receiver refuses the delivery?", "We record the reason, hold the consignment securely and inform you the same day. You then choose between a re-attempt, an alternate address or a return to origin, and we confirm the cost implication before acting."]
          ]
        },
        {
          type: "cta",
          kicker: "Something not moving?",
          title: "Give us the reference and we will take it from there.",
          button: ["Contact the freight desk", "contact.html"],
          link: ["Read about our handover process", "blog.html#five-handovers"]
        }
      ]
    },
    "blog.html": {
      nav: "Journal",
      description: "The BharatRoute journal: practical notes on Indian freight operations, e-way bill compliance, cold-chain handovers, returns and warehouse practice.",
      hero: {
        eyebrow: "The BharatRoute journal",
        title: "Notes from the road and the warehouse.",
        intro: "Straightforward thinking on Indian freight, fulfilment and customer experience, written for the people who actually plan dispatches, answer customer calls and reconcile delivery notes at the end of the month. No jargon, no vendor pitch — just what we have learned watching consignments move.",
        image: IMG.about,
        metrics: [["Field notes", "from daily operations"], ["Practical guides", "you can use this week"], ["India focused", "lanes, rules and seasons"]],
        cta: ["Ask us a logistics question", "contact.html"],
        secondary: ["Jump to the article index", "#journal-index"]
      },
      sections: [
        {
          type: "article", tone: "paper", id: "five-handovers",
          kicker: "Featured · Operations · 6 min read",
          title: "The five handovers that shape a delivery",
          meta: ["Operations", "6 minute read", "Sample journal article"],
          body: [
            { p: "A delivery is not one event. It is a relay of people passing the right information at the right time, and most of the trouble in Indian road freight happens at the baton changes. Nobody deliberately drops the baton; they simply never had it in their hand to begin with. These five moments deserve more attention than they usually get." },
            { h: "1. Booking — the handover from sales to operations" },
            { p: "A booking that says 'about two tonnes to Pune' will be planned badly, because there is nothing to plan with. The information that actually matters is specific: commodity, package count, dimensions, weight, whether it can be stacked, whether it needs a tail-lift, what time the gate opens and who will sign at the far end." },
            { ul: ["Commodity and a clear description for the LR", "Package count, dimensions, weight and stackability", "Loading method, dock height and any equipment needed", "Receiver name, number and receiving hours", "Whether an e-way bill, permit or handling certificate applies"] },
            { h: "2. Pickup — the handover from your warehouse to the driver" },
            { p: "This is where condition disputes are born. The driver counts quickly because he is parked in a busy lane. Your loader assumes somebody else is checking. Two days later a shortage appears, and there is no way to establish where it happened." },
            { p: "Fix it with a routine that takes four minutes: count in front of the driver, note damage or shortages on the LR before the vehicle moves, and take three photographs — loaded, closed and number plate. Photos are not paperwork; they are proof that ends arguments." },
            { h: "3. Every transfer — the handover from one hub to the next" },
            { p: "Consolidation is what makes part-load freight affordable, and it is also where a consignment can quietly stall. The dangerous moment is not the loading itself but the information gap: the manifest travels, the exception does not." },
            { p: "Every transfer should pass on exceptions as well as cargo. Damaged corner, one carton short, label missing — if the receiving hub hears it from the manifest instead of the phone, it can plan around it. If it hears it from your customer, it is already an incident." },
            { h: "4. Destination — the handover to the receiving team" },
            { p: "The last handover is a scheduling problem, not a transport one. A consignment that arrives while the stores team is at lunch, or on a day when the lift is under maintenance, has arrived and is still not delivered." },
            { p: "Preparing the receiving team with an estimated arrival, a contact number and unloading requirements costs one phone call. It routinely saves a whole day of waiting or a return trip." },
            { h: "5. Delivery confirmation — the handover back to you" },
            { p: "Closing the loop matters more than most teams expect. A POD with time, receiver name and remarks is what supports your invoice, and it is the only document that stands up if a claim follows. A vague 'delivered at gate' signature protects nobody." },
            { p: "Ask for the POD on the day of delivery, check the remarks rather than just the signature, and file it against the consignment. It takes two minutes and removes an entire category of month-end confusion." },
            { quote: "Most 'transport problems' are information problems that were given three days to grow." },
            { h: "A short checklist you can use tomorrow" },
            { ol: ["Capture five fields at booking: commodity, count, dimensions, receiving hours, receiver contact.", "Count in front of the driver and note exceptions on the LR before departure.", "Send the receiver an estimated arrival time, not a range covering the whole week.", "Pass exceptions from hub to hub in writing, not verbally.", "Collect the POD on delivery day and read the remarks."] },
            { p: "None of these steps require new software. They require someone to own each handover, which is exactly what we assign on every consignment we move." },
            { p: "The examples in this article are illustrative; verify current lane conditions before scheduling a shipment." }
          ],
          foot: ["Talk to our operations desk", "contact.html"]
        },
        {
          type: "article", tone: "white", id: "eway-bill",
          kicker: "Compliance · 5 min read",
          title: "E-way bill basics for first-time shippers",
          meta: ["Compliance", "5 minute read", "Sample journal article"],
          body: [
            { p: "The e-way bill is one of the most common reasons a loaded vehicle sits still. The rules are not complicated, but they are unforgiving about detail: a wrong pin code or a mismatched invoice value can stop a consignment at a check post and cost a day. Here is the practical version." },
            { h: "Know when it applies to you" },
            { p: "Movement of goods above the prescribed value threshold, and certain categories of goods regardless of value, require an e-way bill. If you are unsure about your commodity or value, ask before dispatch rather than after loading — the answer changes how and when the vehicle can move." },
            { h: "Details that cause most rejections" },
            { ul: ["Pin codes that do not match the actual dispatch or delivery address", "Invoice value that differs from the value declared on the bill", "Consignee GSTIN missing or entered incorrectly", "Transport document number not updated after the vehicle is placed", "Part-B left blank even though the vehicle has already departed"] },
            { h: "A sequence that avoids surprises" },
            { ol: ["Generate the e-way bill after the invoice is final, never before.", "Enter the vehicle number as soon as placement is confirmed and update Part-B.", "Share a copy with the driver, the warehouse gate and the receiving team.", "Keep the document reference on the LR so everything links together.", "If the vehicle changes en route, update the portal the same day."] },
            { h: "What happens when it goes wrong" },
            { p: "A mismatch usually means the consignment waits at a check post until the document is corrected. The vehicle may also need to be re-declared, which delays the next departure in the schedule. Because most of our lanes run to fixed cut-offs, an uncorrected document can push a consignment to the following day's departure even after the issue is resolved." },
            { p: "If something is wrong, tell your operations contact immediately with the corrected invoice or bill. We keep the shipment in a safe staging area rather than sending the vehicle to wait at a barrier, and we tell you the realistic revised delivery window." },
            { quote: "Compliance is not paperwork. It is the difference between a vehicle moving and a vehicle parked." },
            { p: "Requirements can change. Confirm current guidance with your tax advisor and the official portal before dispatch." }
          ],
          foot: ["Read the handover guide", "blog.html#five-handovers"]
        },
        {
          type: "article", tone: "paper", id: "reefer-check",
          kicker: "Cold chain · 6 min read",
          title: "The two-minute check that protects a reefer load",
          meta: ["Cold chain", "6 minute read", "Sample journal article"],
          body: [
            { p: "Most temperature incidents we see are not caused by a refrigeration failure at 3 a.m. on a highway. They happen while the vehicle is standing still with its doors open at a dock, in the first ten minutes of a shift when everyone is busy with something else. That is genuinely fixable." },
            { h: "The check, in order" },
            { ol: ["Confirm the set point against the product requirement out loud, with the driver and your supervisor present.", "Verify the body is already at temperature before loading begins and that the pre-cooling log is signed.", "Load quickly, close doors between consignments, and never leave stock on a warm dock 'for a few minutes'.", "Start the data logger before the doors close and note the start time on the LR.", "Agree the dock-time limit: if loading runs past it, stop and reassess instead of pushing through."] },
            { h: "Why it works" },
            { p: "A refrigerated vehicle can recover from a short door-open event, but only if the body was cold to begin with and the product went in cold. When a warm pallet enters, the vehicle spends the next hour pulling heat out of the cargo, and by then your temperature chart has a spike nobody can explain." },
            { ul: ["Pre-cooled body, pre-cooled product, minimal open-door time", "Logger running before the doors shut, with the start time recorded", "One person accountable for the dock-clock", "Handover log signed at both ends, with a photo of the logger reading"] },
            { h: "What to document for an audit" },
            { p: "Keep the pre-cooling record, the logger trace, the handover log with both signatures, and the incident note if anything deviated. An auditor wants to see that you had a procedure and that you followed it — not a promise that the cargo was kept cold." },
            { quote: "Cold chain is decided at the dock, not on the highway." },
            { p: "Requirements vary by product and regulator, so follow your own quality system and confirm handling instructions before dispatch." }
          ],
          foot: ["See cold-chain services", "service.html#cold-chain"]
        },
        {
          type: "journal", tone: "white", id: "journal-index",
          kicker: "Article index",
          title: "Everything else in the journal",
          copy: "Shorter notes and practical guides from our operations, planning and customer teams. New pieces are added as we learn something worth passing on.",
          items: [
            ["Network · 4 min read", "Planning a new regional lane", "The eight questions to answer before you add a city to your distribution map, from dock heights to returns flow.", "project.html#lanes"],
            ["Commerce · 5 min read", "A clearer returns experience", "How a structured reverse journey turns your biggest service complaint into a reason customers stay.", "service.html#commerce"],
            ["Warehousing · 5 min read", "Slotting for faster dispatches", "Why the fastest warehouse is rarely the biggest one, and how re-slotting cuts pick time without new racking.", "service.html#warehousing"],
            ["Operations · 3 min read", "Monsoon routing without the drama", "Planning buffers on hill and flood-prone corridors so a week of rain does not become a week of apologies.", "project.html#case-mumbai-pune"],
            ["Commerce · 4 min read", "What an NDR really tells you", "Non-delivery reasons are customer research. Reading them properly reduces repeat failures.", "tracking.html#status-guide"],
            ["People · 3 min read", "The dock clock nobody watches", "Gate and dock time is the most under-measured number in road freight, and it decides your cut-offs.", "team.html#profile-ananya-rao"]
          ]
        },
        {
          type: "glossary", tone: "mist",
          kicker: "Working glossary",
          title: "The terms that show up in every freight conversation",
          copy: "If you are new to planning freight, these are the words that will appear in your first dispatch note.",
          items: [
            ["LR (Lorry Receipt)", "The transport document issued at pickup. It records consignment details, count, condition and the terms of carriage, and it is the first document referenced in any dispute."],
            ["Docket / Consignment note", "Often used interchangeably with LR, though a docket usually refers to the booking record while the LR travels with the goods."],
            ["E-way bill", "A GST-era document required for the movement of goods above prescribed thresholds. Wrong pin codes or invoice values are the most common cause of vehicle detention."],
            ["POD (Proof of delivery)", "The signed or digitally acknowledged receipt at delivery, including time, receiver name and remarks. It closes the movement and supports your invoice."],
            ["PTL / FTL", "Part-load and full-truck freight. PTL shares vehicle space; FTL gives you the whole vehicle for a lane."],
            ["Line-haul", "The long-distance leg between two operating hubs, planned as a scheduled departure rather than an ad-hoc run."],
            ["Hub & spoke", "A network design where long-haul moves run between hubs and regional spokes distribute freight to smaller towns and city addresses."],
            ["Detention / waiting charges", "Charges that apply when a vehicle is held beyond the agreed loading or unloading time at a dock."],
            ["NDR (Non-delivery report)", "The recorded reason a delivery could not be completed, such as an unavailable receiver, wrong address or refused shipment."],
            ["RTO (Return to origin)", "A consignment sent back to its origin after failed delivery attempts or on the shipper's instruction."],
            ["FIFO", "First in, first out — a stock rotation discipline that keeps older batches moving first, essential for food and pharma inventory."],
            ["Dock time", "The duration a vehicle spends at a loading or unloading dock. Short dock time is one of the strongest predictors of on-time departure."]
          ]
        },
        {
          type: "signup-form", tone: "white",
          kicker: "Journal updates",
          title: "One useful note a month",
          copy: "Short, practical and occasional: a lane note, a process checklist or something we got wrong and fixed. No sales newsletters, and you can stop any time.",
          note: "Submitting opens a pre-addressed email draft in your email application."
        },
        {
          type: "cta",
          kicker: "Ask us instead",
          title: "Have a logistics question we have not written about?",
          button: ["Send us the question", "contact.html"],
          link: ["See our services", "service.html"]
        }
      ]
    },
    "about.html": {
      nav: "About",
      description: "About BharatRoute: why the company was started, the six principles we work by, our milestones, compliance readiness and the team behind the operations.",
      hero: {
        eyebrow: "Who we are",
        title: "Local understanding. A wider point of view.",
        intro: "BharatRoute is a logistics company concept shaped around the realities of doing business across India's many markets: fragmented routes, seasonal disruption, paperwork that decides dispatch times, and customers who simply want to know when their goods will arrive.",
        image: IMG.about,
        metrics: [["People first", "at every handover"], ["Plain language", "in every update"], ["Documented", "every step of the way"]],
        cta: ["Start a conversation", "contact.html"],
        secondary: ["Meet the team", "team.html"]
      },
      sections: [
        {
          type: "intro", tone: "paper",
          kicker: "Our story",
          title: "We started with one uncomfortable question",
          copy: [
            "Why does moving goods across India still feel like a negotiation with the unknown? Our founding team spent years running dispatch desks at two manufacturing units, and the frustration was never distance. It was clarity. Nobody could say with confidence where a consignment was, who was responsible for it, or when the customer should be told the truth.",
            "So the company was built around the unglamorous details: who confirms the count, who owns the exception, who tells the customer before they have to ask, and who writes down what actually happened at the dock. Those four questions still decide whether a delivery feels smooth or stressful.",
            "Today our sample network plans movements across major commercial corridors, with operating hubs in the west, south, north and east. The scale is bigger than the two lanes we started with, but the standard has not changed: if we cannot document it, we do not claim it."
          ],
          points: [
            "Founded in Bengaluru as a two-lane regional operator",
            "Built for small and mid-size businesses running real dispatch pressure",
            "Every consignment assigned a named owning contact, not a department",
            "Operational review cadence agreed in writing with every contract customer"
          ],
          link: ["See what we do", "service.html"]
        },
        {
          type: "stats", tone: "green",
          kicker: "Where we stand today",
          title: "A working picture of the business",
          copy: "Illustrative figures are included here as examples and should be replaced with verified company results.",
          items: [
            ["2016", "first lane operated, Bengaluru to Chennai"],
            ["112", "scheduled lanes in this network model"],
            ["11", "regional operating hubs"],
            ["40+", "operations, hub and customer professionals"]
          ]
        },
        {
          type: "cards", tone: "white", columns: 3,
          kicker: "What we believe",
          title: "Six principles we are happy to be judged on",
          copy: "Values are easy to write and hard to keep. These are the ones we actually use when a decision is difficult, and each of them has cost us something at some point.",
          items: [
            ["01", "Say it straight", "If a lane is full, a transit time has slipped or a document is missing, you hear it from us before you have to ask. Bad news does not improve with age.", "", ""],
            ["02", "Plan before you promise", "We confirm the vehicle, the cut-off and the receiving hours before committing to a date. A promise we cannot keep is worse than a later delivery date.", "", ""],
            ["03", "Respect the driver", "A rested driver with clear instructions and a clean handover is the most reliable piece of technology in this business.", "", ""],
            ["04", "Own the exception", "Every exception gets an owner, a reason and a next action. Nobody is allowed to leave it 'for the morning shift'.", "", ""],
            ["05", "Improve every lane", "Monthly review notes feed one change per lane per quarter. Small, boring improvements compound faster than any reorganisation.", "", ""],
            ["06", "Stay curious", "We ask why a delivery felt difficult, even when the customer is satisfied. The satisfying delivery usually has something to teach us.", "", ""]
          ]
        },
        {
          type: "split", tone: "sand", flip: true,
          kicker: "How we work",
          title: "The operating habits behind every consignment",
          copy: [
            "Process sounds dull until you have been on the receiving end of a delivery that nobody owned. Our operating habits exist to keep ownership visible, from the moment a booking is confirmed to the day the POD is filed.",
            "They are deliberately simple, because complicated processes collapse under pressure. Every one of them is designed to survive a peak week, a vehicle breakdown or a change of shift."
          ],
          points: [
            "A pre-dispatch checklist signed by the person who loads the vehicle",
            "One named owner per consignment and a documented backup for their off-day",
            "Exceptions reported within four hours, with a reason and a revised estimate",
            "Documentation filed against the consignment the same day, not at month end",
            "A monthly lane review that produces at least one concrete change",
            "Honest capacity limits, published in advance for known peak weeks"
          ],
          image: IMG.team,
          link: ["Meet the people who run this", "team.html"]
        },
        {
          type: "timeline", tone: "white",
          kicker: "Milestones",
          title: "How the idea grew, one quarter at a time",
          copy: "None of these steps were dramatic. Each one came from a customer asking for something we could not yet do properly.",
          items: [
            ["2016", "First lane operated", "A single Bengaluru to Chennai run for one auto component customer, with a paper checklist and one coordinator who answered every call personally."],
            ["2018", "Documentation discipline", "e-way bill readiness forced us to standardise how invoices, LRs and vehicle declarations moved through the process. It removed a whole class of dock delays."],
            ["2020", "Essential goods operations", "Regional lockdowns taught us how to work with district-level permissions and how to keep a consignment moving when plans change overnight."],
            ["2022", "Cold-chain capability", "Piloted temperature-aware lanes with pre-cooling discipline and handover logs, starting with one pharma customer's southern corridor."],
            ["2024", "Control tower desk", "A single coordination point was set up for multi-location customers, covering multiple origins, vehicle types and daily cut-offs."],
            ["2026", "Network extension", "Regional spokes were widened to cover more tier-2 and tier-3 towns, with published serviceability confirmation at enquiry stage."]
          ]
        },
        {
          type: "cards", tone: "mist", columns: 3,
          kicker: "Compliance & readiness",
          title: "How we keep the administrative side honest",
          copy: "Most delays in Indian freight are administrative rather than physical. These are the disciplines we keep so paperwork never becomes the reason a vehicle is parked.",
          items: [
            ["Registrations", "GST-ready operations", "Documentation prepared for GST-registered shippers, with invoice, LR and e-way bill references linked to a single consignment record.", "", ""],
            ["Documents", "E-way bill discipline", "Vehicle number updates, Part-B completion and pin code verification are checked before departure, not at a check post.", "", ""],
            ["Food", "Food-safe handling", "Storage and transport practices aligned to food-safety expectations for packaged and perishable cargo, with FIFO stock rotation.", "", ""],
            ["Pharma", "Regulated-handling awareness", "Temperature bands, dock-time limits and handover logs maintained in the format quality teams need for their own audits.", "", ""],
            ["Risk", "Insurance facilitation", "We help arrange transit cover before dispatch, and we assemble the incident file if a claim has to be filed.", "", ""],
            ["Payments", "SME-friendly terms", "Clear rate agreements with defined validity and waiting terms, so smaller businesses can plan cash flow without surprises.", "", ""]
          ],
          note: "Operational and certification claims should be supported by current, independently verifiable evidence."
        },
        {
          type: "team", tone: "white",
          kicker: "The people",
          title: "Accountability has a name here",
          copy: "You will not be passed to a shared mailbox. Every customer arrangement has named people on both sides, and their phone numbers appear on your dispatch notes.",
          link: ["Meet the whole team", "team.html"],
          items: [
            ["Ananya Rao", "Hub operations lead", "Bengaluru, Karnataka", "Coordinates arrivals, loading and departures across the southern hubs, and owns the daily dock clock."],
            ["Ramesh Iyer", "Line-haul planning manager", "Pune, Maharashtra", "Builds the departure calendar on western corridors and matches vehicle type to cargo profile."],
            ["Imran Sheikh", "Cold-chain compliance", "Hyderabad, Telangana", "Qualifies routes, agrees temperature bands and keeps handover logs audit-ready."],
            ["Neha Bansal", "Enterprise solutions", "Delhi NCR", "Designs contract arrangements for multi-location customers and runs the quarterly review cycle."]
          ]
        },
        {
          type: "quotes", tone: "paper",
          kicker: "What partners say",
          title: "The reputation we are trying to earn",
          note: "The customer comments on this page are illustrative examples.",
          items: [
            ["They tell us about problems early. That sounds small until you have worked with a vendor who does not.", "Plant logistics manager", "Auto components, Pune"],
            ["The documentation discipline is the part we value most. Our audits are simply easier now.", "Quality assurance lead", "Pharma distribution, Hyderabad"],
            ["A vehicle broke down and we knew within twenty minutes, with a replacement plan attached. That is the whole job.", "Supply chain head", "Retail distribution, Kolkata"]
          ]
        },
        {
          type: "faq", tone: "sand", id: "faq",
          kicker: "Working with us",
          title: "What it is actually like to work with us",
          items: [
            ["How long does onboarding take?", "Most accounts go live within two weeks: a discovery call, a written route and rate plan, one trial consignment with the full process, then agreed service measures and published cut-offs. Complex contracts with multiple locations take longer, usually four to six weeks."],
            ["Do you sign service commitments?", "Yes. Contract arrangements include written service measures per lane, an exception reporting format and a review cadence. What we will not do is sign a service level we cannot operationally support, which is why the planning conversation comes before the commitment."],
            ["What are your payment terms?", "Standard terms are invoice on delivery with a defined credit period agreed at onboarding. Waiting, detention and cancellation terms are documented in the rate agreement so there are no month-end surprises for either side."],
            ["Do you subcontract, and how do you control it?", "Partner vehicles are used on regional surges and specialist equipment. Every partner onboards with document verification, driver checks and a written service addendum, and your consignment still has the same named owner regardless of whose vehicle it is on."],
            ["Do you work with businesses that ship occasionally?", "Absolutely. Some of our longest relationships started with one consignment a month. Part-load freight exists precisely so that smaller and irregular volumes still get a scheduled departure and a documented handover."],
            ["How do you price a movement?", "We quote on the basis that fits the lane: per kilogram or cubic metre for part loads, per vehicle for full-truck movements, and per vehicle per month for dedicated capacity. Every quote states what is included, what is not, and the assumptions behind it."]
          ]
        },
        {
          type: "cta",
          kicker: "Next step",
          title: "Tell us where your supply chain hurts.",
          button: ["Start a conversation", "contact.html"],
          link: ["Read the journal", "blog.html"]
        }
      ]
    },
    "team.html": {
      nav: "Our team",
      description: "Meet the BharatRoute sample team: hub operations, line-haul planning, cold-chain compliance, customer success, network design and driver partner support.",
      hero: {
        eyebrow: "The people behind the plan",
        title: "Good logistics starts with good listening.",
        intro: "Dispatchers, hub teams, drivers, planners and customer partners all shape the moment a shipment changes hands. This is the sample team that runs the operations described across this website, and what each of them is actually accountable for.",
        image: IMG.team,
        metrics: [["One team", "across every handover"], ["Named owners", "for each exception"], ["Shared context", "from pickup to POD"]],
        cta: ["Talk with our team", "contact.html"],
        secondary: ["See the featured profile", "#profile-ananya-rao"]
      },
      sections: [
        {
          type: "team", tone: "paper",
          kicker: "Who does what",
          title: "The people you will actually speak to",
          copy: "Every role below exists because something went wrong once and nobody owned it. Now somebody does.",
          items: [
            ["Ananya Rao", "Hub operations lead", "Bengaluru, Karnataka", "Owns the daily dock clock across southern hubs: arrivals, loading sequence, departures and handovers."],
            ["Ramesh Iyer", "Line-haul planning manager", "Pune, Maharashtra", "Builds the western corridor departure calendar and matches vehicle type to cargo profile and weight."],
            ["Kavya Menon", "Customer success lead", "Kochi, Kerala", "Keeps customers ahead of problems: proactive updates, exception calls and monthly service notes."],
            ["Imran Sheikh", "Cold-chain compliance", "Hyderabad, Telangana", "Qualifies routes and vehicles, agrees temperature bands and maintains audit-ready handover logs."],
            ["Neha Bansal", "Enterprise solutions", "Delhi NCR", "Designs contract arrangements for multi-location customers and chairs the quarterly reviews."],
            ["Sunil Patil", "Fleet & driver care", "Nashik, Maharashtra", "Runs vehicle readiness, driver briefing, rest-point planning and the driver partner programme."],
            ["Fatima Qureshi", "Network design analyst", "Kolkata, West Bengal", "Decides where spokes are added, models lane demand and tracks where transit time is really going."],
            ["Arjun Deshpande", "Warehousing & fulfilment", "Ahmedabad, Gujarat", "Manages storage routines, stock hygiene, kitting and the returns grading process."]
          ]
        },
        {
          type: "article", tone: "white", id: "profile-ananya-rao",
          kicker: "Featured profile",
          title: "\"Every good handover begins before the vehicle arrives.\"",
          meta: ["Ananya Rao", "Hub operations lead", "Bengaluru, Karnataka", "Sample team profile"],
          image: { id: IMG.hub, caption: "Illustrative image of hub operations." },
          body: [
            { p: "Ananya runs the Bengaluru hub, and her whole job is deciding what happens next. Arrivals, loading sequence, vehicle readiness, documentation and the departures board all pass through her desk. On a busy day that is sixty-odd consignments, four dock bays and a driver queue that never quite behaves." },
            { p: "She insists that the most important part of her day happens before any vehicle reaches the gate." },
            { h: "How she starts" },
            { p: "The arrivals board comes first, then the exception list from the night shift, then the vehicles that are due to load before noon. Anything with special handling requirements, temperature-controlled cargo, fragile items, hazardous declarations or a receiver with tight hours gets pulled out and briefed separately." },
            { quote: "A calm start makes a better shift. If the dock team starts the day confused, everything after that is improvisation." },
            { h: "Where errors actually come from" },
            { p: "Ananya tracks dock time obsessively, because it is the clearest early warning that something is wrong. A vehicle waiting more than forty minutes is a signal: either documentation is incomplete, the load plan is wrong, or the person who was supposed to be at the dock is somewhere else." },
            { ul: ["Documentation that arrives after the vehicle is placed", "Short-shipped pallets discovered at the dock instead of at picking", "Receiving teams that were never told the consignment was coming", "Vehicles loaded at the back of the queue because nobody sequenced them"] },
            { h: "How she measures a good shift" },
            { p: "Not by volume. By how few exceptions left the hub unreported. If a consignment is delayed, she wants the receiving customer told before they think to call, with a reason and a realistic revised time attached. Volume handled is a by-product of that discipline, not the goal." },
            { p: "Her team hands the board to the night shift with a written summary: what moved, what is staged, what is at risk and who owns each item. The night team does the same at dawn. Nothing is left depending on someone remembering a phone call." },
            { p: "This profile is illustrative; verify names, roles and team details before publication." }
          ],
          foot: ["Contact operations", "contact.html"]
        },
        {
          type: "steps", tone: "mist", columns: 3,
          kicker: "A day on the hub floor",
          title: "How a shift at the Bengaluru hub runs",
          copy: "This is the rhythm a hub operations lead actually works to. It is unglamorous, and it is exactly why shipments leave on time.",
          items: [
            ["06:15 · Arrivals board", "Review overnight arrivals, count short or damaged items and flag anything that needs a decision before loading starts."],
            ["07:30 · Exception handover", "Walk the night shift's exception list with the dock team, assign an owner to each open item and set a deadline."],
            ["09:00 · Loading sequence", "Publish the load order for each bay so vehicles are packed in departure sequence, not arrival sequence."],
            ["11:30 · Documentation check", "Confirm invoices, e-way bills and LRs match the physical consignments before vehicles are sealed."],
            ["14:00 · Departure window", "Release sealed vehicles against the published cut-off and record actual departure times for the review file."],
            ["18:00 · Handover to night", "Write one page: what moved, what is staged, what is at risk, and who owns each open item."]
          ]
        },
        {
          type: "cards", tone: "white", columns: 4,
          kicker: "Working with us",
          title: "What driver partners get from BharatRoute",
          copy: "Freight does not move without drivers, and a driver who is treated as an afterthought is a risk to every consignment on the vehicle.",
          items: [
            ["Payments", "Predictable settlement", "Trip settlements on a fixed cycle with a clear statement of trip, advance and deductions, so nothing depends on telephone follow-up.", "", ""],
            ["Support", "Fuel, tolls & advances", "Fuel and toll advances arranged up front, plus a single number to call for route, documentation or payment questions.", "", ""],
            ["Comfort", "Rest points & briefings", "Planned rest stops, honest route briefings on restrictions and hazards, and no pressure to run beyond legal driving hours.", "", ""],
            ["Safety", "Load safety & PPE", "Load restraint training, straps and PPE provided, with loading supervised by our hub team rather than left to chance.", "", ""]
          ]
        },
        {
          type: "split", tone: "paper", flip: true,
          kicker: "Careers",
          title: "What we look for when we hire",
          copy: [
            "Logistics is not a technical puzzle. It is a set of promises that have to be kept by people who are willing to pick up the phone at an inconvenient moment. Skills can be taught; that instinct is harder.",
            "We hire for attention to detail, comfort with being accountable, and respect for the people on the other side of a handover, whether that is a dock loader, a driver, a receiver or a customer's support team."
          ],
          points: [
            "Comfort with detail: counting, checking and writing things down properly",
            "Willingness to make the awkward call early instead of hoping it resolves",
            "Regional language ability, which decides how much a handover is understood",
            "Calm under peak pressure, when three things need attention at once",
            "Respect for drivers and dock teams, who make the plan real",
            "Curiosity about why a delivery felt difficult even when it worked"
          ],
          image: IMG.growing,
          link: ["Write to our people team", "contact.html"]
        },
        {
          type: "faq", tone: "white",
          kicker: "Driver partners & hiring",
          title: "Questions from drivers and applicants",
          items: [
            ["How do I join the driver partner network?", "Send your vehicle type, capacity, current locations and the corridors you prefer, along with copies of your RC, insurance, permit, fitness certificate and driver documents. Our fleet team reviews the file, explains the rate basis and schedules a trial movement before adding you to a lane."],
            ["When are partner payments settled?", "Trip payments follow a fixed settlement cycle agreed when you join, with a written statement per trip covering the agreed rate, advances taken and any deductions. If a deduction applies, the reason is documented before the payment is processed."],
            ["What documents are needed to onboard?", "Vehicle registration, valid insurance, permit and fitness certificate, driver's licence with the correct endorsements, and bank details for settlement. For temperature-controlled vehicles we also record body calibration and maintenance history."],
            ["Do you hire freshers in operations?", "Yes, for hub coordination and customer support roles. New team members spend their first weeks on the dock and on the phone so they understand what the schedule actually looks like before they manage one."],
            ["Can I work part-time on specific corridors?", "Partner capacity is managed by lane and season, so we regularly work with operators who cover only one corridor. Tell us which lanes you prefer and we will offer trips that fit rather than pushing unsuitable work your way."],
            ["Is there any training or safety certification?", "Load securing, material handling, temperature discipline and documentation training are provided for partner crews and our own team. Attendance is recorded, and refreshers run ahead of the monsoon and peak seasons."]
          ]
        },
        {
          type: "cta",
          kicker: "Join or work with us",
          title: "Good people make the schedule real.",
          button: ["Contact our team", "contact.html"],
          link: ["See how we operate", "about.html"]
        }
      ]
    },
    "contact.html": {
      nav: "Contact",
      description: "Contact BharatRoute Logistics: send a freight enquiry, reach the freight desk, cold-chain desk, billing or driver partner support, and see what happens after you write in.",
      hero: {
        eyebrow: "Contact BharatRoute",
        title: "Let's get the first details moving.",
        intro: "Tell us what needs to move, where it is going and when it should arrive. Submitting the form prepares an email addressed to the freight desk with your shipment details. For an existing consignment, include its reference number in your message.",
        image: IMG.enterprise,
        metrics: [["Freight desk", brand.phone], ["Email", brand.email], ["Office", brand.city]],
        cta: ["See our solutions", "service.html"],
        secondary: ["Track a shipment", "tracking.html"]
      },
      sections: [
        { type: "contact-form", tone: "paper" },
        {
          type: "cards", tone: "white", columns: 3,
          kicker: "Who to contact",
          title: "Six desks, each with one job",
          copy: "Contacting the right desk saves a day of forwarding. Phone lines are staffed during business hours, and email is monitored through the working week.",
          items: [
            ["New business", "Quotations & lane checks", "Send origin, destination, cargo details and dispatch frequency for a written quote. " + brand.phone + " · new business desk.", "contact.html#enquiry-form", "Send an enquiry"],
            ["Support", "Existing shipments", "Consignment status, delivery changes, POD requests and escalations. Keep your reference ready. " + brand.phone + " · option 1.", "tracking.html", "Track first"],
            ["Cold chain", "Temperature-aware cargo", "Temperature bands, pre-cooling requirements, qualification and deviation escalation. Ask for the cold-chain desk.", "service.html#cold-chain", "Cold-chain help"],
            ["Accounts", "Billing & documentation", "Invoices, POD copies, e-way bill queries and rate agreement clarifications. Quote your invoice number.", "contact.html", "Raise a query"],
            ["Partners", "Driver & fleet partners", "Vehicle onboarding, settlement enquiries and lane preferences for partner operators. Ask for the fleet team.", "team.html", "Partner programme"],
            ["People", "Careers & internships", "Operations, hub coordination and customer support roles, plus internship and campus enquiries.", "about.html", "About us"]
          ]
        },
        {
          type: "steps", tone: "mist", columns: 3,
          kicker: "What happens next",
          title: "A real reply with a real plan",
          copy: "Enquiries are not routed into a queue. Here is the sequence you should expect after you write in.",
          items: [
            ["Acknowledgement", "A human confirms receipt, usually within a few working hours, and asks for any missing detail upfront."],
            ["Route & rate options", "You receive lane options with a price basis, indicative transit windows and the assumptions behind them."],
            ["Dispatch plan", "Once you confirm, we agree the pickup window, document checklist, loading requirements and receiving contact."],
            ["Named owner", "A single operations contact is assigned to the movement and their number appears on your dispatch note."]
          ]
        },
        {
          type: "table", tone: "white",
          kicker: "Response expectations",
          title: "How quickly each desk usually answers",
          copy: "These are the response windows we aim for on working days. Emergency escalation numbers are shared with contract customers in their service agreement.",
          head: ["Desk", "Best for", "Typical response"],
          rows: [
            ["<strong>New business</strong>", "Lane checks, quotations, contract discussions", "Same working day for ad-hoc quotes"],
            ["<strong>Shipment support</strong>", "Status, delivery changes, POD requests", "Within 2 working hours during business hours"],
            ["<strong>Cold-chain desk</strong>", "Temperature bands, qualification, deviation reports", "Within 2 working hours, escalated immediately for live deviations"],
            ["<strong>Billing & documentation</strong>", "Invoices, POD copies, e-way bill clarifications", "1 working day"],
            ["<strong>Partner desk</strong>", "Vehicle onboarding, settlement queries", "1–2 working days"],
            ["<strong>Claims</strong>", "Damage or shortage claims", "Acknowledgement in 1 working day, status update weekly"]
          ],
          caption: "Committed response times are agreed in writing with contract customers."
        },
        {
          type: "split", tone: "sand", flip: true,
          kicker: "Our base",
          title: "Bengaluru head office, network across India",
          copy: [
            "Our commercial and operations teams work out of Bengaluru, with regional hub teams supporting the western, southern, northern and eastern corridors. That structure means your lane is handled by people who know its roads, its docks and its receiving hours.",
            "Visits are welcome by appointment so the right people are available when you arrive. If you are dropping material for dispatch, call ahead and we will confirm the dock slot and the documents you need to carry."
          ],
          points: [
            "Head office: " + brand.city + ", India",
            "Phone: " + brand.phone + " (Monday to Saturday, 9:00–19:00 IST)",
            "Email: " + brand.email + " — monitored through the working week",
            "Regional hubs: Mumbai, Pune, Ahmedabad, Chennai, Hyderabad, Kochi, Delhi NCR, Jaipur, Kolkata, Guwahati",
            "Dispatch slots at the Bengaluru hub: 09:00–13:00 and 15:00–19:00 IST"
          ],
          image: IMG.hub,
          note: "Confirm contact details, operating hours and hub availability with the freight desk before visiting."
        },
        {
          type: "faq", tone: "white",
          kicker: "Before you write in",
          title: "Questions people ask the freight desk",
          items: [
            ["What should I include in a first enquiry?", "Origin and destination addresses or pin codes, cargo description, approximate weight and dimensions, package count, preferred dispatch date and the delivery deadline you are working to. With those six details we can usually price and plan the movement the same day."],
            ["Do you offer credit terms?", "Yes, once an account is onboarded and the documentation is complete. The credit period and settlement terms are agreed in writing at onboarding, so both teams know the schedule before the first invoice is raised."],
            ["Can I send one consignment without an account?", "Yes. One-off movements are quoted and booked the same way, and part-load freight is designed for exactly this situation. You receive the same documentation, milestones and POD as a contract customer."],
            ["How do I raise a claim for damage?", "Record the exception on the POD at the point of delivery, share photographs and the LR reference within 24 hours, and we open a claim file the same working day. Where insurance was arranged, we coordinate the documentation with the insurer."],
            ["Do you work with freight forwarders and 3PL providers?", "Yes. We provide domestic road movement, regional distribution and cold-chain legs for forwarders, consolidators and third-party logistics providers. Rates and cut-offs are agreed per lane, and documentation follows your own client-facing format where required."],
            ["Can I get a dedicated lane or vehicle?", "Dedicated lanes suit recurring weekly volume or sensitive cargo. We agree volume bands, cut-offs, vehicle type and review cadence in writing, and the arrangement is revisited when your volumes change rather than at the end of a long contract term."]
          ]
        },
        {
          type: "cta",
          kicker: "One last thing",
          title: "If it matters to your customer, it matters to us.",
          button: ["Send an enquiry", "contact.html#enquiry-form"],
          link: ["Read the journal", "blog.html"]
        }
      ]
    }
  };

  /* ==================================================================
     4. Legacy routes
     The old standalone detail pages and the extra home-page variants now
     live as sections inside the merged pages, so the old URLs redirect to
     the matching section instead of dead-ending.
     ================================================================== */
  const aliases = {
    "index-2.html": "index.html#solutions",
    "index-3.html": "service.html#commerce",
    "index-4.html": "service.html#cold-chain",
    "index-5.html": "service.html#contract-logistics",
    "service-details.html": "service.html#road-freight",
    "project-details.html": "project.html#case-mumbai-pune",
    "team-details.html": "team.html#profile-ananya-rao",
    "blog-details.html": "blog.html#five-handovers"
  };

  const navItems = [
    ["Home", "index.html"],
    ["Solutions", "service.html"],
    ["Network", "project.html"],
    ["Track", "tracking.html"],
    ["Journal", "blog.html"],
    ["About", "about.html"],
    ["Contact", "contact.html"]
  ];

  /* ==================================================================
     5. Sample tracking records used by the local lookup demo
     ================================================================== */
  const sampleJourneys = {
    "BR-IND-24816": {
      headline: "In transit — Bhiwandi to Chakan",
      summary: "Six pallets, about 2.4 tonnes · scheduled delivery tomorrow before 18:00 IST",
      current: 2,
      steps: [
        ["Booked", "Yesterday · 16:40 · Bhiwandi, Maharashtra", "Consignment registered and invoice details verified against the e-way bill."],
        ["Picked up", "Today · 07:12 · Bhiwandi warehouse", "Six pallets counted, photographed and sealed. LR signed by the driver."],
        ["In transit", "Today · 11:05 · Mumbai–Pune Expressway", "Vehicle on the line-haul leg towards the Chakan hub. No exceptions recorded."],
        ["Out for delivery", "Pending · Chakan hub", "Local run will be scheduled as soon as the vehicle is unloaded."],
        ["Delivered", "Pending", "Proof of delivery will be recorded at the receiving dock, with remarks if any."]
      ]
    },
    "BR-IND-73104": {
      headline: "Delivered — Chennai to Bengaluru",
      summary: "Eighteen cartons, about 640 kg · delivered today at 11:42 IST",
      current: 5,
      steps: [
        ["Booked", "Two days ago · 14:20 · Sriperumbudur, Tamil Nadu", "Consignment registered; hazardous declaration not applicable."],
        ["Picked up", "Two days ago · 18:05 · Sriperumbudur plant", "Eighteen cartons counted and condition-checked at loading."],
        ["In transit", "Yesterday · 02:40 · Vellore transfer point", "Transfer completed, manifest signed. One carton corner dent noted and logged."],
        ["At destination hub", "Today · 08:15 · Peenya hub, Bengaluru", "Staged for the local delivery run. Dent photographed for the condition file."],
        ["Out for delivery", "Today · 09:50 · Indiranagar route", "Local vehicle departed with a delivery window of 11:00–13:00."],
        ["Delivered", "Today · 11:42 · Indiranagar, Bengaluru", "Received by the stores team. Carton dent noted on the POD; POD copy available."]
      ]
    },
    "BR-IND-90572": {
      headline: "Booked — awaiting pickup in Kochi",
      summary: "Two pallets on a temperature-controlled lane · pickup scheduled tomorrow between 09:00 and 12:00 IST",
      current: 1,
      steps: [
        ["Booked", "Today · 10:25 · Aluva, Kerala", "Booking confirmed for the 2–8 °C band. Pre-cooling requirement passed to the cold-chain desk."],
        ["Picked up", "Pending · tomorrow 09:00–12:00", "Vehicle being pre-cooled ahead of loading. Data logger will start before the doors close."],
        ["In transit", "Pending", "Line-haul to the Coimbatore hub, then onward towards Chennai."],
        ["Out for delivery", "Pending", "Delivery window to be confirmed once the consignment reaches the destination hub."],
        ["Delivered", "Pending", "Handover log and logger reading will be recorded at the receiving dock."]
      ]
    }
  };

  /* ==================================================================
     6. Section renderers
     ================================================================== */
  const toneClass = function (tone) { return "band tone-" + (tone || "paper"); };
  const idAttr = function (section) { return section.id ? ' id="' + section.id + '"' : ""; };
  const linkHtml = function (link) {
    return link ? '<a class="text-link" href="' + link[1] + '">' + esc(link[0]) + ' <span aria-hidden="true">→</span></a>' : "";
  };
  const noteHtml = function (note, className) {
    return note ? '<p class="' + (className || "sec-note") + '">' + esc(note) + "</p>" : "";
  };
  const copyHtml = function (copy, className) {
    if (!copy) return "";
    return paras(copy).map(function (line) {
      return '<p' + (className ? ' class="' + className + '"' : "") + ">" + esc(line) + "</p>";
    }).join("");
  };
  const head = function (section, withLink) {
    if (!section.kicker && !section.title && !section.copy) return "";
    const rowLink = withLink && section.link;
    return '<div class="sec-head' + (rowLink ? " is-row" : "") + '"><div>' +
      (section.kicker ? '<p class="kicker">' + esc(section.kicker) + "</p>" : "") +
      (section.title ? '<h2 class="sec-title">' + esc(section.title) + "</h2>" : "") +
      copyHtml(section.copy, "sec-copy") +
      "</div>" + (rowLink ? linkHtml(section.link) : "") + "</div>";
  };
  const listHtml = function (points, numbered) {
    if (!points) return "";
    return '<ul class="check-list' + (numbered ? " is-numbered" : "") + '">' +
      points.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("") + "</ul>";
  };

  function renderIntro(section) {
    return '<section class="' + toneClass(section.tone) + '"' + idAttr(section) + '><div class="inner">' +
      head(section) +
      listHtml(section.points) +
      (section.link ? '<p class="sec-link">' + linkHtml(section.link) + "</p>" : "") +
      noteHtml(section.note) +
      "</div></section>";
  }

  function renderSplit(section) {
    return '<section class="' + toneClass(section.tone) + '"' + idAttr(section) + '><div class="inner split' +
      (section.flip ? " is-flipped" : "") + '">' +
      '<figure class="split-media"><img src="' + image(section.image, 1200) + '" alt="' + esc(section.alt || section.title) + '" loading="lazy">' +
      (section.imageCaption ? "<figcaption>" + esc(section.imageCaption) + "</figcaption>" : "") + "</figure>" +
      '<div class="split-body">' +
      (section.kicker ? '<p class="kicker">' + esc(section.kicker) + "</p>" : "") +
      (section.title ? "<h3>" + esc(section.title) + "</h3>" : "") +
      copyHtml(section.copy) +
      listHtml(section.points) +
      linkHtml(section.link) +
      noteHtml(section.note, "notice") +
      "</div></div></section>";
  }

  function renderCard(item) {
    const label = item[0], title = item[1], copy = item[2], href = item[3], cta = item[4];
    const inner = (label ? '<span class="card-label">' + esc(label) + "</span>" : "") +
      '<h3 class="card-title">' + esc(title) + "</h3>" +
      '<p class="card-copy">' + esc(copy) + "</p>" +
      (href ? '<span class="card-foot">' + esc(cta || "Read more") + ' <em aria-hidden="true">↗</em></span>' : "");
    return href ? '<a class="card" href="' + href + '">' + inner + "</a>" : '<div class="card">' + inner + "</div>";
  }

  function renderCards(section) {
    const cols = section.columns || 3;
    return '<section class="' + toneClass(section.tone) + '"' + idAttr(section) + '><div class="inner">' +
      head(section, true) +
      '<div class="card-grid' + (cols === 2 ? " cols-2" : cols === 4 ? " cols-4" : "") + '">' +
      section.items.map(renderCard).join("") + "</div>" + noteHtml(section.note) + "</div></section>";
  }

  function renderSteps(section) {
    const cols = section.columns || 5;
    return '<section class="' + toneClass(section.tone) + '"' + idAttr(section) + '><div class="inner">' +
      head(section, true) +
      '<div class="step-grid' + (cols === 3 ? " cols-3" : "") + '">' +
      section.items.map(function (item, index) {
        const numbered = !/^[0-9]/.test(item[0]);
        return '<div class="step">' +
          (numbered ? '<span class="step-index">' + String(index + 1).padStart(2, "0") + "</span>" : "") +
          "<h3>" + esc(item[0]) + "</h3><p>" + esc(item[1]) + "</p></div>";
      }).join("") + "</div>" + noteHtml(section.note) + "</div></section>";
  }

  function renderTable(section) {
    /* Cell values are authored in this file, so a limited set of inline
       tags (<strong>, <em>) is allowed for emphasis inside table cells. */
    return '<section class="' + toneClass(section.tone) + '"' + idAttr(section) + '><div class="inner">' +
      head(section, true) +
      '<div class="table-wrap"><table class="data-table">' +
      (section.caption ? "<caption>" + esc(section.caption) + "</caption>" : "") +
      "<thead><tr>" + section.head.map(function (cell) { return '<th scope="col">' + esc(cell) + "</th>"; }).join("") + "</tr></thead>" +
      "<tbody>" + section.rows.map(function (row) {
        return "<tr>" + row.map(function (cell) { return "<td>" + cell + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody></table></div>" + noteHtml(section.note) + "</div></section>";
  }

  function renderStats(section) {
    return '<section class="' + toneClass(section.tone) + '"' + idAttr(section) + '><div class="inner">' +
      head(section) +
      '<div class="stat-band">' + section.items.map(function (item) {
        return '<div class="stat"><strong>' + esc(item[0]) + "</strong><span>" + esc(item[1]) + "</span></div>";
      }).join("") + "</div>" + noteHtml(section.note) + "</div></section>";
  }

  function renderQuotes(section) {
    return '<section class="' + toneClass(section.tone) + '"' + idAttr(section) + '><div class="inner">' +
      head(section) +
      '<div class="quote-grid">' + section.items.map(function (item) {
        return '<figure class="quote-card"><blockquote>' + esc(item[0]) + "</blockquote><figcaption><strong>" +
          esc(item[1]) + "</strong>" + esc(item[2]) + "</figcaption></figure>";
      }).join("") + "</div>" + noteHtml(section.note) + "</div></section>";
  }

  function renderFaq(section) {
    return '<section class="' + toneClass(section.tone) + '"' + idAttr(section) + '><div class="inner">' +
      head(section) +
      '<div class="faq-list">' + section.items.map(function (item) {
        return '<details class="faq-item"><summary>' + esc(item[0]) + "</summary>" +
          copyHtml(item[1]) + "</details>";
      }).join("") + "</div>" + noteHtml(section.note) + "</div></section>";
  }

  function renderTeam(section) {
    return '<section class="' + toneClass(section.tone) + '"' + idAttr(section) + '><div class="inner">' +
      head(section, true) +
      '<div class="person-grid">' + section.items.map(function (item) {
        const initials = item[0].split(" ").map(function (word) { return word.charAt(0); }).slice(0, 2).join("");
        return '<article class="person"><p class="person-initials" aria-hidden="true">' + esc(initials) +
          '</p><h3 class="person-name">' + esc(item[0]) + '</h3><p class="person-role">' + esc(item[1]) +
          '</p><p class="person-base">' + esc(item[2]) + ". " + esc(item[3]) + "</p></article>";
      }).join("") + "</div>" + noteHtml(section.note) + "</div></section>";
  }

  function renderTimeline(section) {
    return '<section class="' + toneClass(section.tone) + '"' + idAttr(section) + '><div class="inner">' +
      head(section) +
      '<ul class="timeline">' + section.items.map(function (item) {
        return "<li><b>" + esc(item[0]) + "</b><strong>" + esc(item[1]) + "</strong><span>" + esc(item[2]) + "</span></li>";
      }).join("") + "</ul>" + noteHtml(section.note) + "</div></section>";
  }

  function renderArticle(section) {
    const body = section.body.map(function (block) {
      if (block.h) return "<h3>" + esc(block.h) + "</h3>";
      if (block.p) return copyHtml(block.p);
      if (block.ul) return "<ul>" + block.ul.map(function (li) { return "<li>" + esc(li) + "</li>"; }).join("") + "</ul>";
      if (block.ol) return "<ol>" + block.ol.map(function (li) { return "<li>" + esc(li) + "</li>"; }).join("") + "</ol>";
      if (block.quote) return "<blockquote>" + esc(block.quote) + "</blockquote>";
      return "";
    }).join("");
    const figure = section.image
      ? '<figure class="inline-figure"><img src="' + image(section.image.id, 1200) + '" alt="' + esc(section.title) +
        '" loading="lazy">' + (section.image.caption ? "<figcaption>" + esc(section.image.caption) + "</figcaption>" : "") + "</figure>"
      : "";
    return '<section class="' + toneClass(section.tone) + '"' + idAttr(section) + '><div class="inner">' +
      (section.kicker ? '<p class="kicker">' + esc(section.kicker) + "</p>" : "") +
      '<h2 class="sec-title">' + esc(section.title) + "</h2>" +
      (section.meta ? '<div class="article-meta">' + section.meta.map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("") + "</div>" : "") +
      '<article class="article">' + figure + body +
      (section.foot ? '<div class="article-foot">' + linkHtml(section.foot) + "</div>" : "") +
      "</article></div></section>";
  }

  function renderJournal(section) {
    return '<section class="' + toneClass(section.tone) + '"' + idAttr(section) + '><div class="inner">' +
      head(section, true) +
      '<div class="journal-grid">' + section.items.map(function (item) {
        return '<a class="journal-item" href="' + item[3] + '"><span class="tag">' + esc(item[0]) +
          "</span><h3>" + esc(item[1]) + "</h3><p>" + esc(item[2]) +
          '</p><span class="journal-read">Read the note <em aria-hidden="true">↗</em></span></a>';
      }).join("") + "</div>" + noteHtml(section.note) + "</div></section>";
  }

  function renderGlossary(section) {
    return '<section class="' + toneClass(section.tone) + '"' + idAttr(section) + '><div class="inner">' +
      head(section) +
      '<dl class="glossary">' + section.items.map(function (item) {
        return "<div><dt>" + esc(item[0]) + "</dt><dd>" + esc(item[1]) + "</dd></div>";
      }).join("") + "</dl>" + noteHtml(section.note) + "</div></section>";
  }

  function renderJump(section) {
    return '<section class="' + toneClass(section.tone) + '"' + idAttr(section) + '><div class="inner">' +
      head(section) +
      '<nav class="jump-nav" aria-label="On this page">' + section.items.map(function (item) {
        return '<a href="' + item[1] + '">' + esc(item[0]) + "</a>";
      }).join("") + "</nav></div></section>";
  }

  function renderCta(section) {
    return '<section class="callout"><div><p class="kicker">' + esc(section.kicker) + "</p><h2>" + esc(section.title) +
      '</h2></div><div class="callout-actions"><a class="button button-orange" href="' + section.button[1] + '">' +
      esc(section.button[0]) + ' <span aria-hidden="true">↗</span></a>' + linkHtml(section.link) + "</div></section>";
  }

  /* ---------- Forms ---------- */
  function renderTrackingForm(section) {
    return '<section class="' + toneClass(section.tone) + '" id="tracking"><div class="inner form-layout">' +
      '<div class="form-intro"><p class="kicker">Live view</p><h2>Check a sample consignment</h2>' +
      "<p>Enter one of the sample references to see how a milestone journey is displayed, including transfer points, plain-language notes and POD status.</p>" +
      '<p class="notice">Use one of the example references below to view its recorded shipment milestones.</p></div>' +
      '<div class="form-card"><form class="lookup-form" id="tracking-form" novalidate>' +
      '<label for="tracking-number">Shipment reference</label>' +
      '<div class="field-row"><input id="tracking-number" name="reference" autocomplete="off" placeholder="e.g. BR-IND-24816" required>' +
      '<button class="button button-dark" type="submit">Find shipment <span aria-hidden="true">↗</span></button></div>' +
      '<p class="form-hint">Sample references: BR-IND-24816 (in transit), BR-IND-73104 (delivered), BR-IND-90572 (booked).</p>' +
      '<div class="form-result" id="tracking-result" role="status" aria-live="polite"></div>' +
      "</form></div></div></section>";
  }

  function renderContactForm(section) {
    return '<section class="' + toneClass(section.tone) + '" id="enquiry-form"><div class="inner form-layout">' +
      '<div class="form-intro"><p class="kicker">Tell us about the move</p><h2>Start with the route</h2>' +
      "<p>Six details are enough for us to price and plan a movement: origin, destination, cargo, approximate weight, package count and your delivery deadline.</p>" +
      "<p>If you have run this lane before, mention your usual vehicle type and we will quote the same basis for comparison.</p>" +
      '<p class="notice">Submitting opens a pre-addressed email draft. Review the details and send it from your email application.</p></div>' +
      '<div class="form-card"><form class="contact-form" id="contact-form">' +
      '<div class="form-grid">' +
      '<label>Your name<input name="name" autocomplete="name" required placeholder="Full name"></label>' +
      '<label>Company<input name="company" autocomplete="organization" placeholder="Company name"></label>' +
      '<label>Work email<input name="email" type="email" autocomplete="email" required placeholder="you@company.in"></label>' +
      '<label>Phone<input name="phone" type="tel" autocomplete="tel" placeholder="+91 98xxx xxxxx"></label>' +
      '<label class="wide-field">What do you need?<select name="service">' +
      '<option>Part-load freight (PTL)</option><option>Full truck load (FTL)</option>' +
      "<option>E-commerce &amp; last mile</option><option>Cold chain &amp; pharma</option>" +
      "<option>Contract logistics / dedicated fleet</option><option>Warehousing &amp; fulfilment</option>" +
      "<option>Project &amp; ODC cargo</option><option>Something else</option></select></label>" +
      '<label>Origin city<input name="origin" required placeholder="e.g. Bhiwandi, Maharashtra"></label>' +
      '<label>Destination city<input name="destination" required placeholder="e.g. Chakan, Pune"></label>' +
      '<label class="wide-field">Cargo details<textarea name="cargo" rows="4" required placeholder="Commodity, package count, approximate weight and dimensions, preferred dispatch date"></textarea></label>' +
      "</div>" +
      '<button class="button button-dark" type="submit">Get a quote <span aria-hidden="true">↗</span></button>' +
      '<p class="form-hint">Your email draft will include lane options requested, cargo details and contact information for a written quote.</p>' +
      '<div class="form-result" id="contact-result" role="status" aria-live="polite"></div>' +
      "</form></div></div></section>";
  }

  function renderSignupForm(section) {
    return '<section class="' + toneClass(section.tone) + '"><div class="inner form-layout">' +
      '<div class="form-intro"><p class="kicker">' + esc(section.kicker) + "</p><h2>" + esc(section.title) + "</h2>" +
      copyHtml(section.copy) + "</div>" +
      '<div class="form-card"><form class="lookup-form" id="signup-form">' +
      '<label for="signup-email">Email address</label>' +
      '<div class="field-row"><input id="signup-email" name="email" type="email" autocomplete="email" required placeholder="you@company.in">' +
      '<button class="button button-dark" type="submit">Request updates <span aria-hidden="true">↗</span></button></div>' +
      noteHtml(section.note) +
      '<div class="form-result" id="signup-result" role="status" aria-live="polite"></div>' +
      "</form></div></div></section>";
  }

  /* ---------- Dispatcher ---------- */
  const renderers = {
    intro: renderIntro,
    split: renderSplit,
    cards: renderCards,
    steps: renderSteps,
    table: renderTable,
    stats: renderStats,
    quotes: renderQuotes,
    faq: renderFaq,
    team: renderTeam,
    timeline: renderTimeline,
    article: renderArticle,
    journal: renderJournal,
    glossary: renderGlossary,
    jump: renderJump,
    cta: renderCta,
    "tracking-form": renderTrackingForm,
    "contact-form": renderContactForm,
    "signup-form": renderSignupForm
  };

  function renderSection(section) {
    const renderer = renderers[section.type];
    return renderer ? renderer(section) : "";
  }

  /* ==================================================================
     7. Page shell: header, hero, footer
     ================================================================== */
  function renderHeader(currentFile) {
    const nav = navItems.map(function (item) {
      return '<a href="' + item[1] + '"' + (item[1] === currentFile ? ' aria-current="page"' : "") + ">" + esc(item[0]) + "</a>";
    }).join("");
    return '<a class="skip-link" href="#main-content">Skip to content</a>' +
      '<div class="topline"><span>Logistics with an Indian point of view</span>' +
      '<span>Freight desk: <a href="' + brand.phoneHref + '">' + esc(brand.phone) + "</a> · " + esc(brand.city) + "</span></div>" +
      '<header class="site-header">' +
      '<a class="brand" href="index.html" aria-label="BharatRoute Logistics — home">' +
      '<span class="brand-mark">B<span>R</span></span><span class="brand-name">Bharat<span>Route</span><small>MOVE WITH MEANING</small></span></a>' +
      '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">' +
      "<span></span><span></span><span></span><b>Menu</b></button>" +
      '<nav class="primary-nav" id="primary-navigation" aria-label="Main navigation">' + nav + "</nav>" +
      '<a class="header-track" href="tracking.html">Track a shipment <span aria-hidden="true">↗</span></a>' +
      "</header>";
  }

  function renderHero(page, currentFile) {
    const hero = page.hero;
    const currentLabel = (navItems.filter(function (item) { return item[1] === currentFile; })[0] || ["Home", ""])[0];
    const gallery = heroGalleries[currentFile] || [hero.image, IMG.road, IMG.warehouse];
    const metrics = hero.metrics.map(function (item) {
      return '<div class="metric"><strong>' + esc(item[0]) + "</strong><span>" + esc(item[1]) + "</span></div>";
    }).join("");
    const slides = gallery.map(function (imageId, index) {
      return '<div class="hero-slide' + (index === 0 ? " is-active" : "") + '" style="background-image:url(\'' + image(imageId, 2000) + '\')" aria-hidden="true"></div>';
    }).join("");
    return '<section class="hero" aria-roledescription="carousel" aria-label="Freight photography">' +
      '<div class="hero-carousel" aria-hidden="true">' + slides + "</div>" +
      '<div class="hero-content">' +
      '<p class="eyebrow"><span></span>' + esc(hero.eyebrow) + "</p>" +
      "<h1>" + esc(hero.title) + "</h1>" +
      '<p class="hero-intro">' + esc(hero.intro) + "</p>" +
      '<div class="hero-actions">' +
      '<a class="button button-orange" href="' + hero.cta[1] + '">' + esc(hero.cta[0]) + ' <span aria-hidden="true">↗</span></a>' +
      (hero.secondary ? '<a class="text-link" href="' + hero.secondary[1] + '">' + esc(hero.secondary[0]) + ' <span aria-hidden="true">→</span></a>' : "") +
      "</div></div>" +
      '<div class="hero-caption"><span>Home › ' + esc(currentLabel) + '</span><span>Across the distances that matter.</span></div>' +
      '<div class="hero-seal"><span>MADE FOR</span><strong>India</strong><span>BUILT ON TRUST</span></div>' +
      '<div class="hero-carousel-controls" aria-label="Hero image controls">' +
      '<button type="button" class="carousel-control" data-carousel-prev aria-label="Previous image" title="Previous image">←</button>' +
      '<span class="carousel-count" aria-live="polite">01 / ' + String(gallery.length).padStart(2, "0") + "</span>" +
      '<button type="button" class="carousel-control carousel-pause" data-carousel-toggle aria-label="Pause image carousel" aria-pressed="false" title="Pause image carousel">Ⅱ</button>' +
      '<button type="button" class="carousel-control" data-carousel-next aria-label="Next image" title="Next image">→</button>' +
      "</div>" +
      "</section>" +
      '<section class="metrics" aria-label="Highlights">' + metrics + "</section>";
  }

  function renderFooter() {
    const solutions = solutionLinks.map(function (item) {
      return '<li><a href="' + item[1] + '">' + esc(item[0]) + "</a></li>";
    }).join("");
    const company = companyLinks.map(function (item) {
      return '<li><a href="' + item[1] + '">' + esc(item[0]) + "</a></li>";
    }).join("");
    return '<footer class="site-footer"><div class="footer-main">' +
      '<div class="footer-about">' +
      '<a class="brand brand-footer" href="index.html"><span class="brand-mark">B<span>R</span></span>' +
      '<span class="brand-name">Bharat<span>Route</span><small>MOVE WITH MEANING</small></span></a>' +
      "<p>Freight, fulfilment and cold-chain logistics planned around the way Indian businesses actually operate: clear cut-offs, documented handovers and honest updates.</p>" +
      '<a href="' + brand.phoneHref + '">' + esc(brand.phone) + "</a>" +
      '<a href="' + brand.emailHref + '">' + esc(brand.email) + "</a>" +
      '<small class="business-note">Business identity, contact details and operating figures should be verified before publication.</small>' +
      "</div>" +
      '<div class="footer-col"><h2>Solutions</h2><ul>' + solutions + "</ul></div>" +
      '<div class="footer-col"><h2>Company</h2><ul>' + company + "</ul></div>" +
      '<div class="footer-col"><h2>Head office</h2><p>' + esc(brand.city) + ", India<br>Monday to Saturday, 9:00–19:00 IST" +
      "<br>Freight desk answers within two working hours on business days.</p>" +
      '<p class="footer-hours">Regional hubs in Mumbai, Pune, Ahmedabad, Chennai, Hyderabad, Kochi, Delhi NCR, Jaipur, Kolkata and Guwahati.</p></div>' +
      "</div>" +
      '<div class="footer-bottom"><span>© 2026 BharatRoute Logistics</span>' +
      '<a href="tracking.html">Track a shipment</a><a href="contact.html">Contact</a>' +
      "<span>Made for the miles ahead.</span></div></footer>";
  }

  /* ==================================================================
     8. Boot: route the current file, render, then wire up interactions
     ================================================================== */
  const rawName = window.location.pathname.split("/").filter(Boolean).pop() || "index.html";
  const fileName = rawName.indexOf(".") === -1 ? "index.html" : rawName;

  if (aliases[fileName]) {
    window.location.replace(aliases[fileName]);
    return;
  }

  const page = pages[fileName] || pages["index.html"];
  const app = document.createElement("div");
  app.id = "bharat-app";
  app.innerHTML = renderHeader(fileName) +
    '<main id="main-content">' + renderHero(page, fileName) + page.sections.map(renderSection).join("") + "</main>" +
    renderFooter();
  document.body.appendChild(app);

  document.addEventListener("DOMContentLoaded", function () {
    Array.prototype.slice.call(document.body.children).forEach(function (child) {
      if (child !== app) child.remove();
    });
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) window.requestAnimationFrame(function () { target.scrollIntoView(); });
    }
  }, { once: true });

  document.title = page.nav + " | BharatRoute Logistics";
  document.documentElement.lang = "en-IN";
  const description = document.querySelector('meta[name="description"]');
  if (description && page.description) description.setAttribute("content", page.description);

  const heroCarousel = app.querySelector(".hero-carousel");
  if (heroCarousel) {
    const slides = Array.prototype.slice.call(heroCarousel.querySelectorAll(".hero-slide"));
    const counter = app.querySelector(".carousel-count");
    const toggle = app.querySelector("[data-carousel-toggle]");
    let activeSlide = 0;
    let paused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer;
    const showSlide = function (nextIndex) {
      activeSlide = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, index) { slide.classList.toggle("is-active", index === activeSlide); });
      counter.textContent = String(activeSlide + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
    };
    const stopTimer = function () { window.clearInterval(timer); timer = null; };
    const startTimer = function () {
      stopTimer();
      if (!paused && !document.hidden) timer = window.setInterval(function () { showSlide(activeSlide + 1); }, 6000);
    };
    app.querySelector("[data-carousel-prev]").addEventListener("click", function () { showSlide(activeSlide - 1); startTimer(); });
    app.querySelector("[data-carousel-next]").addEventListener("click", function () { showSlide(activeSlide + 1); startTimer(); });
    toggle.addEventListener("click", function () {
      paused = !paused;
      toggle.setAttribute("aria-pressed", String(paused));
      toggle.setAttribute("aria-label", paused ? "Play image carousel" : "Pause image carousel");
      toggle.setAttribute("title", paused ? "Play image carousel" : "Pause image carousel");
      toggle.textContent = paused ? "▶" : "Ⅱ";
      startTimer();
    });
    app.querySelector(".hero").addEventListener("mouseenter", stopTimer);
    app.querySelector(".hero").addEventListener("mouseleave", startTimer);
    app.querySelector(".hero").addEventListener("focusin", stopTimer);
    app.querySelector(".hero").addEventListener("focusout", startTimer);
    document.addEventListener("visibilitychange", startTimer);
    startTimer();
  }

  const menuToggle = app.querySelector(".menu-toggle");
  const primaryNav = app.querySelector(".primary-nav");
  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", function () {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      primaryNav.classList.toggle("is-open", !expanded);
    });
    Array.prototype.forEach.call(primaryNav.querySelectorAll("a"), function (link) {
      link.addEventListener("click", function () {
        menuToggle.setAttribute("aria-expanded", "false");
        primaryNav.classList.remove("is-open");
      });
    });
  }

  const trackingForm = app.querySelector("#tracking-form");
  if (trackingForm) trackingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const result = app.querySelector("#tracking-result");
    const reference = String(new FormData(trackingForm).get("reference") || "").trim().toUpperCase();
    const journey = sampleJourneys[reference];
    if (journey) {
      result.innerHTML = "<strong>" + esc(journey.headline) + "</strong><span>" + esc(journey.summary) + "</span>" +
        '<ul class="milestones">' + journey.steps.map(function (step, index) {
          const state = index < journey.current ? "is-done" : index === journey.current ? "is-current" : "";
          return '<li class="' + state + '"><span class="milestone-time">' + esc(step[1]) + "</span>" +
            '<p class="milestone-title">' + esc(step[0]) + "</p>" +
            '<p class="milestone-copy">' + esc(step[2]) + "</p></li>";
        }).join("") + "</ul>" +
        "<small>Demo status for " + esc(reference) + " · sample records, not connected to a live carrier system.</small>";
    } else {
      result.innerHTML = "<strong>No sample shipment found</strong>" +
        "<span>Check the reference and try one of the sample numbers: BR-IND-24816, BR-IND-73104 or BR-IND-90572.</span>";
    }
    result.classList.add("is-visible");
  });

  const contactForm = app.querySelector("#contact-form");
  if (contactForm) contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = new FormData(contactForm);
    const result = app.querySelector("#contact-result");
    const fields = [
      ["Name", data.get("name")], ["Company", data.get("company")], ["Email", data.get("email")],
      ["Phone", data.get("phone")], ["Service", data.get("service")], ["Origin", data.get("origin")],
      ["Destination", data.get("destination")], ["Cargo details", data.get("cargo")]
    ];
    const body = fields.map(function (field) { return field[0] + ": " + (field[1] || "Not provided"); }).join("\n");
    const subject = "Freight quote request: " + data.get("origin") + " to " + data.get("destination");
    const mailto = "mailto:" + brand.emailHref.slice(7) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    result.innerHTML = "<strong>Your quote request is ready.</strong>" +
      "<span>" + esc(data.get("service")) + " · " + esc(data.get("origin")) + " → " + esc(data.get("destination")) + "</span>" +
      '<a class="button button-dark" href="' + esc(mailto) + '">Open email to send quote request <span aria-hidden="true">↗</span></a>' +
      "<small>Your email application will open with the details filled in. Review the message and press Send to submit it.</small>";
    result.classList.add("is-visible");
  });

  const signupForm = app.querySelector("#signup-form");
  if (signupForm) signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const result = app.querySelector("#signup-result");
    const email = new FormData(signupForm).get("email");
    const mailto = "mailto:" + brand.emailHref.slice(7) + "?subject=" + encodeURIComponent("Request for BharatRoute journal updates") + "&body=" + encodeURIComponent("Please add this email address to the monthly logistics journal updates: " + email);
    result.innerHTML = "<strong>Your update request is ready.</strong><span>" +
      esc(email) + " will be included in the email draft.</span>" +
      '<a class="button button-dark" href="' + esc(mailto) + '">Open email to send request <span aria-hidden="true">↗</span></a>' +
      "<small>Review the message and send it from your email application to complete the request.</small>";
    result.classList.add("is-visible");
  });
})();
