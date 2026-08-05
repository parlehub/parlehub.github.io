# 04 — Jess Alderman, Partner, accounting and advisory firm

**Rank: 4 (high-value buyer, strong structural fit).** Accounting firms already run the exact
mental model we sell: engagement codes, documentation standards, cost recovery, and a
seasonal capacity crisis that only leverage solves. The fit is closer than legal and the
sales cycle is shorter.

## Snapshot

| | |
| --- | --- |
| Role | Partner, Advisory and Client Accounting Services |
| Firm | 120 people. Audit, tax, and a growing advisory practice |
| Scale | Hundreds of engagements a year, sharply seasonal |
| Reports to | The managing partner and the partner group |
| Controls | Practice budget and a real vote on firm-wide tooling |
| Buys | On a documented business case, with the firm's own risk committee reviewing it |

## Their world

Jess runs the advisory practice, which is the growth engine while compliance work
commoditises. From January to April the whole firm is at capacity and headcount is fixed;
the firm turns away work every spring and rehires every summer.

Jess is more open to AI than the audit partners, and constrained by the same firm-wide risk
posture. The firm issues SOC reports to its own clients and undergoes peer review, so it is
held to the standard it sells. Whatever the firm adopts has to survive being asked about by
someone who reviews controls for a living.

The staff have not waited. Seniors are already using AI to summarise client policies and
tidy up variance analysis, on personal accounts, with client general ledger extracts.

## Goals

- "Grow advisory revenue without hiring proportionally into a tight labour market."
- "Get through busy season without losing people to burnout."
- "Document everything to a standard that survives review."
- "Protect client data absolutely. We hold general ledgers, payroll, and personal data."
- "Price advisory work on value, which means knowing my input costs."

## Pains

**1. Work that cannot be documented cannot be used.**
The firm's standard is that if it is not in the workpapers, it did not happen. AI-assisted
analysis that lives in a staff member's private chat leaves no record of procedures
performed.
> **Cost:** The practice areas with the most repetitive, mechanical analysis, exactly the
> work AI is best at, are the ones where undocumented assistance is unusable. The firm
> either forgoes the efficiency entirely or does the work twice: once with AI to get the
> answer, once by hand to be able to document it. Both outcomes waste the tool.

**2. Client data sensitivity is absolute and the current handling is unknown.**
General ledger extracts, payroll registers, personally identifiable information, and for some
clients health-adjacent data are going into consumer AI accounts.
> **Cost:** Under several client engagement letters this is a reportable event. Under some
> state law it may be a notifiable disclosure. The firm's own SOC report describes controls
> it is not actually enforcing, which is the specific failure a peer reviewer is trained to
> find.

**3. The firm is held to the standard it sells.**
Jess's firm audits other companies' controls and issues opinions on them. An uncontrolled
internal AI practice is not just a risk; it is embarrassing in a way that is commercially
material.
> **Cost:** A finding in peer review, an awkward paragraph in the firm's own SOC report, and
> a credibility problem with exactly the clients who buy the most advisory work.

**4. AI cost has no engagement code.**
The firm allocates everything to engagements. It is the core discipline of the business. AI
is the one input with nowhere to land.
> **Cost:** Advisory work is moving to fixed and value-based fees, which means the firm must
> know its input costs to price. An unallocatable input either gets absorbed into realisation
> quietly or gets padded for defensively. The opportunity cost is the bigger number: the firm
> cannot identify which engagement types AI makes profitable, so it cannot lean into them.

**5. Busy season is a fixed-capacity problem with a variable-demand curve.**
Three months of the year the firm cannot take more work at any price.
> **Cost:** Declined engagements, overtime, and turnover among seniors who leave in May. This
> is the pain that is actually an opportunity: leverage is the only lever that does not
> require hiring, and Jess knows it.

## How ParleHub answers it

**Pain 1 — documentation.** Work happens in a shared project thread that is retained,
searchable by keyword and semantic search, and readable by the reviewer **[LIVE]**. The
agent's operations on files are real tool calls against the engagement's own documents
**[LIVE]**, and edits are exact find-and-replace and diffs rather than silent rewrites, so
what changed is visible. Sensitive actions are captured in an audit log enforced append-only
at the database level by SQL triggers **[LIVE]**, which is the property a controls reviewer
actually cares about: not that a log exists, but that the application itself cannot rewrite
it.
> *Honest limit:* this is a retained and reviewable record. It is not workpaper documentation
> and we must never call it that. See Unmet needs.

**Pain 2 — client data.** Project files can live in the firm's own SharePoint site through
least-privilege, per-site `Sites.Selected` access **[LIVE]**, so client data never leaves the
tenant. Bring-your-own-key **[LIVE]** puts the model call under the firm's own provider
agreement, with keys in Azure Key Vault and never exposed. Microsoft Entra ID SSO **[LIVE]**
ties access to the firm's identity provider with enforced SSO-only login, so offboarding a
seasonal hire actually removes their access.
> Worth saying explicitly to this persona: the agent works with spreadsheets by filtering and
> aggregating them, with **no code execution** **[LIVE]**. For a firm that will not allow
> arbitrary code near a client general ledger, that constraint is a feature.

