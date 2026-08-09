---
name: blog-post
description: Draft a new ParleHub blog post in _posts/ matching the established house voice, structure, and product-accuracy rules. Use when asked to write, draft, or add a blog post / article / entry for the ParleHub site.
---

# Writing a ParleHub blog post

Produce one file at `_posts/YYYY-MM-DD-<kebab-slug>.md`. Nothing else needs to change —
`blog/index.html` iterates `site.posts` automatically and `_config.yml` applies
`layout: post` by default.

## Step 1 — pick the topic

If the user named a topic, use it. Otherwise read `backlog.md` in this skill directory,
propose 2–3 unused entries, and let the user choose. Never silently pick one.

Check `_posts/` first — do not re-argue a thesis an existing post already made. A new post
may *extend* a prior one, but it needs its own distinct argument.

## Step 2 — know who you're writing for

The reader is an **enterprise buyer**: CIO, IT director, finance/FinOps lead, engineering
manager, security or compliance owner. They already feel the pain but lack vocabulary for
it. They are *not* end users — never explain how to click something, never write a
tutorial, never include code or screenshots.

The value you deliver is **naming their problem precisely**. Product is the payoff, not
the premise.

## Step 3 — follow the house structure

1. **Cold open on an industry pattern.** No preamble, no "In today's fast-paced world."
   Start mid-observation, with something concrete and recognizable.
   *Models: "enterprise enthusiasm for Generative AI has followed a familiar, predictable
   trajectory" / "We migrated from emailing endless versions of `Report_v2_final_FINAL.docx`"*
2. **The turn** — a short, italicized rhetorical question or a one-line jab that reframes
   the opening. *"So, why did we just step backward 15 years when it comes to AI?"*
3. **Name the broken status quo as numbered, labeled anti-patterns** (H3s under one H2).
   Give each failure mode a memorable name — "The Macro View", "The Post-Mortem BI Trap",
   "Knowledge Black Holes". This section is the heart of the post; make it the longest.
4. **The reframe** — an H2 introducing the correct model, with **exactly three** numbered
   H3 pillars beneath it.
5. **Product entry, ~70% of the way in.** Literally: "This is precisely the problem we
   created **ParleHub** to solve" or "That's precisely why we built **ParleHub**." Never
   mention the product before this point.
6. **Capability bullets** with bolded lead-ins — 3–4 of them, each tied back to a failure
   mode named in step 3.
7. **One-line punch close.** *"Stop prompt-engineering in the dark."* / *"AI is too
   powerful, and too expensive, to manage in the dark."*

