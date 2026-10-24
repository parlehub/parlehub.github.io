---
name: linkedin-post
description: Turn a Parle blog post (a file in _posts/ or a blog URL) into LinkedIn post drafts with a hook, body, payoff, and closing question or call to action. Use when asked to promote, repurpose, summarize, or "post to LinkedIn" about a blog post, or for phrases like "LinkedIn version of this post", "turn this article into a LinkedIn post", or "format this for LinkedIn". Not for writing the blog post itself (use blog-post) and not for LinkedIn posts that have no source post.
---

# Turning a Parle blog post into a LinkedIn post

Input: one post from `_posts/` (or its URL). Output: **three** draft LinkedIn posts in the
chat, each built on a different hook angle, plus a recommendation of which to publish.
Do not write files, commit, or push unless asked. This repo is public, so unpublished
drafts should not be committed here.

## Step 1 — read the source and find the one idea

First read `performance.md` in this directory. Check which source posts, angles and hook
types have already been used so variants do not repeat them, and apply anything under "What
the log has taught us". If that section is empty, there is no data yet, so do not invent
trends.

Read the whole post. A 1,000-word essay cannot become a 200-word post by trimming; it
becomes one by **choosing one idea**. Before drafting, write down (to yourself):

1. The single claim the post exists to make, in one sentence.
2. The most concrete detail in it: a number, a named anti-pattern, a vivid analogy, a
   micro-persona. This is what the hook is built from.
3. The reader's takeaway if they read nothing else.

Everything that is not one of these three things is cut.

Then choose **three different angles** from the post, one per variant, from this menu:

- **Core idea:** the "why" behind the post; the thesis in plain words.
- **Section mini-lesson:** one H2/H3 (a named anti-pattern or pillar) expanded into a
  standalone point.
- **Concrete scene or number:** the post's most vivid example or figure, told as a story.

Variants must differ in angle *and* hook type, not just wording. If the post is a strong
candidate for a carousel (a numbered set of three or four named items), say so in the
hand-off and offer a slide-by-slide outline for a LinkedIn document post. Do not try to cover the post's
full structure (anti-patterns 1 to 4, three pillars, capability bullets). Pick the one
anti-pattern or pillar with the strongest picture and tell that one well.

Derive the blog URL from the filename: `_posts/2026-08-12-a-project-name-is-not-a-client-code.md`
becomes `https://parlehub.com/blog/2026/08/12/a-project-name-is-not-a-client-code/`
(apex host, no `www.`, trailing slash, never `.html`). If the filename is unclear, check
`permalink` in `_config.yml`.

## Step 2 — audience and voice

Same reader as the blog: an enterprise buyer (CIO, IT director, finance or FinOps lead,
engineering manager, security or compliance owner) who feels the problem but lacks the
vocabulary. LinkedIn changes the format, not the reader or the voice.

