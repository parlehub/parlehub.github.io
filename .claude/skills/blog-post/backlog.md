# Blog topic backlog

Each entry: a **thesis** (the argument, not the feature), the **failure modes** to name in
section 3, and the **product payoff** with its status per `CLAUDE.md`. Only topics whose
payoff is [LIVE] or [SHIPPED] are ready to write — [ROADMAP] payoffs are parked at the
bottom.

Mark `- [x]` when published. Keep the shipped posts in mind so arguments don't overlap:
- 2026-07-24 — project-level token tracking & budgeting (the FinOps argument)
- 2026-07-25 — collaboration / single-player AI silos (the teamwork argument)
- 2026-08-01 — data residency / shadow AI (the security argument)
- 2026-08-06 — cost per project changes the portfolio (the decision argument)
- 2026-08-12 — project name vs client code (the allocation-mechanics argument)
- 2026-08-14 — append-only audit log (the compliance/evidence argument)
- 2026-08-25 — the budget request nobody sends (the exception-path argument)

---

## Ready to write

- [x] **A project name is not a client code: why AI cost allocation stalls halfway**
  *Published 2026-08-12 — `_posts/2026-08-12-a-project-name-is-not-a-client-code.md`*
  *Thesis:* Theme B from `pain-point-map.md` in the private marketing repo, narrowed to the mechanics. The
  2026-08-06 post argued cost you can move is cost you can price; this one is about why the
  moving breaks. Firms get accurate per-project numbers and still can't recharge, because a
  name is a label and a code is an identifier. Allocation is an identifier problem.
  *Failure modes:* The Overhead Bucket; The Month-End Join; The Absorbed Pass-Through;
  The Unpriceable Input.
  *Payoff:* The **project code field** set on the project itself, the code carrying through
  into the analytics CSV export, project-scoped budgets, pre-flight hard block. All **[LIVE]**.
  *Note:* deliberately extends 2026-08-06 (whose third pillar made the client-code point) and
  links to it in-text. Did **not** claim ledger-to-provider-invoice reconciliation or any
  billing-system integration (open questions 5 and 6 in the pain point map).

- [x] **Your AI vendor is a data residency decision you haven't made yet**
  *Published 2026-08-01 — `_posts/2026-08-01-your-ai-vendor-is-a-data-residency-decision.md`*
  *Thesis:* Every team that pastes a contract into a chat window has silently made an
  enterprise data-governance decision — without security review, without a DPA, without
  anyone knowing. The question isn't whether to allow AI; it's where the files land.
  *Failure modes:* "Shadow AI"; the copy-paste perimeter breach; consumer-tier accounts
  as an unmanaged data processor; the download-reupload loop.
  *Payoff:* Project files stay in the org's own SharePoint site — least-privilege
  `Sites.Selected`, native SharePoint search, deletes go to SharePoint's own recycle bin.
  Files never leave the tenant. **[LIVE]**, and Google Shared Drives is **[LIVE]** too as of
  2026-08-08, so both halves can be claimed with equal confidence.

- [x] **Bring your own key: why you shouldn't rent your AI relationship**
  *Published 2026-08-09 — `_posts/2026-08-09-bring-your-own-key-dont-rent-your-ai-relationship.md`*
  *As written, the post argues renting is the right way to **evaluate** a model and owning
  the provider relationship is the right way to **run** the work, with the rent→own→rent
  move as the third pillar. That absorbs a chunk of the "Two doors to the same room" entry
  below; if that one is written, it needs a distinct angle (procurement economics, not the
  evaluate-vs-operate sequence).*
  *Thesis:* Buying AI *through* a SaaS vendor means your model access, your rate limits,
  your data terms, and your negotiating leverage all belong to someone else. Owning the
  provider relationship and renting only the workspace is the more durable posture.
  *Failure modes:* The markup-on-a-markup; provider lock-in by proxy; losing your own
  enterprise agreement's terms; opaque per-seat pricing that hides token cost.
  *Payoff:* BYOK across Anthropic, OpenAI, and Google Gemini, plus Azure OpenAI for
  Azure-native orgs. Keys stored in Azure Key Vault, never exposed. **[LIVE]** for the
  BYOK model overall; Gemini specifically **[SHIPPED]**. Hosted models are now **[LIVE]**
  too and the post should say both modes exist. Do **not** mention Vertex AI, describe the
  hosted catalog as broad, or write "buy tokens from us".

