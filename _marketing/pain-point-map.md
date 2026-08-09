# Pain point map

Every pain across all eight personas, clustered into the seven themes that actually sell,
each mapped to the capability that answers it and its status. **This is the bridge from the
personas to the website.** Site copy should be traceable to a row here. If you cannot find
the row, the claim is probably one we cannot make.

Structure of each theme, per `CLAUDE.md` in this folder:
**Pain → Cost → Our answer → The turn.**

---

## A. "We already use AI. We just cannot see any of it."

**Who feels it:** Alex (01), Morgan (03), Jess (04), Robin (05), Casey (08). Every buyer
persona, and it is usually the pain that starts the conversation.

**The pain.** Consultants, associates, seniors, and consultants are pasting client material
into personal accounts. Client strategy documents, matter files, general ledger extracts,
candidate CVs. The firm has no inventory of what went where, under whose terms.

**The cost.** The client security questionnaire is answered on a guess. Client MSAs and
engagement letters that restrict processing by third parties are arguably already breached,
on the accounts the firm least wants to lose. Blocking at the network edge just relocates it
to phones. The exposure is unbounded because it is unmeasured, and the first accurate
measurement will happen during an incident.

**Our answer** (a combination, not one feature):
| Capability | Status |
| --- | --- |
| Microsoft Entra ID SSO (OIDC), domain auto-provisioning, tenant-pinned, org-enforced SSO-only login | **[LIVE]** |
| Google Workspace SSO (OIDC) | **[LIVE]** |
| Project files in the org's own SharePoint site, least-privilege per-site `Sites.Selected` | **[LIVE]** |
| Project files in the org's own Google Shared Drive | **[LIVE]** |
| BYOK: model calls run under the firm's own provider agreement, keys in Azure Key Vault, never exposed | **[LIVE]** |
| Models we host: no provider key at all, charged by consumption, same budgets and ledger | **[LIVE]** |
| Four-level RBAC, restricted project visibility (Enterprise) | **[LIVE]** |

**The turn.** AI stops being an unmeasured liability and becomes a described control. The
questionnaire gets answered from facts. The efficiency the firm was refusing itself out of
caution becomes available on the accounts that demanded caution in the first place.

---

## B. "Every hour in this firm has a client code. AI spend does not."

**Who feels it:** All eight. This is the theme most specific to services firms and the one
nobody else is selling. **Lead with it.**

**The pain.** Timesheets, matter numbers, job codes, engagement codes. These firms allocate
everything. Provider invoices arrive as one number with nothing on them identifying a client.

**The cost.** AI lands in general overhead and gets spread by formula, so practices that
barely use it subsidise the ones that live on it, and every practice-level profitability
number is quietly wrong while partners make resourcing decisions on it. Recoverable
pass-through cost gets absorbed instead of recharged. As fixed-fee and value-based work grows,
an unpriceable input becomes a margin problem. The opportunity cost is the larger number: the
firm cannot identify which engagement types AI makes profitable, so it cannot lean into them
or price for them.

**Our answer:**
| Capability | Status |
| --- | --- |
| Budgets scoped to **projects**, not just people. Project maps to engagement, matter, account, or search | **[LIVE]** |
| **A project code field on each project, for expense reporting** | **[LIVE]** |
| Usage and spend analytics: filter and group by project, person, provider, or model, any time range | **[LIVE]** |
| CSV export for finance and billing reconciliation | **[LIVE]** |
| Backed by the canonical token ledger, the same source budgets enforce against | **[LIVE]** |

**The turn.** The AI timesheet. Consumption lands where every other cost already lands, under
the firm's own expense code, so AI becomes a priceable input rather than overhead. You can
recharge it, price it into a fixed fee, or cancel the engagement type where it does not pay.

> **This is the sharpest differentiated claim we have.** Per-project rather than per-person
> budgeting is the thing that maps onto how these firms already run. Do not bury it in a
> feature grid.
>
> **The project code field is the detail that makes this claim land, and it was missing from
> the site entirely.** Confirmed by the site owner 2026-08-05, **and the code appears in the
> CSV export**, which is what the field exists for. Every competitor can say "see your usage".
> Almost none can say the cost carries *your* expense code, all the way through to an export
> that reconciles into the system the firm actually bills from. It is a small field doing very
> large work in this argument.
>
> **The claim is therefore complete end to end and needs no hedging:** project budget, project
> code, ledger, export, general ledger. Say it in the hero, not in a bullet list. This is the
> one place on the site where we can make a claim a services firm has not heard from any other
> AI vendor.

