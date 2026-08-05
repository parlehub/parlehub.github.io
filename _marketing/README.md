# ParleHub positioning workspace

Internal. Never published. See [CLAUDE.md](CLAUDE.md) in this folder for the rules that govern
everything in here, including the hard rule about simulated testimonials.

## What this is for

The website currently leads with features. A visitor who does not already know they have a
problem reads a list of switches and leaves. The pivot is to lead with the **pain**, then the
**cost of that pain**, then ParleHub as the answer, then the **turn** where that cost becomes
an opportunity.

Personas are the forcing function for that. Writing a specific person's week, then a
testimonial in their voice, makes vague benefit copy impossible to write.

## Files

| File | What it is |
| --- | --- |
| [CLAUDE.md](CLAUDE.md) | Rules: who we sell to, the four-beat argument structure, persona format, testimonial rules, voice |
| [pain-point-map.md](pain-point-map.md) | **Start here for site work.** All pains clustered into seven sellable themes, each mapped to capabilities and status, plus a proposed homepage structure |
| `personas/*.md` | Eight personas, numbered by priority |

## The market

**B2B services firms, 20 to 250 people.** Companies that deliver work for other companies, in
project teams, on the clock: strategy consulting, accounting and advisory, legal, marketing and
creative, recruiting, design, research.

They share four things that make ParleHub fit:

1. Work is organised as client engagements, several at once, each with a budget, a team, and a
   confidentiality boundary.
2. Cost is already allocated per client. Timesheets, matter codes, job numbers. AI spend is the
   one input with nowhere to land.
3. Output faces scrutiny. Somebody signs it and somebody may challenge it.
4. Context is the product, and today it is trapped in individual browser tabs.

**Not for:** coding teams (no coding harness, never position against Copilot or Cursor), solo
users (no allocation problem, no shared-context problem), or anyone buying a model rather than
a workspace.

## Persona ranking

Ranked on pain intensity, budget authority, how well what is **[LIVE]** today actually answers
them, and how blocking their unmet needs are.

| # | Persona | Role in the deal | Why this rank |
| --- | --- | --- | --- |
| [01](personas/01-managing-partner-consultancy.md) | Alex Renner, Managing Partner, consultancy | **Economic buyer** | Signs it, mandates it, and consulting is the cleanest fit for what ships today. Fewest blocking gaps of any buyer persona. |
| [02](personas/02-engagement-lead-multi-client.md) | Sam Okonjo, Engagement Manager | **Champion** | Feels every pain daily and brings us to Alex. Most site copy should be written to be recognised by Sam and forwarded upward. |
| [03](personas/03-practice-lead-law-firm.md) | Morgan Vaziri, Practice Group Leader, law firm | **Buyer with veto power** | Highest willingness to pay and the highest scrutiny. Held back by the DMS gap (iManage, NetDocuments) and the longest cycle. |
| [04](personas/04-advisory-partner-accounting.md) | Jess Alderman, Partner, accounting and advisory | **Buyer** | Structurally the closest fit of all: engagement codes, documentation culture, seasonal capacity crisis. **Blocked on SOC 2, which we do not have.** Highest fit, wrong time. |
| [05](personas/05-it-security-lead.md) | Robin Achebe, IT and Security Lead | **Gatekeeper** | Cannot buy, can stop anything. Every deal above passes through here. `security.html` should be judged against this file. |
| [06](personas/06-agency-coo.md) | Toni Marchetti, COO, creative agency | **Fast buyer** | Decides in weeks, often without a security review. Smaller contracts, and the best near-term source of real testimonials to replace the simulated ones. |
| [07](personas/07-finance-controller.md) | Dale Fontaine, Financial Controller | **Influencer** | Will not champion us unprompted, will build the business case that gets it approved. Owns the "AI timesheet" vocabulary. |
| [08](personas/08-recruiting-delivery-director.md) | Casey Lindqvist, Director of Delivery, recruitment | **Secondary** | Real pains, real fit on cost allocation. Ranked last because the ATS gap is one we do not fill, and because AI in hiring carries regulatory exposure we should stay deliberately clear of. |

### Where to spend effort first