- [ ] **Two doors to the same room: owning the model relationship, or not**
  *Thesis:* The choice between bringing your own provider contract and using a vendor's
  hosted models is usually framed as convenience versus control, and that framing is wrong.
  It is a question about *which* costs you want to be legible: a firm with an enterprise
  agreement already has a negotiated rate worth using, and a firm without one is paying a
  procurement tax to get one.
  *Failure modes:* buying a key you cannot justify to finance; being forced to open a
  provider account before anyone has proven the tool is useful; the pilot that dies in
  procurement rather than on the merits.
  *Payoff:* both modes are **[LIVE]** and can run side by side in one org, on one ledger,
  under the same project budgets and the same expense code. Same caveats as above.

- [x] **Append-only or it didn't happen: what compliance actually asks of your AI log**
  *Published 2026-08-14 — `_posts/2026-08-14-append-only-or-it-didnt-happen.md`*
  *Thesis:* "We log everything" is not an audit trail. An audit trail is a log that a
  compromised application credential cannot rewrite. Most AI tooling can't clear that bar.
  *Failure modes:* App-level logging that the app itself can edit; retention as a
  substitute for immutability; screenshots-as-evidence; the "who approved this spend"
  question with no answer.
  *Payoff:* Every sensitive action logged, enforced append-only at the **core
  platform** level — even a compromised app credential can't alter history. **[LIVE]**.
  Hard constraint: this is a guarantee, **not** a self-service admin export or SIEM
  integration. Do not imply either.

- [x] **The budget request nobody sends: what happens when AI spend hits its cap**
  *Published 2026-08-25 — `_posts/2026-08-25-the-budget-request-nobody-sends.md`*
  *Thesis:* Hard limits fail not because they're too strict but because there's no path
  through them. A cap with no request-and-approve loop just teaches people to route
  around governance with a personal account.
  *Failure modes:* The Slack-DM budget increase; governance theater; the silent overage
  discovered at invoice time; caps set once and never revisited.
  *Payoff:* Pre-flight enforcement hard-blocks the send before it exceeds the project
  budget, 80% warning ahead of it, and blocked users **self-serve a request** routed to
  admins for approve/reject. Personal and org-wide caps as backstops. **[LIVE]**.
  Careful: hard block, not throttling. No automatic model downgrade.

- [ ] **Four roles, one hub: governing AI access without becoming the bottleneck**
  *Thesis:* Centralizing AI usually means IT approves every request, which means IT is the
  reason AI adoption stalls. Delegation is the whole design problem.
  *Failure modes:* The ticket queue for model access; the org-admin-or-nothing permission
  model; project sprawl with no owner; over-broad sharing because restricting is harder
  than not restricting.
  *Payoff:* Four-level RBAC (SystemAdmin → OrgAdmin → ProjectAdmin → ProjectMember),
  member invites, and public-vs-restricted project visibility. **[LIVE]**
  (restricted projects are Enterprise-tier).

- [ ] **Your AI can't read the file you're asking it about**
  *Thesis:* Most "AI assistants" are chat windows with an upload button — the model gets a
  flattened blob of text, once, with no ability to search, cross-reference, or revise. The
  gap between "can discuss a document" and "can work on a document" is the whole job.
  *Failure modes:* Context-window stuffing as a document strategy; re-uploading the same
  spreadsheet every session; the copy-paste-back-into-Excel loop; "summarize this PDF" as
  the ceiling of usefulness.
  *Payoff:* Real tool calls against project files — read, grep/glob/semantic search, exact
  find-replace and multi-edit, outline, structured JSON/YAML queries, spreadsheet filter
  and aggregate, PDF/Word/PowerPoint → markdown conversion. Plus inline preview for
  markdown, code, PDF, images, video. **[LIVE]**. No code execution — don't imply it.