**Pain 3 — the firm's own standard.** Four-level RBAC, restricted project visibility on
Enterprise, enforced SSO, tenant-resident storage, per-project spend caps, and the
append-only log. This is a describable control set, which is what Jess needs when the peer
reviewer asks.

**Pain 4 — engagement allocation.** Project-scoped budgets **[LIVE]** with pre-flight
enforcement, an 80% warning, and a self-serve increase request routed to an admin. Usage and
spend analytics **[LIVE]** grouped by project, person, provider, or model with CSV export.
Engagement code becomes project; AI cost lands where every other cost already lands.

**Pain 5 — busy season.** The agent file tooling is the direct answer: filter and aggregate
Excel and CSV, convert PDF, Word, and PowerPoint to searchable markdown, query structured
JSON and YAML, semantic search across everything **[LIVE]**. The multiplier on top is shared
threads: a seasonal senior joins an engagement and reads the existing work rather than
rebuilding it, so ramp time in the worst week of the year drops.

## Unmet needs

- **Workpaper-grade documentation output.** Jess's real ask is a record of procedures
  performed that can be attached to the engagement file. We retain a conversation; that is
  not the same artefact, and calling it one would be the most damaging overclaim we could
  make in this vertical. *Confirmed gap. Highest-value need in this file.*
- **Integration with the audit and tax platform.** Engagement files live in CCH, Thomson
  Reuters, or Caseware. Storage options are SharePoint, Google Shared Drives, and managed
  Azure Blob. *Confirmed gap.*
- **A SOC 2 report for ParleHub itself. We do not have one.** *Confirmed by the site owner
  2026-08-05.* Jess's firm issues SOC reports for a living and will ask in the first meeting.
  Of every gap in this folder, this is the one most likely to end a conversation with this
  persona specifically, because a firm that attests to other companies' controls cannot
  easily adopt a vendor that has no attestation of its own. **Consequence for sequencing:
  this vertical is the strongest structural fit and should not be the first one we chase.**
  See the SOC 2 section in `pain-point-map.md` for how to handle the question honestly.
- **Retention and records policy per engagement.** Firms have record retention schedules.
  Nothing in the product addresses per-project retention. *Confirmed gap.*
- **An export the risk committee can review.** No SIEM export, no admin-facing audit log
  screen. *Confirmed gap; do not imply either exists.*
- **Independence and conflicts awareness.** Restricted projects control access; they do not
  model independence rules. *Confirmed gap.*
- **SAML and Okta.** *Confirmed gap.*

## Objections

**"Show me your SOC 2."**
We do not have one. Say that first, in those words, and do not lead with the mitigation.
This persona detects hedging for a living and a soft answer costs more than the gap does.
Then make the one argument that is actually true and actually strong: with files in the
firm's own SharePoint and model calls under the firm's own provider keys, the client data a
SOC 2 on ParleHub would be attesting about largely does not sit with ParleHub. That reframes
the scope of the question rather than dodging it. Offer the control detail in writing, expect
to lose some of these until a report exists, and escalate the demand signal.

**"Our engagement letters restrict sub-processors."**
Which is the argument for BYOK and tenant-resident storage. The model runs under your
agreement with a provider your client has likely already accepted, and files can stay in your
own SharePoint. Ask to see the clause.

**"We are a Microsoft shop and we already have Copilot."**
Different job. Copilot does not attribute cost to an engagement code, does not give a team a
shared thread on a client, and does not cap spend per engagement. The test question: what did
AI cost you on your three largest advisory engagements last quarter?

**"Staff will not adopt it during busy season."**
Correct, and do not try. Land it in advisory in the autumn, prove it on two engagements, and
let busy season be the payoff rather than the pilot.

## Testimonial *(simulated; figures illustrative)*

> "We hold general ledgers and payroll data, so seniors running that through personal AI
> accounts was a control failure in a firm that issues SOC reports for a living. Now the
> files stay in our own SharePoint and the work sits in a thread the reviewing manager can
> actually read. The part I did not expect: AI cost now carries an engagement code, so I can
> see which advisory work it makes profitable and price the next one properly."

## Buying signals

- Peer review or a SOC readiness exercise is scheduled in the next two quarters.
- The firm declined work last busy season for lack of capacity.
- Advisory is shifting from hourly to fixed or value-based fees.
- A senior was found using a consumer AI account with client financial data.
- The firm is consolidating on Microsoft 365 with SharePoint already in use.
- A client engagement letter arrives with new language about AI or sub-processors.
