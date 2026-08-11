---
layout: post
title: "A Project Name Is Not a Client Code: Why AI Cost Allocation Stalls Halfway"
date: 2026-08-12 10:00:00 -0400
categories: [FinOps, AI Governance, Professional Services]
tags: [cost-allocation, project-code, chargeback, budget, parlehub]
author: ParleHub Team
description: "Most firms that set out to allocate AI spend to clients get the numbers right and the labels wrong, then reconcile by hand every month until they stop."
---

A professional services firm can tell you what a courier run cost on a Tuesday in March and which client paid for it. Filing fees, expert witnesses, print production for a pitch, an hour of a second-year's time in six-minute increments. Each one arrives with an identifier attached, gets posted against an engagement, and turns up later on an invoice or in a margin report. The discipline is decades old, and it runs on codes rather than on descriptions.

Then the model provider's invoice arrives. One line. One number. Nothing on it names a client.

*Your firm can allocate an $18 courier run to a matter. What happens to $40,000 of model spend?*

We have argued before that [cost per project is a decision-making tool rather than a reporting one](/blog/2026/08/06/cost-per-project-is-a-product-decision/), and that a cost you can move is a cost you can price. That still holds. This post is about where firms get stuck on the way there, which is not the measurement. Plenty of teams end up with accurate per-project consumption figures and still cannot recharge a penny of it, because the numbers are labelled in the wrong language.

AI billing speaks in models, tokens, API keys, and workspaces. A services firm speaks in engagements, matters, job numbers, and clients. Between those two vocabularies sits a translation step, and in most firms that step is a person with a spreadsheet.

---

## Where the Translation Breaks Down

Four failure modes, in rough order of how far firms get before hitting them.

### 1. The Overhead Bucket

Costs that cannot be allocated get spread by formula, usually by headcount or by revenue share. That formula is a guess wearing the clothes of an accounting policy.

Consider a tax practice that ran four people through document review every week of the quarter, and an advisory practice that opened the tool twice. Under a per-head allocation, both are charged about the same. One practice is subsidising the other, neither knows it, and both practice leaders are making resourcing and pricing calls off a profitability number that is quietly wrong. The error does not stay in the ledger. It walks into the room where the decisions get made.

### 2. The Month-End Join

Firms that get past the overhead bucket usually land here, and here is where they stay. The AI tool reports usage by workspace or by project name, someone exports it, and once a month a person in finance opens that export beside the practice management system and matches the two columns by hand.

They are performing a lookup against free text. Names drift, because names are written for humans. "Q3 Diligence" in the AI tool is engagement 4412-07 in the billing system, until somebody renames the project mid-quarter and the earlier months stop matching.

A reconciliation performed once is a task. Performed every month, forever, by hand, it is a system, and it is the least reliable one in the building. It also fails silently, which is the worst property a financial control can have. Nobody discovers a bad match. They discover a margin number that felt slightly off and could not be traced back.

### 3. The Absorbed Pass-Through

Most engagement letters already permit recharging third-party costs. Firms do this routinely for research databases, travel, and outside services, because those costs arrive with evidence attached: an amount, a date, and a matter number.

AI spend satisfies the first two and fails the third, so it is absorbed by default. Not because anyone decided to absorb it, and not because the client would push back, but because nobody can produce the line proving which engagement consumed it. A cost you are contractually entitled to recover and do not recover is worse than one you cannot recover. You chose it once, by not coding it.

### 4. The Unpriceable Input

Fixed-fee, capped-fee, and value-based work is a growing share of what these firms sell, and all three require knowing what an engagement costs to deliver before anyone quotes it.

An input measured only at firm level cannot be priced into an individual engagement. That leaves two responses and both are expensive. Pad the fee to cover an unknown, and lose bids on price. Or discourage the team from using AI on the engagement where it would have compressed the most hours, and lose the margin you were protecting. Toma, who prices the fixed-fee work, does not need AI to be cheap. They need it to be a number.

---

## Allocation Is an Identifier Problem

Payroll has known this for fifty years. It pays people against employee numbers rather than names, which is why two people called the same thing both get paid, and why someone changing their surname on Monday still gets paid on Friday. The name is for the humans. The number is what the systems agree on.

AI cost needs the same treatment, and it comes down to three properties.

### 1. A Name Is Not an Identifier

A project name is a label chosen for readability, and it is expected to change. A code is an identifier, chosen for stability, and every downstream system treats it as a promise. Confusing the two is the most common design error in cost allocation, and it does not surface until the first rename.

If the workspace holds only a friendly name, every use of that data needs a translation performed by somebody who knows which name maps to which matter. That knowledge is undocumented, and it leaves when they do.

### 2. The Code Goes On at the Start, Not at Month End

A code applied when the project is created is a fact recorded at the point the work began. A code inferred four weeks later from a name and a memory is an assertion made by whoever had the file open, and its accuracy decays with every week between the spend and the guess. Attach it at the source and the reconciliation stops being work, because there is nothing left to reconcile.

### 3. It Has to Leave in a Form Finance Can Post

Coded data trapped in a vendor dashboard is still uncoded as far as the general ledger is concerned. The test takes one question: can you hand finance a file where the code is already on the row, or does somebody still have to put it there?

---

## Where ParleHub Fits

That's precisely why we built **ParleHub** around the firm's own coding rather than around a usage chart.

* **Every project carries your expense code, set on the project itself.** Your matter number, job code, or engagement code lives on the project from the moment it exists, alongside the name people actually read. It is a small field, and it is the one that ends *The Month-End Join*: the identifier is recorded at the source instead of reconstructed later from a label that has since changed.
* **The code travels with the spend into the export.** Usage and spend analytics filter and group by project, person, provider, or model over any date range, and the CSV export carries the project code out with the rows. Finance receives data that is already coded, which turns recharge and practice-level allocation into a posting exercise rather than an investigation, and takes AI out of *The Overhead Bucket*. That coded row is also the evidence *The Absorbed Pass-Through* was missing: an amount, a date, and a matter number, in the same shape as every other recharged cost.
* **The budget is scoped to the engagement, not the person.** A matter with three people on it has one number, and a senior working across four matters does not blur them into one. That per-engagement figure is exactly what *The Unpriceable Input* was asking for, and personal and organization-wide caps stack behind it as backstops.
* **The ceiling is a number you set, not one you discover.** A send that would take a project past its budget is blocked pre-flight, with a warning state at 80% ahead of it, and the blocked user requests an increase for an admin to approve or reject. Nothing is throttled and nothing is silently swapped to a cheaper model, so the number you priced against is the number that holds.

Reporting and enforcement read from the same token ledger, so the figure finance posts is the figure the budget was checked against.

***

Your firm decided a long time ago that every input worth buying is worth identifying. AI is the only one still going by name.

**Want AI spend that arrives already coded to the engagement?**  
[See how ParleHub scopes budgets and reporting to each project →](https://www.parlehub.com/)