- [ ] **Single sign-on is the cheapest AI security control you're not using**
  *Thesis:* Before encryption, before DLP, before model choice: if AI access isn't tied to
  your identity provider, offboarding doesn't work and you have no access review. Everything
  else is downstream of that.
  *Failure modes:* The departed employee whose AI account still works; password reuse into
  an unmanaged tool; no way to answer "who has access" during an audit; per-tool user lists
  that drift.
  *Payoff:* Microsoft Entra ID (OIDC) with domain-based auto-provisioning, tenant-pinned,
  and org-enforced SSO-only login — **[LIVE]**, verified in production. Google Workspace
  (OIDC) **[LIVE]** as well, verified 2026-08-08. **Never mention SAML.**

- [x] **Cost per project is a product decision, not an accounting one**
  *Published 2026-08-06: `_posts/2026-08-06-cost-per-project-is-a-product-decision.md`*
  *Thesis:* A follow-on to the token-tracking post, aimed one level up. Once you can see
  spend per initiative, you can kill initiatives — and that's the actual point. Attribution
  changes the roadmap, not just the ledger.
  *Failure modes:* The pilot nobody will cancel; AI spend as fixed overhead; cost hidden
  inside a platform team's budget; ROI arguments made with no denominator.
  *Payoff:* Usage and spend analytics filtered/grouped by project, person, provider, or
  model, with CSV export. **[LIVE]**.
  *Note:* must extend, not repeat, the 2026-07-24 post — that one argued for attribution;
  this one argues about what you do with it.

- [ ] **Denial of wallet: the AI attack that doesn't steal anything**
  *Thesis:* Traditional threat models assume the attacker wants your data. With metered AI,
  making you spend money *is* the attack — and an agent loop can do it to you accidentally.
  *Failure modes:* The unbounded agent loop; a leaked key as a metered liability rather than
  a data breach; retry storms; no ceiling between a bug and the invoice.
  *Payoff:* Denial-of-wallet protection via rate limits and bounded agent loops, two-vault
  secret broker, managed-identity-first Azure auth with minimal static secrets, CSP/HSTS/
  secure cookies. Budget caps as the financial backstop. **[LIVE]**.

- [ ] **Everyone in the room, watching the same answer arrive**
  *Thesis:* Narrower and more concrete than the 2026-07-25 collaboration post: what changes
  in practice when a teammate can watch your prompt and the model's streamed reply in real
  time. Prompting becomes a reviewable, teachable act instead of a private skill.
  *Failure modes:* Prompt skill as tribal knowledge; the screenshot-of-a-chat handoff; two
  people asking the same question an hour apart; good outputs with no provenance.
  *Payoff:* Shared project threads visible to every member in real time, live presence
  (viewing/typing/waiting), branching via edit-and-resend, keyword + semantic history
  search, and promoting a personal chat into a shared project. **[LIVE]**.
  *Note:* must go deeper than the 2026-07-25 post, not restate it.

---

## Parked — payoff is [ROADMAP], don't write yet

- [ ] **SIEM / audit export, customer-facing audit UI** — the log is append-only, enforced at the
  core platform level, but there is no customer-facing read path. Tracked as APP-252.
- [ ] **SAML / Okta / generic IdP** — not built. Do not mention.
- [ ] **Vertex AI / enterprise GCP model access** — distinct from the shipped Gemini
  Developer API provider, and not built.
- [ ] **SIEM export / customer-facing audit-log UI** — the audit log is a database
  guarantee, not an export feature. Don't write a post that implies a screen exists.