---

## C. "Metered spend with no ceiling is the opposite of how we plan."

**Who feels it:** Dale (07) hardest, then Robin (05) and Sam (02).

**The pain.** Usage-based cost with no cap. One enthusiastic user, one runaway agent loop,
one leaked key, and the number is discovered on an invoice.

**The cost.** Variance at close that finance explains rather than predicts. The defensive
responses are over-budgeting, which wastes money, or banning, which costs the capability.
Sam's version is worse: uncertainty means under-using AI on the fixed-fee engagement where it
would have mattered most, which is a pure opportunity cost nobody ever books.

**Our answer:**
| Capability | Status |
| --- | --- |
| Pre-flight enforcement: the send is **hard-blocked** before it exceeds the project budget | **[LIVE]** |
| 80% warning state ahead of the block | **[LIVE]** |
| Personal per-user and org-wide caps stacked as backstops | **[LIVE]** |
| Self-serve budget increase request routed to admins for approve or reject | **[LIVE]** |
| Denial-of-wallet protection: rate limits and bounded agent loops | **[LIVE]** |

**The turn.** The maximum becomes a number you set rather than a number you discover, and the
cap does not stop the work because there is a path through it.

> **Language discipline.** Hard block, not throttling. No automatic downgrade to a cheaper
> model. No dynamic routing. Past copy got this wrong; do not repeat it.

---

## D. "The best work anyone did last week is in a closed browser tab."

**Who feels it:** Sam (02) daily, Alex (01) structurally, Toni (06), Casey (08).

**The pain.** Private chat histories. Context rebuilt from scratch at every switch and by
every person. Two people on the same engagement asking the same question a day apart, against
different document sets, getting different answers. When someone rolls off, their working
context evaporates.

**The cost.** Thirty to forty minutes a day of re-setup per person, invisible because nobody
codes it to a task; it just lowers realisation. Duplicated hours billable to nobody. Ramp
time on every staffing change, unbillable, in businesses with constant rotation. Occasionally
the expensive version: contradictory outputs reaching a client, where the rework is free and
the credibility is not recoverable. And the strategic cost, which is that the firm bought
individual productivity rather than firm capability, and that capability leaves when the
person does.

**Our answer:**
| Capability | Status |
| --- | --- |
| Shared project threads visible to every member in real time | **[LIVE]** |
| Live presence: who is viewing, typing, or waiting on a response | **[LIVE]** |
| Keyword and semantic search across every project conversation | **[LIVE]** |
| Promote a personal chat into a shared project | **[LIVE]** |
| Branch by edit-and-resend without losing the original | **[LIVE]** |
| Project files with real agent tool calls, so context belongs to the project, not to a chat | **[LIVE]** |

**The turn.** Prompting stops being a private skill and becomes a firm asset that a new joiner
can search. The context-reload tax goes away, because the project already knows its own
documents.

---

## E. "A partner asks where the number came from."

**Who feels it:** Morgan (03) and Jess (04) most acutely, Sam (02) weekly, Toni (06) when a
client asks.

**The pain.** Output must be supervised, documented, or defended. Today the derivation lives
in a private history, against documents that may not be current, using a model nobody
recorded.

**The cost.** The reviewer re-derives it personally, which erases the efficiency and moves
the work from a junior rate to a senior one. On regulated or contested work the answer is
often to redo it by hand, so the engagement pays twice: once fast, once defensibly. In
accounting, work that cannot be documented cannot be used at all, so the practice areas that
would benefit most are the ones locked out. And the reputational tail risk that has already
made partners ban AI outright, which pushes usage into personal accounts, which is strictly
worse.

**Our answer:**
| Capability | Status |
| --- | --- |
| The whole exchange lives in the shared thread: question, reply, and which model produced it | **[LIVE]** |
| Agent works via real tool calls against the project's own files, not from recollection | **[LIVE]** |
| Precise edits: exact find-and-replace, multi-edit, diffs. Not silent rewrites | **[LIVE]** |
| Branching preserves the path taken rather than overwriting it | **[LIVE]** |
| Audit log for sensitive actions, enforced append-only by database triggers | **[LIVE]** |

**The turn.** The work becomes reviewable, so it can be supervised at the rate it should be
supervised at, and AI-assisted work becomes usable in the places that currently forbid it.

