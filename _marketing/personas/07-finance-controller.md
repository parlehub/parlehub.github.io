# 07 — Dale Fontaine, Financial Controller, professional services firm

**Rank: 7 (influencer, and the strongest business case writer in the building).** Dale will
not champion ParleHub unprompted and will enthusiastically build the numbers that justify it
once someone else raises it. The "AI timesheet" framing is Dale's language, and Dale is who
converts it into a business case the partners approve.

## Snapshot

| | |
| --- | --- |
| Role | Financial Controller / Finance Director |
| Firm | 100 to 200 person professional services firm |
| Scale | Monthly close, quarterly partner reporting, annual audit |
| Reports to | The CFO or directly to the managing partner |
| Controls | The general ledger, the chart of accounts, and what the partners believe about margin |
| Buys | Nothing directly. Signs off on the business case, or declines to |

## Their world

Dale closes the month, reports practice-level profitability, and answers "why is this line up
28 percent" at the partner meeting. Everything in the firm is allocated to a client and an
engagement. That discipline is the business.

Three AI invoices now arrive monthly from three providers, plus a scatter of $20 personal
subscriptions on expense reports. All of it lands in general overhead, because there is
nothing on the invoice that says which client caused it. Dale finds this genuinely irritating
in a way that is more about principle than about the amount, though the amount is growing at
a rate that will make it a real line within a year.

## Goals

- "Allocate every cost to the client that caused it."
- "Forecast within tolerance. No surprises at close."
- "Close the month faster, with fewer manual reconciliations."
- "Recover recoverable costs. Absorbed cost is margin we gave away."
- "Give the partners numbers they trust enough to act on."

## Pains

**1. AI invoices are unallocatable at source.**
The provider bills the firm one number. Nothing in it identifies a client, an engagement, or
a practice group.
> **Cost:** The cost falls into general overhead and gets spread by an allocation formula,
> which means practices that barely use AI subsidise the ones that use it heavily. Every
> practice-level profitability number is quietly wrong, and the partners are making
> resourcing decisions on it.

**2. Metered spend is unforecastable.**
Usage-based cost with no ceiling is the opposite of how Dale plans.
> **Cost:** Variance at close that Dale has to explain rather than predict. The defensive
> response is to over-budget, which is its own waste, or to push for a ban, which costs the
> firm the capability.

**3. Personal AI subscriptions on expense reports.**
Small amounts, scattered, coded inconsistently.
> **Cost:** Trivial in money and material as a control weakness, which is exactly the kind of
> finding an auditor writes up. The firm is a purchaser of software through an expense
> channel that has no approval, no contract, and no data terms.

**4. Recoverable cost is being absorbed.**
Many engagement letters allow pass-through of direct costs. AI is a direct cost of delivering
the work.
> **Cost:** Real cash the firm is entitled to recover and does not, purely because there is
> no per-client record to support the recharge. On a firm spending meaningfully on AI, this
> is a direct margin line left on the table.

**5. Close is already too manual.**
Anything new that requires a spreadsheet and a judgement call makes close longer.
> **Cost:** Days at close, every month, forever.

## How ParleHub answers it

**Pain 1 and 4 — allocation and recovery.** Usage and spend analytics **[LIVE]** grouped and
filtered by project, person, provider, or model, over any time range, with CSV export. The
project is the engagement, so the export is a per-engagement cost record. It is backed by the
canonical token ledger, the same source that budgets enforce against, so the reporting number
and the enforcement number are not two different numbers that need reconciling. That is the
AI timesheet: consumption attributed to the engagement that caused it, in a format that
supports both allocation and recharge.

**Projects carry a project code field for expense reporting** **[LIVE]**, confirmed by the
site owner 2026-08-05. This matters more than it sounds. It means the allocation does not join
on a project *name*, which drifts and gets renamed and never matches the client master. It
joins on the code the firm already uses. For Dale this is the difference between an export
that needs a judgement call every month and one that reconciles.
> *One thing still to confirm before this becomes headline copy: does the project code appear
> as a column in the analytics CSV export?* If it does, the allocation story is complete end
> to end and should be said plainly on the site. If the code lives only on the project record
> and the export keys on name, Dale still has a manual join and we should describe it more
> carefully. See open questions in `pain-point-map.md`.

