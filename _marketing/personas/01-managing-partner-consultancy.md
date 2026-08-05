# 01 — Alex Renner, Managing Partner, boutique strategy consultancy

**Rank: 1 (primary economic buyer).** Signs the contract, sets the mandate, and is the only
person who can make a firm-wide tool stick. Everything else in this folder is either the
person who convinces Alex or the person Alex has to satisfy.

## Snapshot

| | |
| --- | --- |
| Role | Managing Partner |
| Firm | Independent strategy consultancy, 70 people, 8 partners |
| Scale | Roughly $22M revenue, 30 to 40 live client engagements at any time |
| Reports to | The partnership |
| Controls | Full budget authority. Signs the MSA. Can mandate a tool, and knows that mandating one the partners hate is how you burn credibility. |
| Buys | Reluctantly, slowly, and then all at once when a client forces the issue |

## Their world

Alex still sells and still runs two engagements, on top of running the firm. The week is
pipeline review, a partners' meeting where somebody raises utilisation again, and a
procurement call for an account that would be the firm's largest.

Two things happened recently. Finance flagged that fourteen people are expensing personal AI
subscriptions, which is not a money problem at $20 a head; it is the realisation that the
firm has no idea what client material has been pasted into those accounts. And the last two
enterprise RFPs both contained a scored section asking how the firm governs its use of AI.
Alex wrote something vague and lost points on one of them.

Alex is not anti-AI. Alex has watched one senior consultant turn around a market scan in a
day that used to take a week, and wants that to be true of the whole firm rather than of one
person.

## Goals

- "Grow revenue per consultant without hiring proportionally."
- "Protect realisation. If we write off hours, that is margin we already spent."
- "Get through procurement at bigger accounts without a six-week security detour."
- "Never be the firm that ends up in a client's incident report."
- "Get the partners aligned on one way of working, voluntarily."

## Pains

**1. Shadow AI is already in the building, and nobody can describe it.**
Consultants are pasting client strategy documents, board materials, and draft findings into
personal accounts. Alex cannot say which clients, which documents, or under whose terms.
> **Cost:** The client security questionnaire cannot be answered honestly. Several client
> MSAs already restrict processing by third parties without notice, so the firm is arguably
> in breach on accounts it does not want to lose. The exposure is unbounded because it is
> unmeasured, and the first time it is measured will be during an incident.

**2. AI spend is unallocated overhead.**
Whatever the firm spends on AI lands in G&A. It cannot be attributed to the engagement that
consumed it, priced into a fixed fee, or passed through as a disbursement.
> **Cost:** Every dollar of AI dilutes firm margin instead of being an input to a specific
> piece of work. Alex genuinely cannot answer whether AI is profitable, because there is no
> denominator. The opportunity cost is larger than the spend: engagements that could carry
> AI cost and still clear margin are not being priced that way, and the firm is leaving
> pricing power on the table.

**3. The AI governance section of an RFP is unanswerable.**
Bigger clients now score it. The honest answer today is "individual consultants use their
own tools", which is a losing answer.
> **Cost:** Points lost on scored bids, and on some accounts a hard disqualification. This
> is not a future risk; it already cost one deal. As procurement standardises, this becomes
> table stakes for the segment Alex is trying to move the firm into.

**4. Individual leverage does not compound into firm leverage.**
The consultant who is excellent with AI is excellent alone. Their method lives in a private
chat history that leaves when they leave.
> **Cost:** The firm paid for a capability it does not own. New joiners re-derive the same
> approaches from scratch, and ramp time is unbillable. The most expensive version of this
> is two consultants on the same account asking the same question a day apart and getting
> two different answers, one of which goes to the client.

**5. Partners disagree about whether AI output is safe to put in front of a client.**
Some partners will not allow it. Others already have. There is no shared standard because
there is nothing shared to look at.
> **Cost:** Adoption stalls in the cautious half of the firm and runs unchecked in the other
> half, which is the worst of both. Quality becomes partner-dependent, and quality that is
> partner-dependent is a brand risk.

## How ParleHub answers it

**Pain 1 — shadow AI.** The answer is a combination, not one switch. Microsoft Entra ID SSO
with domain-based auto-provisioning and org-enforced SSO-only login **[LIVE]** means access
is tied to the firm's identity provider, so offboarding actually works and access review is
possible. Bring-your-own-key **[LIVE]** means model calls run under the firm's own provider
agreement and terms rather than a consultant's personal consumer account. Project files can
live in the firm's own SharePoint site via least-privilege `Sites.Selected` access
**[LIVE]**, so client material never leaves the tenant. Four-level RBAC **[LIVE]** decides
who sees which engagement.

