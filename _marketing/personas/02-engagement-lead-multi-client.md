# 02 — Sam Okonjo, Engagement Manager, four live client accounts

**Rank: 2 (primary champion and daily user).** Does not sign anything. Feels every pain we
solve, every day, and is the person who brings ParleHub to Alex. Most of our best site copy
should be written to be recognised by Sam and forwarded upward.

## Snapshot

| | |
| --- | --- |
| Role | Engagement Manager / Project Lead |
| Firm | The same 70-person consultancy as [01](01-managing-partner-consultancy.md), or any services firm of that shape |
| Scale | Four live client engagements, 2 to 5 people on each, overlapping |
| Reports to | An engagement partner |
| Controls | No budget authority. Controls how their teams actually work, which is more decisive than it sounds. |
| Buys | Nothing. Adopts, then evangelises, then forwards a link |

## Their world

Sam context-switches between four clients in a day and bills to all four. Monday is a
manufacturing client's supply-chain diagnostic, a public-sector bid, a private-equity
commercial due diligence on a two-week clock, and a long-running retainer that eats Fridays.

Each switch costs twenty minutes of reloading: which documents, which assumptions, what the
client already rejected. Sam's analysts each keep their own AI chat history, so when an
analyst rolls off, whatever they worked out goes with them. Last month two analysts on the
same diligence produced contradictory market-size figures because they had asked the same
question in two private tabs with two different sets of uploaded documents. Sam found out in
front of the client.

Sam is the firm's most enthusiastic AI user and its most exposed one. Sam is also the person
who gets asked, at 6pm, where a number came from.

## Goals

- "Deliver four engagements at quality without working six days."
- "Get analysts productive on day one of an engagement, not day four."
- "Never be surprised in front of a client."
- "Be able to show my partner how we got to a number."
- "Stop paying the context-reload tax four times a day."

## Pains

**1. Context is rebuilt from scratch, constantly.**
Every conversation with an AI starts empty. Sam re-uploads the same client documents,
re-explains the same constraints, re-establishes the same framing, four times a day, and
each analyst does it independently on top of that.
> **Cost:** Call it thirty to forty minutes a day of pure re-setup for Sam and comparable
> for each analyst. On a five-person engagement that is most of a billable day a week spent
> reintroducing the work to a tool. It is invisible because nobody codes it to a task; it
> just quietly lowers realisation.

**2. Two people on the same engagement do the same work, differently.**
Private chat histories mean parallel effort with no visibility, and no reconciliation until
something contradicts something.
> **Cost:** Duplicated hours, and worse, contradictory outputs reaching a client. The rework
> is billable to nobody. The credibility damage is not recoverable with a correction email.

**3. Nobody can reconstruct how a number was derived.**
The partner asks where the figure came from. It came from a conversation in an analyst's
private history, against documents that may or may not be the current versions, using a
model nobody recorded.
> **Cost:** Sam personally re-derives the answer before every partner review, which is the
> single most expensive recurring hour in the week. On a regulated or contested deliverable,
> the inability to show derivation means the AI-assisted work cannot be used at all, so the
> team does it twice: once fast, once defensibly.

**4. Knowledge leaves with the analyst.**
Engagements are staffed and unstaffed constantly. When an analyst rolls off, their working
context evaporates.
> **Cost:** The next analyst re-derives it, unbillably. Across a firm running 30 engagements
> with normal rotation, this is a standing tax on every staffing change.

**5. No idea what any of this is costing the engagement.**
Sam has a fixed-fee diligence with a tight budget and genuinely does not know whether AI
usage on it is a rounding error or a margin problem.
> **Cost:** Sam either under-uses AI on the engagement that would benefit most, out of
> caution, or over-uses it on a fixed fee and finds out at the end. Both are bad, and the
> first one is the expensive one, because the opportunity cost of not using AI on a
> two-week diligence is enormous.

## How ParleHub answers it