> **The hardest accuracy line on the site.** Reviewable is not verified. We do not check that
> a citation exists. We do not offer per-claim provenance or an export. What we change is that
> there is something to review instead of a paragraph that appeared from nowhere. Never let
> this drift, and never claim a customer-facing audit-log screen or SIEM export.

---

## F. "If it is not tied to our identity provider, it does not exist."

**Who feels it:** Robin (05), who can veto every other persona's decision. Toni (06) for the
freelance bench.

**The pain.** Tools outside the IdP break offboarding and access review. External
collaborators need one account for six weeks. IT is a three-person team reviewing tools for
the whole firm, so the review queue is the adoption bottleneck.

**The cost.** A control the firm claims to have does not exist, and a failed access review at
a firm whose clients audit their suppliers is a commercial event. Meanwhile IT is structurally
cast as the obstacle to the firm's AI strategy, so the opportunity cost lands on the firm and
the blame lands on one person.

**Our answer:**
| Capability | Status |
| --- | --- |
| Entra ID SSO, verified in production, with enforced SSO-only login | **[LIVE]** |
| Google Workspace SSO | **[LIVE]** |
| Four-level RBAC: SystemAdmin, OrgAdmin, ProjectAdmin, ProjectMember | **[LIVE]** |
| Restricted project visibility (Enterprise) | **[LIVE]** |
| Two-vault secret broker, managed-identity-first Azure auth, CSP, HSTS, secure cookies | **[LIVE]** |
| Least-privilege `Sites.Selected` SharePoint access rather than tenant-wide read | **[LIVE]** |

**The turn.** IT stops being the bottleneck, because delegation is built into the role model
and the review answers itself with specifics.

> **Never mention SAML.** Not built. Robin is exactly the persona who will ask the follow-up.

---

## G. "Fixed headcount, variable demand."

**Who feels it:** Jess (04) at busy season, Alex (01) on revenue per head, Casey (08) on ramp,
Toni (06) on pitch capacity.

**The pain.** Three months a year, or every time a bid lands, the firm cannot take more work
at any price. Headcount is fixed and the labour market is tight.

**The cost.** Declined engagements, overtime, and turnover among the seniors who leave in May.
This is the theme that is mostly opportunity rather than loss, and it is the reason a cautious
buyer moves at all: leverage is the only capacity lever that does not require hiring.

**Our answer:**
| Capability | Status |
| --- | --- |
| Agent file tooling: read, grep, glob, semantic search, outline, structured JSON and YAML queries | **[LIVE]** |
| Spreadsheets: filter and aggregate Excel and CSV, **no code execution** | **[LIVE]** |
| Document conversion: PDF, Word, PowerPoint to searchable markdown | **[LIVE]** |
| Inline preview: markdown, syntax-highlighted code, PDF, images, SVG, video, sandboxed HTML | **[LIVE]** |
| Shared threads so a seasonal or incoming person reads the work rather than rebuilding it | **[LIVE]** |
| Per-conversation model switching, stop and cancel mid-response, notifications, PWA install | **[LIVE]** |

**The turn.** More work per head at the point in the year when that is the only thing that
matters. "No code execution" is a selling point, not a limitation, to any firm that will not
let arbitrary code near a client general ledger.

---

## Proposed homepage structure

Current homepage order is Collaboration, Reporting, Models, Agent tooling, Budgeting, then
governance and pricing teasers. It is a feature tour. Proposed replacement, pain-first:

1. **Hero**: theme B. The differentiated claim, in the buyer's own vocabulary. Something in
   the shape of *"Every hour in your firm has a client code. Your AI spend doesn't."* The hub
   diagram stays; it already encodes collaboration and budgeting at once.
2. **Theme A**: shadow AI. The pain that makes them keep reading, and the one where our
   answer is strongest.
3. **Theme B expanded**: the AI timesheet, with `billing.png` and `budget.png`.
4. **Theme D**: context in closed tabs, with `projectlist.png`.
5. **Theme E**: derivation and supervision, with `agent-tools.png`. Write this one last and
   most carefully.
6. **Theme C**: the ceiling. Shorter, sits naturally under B.
7. **Theme F**: governance block, largely as it is today, pointing to `/security/`.
8. **Theme G**: capacity, as the closing upside before the pricing teaser and CTA.

Themes F and G can stay closer to feature-shaped than the others; by that point the reader has
self-identified and is checking boxes.

## Claims we cannot make

