---
layout: post
title: "Corrected at the Source: Why AI Should Point at Your Document Library, Not Copy It"
date: 2026-09-08 10:00:00 -0400
categories: [AI Governance, Knowledge Management, Enterprise Tech]
tags: [knowledge, citation, document-governance, sharepoint, parlehub]
author: ParleHub Team
description: "Uploading your policies into an AI tool creates a second copy that goes stale silently. The safer build points at the library you already maintain and cites what it quotes."
---

Somewhere in your organization there is a folder that holds the actual company. Not the org chart, not the intranet, the folder: the methodology deck that took four years to get right, the pricing policy with the exception nobody remembers the reason for, the security questionnaire responses, the onboarding handbook, the eleven-page document explaining how this firm scopes a fixed-price engagement.

The moment any firm gets serious about AI, someone proposes putting that folder into it. The proposal is right. The usual implementation of it is the problem, because it almost always begins with the word *upload*.

*What exactly have you built, the second there are two copies?*

Consider how a working ship handles this. A nautical chart is not a static object; corrections arrive continuously, and a navigator applies them by hand to the chart in the drawer. The chart is authoritative because it is the one that gets corrected. The dangerous artifact is the photocopy somebody made last spring for convenience: perfectly legible, official-looking, indistinguishable from the real thing at a glance, and missing the shoal that was added in June. Nobody would run a vessel off a photocopy. Almost everybody is about to run their firm's expertise off one.

We built the document half of ParleHub around refusing to become that photocopy, and the refusal turned out to shape nearly every decision in it.

---

## Four Ways Firms Lose Their Own Knowledge to an AI Tool

### 1. The Second Copy

The upload works beautifully on day one. Nadia in the consulting practice asks how the firm handles scope changes on fixed-price work, gets the firm's real answer back, and everybody agrees this is the future.

In March somebody updates the policy where it actually lives, because that is where policies get updated, and the version inside the AI tool does not move. There is no error, no notification, and no visible difference in the quality of the answers. The tool keeps giving the March-superseded answer through April, May and June, and it gives it well.

A second copy is not a backup. It is a fork, and forks are only discovered by the person unlucky enough to act on the wrong branch.

### 2. The Rescinded Policy, Quoted Perfectly

Worse than stale is retired. A policy gets withdrawn, usually for a reason involving a lawyer, and somebody dutifully removes it from the list of documents in the AI tool.

Removing it from a list is a display decision. If the underlying passages are still in the index, the assistant can still find them, still quote them, and still name the document they came from, which makes the answer look *more* trustworthy than an uncited one. "Filtered from the interface" and "cannot be retrieved" are different guarantees, and only one of them survives a question from an auditor.

The failure here is uniquely bad, because the mechanism that makes a knowledge feature valuable, confident sourced quotation, is exactly the mechanism that makes the rescinded answer land.

### 3. The Answer Nobody Can Check

An assistant summarizes the firm's approach to something. The summary is fluent, plausible, and matches roughly what Tom in risk remembers. Tom cannot use it.

Not because it is wrong; because it cannot be checked. In client work, in a regulated filing, in anything that carries a signature, an unattributable answer has no standing. Somebody has to be able to say which document, which version, and which section, and to open it. Without that, the assistant has produced something that reads like guidance and functions like a rumor, and the sensible reader goes and finds the document anyway, which is the work the tool was meant to remove.

### 4. The Library Nobody Can Reach

The last one predates AI entirely. The folder exists, it is complete, and it is searchable only by filename and keyword, which means finding the scoping methodology requires knowing it is called *Delivery Framework v4 (final)*.

The observable consequence is that every engagement quietly reinvents the firm's method, slightly differently, and the four years that went into getting it right are re-spent at a discount, per project, forever. Nobody experiences this as a knowledge problem. They experience it as normal.

---

## What a Knowledge Feature Has to Get Right

### 1. Point at the Source, Do Not Become the Source

The primary path is not upload. It is binding: an administrator points at a library the firm already maintains, and the assistant reads from it. The source of truth does not move, does not get duplicated, and does not need a second custodian. Editing the policy where it lives is what updates the answers, and that sentence is the entire design.

Direct upload still has a place, for firms with no document library to point at. It is the fallback, not the default, and the distinction matters more than it sounds like it does.

### 2. Citation Is the Feature

Not a nice finishing touch on the feature; the feature. An answer that names the document, its version and the section it came from, and links back to it, is usable in a client deliverable. The same answer without those things is a starting point for research.

This is why documents are broken into passages with a citable anchor rather than absorbed whole. The unit of retrieval has to be the unit you can cite, or the citation is reconstructed afterwards, which is another way of saying invented.

### 3. Retirement Has to Be Structural

Marking a document superseded must make it genuinely unquotable, as a property of the index rather than as a rule that every future query path has to remember to apply. Retiring a document removes its passages, so there is nothing left to rank and nothing left to quote.

Carry it one step further, to where the answer is *read*: a citation sitting in a six-month-old message, pointing at a policy that has since been withdrawn, should resolve to nothing and render as inert text. The old conversation is history and stays intact. The retired policy does not get a second life through it.

---

## Where ParleHub Fits

That's precisely why we built **ParleHub** to treat the firm's documents and the firm's live numbers as two different features with opposite mechanics. Live state is [looked up fresh on every question](/blog/2026/09/01/looked-up-not-remembered/), because being current is what makes it correct. Documents are indexed and quoted, because being *attributable* is what makes them correct. **Org Knowledge** is the second half.

* **Bind the corpus to a library your firm already maintains.** An administrator points ParleHub at a SharePoint site or a Google Shared Drive through the organization's existing storage connection, and ParleHub reads it; the documents stay in [your own tenant](/blog/2026/08/01/your-ai-vendor-is-a-data-residency-decision/), under your retention and your access controls. The corpus is reconciled against the source on a schedule, so an edit made at source flows through without anyone re-uploading anything. This is the answer to *The Second Copy*: there is no second copy to diverge. Managed upload remains available for firms with nothing to bind to.
* **Every answer names the document, the version and the section, and links back.** The citable fields come from the document record and the indexed passage, never from the model's own prose, which is what makes them checkable rather than merely present. *The Answer Nobody Can Check* becomes an answer with a footnote you can click.
* **Retiring a document removes its passages from the index.** A withdrawn policy is not filtered from a list, it is gone from what can be retrieved, and a citation to it in an older message resolves to nothing rather than reopening it. *The Rescinded Policy, Quoted Perfectly* is closed at both ends.
* **The corpus is organization-wide, with a per-project opt-out, and it says what it is unsure about.** Any project that should not draw on it can be switched out, in which case the capability is neither offered nor served there. When a bound library stops being reachable, the administrators who can fix it are told rather than the corpus quietly aging.

One thing we put on screen rather than in documentation, because it is a real trust boundary and it belongs to you rather than to us: everyone who can write to the folder you bind is, in effect, contributing to what the assistant reads across the whole organization. Choose the location accordingly. We say so at the moment you choose it.

Org Knowledge is new, and we would rather describe it accurately than enthusiastically: it is built, it works end to end, and it has not yet been through the years of production mileage that the budgeting and storage side of ParleHub has.

***

Your firm already wrote down what it knows. The question is whether the copy your AI reads is the one that gets corrected.

**Want your own methodology answering questions instead of sitting in a folder?**  
[See how ParleHub handles enterprise storage and knowledge →](https://parlehub.com/security/)
