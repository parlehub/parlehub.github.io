# 08. Casey Lindqvist, Director of Delivery, recruitment firm

**Rank: 8 (secondary, evaluate before investing).** Real pains and a genuine fit on cost
allocation and shared context. Ranked last because the biggest workflow gap, the applicant
tracking system, is one we do not fill, and because AI in hiring carries regulatory exposure
we should be deliberate about rather than casual with.

> **Caution for anyone writing from this file.** Do not position ParleHub as a candidate
> screening, ranking, scoring, or shortlisting tool. Automated employment decision tools are
> regulated in several jurisdictions, including bias-audit and notice requirements in some US
> cities and high-risk classification under the EU AI Act. We have no bias auditing, no
> explainability tooling, and no compliance posture for this use. Position around research,
> drafting, market mapping, and coordination. If a prospect describes screening as their use
> case, say plainly that this is not what we are built for.

## Snapshot

| | |
| --- | --- |
| Role | Director of Delivery / Head of Operations |
| Firm | 60-person recruitment firm. Contingency and retained search across two or three sectors |
| Scale | 80 to 120 live roles at any time, across 30 or so client companies |
| Reports to | The managing director |
| Controls | Delivery process, tooling for consultants, and the margin per placement |
| Buys | Quickly, on a clear margin argument, with little security process |

## Their world

Casey runs delivery for a firm where margin per placement is the whole business. Consultants
work multiple client roles simultaneously, and the work is research-heavy: market mapping,
company research, role briefs, outreach sequences, interview preparation notes, client
updates.

Consultants adopted AI immediately and independently. Casey's concerns are three: candidate
personal data is going into tools nobody approved, output quality varies wildly by consultant,
and on contingency work where the firm is only paid on placement, per-role cost matters and
nobody is measuring it.

## Goals

- "Protect margin per placement. On contingency, cost per unfilled role is pure loss."
- "Get new consultants productive in weeks, not months."
- "Keep client-facing output consistent regardless of who wrote it."
- "Handle candidate data properly. It is personal data and it is regulated."
- "Take on more roles per consultant without quality dropping."

## Pains

**1. Candidate personal data is in unapproved tools.**
CVs, contact details, salary information, notes on people's current employment situations,
all pasted into consumer accounts.
> **Cost:** This is regulated personal data. Client contracts routinely include data
> processing terms the firm is now not meeting, and candidates have rights the firm cannot
> currently honour because it does not know where the data went. The exposure is a
> supervisory-authority problem as well as a client-contract problem.

**2. Cost per role is invisible on contingency work.**
The firm is paid only on placement. Roles that never fill still consume research effort and
now model spend.
> **Cost:** On a contingency book with a normal fill rate, most of the work produces no
> revenue. Every unmeasured cost on an unfilled role comes straight out of the margin on the
> ones that do fill. Casey cannot currently tell which clients or which role types are
> economically worth working.

**3. Output quality varies by consultant.**
The role brief a client receives depends on who wrote it and which tool they used.
> **Cost:** Weak briefs produce wrong submissions, and wrong submissions cost client
> credibility on a contingency relationship that is not exclusive. The competitor's shortlist
> arrives at the same time.

**4. Research is rebuilt for every search.**
A consultant maps a sector for one client, and three weeks later a colleague maps the same
sector for another, from scratch.
> **Cost:** Duplicated research hours that are never billed to anyone, on a sector map the
> firm already paid to produce once. This is the clearest pure-waste line in the file.

**5. New consultants take months to ramp.**
The knowledge is in people's heads and their private histories.
> **Cost:** Months of low productivity per hire, in an industry with high turnover, which
> means the firm is perpetually paying ramp cost.

## How ParleHub answers it

**Pain 1, candidate data.** Project files can stay in the firm's own SharePoint site under
least-privilege per-site access **[LIVE]**, or Google Shared Drives **[SHIPPED]**, so
candidate material never leaves the firm's tenant. Bring-your-own-key **[LIVE]** puts the
model call under the firm's own provider agreement rather than consumer terms. Entra ID SSO
**[LIVE]** with enforced SSO-only login and four-level RBAC **[LIVE]** control who reaches
which client's material.
> *Honest limit:* this addresses where the data lives and who can reach it. It does not
> provide retention scheduling or erasure workflows, which is what a data subject request
> actually requires. See Unmet needs.

**Pain 2, per-role economics.** A project per client, or per retained search, with
project-scoped budgets and pre-flight enforcement **[LIVE]**, plus usage and spend analytics
by project, person, provider, and model with CSV export **[LIVE]**. Casey gets cost per
client and per search against fee income, which is the number that decides which business is
worth taking.

**Pain 3 and 5, consistency and ramp.** Shared project threads visible to every member in
real time **[LIVE]**, with live presence. A new consultant reads how the firm's best
consultant actually works a search rather than being told about it. Keyword and semantic
search across every project conversation **[LIVE]**.

**Pain 4, duplicated research.** Semantic search across project history **[LIVE]** means
the sector map from three weeks ago is findable. Agent file tooling **[LIVE]** works against
the firm's own research documents directly: search, read, outline, convert PDF and Word to
searchable markdown, filter and aggregate spreadsheets.

## Unmet needs

- **Applicant tracking system integration.** The firm lives in Bullhorn, Vincere, or
  Greenhouse. Candidate records, notes, and activity are there, and our storage options are
  SharePoint, Google Shared Drives, and managed Azure Blob. Without an integration ParleHub
  is a second place to keep things, which in a high-velocity recruitment workflow is a real
  adoption tax. *Confirmed gap. This is why the persona ranks eighth rather than fourth.*
- **Retention scheduling and erasure workflows.** Candidate data carries retention limits and
  erasure rights. Nothing in the product addresses per-project retention or targeted
  deletion. *Confirmed gap, and material given the regulated data.*
- **Bias auditing and explainability.** Not offered, and per the caution above we should not
  be pulled toward the use case that would require it. *Confirmed gap, deliberately.*
- **High-volume or programmatic access.** Recruitment workflows are repetitive and
  consultants will ask to run the same operation across many records. *Verify what exists.*
- **A candidate-safe redaction step.** Casey would like personal identifiers stripped before
  material reaches a model. *Confirmed gap.*

## Objections

**"Our consultants will not add a step to their workflow."**
Correct, and this is the real risk with this segment. The wedge is the research and market
mapping work that already happens outside the ATS, not the candidate record itself. Do not
pitch this as an ATS replacement.

**"We already have AI in our ATS."**
Then use it for what it does. Ours is the shared research workspace with cost attributed per
client, which the ATS module does not do.

**"Can it screen candidates for us?"**
No, and say so directly. That is a regulated decision-making use, we have no bias auditing or
explainability, and we are not built for it.

## Testimonial *(simulated; figures illustrative)*

> "On contingency we only get paid when a role fills, so every hour on a role that dies comes
> out of the ones that land. I had no idea what any search actually cost us. Now each client
> is a project with its own budget and its own thread, and I can see which clients are worth
> working. The bigger surprise was research: a sector map one consultant built is findable by
> the next one instead of being rebuilt from nothing."

## Buying signals

- A client's data processing agreement adds AI or sub-processor terms.
- The firm is reviewing which contingency clients are worth keeping.
- Consultant turnover has spiked and ramp cost is on the agenda.
- A candidate or a supervisory authority raises a data question the firm cannot answer.
- The firm is investing in retained search, where per-search economics are tracked properly.
