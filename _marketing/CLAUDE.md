# CLAUDE.md — `_marketing/`

Internal positioning workspace. **Nothing in this folder is ever published.** It is excluded
in `_config.yml` and the directory name starts with `_`, so Jekyll ignores it twice over.
Do not link to these files from any `.html` page, blog post, or sitemap.

The root `CLAUDE.md` still applies here in full. In particular its **[LIVE] / [SHIPPED] /
[ROADMAP]** legend governs every product claim written in this folder, because copy drafted
here gets lifted onto the live site more or less verbatim.

---

## Why this folder exists

The site as originally written leads with **features**: "shared threads", "project budgets",
"BYOK", "SharePoint storage". A reader who does not already know they have a problem reads
that as a list of switches, and bounces.

The pivot: lead with the **pain**, then the **cost of that pain**, then ParleHub as the
answer. A reader either recognises the pain and self-identifies, or has not started using AI
yet and now sees a set of problems worth thinking about before they do. Both outcomes are
wins; the second one is how we reach firms that have not bought anything yet.

Personas are the forcing function. Writing a specific person's day, and then a testimonial
in their voice, makes vague benefit copy impossible: you cannot write "improves
collaboration" in a quote and have it sound like a human said it.

---

## Who we are selling to

**The buyer runs a B2B services company.** Firms that deliver work for other companies, in
project teams, on the clock. Strategy consulting, accounting and advisory, legal and
paralegal, marketing and creative agencies, recruiting, design, architecture, engineering
consultancies, research.

Working assumption on size: **20 to 250 people**. Big enough that AI spend and shadow AI are
real problems and someone owns governance; small enough that there is no internal platform
team building this themselves.

The shared shape across all of them, and the reason ParleHub fits:

1. **Work is organised as client engagements**, several running at once, each with its own
   budget, team, and confidentiality boundary.
2. **Time and cost are already tracked per client.** These firms live on timesheets, matter
   codes, job numbers, and realisation rates. AI spend is the one input that currently has
   nowhere to land. "An AI timesheet" is a concept they already have the muscle for.
3. **Output faces scrutiny.** A partner signs it, a client challenges it, a regulator or an
   opposing counsel or an auditor may review it. "Where did this number come from" is a
   question that must have an answer.
4. **Context is the product.** The value is in knowing the client, the history, the prior
   deliverables. Context trapped in one person's private chat is value the firm paid for and
   does not own.

### What we are explicitly not

- **Not a coding tool.** There is no coding harness. Never position against Copilot, Cursor,
  or "AI for engineering teams". Do not write developer personas.
- **Not for solo users.** A single freelancer has no budget-allocation problem and no
  shared-context problem. The unit is a team inside a firm.
- **Not a model.** We do not train, host, or improve models. We are the workspace and the
  governance layer around models the customer already trusts.

---

## The argument structure (use this everywhere)

Every persona, every section of site copy, every testimonial follows the same four beats:

1. **Pain** — a concrete, recognisable situation. Not "lack of visibility"; rather "the
   associate re-uploads the same eleven exhibits every morning".
2. **Cost or opportunity cost** — what that situation actually takes from the firm, in
   money, hours, risk, or missed upside. Name a unit. Unbillable hours, realisation points,
   a client security questionnaire that cannot be answered honestly, a pitch not won.
3. **Our answer** — the specific thing ParleHub does about it. Usually a *combination* of
   features rather than one, and it is fine to say so. Project budgets alone are not the
   answer to cost allocation; project budgets plus per-project usage analytics plus CSV
   export are.
4. **The turn** — the same situation after ParleHub, stated as gain rather than as relief.
   The cost becomes an opportunity. "AI spend stops being overhead and becomes a line item
   on the engagement that either earns its margin or gets cut."

If a draft has beats 1 and 3 but not 2 and 4, it has reverted to feature copy. Send it back.

---

## Persona file format

One file per persona in `personas/`, named `NN-role-vertical.md`, numbered by current
priority rank. Every file carries these sections, in this order:

- **Snapshot** — name, role, firm type and size, who they report to, what they control
  (budget authority, veto power, or neither).
- **Their world** — a paragraph of narrative. What the week looks like. What is on fire.
- **Goals** — what they are measured on. Three to five, phrased as their own words, not ours.
- **Pains** — numbered. Each pain gets its own **Cost** line stating what it takes from the
  firm. This is the section that generates site copy.
- **How ParleHub answers it** — mapped pain by pain, naming the specific capabilities and
  their status. Combinations encouraged.
- **Unmet needs** — what they want that we do **not** have today. Be honest and specific.
  This section feeds the product backlog, and it is the reason this folder is worth keeping
  current. Never quietly delete an entry here because it is inconvenient.
- **Objections** — what they say when they want to say no, with the honest answer.
- **Testimonial** — see below.
- **Buying signals** — observable triggers that mean this persona is in market now.

## Testimonial rules

The testimonials are **simulated**, written to sharpen our thinking. Treat them as internal
until a real customer says something close enough to replace them.

- **Never publish a simulated testimonial as if it were real.** Not with a fake headshot,
  not with a fake company, not with a disclaimer in small print. If a quote is good enough
  to ship, ship it as *our* prose in our own voice, or go get the real version from a real
  customer. This is the one hard rule in this folder.
- Every claim inside a quote must be true of the product today under the root `CLAUDE.md`
  status legend. A testimonial that describes a [ROADMAP] capability is a lie we will
  eventually believe.
- Written in the persona's register, not ours. A managing partner does not say "granular
  observability". They say "I can finally see which engagements are actually making money".
- Lead with the before state, not the product. The most useful shape is: what it used to
  cost them, the specific moment that changed, the number or outcome now.
- One concrete figure per quote, and mark invented figures as illustrative in the file so
  nobody lifts them onto a page as fact.
- 40 to 90 words. Longer reads as a case study, shorter reads as a slogan.

---

## Voice

Inherits the house voice from `.claude/skills/blog-post/SKILL.md`. The rules that matter
most here:

- **No em dashes.** Use commas, semicolons, or a full stop. This applies to persona prose
  and to testimonials, because testimonials get lifted onto pages.
- Do not open a sentence with "however", "therefore", "but", "so", or "yet".
- Zero hype adjectives: revolutionary, game-changing, cutting-edge, seamless, effortless.
- Confident, plain, declarative. "We" is ParleHub. "You" is the reader's firm.
- Money and counts read as ledger figures: state them concretely.
- **Use they/them** for every invented person. Names in this folder are placeholders and do
  not imply anything about the person.
- Personas are fictional composites. Do not name a real firm, a real person, or a real
  client engagement anywhere in this folder.

---

## Working in here

- `README.md` holds the ranking and is the entry point. If you add, remove, or re-rank a
  persona, update `README.md` in the same change or the ranking silently rots.
- `pain-point-map.md` is the bridge from this folder to the site. It aggregates every pain
  across every persona and maps it to the capability that answers it, with status. Site copy
  should be traceable to a row in that table. If you cannot find the row, the claim is
  probably not one we can make.
- Keep the honest gaps honest. The **Unmet needs** sections are the most valuable thing in
  this folder precisely because they are the parts nobody wants to write.
