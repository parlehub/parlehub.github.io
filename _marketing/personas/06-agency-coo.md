# 06. Toni Marchetti, COO, marketing and creative agency

**Rank: 6 (fast-moving buyer, lower deal value, best proof-point source).** Agencies decide
quickly, adopt AI enthusiastically, and are the segment most likely to convert from a free
tier without a security review. Lower contract value than legal or accounting, and far
better as a source of real testimonials to replace the simulated ones in this folder.

## Snapshot

| | |
| --- | --- |
| Role | COO / Head of Operations |
| Firm | Independent marketing and creative agency, 50 staff plus a rotating bench of freelancers |
| Scale | 12 to 18 client accounts, mostly monthly retainers, plus pitch work |
| Reports to | The founders |
| Controls | Operations budget, tooling decisions, resourcing |
| Buys | Fast. Will trial on a free tier this week and decide by the end of the month |

## Their world

Toni owns the number the founders care about: client profitability. Every account has a
retainer, a resourcing plan, and a slow leak of unbilled scope. Toni's job is finding the
leaks.

AI arrived without a decision being made. Copywriters use one tool, strategists use another,
a freelancer uses whatever they have. Nobody knows what any of it costs or which account it
was for. Two clients have already asked, in different words, whether their work is being
made by AI, and one has put a clause about it in the renewal.

Toni is not worried about a data breach the way Robin is. Toni is worried about margin, about
consistency, and about a client relationship going wrong over something avoidable.

## Goals

- "Know which accounts actually make money, at the account level, this month."
- "Stop scope creep from being discovered at quarter-end."
- "Onboard a freelancer in a day and remove them the day they finish."
- "Keep output consistent enough that the client cannot tell who wrote it."
- "Win more pitches without pitch costs eating the wins."

## Pains

**1. Account profitability is opaque, and AI made it worse.**
Toni already fights to attribute time to accounts. AI spend is a new input with no account
code at all.
> **Cost:** Retainers that stopped being profitable are discovered a quarter late, which is a
> quarter of margin gone and a renegotiation that starts from a weak position. The
> opportunity cost is real too: Toni cannot tell which accounts AI makes more profitable, so
> cannot argue for repricing the ones where it does.

**2. Freelancers need access to one account for six weeks.**
The bench rotates constantly. Today a freelancer either gets broad access to systems or works
in their own tools with the client's material.
> **Cost:** Over-access on one side, uncontrolled data handling on the other, and either way
> an offboarding step that gets skipped. When a client asks who has touched their brand
> assets, the answer is a list Toni has to reconstruct.

**3. Output consistency varies by whoever is holding the keyboard.**
Three copywriters using three tools with three private prompt habits produce three voices.
> **Cost:** Extra revision rounds, which on a fixed retainer are unbilled. The good prompt
> that nails the client's tone exists in one person's history and never becomes the agency's.

**4. Pitch work is unbilled, AI-heavy, and invisible.**
Pitches consume real effort and now real model spend, against no revenue.
> **Cost:** Cost of sale rises without appearing anywhere. Toni cannot compute a true cost
> per pitch, so cannot decide which pitches to decline, which is the highest-leverage
> decision an agency makes.

**5. Clients are starting to ask about AI in writing.**
Some want disclosure. Some restrict it. One wrote it into a renewal.
> **Cost:** Without a describable practice, Toni either over-promises and breaches, or
> under-promises and gives up the efficiency. Renewals are where this gets expensive.

## How ParleHub answers it

**Pain 1 and 4, account and pitch economics.** A project maps to an account, and a pitch
gets its own project. Project-scoped budgets **[LIVE]** cap spend where the work happens,
with an 80% warning and pre-flight blocking rather than a surprise. Usage and spend analytics
**[LIVE]** break it down by project, person, provider, and model with CSV export, which is
the number Toni takes into a renewal conversation.

**Pain 2, the freelance bench.** Four-level RBAC **[LIVE]** with per-project membership, so
a freelancer is a member of one project and sees one account. Restricted project visibility
**[LIVE]**, Enterprise tier. Access tied to the identity provider through Entra ID
**[LIVE]** or Google Workspace **[LIVE]** SSO, so removing them is one action in the
system Toni already uses.

**Pain 3, consistency.** Shared project threads visible to every member in real time
**[LIVE]** plus keyword and semantic search across the account's whole history **[LIVE]**.
The prompt that nailed the client's tone is in the account's thread where the next writer can
find it, rather than in one copywriter's private tab. A personal chat that turns out to be
the good one can be promoted into the shared project **[LIVE]**.

**Pain 5, client questions.** The practice becomes describable: work happens in the
account's project, against the account's files, under the agency's own provider keys
**[LIVE]**, with the history retained and reviewable. If the client requires that their
material not sit in a third-party system, project files can live in the agency's own
SharePoint **[LIVE]** or Google Shared Drive **[LIVE]**.

## Unmet needs

- **A per-project voice or brief that the assistant always applies.** This is Toni's most
  obvious ask, and probably the single highest-value gap for the agency segment: set the
  client's tone, brand rules, and do-not-say list once at the project level. *Verify with
  product whether project-level instructions or a system prompt exist. If they do not, this
  belongs near the top of the roadmap for this segment.*
- **Image generation.** A creative agency will ask in the first ten minutes. The product
  handles images and PDFs as input through vision; generation is a different thing. *Verify,
  and do not imply it.*
- **A guest or external collaborator access model.** Freelancers are not employees and do not
  belong in the firm's identity provider. Today they consume a seat and need an account.
  *Verify how external collaborators are handled; this is a practical adoption blocker.*
- **Slack integration.** Agencies live in Slack. *Confirmed gap.*
- **A client-facing AI disclosure statement.** Toni wants something to attach to a renewal.
  *Confirmed gap.*

## Objections

**"My creatives will hate a governed tool."**
They will hate a tool that makes their work worse. Shared threads are the part creatives
actually like, because the good approach stops being invisible. Lead the pitch to an agency
with collaboration and consistency, not with governance. Governance is what Toni tells the
founders.

**"We are too small for budgets and roles."**
Then start on the free tier with one account, and revisit when a client asks the AI question
in writing. Which they will.

**"We use five different AI tools and they all work fine."**
Individually, yes. The question is what any of them cost on the Henderson account last month,
and which of the five holds the prompt that gets that client's tone right.

## Testimonial *(simulated; figures illustrative)*

> "I could tell you the hours on every account and nothing about the AI spend, which had
> quietly become a real number. Now it sits against the account like everything else, and one
> retainer turned out to be losing money in a way we could finally point at during the
> renewal. The unexpected win was consistency. The prompt that gets a client's voice right
> lives on the account now, not in one copywriter's browser."

## Buying signals

- A client renewal arrives with an AI clause.
- The agency is bringing freelancers onto an account with sensitive brand material.
- Founders ask for account-level profitability and the answer takes two days to produce.
- Copy revision rounds are increasing without an obvious cause.
- The agency has just lost or nearly lost an account over inconsistent output.
