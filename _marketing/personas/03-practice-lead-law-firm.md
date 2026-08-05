# 03 — Morgan Vaziri, Practice Group Leader, mid-size law firm

**Rank: 3 (high-value buyer, highest scrutiny, longest cycle).** The hardest sale in this
folder and the most defensible one. If our story survives Morgan's review it survives
anyone's. Legal is also the vertical where getting a claim wrong is most expensive for us,
so hold this file to the strictest reading of the status legend.

> **Caution for anyone writing from this file:** nothing here is legal advice, and we must
> never tell a firm that ParleHub makes them compliant with any professional-responsibility
> rule, outside counsel guideline, or bar opinion. We answer specific technical questions
> about where data goes and what is retained. The compliance conclusion is theirs.

## Snapshot

| | |
| --- | --- |
| Role | Partner, Practice Group Leader (corporate / commercial litigation) |
| Firm | 45 lawyers plus paralegals and staff, single jurisdiction with one satellite office |
| Scale | Several hundred open matters, billed hourly with a growing share of fixed and capped fees |
| Reports to | The management committee |
| Controls | Practice-group budget and, more importantly, a veto. Morgan does not need to approve the purchase to kill it. |
| Buys | After the general counsel, the malpractice insurer, and the firm's IT lead have all been satisfied |

## Their world

Morgan runs a practice group of twelve, supervises six associates and four paralegals, and
signs work that goes to clients and to courts. The week is matter management, a management
committee meeting about realisation, and reviewing associate work at 9pm.

Three pressures are converging. Clients' outside counsel guidelines have started addressing
AI directly, some requiring disclosure of use, some restricting what may be put into a
third-party system, some refusing to pay full rate for work an AI assisted with. The firm's
own associates are already using consumer AI accounts, quietly, because the alternative is
staying until midnight. And the profession has watched enough public incidents involving
fabricated citations that Morgan's default position is a hard no.

Morgan's actual position is more interesting than the default: a hard no is not holding,
because the associates are using it anyway. Morgan would rather govern it than pretend.

## Goals

- "Supervise work I can defend if it is challenged."
- "Comply with our clients' outside counsel guidelines without reading each one twice."
- "Preserve privilege and confidentiality absolutely. There is no acceptable failure rate."
- "Stop losing associates to burnout on document-heavy matters."
- "Keep realisation up as more clients push to fixed fees."

## Pains

**1. Outside counsel guidelines now regulate AI, and the firm cannot answer them.**
Client OCGs increasingly specify disclosure of AI use, restrict processing by third parties,
and address whether AI-assisted time is billable. Morgan has no way to describe the firm's
actual practice because the actual practice is uncontrolled.
> **Cost:** On the firm's largest institutional clients, the choice is between declining to
> use AI at all and being unable to certify compliance. Declining is not free: those same
> clients are simultaneously pressing for lower fees and faster turnaround, which is a demand
> for exactly the efficiency the firm is refusing to adopt.

**2. Confidentiality and privilege exposure through consumer accounts.**
Associates paste matter documents into personal AI accounts. Morgan suspects it and cannot
measure it.
> **Cost:** Potential waiver arguments, a confidentiality problem that must be disclosed if
> discovered, and a question on the malpractice renewal that the firm cannot answer cleanly.
> The cost is not the probability times the impact; it is that the firm has no way to bound
> either number.

**3. Derivation cannot be reconstructed, so the work cannot be supervised.**
The associate produces a memo. Morgan cannot see which documents the AI actually read,
whether the authority is real, or what the associate accepted without checking.
> **Cost:** Morgan re-does the verification personally, which erases the efficiency gain
> entirely and moves the work from a $300 hour to an $800 one. On contested work, the
> partner-level answer is often to redo it from scratch, so the matter pays for the analysis
> twice.

**4. AI cost has no matter number.**
Every other cost in the firm attaches to a matter. Court fees, experts, travel, research
database time. AI does not.
> **Cost:** It cannot be a recoverable disbursement, cannot be priced into a fixed fee, and
> cannot be evaluated for whether it improved matter economics. As the fixed-fee share of
> the book grows, an unpriceable input becomes a margin problem rather than an accounting
> inconvenience.

**5. Matter confidentiality between teams inside the firm.**
Some matters must be walled from other lawyers in the same firm. A shared AI workspace that
does not respect that boundary is worse than no AI workspace.
> **Cost:** A single leak across a wall is a disqualification event on the matter and a
> potential claim. This pain is a gate: fail it and nothing else in the pitch matters.

## How ParleHub answers it

**Pain 1 — outside counsel guidelines.** We do not answer the guideline; we answer the
questions inside it. Where does the data go: project files can live in the firm's own
SharePoint site under least-privilege, per-site `Sites.Selected` Graph access **[LIVE]**, so
matter documents never leave the firm's tenant, and deletes go to SharePoint's own recycle
bin. Under whose terms does the model run: bring-your-own-key **[LIVE]** means the call runs
on the firm's own agreement with Anthropic, OpenAI, Google Gemini, or Azure OpenAI, with
keys held in Azure Key Vault and never exposed, rather than on an associate's consumer
account terms. Who has access: Microsoft Entra ID SSO **[LIVE]**, tenant-pinned, with
org-enforced SSO-only login.