**Pain 1 — context reload.** A project is the unit, not a chat. Project files live with the
project, and the agent can search, read, and reason over them directly with real tool calls
**[LIVE]**: grep and glob and semantic search, outline, structured JSON and YAML queries,
spreadsheet filter and aggregate over Excel and CSV, and PDF, Word, and PowerPoint converted
to searchable markdown. Sam stops re-uploading because the documents were never uploaded to a
chat in the first place; they belong to the engagement.

**Pain 2 — duplicated and divergent work.** Shared project threads visible to every member
in real time, with live presence showing who is viewing, typing, or waiting on a response
**[LIVE]**. An analyst can see that the question was already asked this morning, and read the
answer, instead of asking it again against a different document set.

**Pain 3 — derivation.** The whole exchange lives in the shared thread: the question, the
files the agent actually opened, the reply, and which model produced it. Branching by
edit-and-resend **[LIVE]** keeps the original when someone explores an alternative, so the
path is preserved rather than overwritten. Precise, auditable edits, exact find-and-replace
and diffs rather than silent rewrites **[LIVE]**, mean a reviewer can see what changed in a
document. *Honest limit:* this is a retained, searchable, reviewable history, not per-claim
citation or a provenance export. See Unmet needs.

**Pain 4 — knowledge walking out.** The history belongs to the project, not the person.
Keyword and semantic search across every project conversation **[LIVE]** means the incoming
analyst reads what was already worked out. A personal chat that turns out to matter can be
promoted into the shared project **[LIVE]** rather than stranded.

**Pain 5 — cost visibility.** Project-scoped budgets with pre-flight enforcement **[LIVE]**:
the send is blocked before it exceeds the engagement budget, with an 80% warning ahead of it,
and a one-click increase request routed to an admin so Sam is not blocked with no path
forward. Per-project usage analytics **[LIVE]** turn "I have no idea" into a number Sam can
put in front of a partner mid-engagement rather than after it.

## Unmet needs

- **Per-claim citation.** Sam's actual ask is "click the number, see the cell in the source
  file it came from". We retain the conversation and the tool calls, which is far better than
  a private chat, and it is not the same thing as a citation trail. *Confirmed gap, and the
  most commercially important one in this folder.*
- **A defensible export of a thread.** For a contested deliverable, Sam wants to hand the
  partner or the client a self-contained record of how the analysis was produced. *Verify
  whether any conversation export exists.*
- **Budget visibility scoped below the project.** Sam runs one engagement with four
  workstreams and wants to see which workstream is consuming. Budgets are project-scoped.
  *Confirmed gap; the workaround is a project per workstream, which fragments the shared
  context that is the point of the product.*
- **Templates for a repeated engagement type.** Sam runs commercial due diligence over and
  over with the same structure. Standing up project six should not start from an empty
  project. *Verify.*
- **A notification when a teammate's thread touches Sam's engagement.** Notifications exist
  **[LIVE]**; whether they cover this specific case is unverified.

## Objections

**"My analysts will not use another tool."**
They will use the one where the files already are and where the answer they need is already
written. The adoption risk is real and it is mitigated by starting with one engagement, not
by a firm-wide rollout memo.

**"I do not want my partner reading my half-formed prompts."**
Fair, and the honest answer is that this is a real cultural shift. Personal chats stay
personal until promoted into a project. Practically, the firms where this lands are the ones
that decide visible prompting is a teachable skill rather than an embarrassment.

**"We are not allowed to put client documents in another system."**
Then do not. Files can stay in the firm's own SharePoint site, and the model call runs under
the firm's own provider key.

## Testimonial *(simulated; figures illustrative)*

> "I run four clients at once and I used to spend the first twenty minutes of every switch
> re-explaining the engagement to a chat window. Now the project already knows its own
> documents and I can read what my analyst worked out this morning instead of asking the
> same question again. Two of them once handed a client contradictory market sizes from two
> private tabs. That cannot happen now, because there is one thread and we are both in it."

## Buying signals

- Sam has personally paid for an AI subscription and expensed it.
- An analyst rolled off mid-engagement and left nothing behind.
- A partner asked "where did this number come from" and got a slow answer.
- The firm just took on a fixed-fee engagement where AI is the only way the margin works.
- Sam is running three or more concurrent engagements. Below two, the pain is not acute.