**Pain 2 — unallocated spend.** Project-scoped budgets **[LIVE]** put a cap on the
engagement rather than on the person, which matches how the firm already thinks. Usage and
spend analytics **[LIVE]** break the same ledger down by project, person, provider, or
model, with CSV export. Together that is the AI timesheet: consumption attributed to the
engagement that caused it, in a format finance can reconcile.

**Pain 3 — the RFP answer.** The combination is the answer: a named identity provider,
files resident in the firm's own tenant, per-engagement spend caps with pre-flight
enforcement, role-based access, and an audit log enforced append-only at the database level
**[LIVE]** so that even a compromised application credential cannot rewrite history.
*Honest limit:* that audit guarantee is architectural, not a report Alex can attach to a
questionnaire. See Unmet needs.

**Pain 4 — leverage.** Shared project threads visible to every member in real time
**[LIVE]**, promoting a personal chat into a shared project **[LIVE]**, and keyword plus
semantic search across the whole project history **[LIVE]**. The strong consultant's method
becomes a firm asset that a new joiner can search rather than a habit that walks out.

**Pain 5 — partner disagreement.** Shared threads mean the derivation is visible before the
output reaches a client. A cautious partner can read how an answer was reached, against
which project files, using which model, rather than being handed a paragraph with no
history. Agent file tooling **[LIVE]** works against the actual project documents with
precise find-and-replace and diffs rather than silent rewrites, so a reviewer can see what
changed.

## Unmet needs

- **A governance report Alex can hand to a client's procurement team.** The audit log is a
  database-level guarantee with no self-service export and no SIEM integration. Alex wants a
  PDF or a CSV that says "here is our AI control posture", and today the answer is a
  conversation, not an artefact. *Confirmed gap.*
- **SAML and Okta.** Entra ID and Google Workspace are OIDC only. A meaningful share of
  mid-market professional services firms standardise on Okta, and for those firms this is a
  hard stop at the IT review stage. *Confirmed gap.*
- **A path from the CSV into the billing system.** Projects carry a project code field for
  expense reporting **[LIVE]**, so the export already speaks the firm's own coding language
  rather than joining on a project name. What is still missing is the delivery: Alex wants AI
  cost to *arrive* in the practice-management or PSA system next to the time entries, not to
  be re-keyed from a spreadsheet each month. *Verify whether any API or integration surface
  exists. The coding half of this need is answered; the transport half is not.*
- **A firm-level playbook or prompt library.** Alex's instinct for pain 4 is "write down the
  good approach once and make everyone use it". Shared threads preserve the history but do
  not make a reusable, curated template. *Verify.*
- **Not wanting to hold provider accounts at all.** Alex would rather buy AI from one vendor
  than open accounts with Anthropic, OpenAI, and Google. Managed prepaid credits are
  **[ROADMAP]** and must not be promised. Today the honest answer is that BYOK is the model,
  and for an Azure-native firm, Azure OpenAI is the one-vendor version of that.

## Objections

**"We already pay for Microsoft 365 Copilot."**
Different job. Copilot is per-seat personal assistance inside Office documents. It does not
attribute cost to an engagement, does not give the team a shared thread on a client matter,
and does not cap spend per project. Plenty of firms will run both. The question to ask back
is whether they can currently say what AI cost them on their largest account last month.

**"Our clients contractually restrict where their data goes."**
That is the argument for us rather than against. BYOK means the model call runs under the
firm's own agreement with a provider the client has likely already approved, and project
files can stay in the firm's own SharePoint tenant. Ask to see the actual clause; it usually
names sub-processors and storage location, both of which we answer directly.

**"Another per-seat cost when adoption is uncertain."**
Free tier for 3 seats and 3 projects to prove it on one engagement. BYOK means paying for
tokens consumed rather than a markup on seats that may go unused.

## Testimonial *(simulated; figures illustrative)*

> "We had fourteen people expensing personal AI accounts and no idea what those accounts had
> touched. Now every engagement carries its own budget and its own shared thread, and I can
> pull a CSV that shows exactly what AI cost us per client last month. Two engagements were
> spending more on models than they were clearing in margin. We would never have found that.
> It is a number we manage now instead of a number we never had."

## Buying signals

- An RFP or client questionnaire arrives with a scored AI governance section.
- Expense reports show personal AI subscriptions across more than a handful of people.
- A client sends an MSA amendment about AI, sub-processors, or data handling.
- The firm has just moved to Microsoft 365 E3 or E5, so Entra ID and SharePoint are already
  in place and the integration cost is close to zero.
- A partner meeting produces the sentence "we need a policy on this".