**Pain 2 — forecastability.** Project-scoped budgets with pre-flight enforcement **[LIVE]**
turn an open-ended variable into a bounded one. The send is blocked before it exceeds the
budget, with an 80% warning ahead of it and a self-serve increase request routed to an admin
so the control does not simply stop the work. Personal per-user and org-wide caps stack above
that as backstops. For Dale the point is not the cap; it is that the maximum is now a number
Dale sets rather than a number discovered.
> Language discipline: it is a **hard block**, not throttling, and there is no automatic
> downgrade to a cheaper model. Do not soften this.

**Pain 3 — expense sprawl.** Consolidation onto a firm account with SSO through Entra ID
**[LIVE]** or Google Workspace **[SHIPPED]**, with subscription billing through Stripe on
Free, Team, or Enterprise tiers **[LIVE]**, and bring-your-own-key so model consumption runs
on the firm's own provider contracts rather than on personal cards.

**Pain 5 — close.** One export in a consistent shape, from one system, rather than
reconciling three provider invoices against a pile of expense claims.

## Unmet needs

- **One invoice.** Dale's ideal is a single vendor bill with client-level detail on it,
  rather than BYOK across three provider accounts plus a subscription. That is precisely what
  managed prepaid credits would give, and managed credits are **[ROADMAP]**. Do not promise
  them to this persona; Dale will remember it. The honest positioning today is that BYOK
  means paying providers directly at cost with no markup, which is an argument Dale
  understands, and for an Azure-native firm, Azure OpenAI consolidates it into an existing
  Azure bill.
- **A general ledger or ERP export.** CSV is the format; a mapped journal or an integration
  with the accounting system is the want. *Confirmed gap.*
- ~~A client or cost-centre code on a project.~~ **Resolved 2026-08-05: projects carry a
  project code field for expense reporting [LIVE].** Kept here as a record of the change.
  Residual question is whether that code flows into the analytics CSV export.
- **Run-rate and forecast projection.** Analytics report the past. Dale wants "at this rate,
  this engagement lands at X". *Verify.*
- **Reconciliation against the provider invoice.** Our ledger is our measurement of
  consumption. Dale will want it to tie to what Anthropic or OpenAI actually billed.
  *Verify; expect a variance question and have an answer.*
- **Approval thresholds beyond budget increases.** *Verify.*

## Objections

**"Our token ledger will not tie to the provider invoice."**
A fair and specific question. *Verify the answer before responding; do not improvise a
tolerance figure.*

**"This is a cost to control a cost."**
The subscription is fixed and small relative to the consumption it governs, and BYOK means no
markup on the consumption itself. The recovery argument usually settles it: if the firm can
recharge even a portion of AI as a direct cost, the platform pays for itself out of a line
the firm currently absorbs entirely.

**"Can we not just set a spend cap at the provider?"**
You can, at the account level, which tells you nothing about which client caused it and stops
everyone at once when it trips. Per-project caps stop the project that overspent.

## Testimonial *(simulated; figures illustrative)*

> "Three provider invoices a month, all of it landing in overhead, and a scatter of personal
> subscriptions on expense claims. Practices that barely touched AI were subsidising the ones
> that lived on it, and every profitability number I reported was quietly wrong. Now every
> project carries our expense code, and it exports from the same ledger the budgets enforce
> against, so what I report and what the system blocks on are one number. Close is shorter."

## Buying signals

- AI invoices cross the threshold where they need their own general ledger account.
- An auditor or the partner group asks what AI costs per practice.
- The firm is moving to fixed or value-based fees and needs input costs.
- Expense-report review flags personal software subscriptions.
- Someone above Dale has proposed an AI tool and asked finance to build the case.