**Pain 2 — confidentiality.** The same combination, plus four-level RBAC **[LIVE]** and an
audit log enforced append-only by database triggers **[LIVE]**, so sensitive actions are
recorded in a way a compromised application credential cannot rewrite.

**Pain 3 — supervision.** This is the strongest fit and needs the most careful language. The
associate's work happens in a shared project thread that Morgan can open and read
**[LIVE]**: the questions asked, the replies, which model produced each one, and the
branches taken when the associate edited and resent. The agent's file tooling **[LIVE]**
operates on the actual matter documents through real tool calls, reading, searching, and
outlining them, so the analysis is grounded in the files in the project rather than in the
model's recollection. Edits are exact find-and-replace and diffs **[LIVE]**, not silent
rewrites, so a reviewer can see what changed.
> *Honest limit, and we must state it:* this makes the work **reviewable**, which is a
> different claim from **verified**. We do not check that a cited authority exists. Do not
> let this section drift into implying we prevent fabricated citations. What we prevent is
> the situation where there is nothing to review.

**Pain 4 — matter economics.** A project maps to a matter. Project-scoped budgets with
pre-flight enforcement **[LIVE]** cap AI spend on the matter, with an 80% warning and a
one-click increase request routed to an admin. Usage and spend analytics **[LIVE]** break
consumption down by project, person, provider, and model, with CSV export, which is the raw
material for putting AI cost against a matter number.

**Pain 5 — walls between matters.** Restricted project visibility **[LIVE]**, Enterprise
tier, combined with four-level RBAC. A project is visible only to its members.
> *Honest limit:* this is access control, not a conflicts system. It enforces a wall you
> define; it does not detect that a wall is needed.

## Unmet needs

- **Document management system integration.** This firm's documents live in iManage or
  NetDocuments, not in SharePoint. Our storage options are SharePoint, Google Shared Drives,
  and managed Azure Blob. For a large share of law firms this is the single biggest blocker
  in the file, because "put the matter documents somewhere else" is not an option. *Confirmed
  gap. Rank this highest of any legal-vertical need.*
- **A conflicts and ethical-wall concept.** Restricted projects approximate a wall. Morgan
  wants a wall that is declared once and enforced everywhere, and ideally checked against the
  firm's conflicts database. *Confirmed gap.*
- **Legal hold and retention policy.** Matter records have retention schedules and are
  subject to hold. Nothing in the product addresses per-project retention or hold. *Confirmed
  gap.*
- **A disclosure artefact.** When an OCG requires disclosure of AI use on a matter, Morgan
  wants to generate that, not write it. The audit log is a database guarantee with no
  self-service export. *Confirmed gap.*
- **Citation and authority verification.** Wanted, not offered, and we should be careful not
  to let anyone believe otherwise. *Confirmed gap.*
- **SAML and Okta.** *Confirmed gap.*
- **A SOC 2 report for ParleHub itself.** Morgan's IT lead will ask in the first meeting.
  *Status unknown to this folder. Confirm with the site owner; this gates the whole segment,
  not just legal.*

## Objections

**"Our outside counsel guidelines prohibit AI."**
Usually they restrict where client data may be processed and require disclosure, rather than
prohibiting outright. Ask to read the actual clause. The two questions it almost always
turns on, where the data resides and whose terms the processing runs under, are the two we
answer directly.

**"We already bought a legal AI product."**
Different job, and we should say so plainly. Those are research and drafting tools. We do
not do legal research and should never imply we do. We are the governed workspace: the
shared matter thread, the spend attributed to the matter number, the identity and access
controls, and the storage that stays in your tenant. Several firms will run both.

**"An associate will still put something in the wrong project."**
True, and no product fixes that. What changes is that the action is recorded in an
append-only log and the project boundary is enforced by role rather than by memory.

**"What happens to our data if we leave?"**
If files are in your own SharePoint, they are already yours and they never moved.

## Testimonial *(simulated; figures illustrative)*

> "My position was a hard no, and it was not holding. The associates were using it anyway on
> their own accounts, which was the worst version of every risk I was trying to avoid. What
> changed my mind was being able to open the thread and read how an associate got to a
> conclusion, against documents that never left our own SharePoint. I still verify the
> authority myself. Now there is something to verify instead of a paragraph that appeared."

## Buying signals

- A client sends revised outside counsel guidelines that mention AI.
- The malpractice insurer's renewal questionnaire adds an AI section.
- An associate is discovered using a consumer AI account on a client matter.
- The firm is moving to Microsoft 365 and consolidating on Entra ID.
- A public incident in the profession prompts a management committee agenda item.
- The firm is taking on more fixed-fee work and is looking at matter-level cost inputs.