The rank column above is **fit**. Sequencing is a different question, and the absence of a
SOC 2 report separates the two.

**01 and 02 together are the campaign.** They are the same firm seen from two altitudes: Sam
recognises the pain and forwards the page, Alex signs. Consulting has the fewest blocking
unmet needs, so what is [LIVE] today closes the deal without a roadmap promise, and
consultancies are more likely than accountants to accept a controls conversation in place of
an attestation.

**06 is the near-term second bet, ahead of its rank.** Agencies decide in weeks and frequently
buy without a formal security review, which is exactly the profile that matters while we have
no SOC 2. They are also the fastest route to replacing the simulated testimonials in this
folder with real ones, which compounds into every other segment.

**04 is the highest-fit vertical and the wrong one to chase right now.** Accounting firms
think in engagement codes and documentation standards, which is our whole argument in their
own vocabulary. They also issue SOC reports for a living and will ask for ours in the first
meeting. Build the content, keep the relationships warm, and expect the segment to open
properly when an attestation exists rather than burning first meetings against a gap no amount
of copy closes.

**05 is not a campaign, it is a page.** Robin never gets marketed to; Robin gets sent a link
during a review. `security.html` exists for this persona and should answer the objections in
that file before they are asked, including the three limits Robin will find anyway: no SIEM
export, no SAML, no SOC 2. Robin is the persona most likely to accept the honest answer,
because assessing controls rather than collecting certificates is the actual job.

**03 is worth writing for and slow to close.** Write the legal content because it sharpens
everything else and because the segment pays; do not expect it to convert until the DMS gap
closes.

## The gaps that keep coming up

Every persona's **Unmet needs** section is honest about what we do not have. These recur
across three or more personas, which makes them product signal rather than one buyer's wish
list:

0. **A SOC 2 report.** We do not have one (confirmed 2026-08-05). Recurs in 01, 03, 04, and
   05, and it is the only gap on this list that is a sales-sequencing constraint rather than a
   feature request. Handling guidance is in
   [pain-point-map.md](pain-point-map.md#handling-the-soc-2-question); the short version is
   never write "SOC 2 ready" anywhere, say no first, then make the scope argument.
1. **SAML and Okta.** Blocks at Robin's desk before anything else is evaluated. Highest
   frequency of hard disqualification among the feature gaps.
2. **A governance artefact.** SIEM export, an audit log a human can read, or a report to
   attach to a client questionnaire. Wanted by 01, 03, 04, and 05. The underlying capability
   is [LIVE]; what is missing is the way to show it to someone.
3. **Per-claim citation or provenance.** Wanted by 02, 03, and 04. The most commercially
   valuable gap in the folder, and the one where overclaiming would hurt us most.
4. **Retention, legal hold, and deletion policy.** Required by 03, 04, and 08. Regulated data
   in three of our best verticals.
5. **A join to the system of record.** Different name per vertical, same shape: a DMS for 03,
   the audit platform for 04, the ATS for 08, the PSA or billing system for 01 and 07.
6. **Project-level instructions or a brief.** Wanted by 02 and 06, top gap for the agency
   segment.

Open questions that need the site owner's answer before certain copy can ship are collected at
the end of [pain-point-map.md](pain-point-map.md).

## Next steps

- [x] ~~Confirm whether we have a SOC 2 report.~~ We do not, as of 2026-08-05. See the
      handling guidance in `pain-point-map.md` and the sequencing note above.
- [x] ~~Confirm whether projects carry a client or cost-centre code.~~ They carry a project
      code field for expense reporting **[LIVE]**. This materially strengthens theme B and
      should appear in the hero copy.
- [ ] Answer the eight remaining open questions at the end of `pain-point-map.md`. Question 1,
      whether the project code reaches the CSV export, is now the important one.
- [ ] Rewrite `index.html` against the proposed homepage structure in `pain-point-map.md`.
- [ ] Re-read `security.html` against persona 05 and add the two honest limits before Robin
      finds them.
- [ ] Replace the simulated testimonials with real ones as customers land. Start with agencies
      (06), who move fastest and are most willing to be quoted.
- [ ] Keep the Unmet needs sections current. They are the most valuable part of this folder
      precisely because they are the parts nobody wants to write.