Consolidated from the root `CLAUDE.md` so nobody has to go looking:

- No **SAML**, Okta, or generic IdP. Do not mention.
- No **SIEM export** and no **customer-facing audit-log UI**. The audit log is a database
  guarantee. There is no `audit-log.png` and there must not be one.
- **Managed / hosted models are [LIVE]** as of 2026-08-09, charged by consumption. Two
  residual cautions: do not imply a broad hosted catalog (it is curated and small), and do
  not describe it as "buy tokens from us" or a credit portable across providers, which is
  both architecturally wrong and possibly barred by the underlying Azure terms (gate G1 on
  APP-142). Say "models we host, charged by what you use".
- No **Vertex AI** or enterprise GCP model access. Distinct from the shipped Gemini Developer
  API provider.
- No **throttling**, **dynamic model routing**, or **automatic downgrade to a cheaper model**.
  Budgets hard-block. Model switching is manual and per conversation.
- No **code execution** in spreadsheet or file tooling.
- No **citation verification** or **per-claim provenance**.
- **BYOK Gemini is [SHIPPED]**: real and working, not field-proven at scale. Both SSO
  providers (Entra ID, Google Workspace) and both enterprise storage providers (SharePoint,
  Google Shared Drives) are **[LIVE]** and verified in production, Google on 2026-08-08, so
  the Microsoft and Google stories can now be told with equal confidence. Copy written before
  that date hedged the Google half; that hedge is stale, not a rule.
- Not a **coding tool**. Never position against Copilot, Cursor, or engineering-team AI.
- Never publish a **simulated testimonial** as a real one.

## Handling the SOC 2 question

**We do not have a SOC 2 report.** Confirmed by the site owner 2026-08-05. This recurs across
personas 01, 03, 04, and 05, so it needs one consistent treatment rather than an improvised
answer per conversation.

**Never put it on the website.** Not as "SOC 2 ready", not as "SOC 2 aligned", not as
"designed to SOC 2 principles". Those phrases are read by exactly the audience that knows they
mean nothing, and using one costs more credibility with Robin (05) and Jess (04) than the
missing report itself does. `security.html` should describe controls, precisely, and let them
speak.

**In conversation, say "no" first and mitigate second.** Leading with the mitigation reads as
hedging, and these personas assess hedging for a living.

**Then make the scope argument, which is genuinely strong and genuinely true.** With project
files in the firm's own SharePoint site and model calls running under the firm's own provider
keys, most of what a SOC 2 on ParleHub would attest about is data that does not sit with
ParleHub. That is not a dodge; it is a real architectural consequence of BYOK plus
tenant-resident storage, and it is a better answer than most vendors holding a report can
give. Follow it with the specific control set: enforced SSO with tenant pinning, four-level
RBAC, least-privilege `Sites.Selected`, Key Vault behind a two-vault broker,
managed-identity-first auth, an audit log enforced append-only by database triggers, bounded
agent loops, CSP and HSTS.

**Know where it is fatal versus survivable.** Survivable with Robin (05), whose job is
assessing controls rather than collecting certificates, and with Alex (01) and Toni (06), who
mostly will not ask. Close to fatal with Jess (04), whose firm issues SOC reports itself, and
with any prospect whose procurement policy hard-requires an attestation, which is common above
roughly 200 people. This is a sequencing constraint, not a reason to change the product story.

**Do not promise a date.** If a certification effort starts, this section gets rewritten with
what is actually true then.

## Open questions for the site owner

These block or weaken specific copy, and several appear in more than one persona:

1. **Do we have a penetration test summary or a subprocessor list?** SOC 2 is answered (we do
   not have one), these two are not, and Robin (05) asks for all three together. Highest-value
   open question now.
2. **Do projects support instructions, a system prompt, or a brief applied to every
   conversation?** Toni (06) and Sam (02) both need it; it is the top agency-segment gap.
3. **Is there any conversation or thread export?** Sam (02), Morgan (03), and Jess (04) all
   want a handover artefact.
4. **How are external collaborators handled?** Freelancers and contractors are not in the
   firm's IdP. Practical adoption blocker for Toni (06).
5. **Does our token ledger reconcile to the provider invoice, and within what tolerance?**
   Dale (07) will ask, and improvising a number would be bad.
6. **Is there an API or programmatic access?** Raised by Casey (08) and implied by Alex's (01)
   billing-system integration need.
7. **Is there image generation?** Toni (06) asks in the first ten minutes.
