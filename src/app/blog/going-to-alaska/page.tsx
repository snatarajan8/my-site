export default function GoingToAlaska() {
  return (
    <article className="max-w-2xl">
      <p
        className="text-accent"
        style={{
          fontFamily: "var(--font-ibm-plex-mono), monospace",
          fontSize: "10.5px",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Blog
      </p>
      <h1 className="mt-2 text-ink">Going to Alaska</h1>
      <p
        className="mt-1 text-ink-dim"
        style={{
          fontFamily: "var(--font-ibm-plex-mono), monospace",
          fontSize: "11px",
          letterSpacing: "0.04em",
        }}
      >
        March 3, 2026
      </p>

      <div className="mt-8 space-y-5 text-zinc-600 leading-relaxed">
        <p>
          Alaska runs on a simple premise: go big or go home. The state is twice the
          size of Texas, holds 17 of the 20 highest peaks in North America, and has
          more coastline than the rest of the US combined. The hard part isn&apos;t
          finding something to do — it&apos;s deciding what to cut.
        </p>
        <p>
          My goal was clear from the start: northern lights, real mountains, and
          wilderness so dense you stop thinking about anything else. No museums, no
          historic gold rush towns dressed up for tourists.
        </p>

        <h2 className="mt-10 mb-2">When to Go</h2>
        <p>
          The aurora and hiking seasons don&apos;t overlap cleanly. Summer means 20+
          hours of daylight — the sky never darkens enough for aurora. Winter means
          darkness and cold (Fairbanks regularly hits −40°F) with spectacular aurora
          but mountains buried under snow and most trails inaccessible.
        </p>
        <p>
          Late August to mid-September is the sweet spot. The midnight sun fades,
          darkness returns around 10–11pm, aurora season begins, and the trails are
          still wide open. Add fall colors — fireweed going deep crimson, birch
          turning gold — and wildlife at peak activity before hibernation. It&apos;s
          the best Alaska has to offer in a single window.
        </p>

        <div className="mt-10 border-l-2 border-site-border pl-5 space-y-10">

          {/* Day 1–2 */}
          <div>
            <p
              className="text-accent mb-1"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Days 1–2
            </p>
            <h2 className="mb-3">Anchorage</h2>
            <div className="space-y-4">
              <p>
                Anchorage is the gateway and worth a couple of days. Start with
                Flattop Mountain — 1,400 feet of gain over 3.4 miles from the Glen
                Alps trailhead. From the summit you get the Alaska Range in one
                direction and Cook Inlet in the other. It&apos;s the fastest way to
                feel the scale of the place.
              </p>
              <p>
                The Tony Knowles Coastal Trail runs 11 miles along the inlet. Moose
                are common here to the point of routine. A short drive south, the
                Turnagain Arm mudflats are one of the better spots to catch bore
                tides — walls of water running up the narrowing inlet at 6 mph,
                pushed by the 38-foot tidal swing. The Chugach Mountains rise
                directly above the road on the other side. It&apos;s one of the more
                dramatic drives anywhere.
              </p>
            </div>
          </div>

          {/* Day 3–4 */}
          <div>
            <p
              className="text-accent mb-1"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Days 3–4
            </p>
            <h2 className="mb-3">Denali National Park</h2>
            <div className="space-y-4">
              <p>
                Four and a half hours north through the Matanuska Valley into the
                interior. Stop in Talkeetna — the small town that serves as base for
                Denali expeditions — and book a flightseeing tour if the weather
                cooperates. Getting within a few miles of a 20,310-foot peak in a
                small plane is a different thing from looking at it from a parking
                lot.
              </p>
              <p>
                Inside the park, the road closes to private vehicles past mile 15.
                The rest of the 92-mile road requires a bus. Take the Tundra
                Wilderness Tour to mile 62 or 86. Denali is one of the best places
                on earth to watch grizzlies in open tundra — no trees, no cover,
                just bears moving through the landscape at a distance where you can
                actually observe them. Dall sheep on the cliffs, caribou crossing
                the road, wolves if you&apos;re lucky.
              </p>
              <p>
                Camp at Wonder Lake if possible. On a clear night, aurora over
                Denali&apos;s reflection in the lake is the photograph everyone tries
                to take. Late August gives you a real shot at it.
              </p>
            </div>
          </div>

          {/* Day 5–7 */}
          <div>
            <p
              className="text-accent mb-1"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Days 5–7
            </p>
            <h2 className="mb-3">Fairbanks & Aurora Country</h2>
            <div className="space-y-4">
              <p>
                Fairbanks sits at 64.8°N — well inside the auroral oval. Cleaner,
                drier air than the coast, flat terrain for big sky views, and enough
                infrastructure to make aurora-chasing manageable. This is the place
                for the lights.
              </p>
              <p>
                Chena Hot Springs is 60 miles out: natural geothermal pools open
                until 2am, surrounded by boreal forest. Sitting in 106°F water
                watching aurora ribbons move overhead resists description. Book the
                dedicated viewing tour for a guide who can explain what a KP 4 vs.
                KP 6 event actually looks like and when to set the alarm.
              </p>
              <p>
                For DIY hunting, the aurora forecast apps give you KP index and
                local cloud cover in real time. KP 3+ produces visible aurora in
                Fairbanks. KP 5+ fills the sky. When it&apos;s active, drive ten
                minutes toward the University of Alaska, find an open field, and
                look north. No special equipment needed on a strong night — your
                eyes are enough.
              </p>
              <p>
                Spend two nights. The aurora can be quiet one night and explosive
                the next. Give yourself the patience to catch it properly rather
                than checking a box on a single cloudy evening.
              </p>
            </div>
          </div>

          {/* Day 8–9 */}
          <div>
            <p
              className="text-accent mb-1"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Days 8–9
            </p>
            <h2 className="mb-3">Kenai Peninsula</h2>
            <div className="space-y-4">
              <p>
                Head south from Fairbanks back through Anchorage, then down to
                Seward. The Seward Highway follows Turnagain Arm with the Chugach
                Mountains rising directly overhead — there are stretches where the
                road is sandwiched between the inlet and a rock face. Stop at
                Portage Valley if the clouds are off the peaks.
              </p>
              <p>
                In Seward, the main event is a Kenai Fjords boat tour into the
                national park. Full-day tours reach the tidewater glaciers in
                Northwestern or Aialik Fjord — ice calving into the ocean, Steller
                sea lions hauled out on rocks, horned puffins bobbing in the swell,
                humpbacks and orcas depending on the timing. Pick a tour that goes
                to the tidewater glaciers rather than just the outer coast. The
                difference is significant.
              </p>
              <p>
                The Harding Icefield Trail starts at Exit Glacier: 8.2 miles
                roundtrip, 3,000 feet of gain, ending on one of the largest icefields
                in the US — a flat white expanse feeding 40 glaciers, stretching to
                the horizon. The weather turns fast and the trail earns every step.
                Worth it.
              </p>
            </div>
          </div>

          {/* Day 10 */}
          <div>
            <p
              className="text-accent mb-1"
              style={{
                fontFamily: "var(--font-ibm-plex-mono), monospace",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Day 10
            </p>
            <h2 className="mb-3">Fly Out</h2>
            <div className="space-y-4">
              <p>
                Back to Anchorage. On clear days, the flight south tracks over the
                Alaska Range. If you&apos;re on the right side of the plane heading
                south-southeast, you might get one more look at Denali. Take it.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-site-border space-y-3">
          <p
            className="text-accent"
            style={{
              fontFamily: "var(--font-ibm-plex-mono), monospace",
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            A few notes
          </p>
          <p>
            Layers matter more than any single piece of gear. Late August swings from
            60°F at sea level to 25°F at elevation and on cold nights waiting for
            aurora. Wool base layers, a puffy, a waterproof shell. Microspikes for
            the Harding Icefield.
          </p>
          <p>
            Book the Wonder Lake campsite and Kenai Fjords boat tours well in
            advance — both fill up months out. Chena Hot Springs reservations fill
            up in peak aurora season. Everything else can stay flexible.
          </p>
          <p>
            The aurora is not guaranteed. Neither is Denali being visible through the
            clouds. That&apos;s Alaska. The contingency is that everything else —
            the drive to Seward, the tundra at dusk, a grizzly at 200 yards — is
            worth the trip on its own.
          </p>
        </div>
      </div>
    </article>
  );
}