- Confident, plain, declarative. "We" is Parle; "you" is the reader's org.
- First person plural or observational. Do not invent first-person anecdotes ("I spoke to
  a CFO who...") that did not happen. Micro-personas from the blog post are fine because
  they are labelled illustrations.
- Product is the payoff, never the premise. At most one mention of **Parle**, in the last
  third, and it may be omitted entirely if the idea stands alone. The naming rule from
  `CLAUDE.md` applies: the product is **Parle**, never "ParleHub".
- No hype adjectives (revolutionary, game-changing, cutting-edge, seamless, supercharge,
  unlock). No "In today's fast-paced world". No "I'm thrilled to announce".

## Step 3 — the structure

Plain text only. LinkedIn does not render Markdown: no `**bold**`, no `#` headings, no
`---` rules, no backticks. Do not use Unicode "bold" letters either (they break screen
readers and search).

**1. Hook (line 1, standalone, under ~140 characters).** LinkedIn truncates the feed
preview behind "see more" at roughly 140 characters on mobile and 210 on desktop. The hook
must make the reader click *and* stand alone if they do not. Strong hook types, use a
different one per variant:

- **Concrete number or scene.** "A $40,000 model invoice arrived with no client name on it."
- **The reversal.** State the common belief, then break it in line 2.
- **The named pattern.** "The Month-End Join is where AI cost allocation goes to die."
- **The blunt question.** Only if the answer is not obvious.

Never open with the blog title, the word "Excited", a greeting, or a statement about
posting. Never put the link in the hook.

**2. Body (3 to 6 short paragraphs, one to two sentences each).** One blank line between
paragraphs. This is the argument compressed: set up the broken status quo, give the one
vivid detail, name the cost of leaving it. Prose, not bullet lists, unless the post's own
structure is a numbered set of three and each item is under ten words. Maximum one list per
post.

**3. Payoff (1 to 2 lines).** The sentence a reader would repeat to a colleague. It is
the reframe or the post's one-line punch close, rewritten for a cold reader. If Parle
appears, it appears here as the answer, one sentence, a capability and not a pitch.

**4. Close (one line).** A question that a practitioner can answer from their own job in a
sentence ("How does your firm tie AI spend back to a client code today?"), or a single
call to action. Prefer a specific question over "What do you think?". Never both a question
and a "like, share, subscribe".

**5. Link and hashtags.** **Keep the blog URL out of the post body.** LinkedIn is widely
reported to show posts with outbound links to fewer people, so the post must deliver its
value natively and the link goes in a **first comment**. Output the first comment as a
separate block ("Full write-up: <url>"). Only put the URL in the body if the user asks.
End the post with 3 hashtags at most, last line, specific rather than generic
(`#FinOps`, `#AIGovernance`, not `#AI` or `#Innovation`).

## Step 4 — length and texture

- **Target 900 to 1,300 characters** (roughly 150 to 220 words). Hard ceiling 1,800. The
  LinkedIn limit is 3,000 but long posts get skimmed. Report the character count per draft.
- Short lines, whitespace, rhythm. Vary sentence length; one very short sentence per
  paragraph at most.
- No emoji by default. This is a finance and security audience, and the blog voice has
  none. If the user asks for them, one at most per post, never as bullet markers.
- **House punctuation rules carry over from the blog:** no em dashes (use commas,
  semicolons, or two sentences); do not start a sentence with "However", "Therefore",
  "But", "So", or "Yet".
- Keep the blog's analogy if it is the best thing in the post; do not invent a new one that
  the post does not support.
- Avoid the tells of machine-written posts: "Here's the thing:", "Let that sink in.",
  "Read that again.", "It's not X, it's Y" repeated, three-item lists of abstract nouns,
  rhetorical questions in every paragraph, a one-sentence paragraph after every sentence.

## Step 5 — accuracy gate (do not skip)

LinkedIn is public and permanent, and older blog posts contain known product errors.
Do not inherit a claim just because the blog made it. Check every sentence that describes
what Parle does against `CLAUDE.md` (the **[LIVE] / [SHIPPED] / [ROADMAP]** legend) and the
"Claims the existing posts got wrong" table in `.claude/skills/blog-post/SKILL.md`.

If a sentence describes a capability that `CLAUDE.md` does not cover (for example agents,
skills, integrations, or what a channel integration can reach), do not take the blog post's
or the user's word for it. Check the `parlehub/Locutus` repo's `Plans/implementation-progress/`
folder (https://github.com/parlehub/Locutus/tree/main/Plans/implementation-progress), which
records what shipped and what was deliberately left out. Read it from `origin/main` with
`gh api` or `git show origin/main:Plans/implementation-progress/<file>`, because a local
checkout can be weeks behind, and never `git pull` into someone's working tree to do it. If
the folder does not confirm the claim, soften or drop it and say so in the hand-off. If
you cannot reach the repo, say that and ask the user to confirm instead of guessing.

Non-negotiable:

- Never present a **[ROADMAP]** item as available. Never mention SAML.
- Two model-access modes exist and both are live: bring your own keys, or models Parle
  hosts charged by consumption. Never write that Parle is BYOK-only, never "we resell
  tokens", never name a specific hosted model.
- Budgets **hard-block**; they do not throttle or reroute. No "dynamic model routing".
- No SOC 2 claims of any kind. No SIEM export, audit API or webhook (the Org Admin audit view and CSV / JSON export on Business and above are real). The audit log is "enforced at the core
  platform level", never "at the database level" or "by triggers".
- Statements about competitors must come from the compare pages, which cite sources. If the
  blog post made a competitor claim, drop it from the LinkedIn version unless it is on a
  `/compare/` page.
- Do not add statistics, customer names, or quotes that are not in the source post.

If you soften or drop a claim, say so in the hand-off.

## Step 6 — self-check before output

For each draft, confirm: hook is under ~140 characters and stands alone; one idea only;
a reader who stops after the hook still got a complete thought; payoff is quotable; close
is answerable in a sentence; no Markdown syntax; no em dashes; at most one Parle mention,
none in the first two thirds; 3 hashtags or fewer; no URL in the body; the first-comment
URL is correct; the three variants use three different angles.

## Step 7 — hand off

Present the three drafts as:

```
VARIANT A: <angle> / <hook type>   (<n> characters)
<post text, exactly as it would be pasted into LinkedIn>

First comment:
Full write-up: <blog url>
```

Then, briefly: which variant you recommend and why (one sentence), any claim you softened or
dropped, and a suggested posting note (best on a weekday morning in the audience's
timezone; reply to early comments within the first hour). Offer to adjust length, tone, or
swap the hook type. If the user picks one, offer a shorter 300-character version for a
reshare or a follow-up post built from a different idea in the same blog post.

Finish by asking the user which variant they published and when, and offer to add a row to
`performance.md` (metrics can be filled in a week later). When the user returns with metrics,
update that row, and after every 3 to 5 rows summarise any pattern under "What the log has
taught us".

See `examples.md` in this directory for a worked source-to-post example to calibrate
against.