Optional closing CTA block (post 2 has one, post 1 doesn't) — a `***` rule, a bolded
question, then a link.

## Step 4 — match the texture

- **Length:** 900–1400 words.
- **Rules:** `---` on its own line between major sections.
- **Analogies carry the argument.** Every post so far leans on one or two vivid,
  non-technical comparisons: concrete allocated per construction site, driving by looking
  in the rearview mirror, AI as "a private calculator." Invent a fresh one; don't reuse.
- **Named micro-personas** for concrete examples: "Mark in Marketing spends two hours...
  Tomorrow, Sarah in Strategy needs the exact same thing." Use they/them for invented
  people unless the name is unambiguous in context.
- **Bold** introduces a term being defined. *Italics* for rhetorical emphasis only.
- **Voice:** confident, plain, declarative. "We" = ParleHub. "You" = the reader's org.
  Zero hype adjectives (revolutionary, game-changing, cutting-edge, seamless). No em-dash
  pileups. No bullet lists in the opening two sections — prose first, structure later.
- Numbers and money read as ledger figures; state them concretely ("$15,000 of budget in
  a weekend", "500,000 tokens per month") rather than vaguely.
- Don't use the em dash, prefer commas or semicolons. Avoid "however" and "therefore" as   sentence openers. Avoid "but" as a sentence opener. Avoid "so" as a sentence opener. Avoid "yet" as a sentence opener. 

## Step 5 — front matter

```yaml
---
layout: post
title: "Sentence-case Title: With an Optional Colon Subtitle"
date: YYYY-MM-DD HH:MM:00 -0400
categories: [Two To Three, Title Case, Buckets]
tags: [lowercase-kebab, always-include, parlehub]
author: ParleHub Team
description: "One sentence, under 160 chars, for search results and social cards."
---
```

`layout` and `author` are always exactly as shown. Always include a `description` (post 1
omits it — that's the outlier, not the pattern). Always include `parlehub` in `tags`. Use
the real current date; the offset is `-0400` (site timezone is `America/New_York`).

## Step 6 — fact-check before you hand it over (do not skip)

`CLAUDE.md` in the repo root is the source of truth for what ParleHub actually does, with
a **[LIVE] / [SHIPPED] / [ROADMAP]** status legend. Re-read the feature section before
writing any product claim, and hold every sentence in the capability bullets against it.

Rules:

- **[LIVE]** — claim freely.
- **[SHIPPED]** — describe as a real, working feature. Do **not** imply it is
  battle-tested or field-proven at scale.
- **[ROADMAP]** — do not present as available. Only tease as "coming soon" if the post is
  explicitly forward-looking, and tell the user you did.
- **Managed prepaid model credits are [ROADMAP]** and the "credits transferable across
  OpenAI/Anthropic/Gemini" framing is architecturally wrong. Flag this to the user before
  publishing any copy that touches it.
- **Never mention SAML** — not built.
- **Never claim SIEM export or a customer-facing audit-log UI.** The audit log is a
  database-level append-only guarantee, not an admin export screen.

Claims the existing posts got wrong — do not repeat these:

| Don't write | Reality |
| --- | --- |
| "dynamic model routing", "redirect to a cheaper model" | No automated routing. Budgets **hard-block** a send pre-flight, with an 80% warning and a self-serve increase request routed to admins. Model switching is manual, per conversation. |
| "gracefully throttle" | It's a hard block, not throttling. |
| "Microsoft Teams folders" | **SharePoint** (Microsoft 365, least-privilege `Sites.Selected`) and **Google Shared Drives**. |
| Google Drive / Google Workspace SSO as unproven | Both were [SHIPPED] and are now **[LIVE]**, verified in production 2026-08-08, alongside Entra ID SSO and SharePoint storage. Older posts hedge the Google half; don't copy that hedge forward. |

**Links — never include the `www.`**. The canonical host is the apex `parlehub.com` (it's what
`CNAME` contains). `www.parlehub.com` still resolves, it just 301-redirects, so a `www.` link
costs a needless hop. Write `https://parlehub.com/...`.

- "Start / sign in" intent → `https://app.parlehub.com` (root, no deep links)
- "Learn more" intent → `https://parlehub.com/`, or a real marketing page:
  `/security/`, `/pricing/`, `/blog/`, `/compare/`,
  `/compare/parlehub-vs-claude/`, `/compare/parlehub-vs-chatgpt/`. Those pages
  plus `/terms/` and `/privacy/` are the only ones that exist — don't invent
  paths.
- Prefer an internal link written as a root-relative path (`/security/`) for anything
  on this site; use the absolute `https://parlehub.com/...` form only in the closing CTA
  block. **Always the trailing slash, never `.html`** — `/security.html` still forwards,
  it just costs a redirect.

In the closing CTA block, the bolded question line needs **two trailing spaces** so the
link renders on its own line rather than running on in the same paragraph.

## Step 7 — hand off

Report the file path, the word count, which existing post it pairs with or extends, and
**any claim you softened or dropped for accuracy**. Then offer to preview it:

```
python -m http.server 4000    # then open http://localhost:4000/blog/
```

(Jekyll isn't installed locally; GitHub Pages builds on push to `main`. A plain static
server won't render Liquid, so for a true preview use `bundle exec jekyll serve` if
available, otherwise review the markdown directly.)

Do not commit or push unless the user asks.

## Step 8 — close the loop

Mark the topic used in `backlog.md` (`- [x]`) so the next run doesn't repeat it.
