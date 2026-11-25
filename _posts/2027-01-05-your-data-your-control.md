---
layout: post
title: "Your Data, Your Control: Explore, Forget and Switch Off Project IQ"
date: 2027-01-05 10:00:00 -0400
categories: [Product News, Project IQ, Privacy]
tags: [project-iq, privacy, data-controls, erasure, retention, parlehub]
author: Parle Team
description: "People can see what Project IQ holds about them, authorized users can forget items for good, and admins can exclude sources, set retention and switch it off."
---

*Part 10 of Project IQ series. A system that remembers has to be able to forget, and it has to be able to show you what it remembers first.*

Any tool that gathers the traces of work, meetings, names, documents and decisions, raises the same three questions from the people it describes. What do you have on me? Can you delete it? And will it come back next week? Most products answer the first with a support ticket, the second with a promise, and the third with silence.

## Where privacy controls usually fail

### 1. The Unreadable Record

People cannot see what is held about them, so they cannot judge it or object to it.

### 2. The Delete That Isn't

An item is removed from the screen and re-imported on the next sync. The system forgot only until it noticed.

### 3. The All-or-Nothing Switch

The choices are everything or nothing. A firm that wants to keep a sensitive channel out of the system has to turn the whole system off.

## See what Parle holds

**What Parle knows about me.** Any person can open a page that shows what Project IQ holds about them: the meetings, items and links that mention them, and what is derived from those. It is the person's own view of themselves, with counts only where the person asks to see them.

**Explore a project, a client or a department.** Authorized users can see what the graph holds about a project, a client or a department in the same way, and act on what they are allowed to act on.

## Forget, and stay forgotten

Forgetting is a two-step action. First **preview**: Parle shows counts only, such as "1 meeting, 3 summaries, 14 links, 2 excerpts." Then **forget**, which acts on exactly what was previewed; if the scope has changed since, it refuses and asks for a new preview.

A forget removes the item, its links, its stored excerpts and what was derived from it. It also writes a **tombstone**: a record, holding no content, that tells every part of the system that this item was removed on purpose. A later sync, upload, reindex or extraction checks the tombstone first and drops the item instead of recreating it. An automated test fails the build if any writer of the graph forgets to check.

Who may forget what is explicit. A person forgets what is theirs. A project administrator forgets items shared into their project. An Org Admin forgets across the organization and can carry out an erasure of one person's data. The Business Admin role has no forget right. Every forget is recorded in the audit log by identifier and reason, never by content. A tombstone can be lifted by the same authority, with one exception: a tombstone a person wrote for their own data, or an erasure request, can be lifted only by that person or an Org Admin, so no one can re-import what someone asked to have erased.

Confirmed decisions and action items are the firm's records and are kept, with their link to the removed source cut.

## Draw the boundary yourself

**Switch the graph, or one source, on or off.** An administrator can turn off Project IQ entirely, or turn off a single source of data. Turning a source off hides what came from it; a separate action deletes it.

**Exclusions.** Name the channels, sites, mail domains or addresses that must stay out of the graph, and Parle keeps them out.

**Retention.** Set how long unconfirmed items are kept; confirmed records are retained.

**Export.** What Project IQ holds, including decisions, actions, tasks and deliverables, is part of the organization's data export, so no table is left out silently.

## What forgetting does not do

We state the limits because a quiet limit is a broken promise. Forgetting does not reach into past model replies already given in conversations. A name that appears in another meeting's transcript stays there unless that meeting is forgotten too.

## Why we built it

The case for Project IQ is that it gives a firm back its memory. That case holds only if the people in the memory can see it, correct it and, when appropriate, remove it. Controls that are available on day one are what make it reasonable to switch it on.

## Availability

These controls are available with Project IQ on Business Elite and Enterprise. The administrator export of one person's data in response to a subject access request is still being completed.

Next and last in the series: [built so it cannot score your people](/blog/2027/01/07/built-so-it-cannot-score-your-people/). Start with the [introduction to Project IQ](/blog/2026/11/24/introducing-project-iq/), or read about [how we handle audit](/blog/2026/08/14/append-only-or-it-didnt-happen/).
