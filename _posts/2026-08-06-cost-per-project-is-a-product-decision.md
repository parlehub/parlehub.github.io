---
layout: post
title: "Cost Per Project Is a Product Decision, Not an Accounting One"
date: 2026-08-06 10:00:00 -0400
categories: [AI Governance, FinOps, Enterprise Tech]
tags: [cost-attribution, finops, budget, roi, parlehub]
author: ParleHub Team
description: "Knowing what AI costs per project only matters if it changes what you build. Attribution is a decision-making tool, not a reporting one."
---

Every organization past a certain size has an AI initiative that has never been evaluated. It launched eighteen months ago with a name and a slide. It has a channel, a lead, a standing item on a monthly agenda, and a quiet daily draw on the budget. Nobody has ever put a number beside it and asked whether that number was worth paying.

This is not neglect. The number does not exist in a form anyone could act on. The provider invoice arrives as one figure, finance codes it to overhead, and the initiative continues, because continuing is free and cancelling requires evidence.

*When did your organization last cancel an AI project?*

For most, the honest answer is never. Not because every initiative earned its keep, but because nothing surfaced that would force the conversation. We have argued that AI spend needs to be [tracked and budgeted at the project level](/blog/2026/07/24/why-enterprise-ai-needs-project-level-tracking/) rather than in aggregate. That argument was about visibility; this one is about what visibility is *for*, and the answer is not a better report.

Consider a restaurant that knows exactly what it spent at the wholesaler last month and has no idea what any single dish costs to produce. It can file accurate accounts. It cannot design a menu. It cannot tell which plates carry the kitchen and which are quietly subsidised by them, and it cannot decide what to stop making. The grocery bill is a true number that supports no decision at all.

Most enterprises are running their AI portfolio off the grocery bill.

---

## Four Ways Cost Stops Being a Decision

Aggregate spend is not merely less useful than attributed spend. It actively removes choices from the table, in four recognisable ways.

### 1. The Pilot That Cannot Fail

An initiative launched without a cost figure can never be shown to have failed on cost. Its sponsor can point to engagement, to enthusiasm, to a handful of anecdotes. Nobody can produce the counter-evidence, because the counter-evidence would be a per-initiative number and no such number exists.

The result is a portfolio that only ever grows. Pilots are added each quarter and none retired, not because they all work, but because the organization has no mechanism for concluding that one does not. Every mature company reviews its capital projects. Very few review their AI portfolio, because a review with no numbers is just a meeting.

### 2. AI as Weather

When cost cannot be attributed, it stops being read as a consequence of anyone's choices. It becomes environmental, something that happens to the company rather than something the company does. Spend rose 30% this quarter the way rainfall rises: noted, unexplained, absorbed.

Teams behave accordingly. Devan, who runs a document-classification workflow, has no way of knowing whether their nightly reprocessing job is a rounding error or the single largest line in the department. Nobody is being careless. The feedback that would let anyone be careful was never wired up.

### 3. The Orphan Budget

In many organizations, AI cost is paid by a central platform team while the value is consumed by everyone else. The platform team holds a budget it does not control the consumption of. The consuming teams make requests against a resource that appears, from where they sit, to be free.

This is the oldest failure mode in shared infrastructure, and the outcome is predictable. Demand rises to meet whatever the platform team can absorb, that team's budget becomes the de facto ceiling on company-wide adoption, and the annual argument is about their line item rather than about whether any specific piece of work deserved the spend. The cost sits in the wrong place to inform the decision that caused it.

### 4. Return With No Denominator

The most common AI business case in circulation names a benefit and omits a cost. It says the workflow saves eleven hours a week. It does not say what the workflow cost to run over the same period, because that figure was never isolable.

A return figure without a denominator is not a weak business case, it is not a business case. It cannot be ranked against another initiative or defended when someone senior asks the obvious question. Teams doing genuinely valuable work end up unable to prove it, which is worse than the wasteful pilot surviving, because it means the good work cannot be funded harder.

---

## Attribution Is a Decision-Making Tool

If cost data is going to change what an organization builds rather than merely what it reports, it has to satisfy three conditions. Each one is a design property of the system, not a reporting habit.

### 1. Cost Has to Land on Something You Can Cancel

Attribution is only actionable when the unit of cost matches the unit of decision. Organizations do not cancel people and they do not cancel months. They cancel initiatives, workstreams, engagements, and clients.

Per-user attribution fails this test, hardest for the people doing the most valuable work. Rae is on four client accounts this week. Attributing their consumption to their name produces a number that describes nobody's decision. Split it across the four engagements and every figure becomes something a manager can act on.

### 2. The Number Has to Arrive While the Decision Is Still Open

A cost figure delivered after the money is spent is history. A cost figure delivered against a limit, before the spend occurs, is a control.

A monthly report tells you an initiative overran. A ceiling enforced at the moment of the request means the overrun does not happen, and somebody is prompted to decide whether this particular piece of work justifies more budget. The first produces a variance to explain. The second produces a decision, made by the person closest to the work, on the day it mattered.

### 3. Cost You Can Move Is Cost You Can Price

This is the condition almost nobody designs for, and it is where the real money sits. A cost trapped in overhead can only be minimised. A cost attributed to a client, a matter, or an engagement can be *recharged*, *priced into a fee*, or *deliberately absorbed as an investment in an account*.

Any firm that delivers work for other companies already runs this discipline on every other input. Hours carry a client code. Disbursements carry a client code. AI is usually the only input in the building with no code on it, which makes it the only input the business cannot price. Give it the same code as everything else and it stops being a cost to squeeze, and some of it stops being your cost at all.

---

## Where ParleHub Fits

That's precisely why we built **ParleHub**. We treat the project as the financial unit, and we make the number arrive early enough to change the outcome.

* **Budgets are scoped to projects, not just to people.** A project maps to whatever you actually decide about: an initiative, an engagement, a matter, a client. Personal and organization-wide caps stack above as backstops. An initiative with its own ledger is one that someone can choose to stop, which is the answer to *The Pilot That Cannot Fail*.
* **Enforcement happens before the spend, not after it.** A request that would exceed the project's budget is blocked pre-flight, with a warning at 80% and a one-click increase request routed to an admin to approve or reject. A hard stop with a path through it turns *AI as Weather* back into a decision somebody makes.
* **Every project carries your own expense code.** Projects hold the code your finance team already uses, and it travels through to the export, so AI cost joins your client master on the same key as every other cost. That is what makes *Cost You Can Move* real rather than aspirational.
* **One ledger behind both the report and the enforcement.** Spend and token usage break down by project, person, provider, or model over any time range, with CSV export, drawn from the same canonical ledger the budgets enforce against. One number is the only way *Return With No Denominator* gets fixed.

Cost attribution is usually sold as a finance feature. It is not. Finance is merely where the number is stored. What attribution actually buys you is the ability to run an AI portfolio the way you run every other portfolio: funding the work that earns it, pricing the work that can carry it, and retiring the work that does neither.

You cannot design a menu from a grocery bill.

***

**Want to know what AI costs you per project, per client, per engagement?**  
[See how ParleHub budgets and attributes AI spend →](https://www.parlehub.com/pricing.html)
