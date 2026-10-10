---
layout: post
title: "Introducing Research Tasks: Hand Over the Brief, Get Back a Deliverable, Within a Budget You Set"
date: 2026-10-01 10:00:00 -0400
categories: [Product News, Research Tasks, Cost Control]
tags: [announcement, research-tasks, budgets, agents, parlehub]
author: Parle Team
description: "Research Tasks work a brief for hours or days against a spending limit you set, check their own work against your criteria, and deliver a document to the project."
---

*A new kind of AI work for long jobs: you state the goal, the acceptance criteria, the due date and the most you are willing to spend. Parle does the rest and files the result with the project.*

**October 1, 2026:** Parle today announced **Research Tasks**, a way to give the platform a long, defined piece of work and walk away from it. A task takes a goal, ordered acceptance criteria, a due date and a spending limit. It then works unattended, for as long as the job needs, and delivers a written document into the project.

## Why this matters

There are two ways AI is used on research today, and both have a cost problem.

The first is the long chat. Someone pastes a question, reads the answer, asks a better question, and repeats for three hours on the most expensive model available. Nobody budgeted the three hours, the spend sits against a person, and the reasoning is spread across a thread nobody else will read.

The second is the unattended agent, which fixes the attention problem and creates a new one. Nobody is reading, so nobody notices the loop that keeps going, the tool it should not have touched, or the bill that arrives with an explanation attached.

A task that runs for hours with nobody watching needs every control a watching person would have supplied, written down in advance.

## How a Research Task works

You supply four things: the **goal**, the **acceptance criteria** a good answer must meet, a **due date**, and a **spending limit**. The task then moves through a fixed loop.

1. **Plan.** A fast, inexpensive model breaks the goal into numbered sub-questions.
2. **Gather.** A mid-tier model searches the project's files, reads from the project's connected tools (Confluence and monday.com today) where a project administrator has left that switched on, and searches the web where the organization allows it. Connected tools are read once, at the start, and the web search never sees what they returned.
3. **Answer.** Each sub-question is answered separately from its own slice of the evidence.
4. **Critique.** A stronger model, starting from a fresh context so it is not marking its own homework, checks the answers against your criteria one by one. If a criterion fails, the task goes back and gathers again. It does this up to a fixed number of times.
5. **Deliver.** The strongest model writes the final document, which is saved as a Markdown file in the project, with a closing summary in the task's conversation.

The cheap model does the cheap work and the expensive model does only the part that needs it. That split is the point.

## The controls that replace a person watching

### 1. A spending limit that shapes the work

At 85% of the limit, the task stops gathering and writes up what it has. If the limit is reached, it stops and assembles a deliverable from the work completed, rather than producing nothing. The due date works the same way: the task begins its write-up before the deadline, with margin, instead of overrunning it.

### 2. The project budget still applies

A task's spend is checked against the project's own headroom before every model call. A task cannot spend money the project does not have, and it counts against the same ledger, project code and CSV export as every other conversation.

### 3. A sandbox with one writable folder

A task can read the project but writes only into its own folder. It cannot edit your files, and anything it was told by a web page or document cannot change that. Connected tools are read-only, and which of their reads a task may use is set by an administrator. Promoting a deliverable into the project proper is done by a person.

### 4. It pauses instead of failing

If the organization's credit balance runs out mid-task, the task pauses and records exactly how much it needs, then resumes when topped up. It does not run on credit it does not have.

## Why we built it

Our customers asked for the long, slow work that a chat is bad at: the market scan, the precedent search, the competitor read, the due-diligence first pass. These jobs are where AI spend grows fastest and where it is least accountable, because the work is large and the reading is thin.

Parle is paid for by the seat and the governance, not by the token. A task that fits a stated budget, shows its plan, and tells you what it checked is exactly what a firm that cares about the cost of a deliverable would want. We make our money when you trust the result, not when the job runs long.

## Availability

Research Tasks are available on Business Elite and Enterprise plans. Research Tasks are a managed feature: they run on models Parle hosts and draw on the organization's credit balance, a trade-off that lets us guarantee the availability and quality a long unattended job needs. An organization that otherwise brings only its own keys enables managed models for this one purpose. Research Tasks are new, and the deliverable should be reviewed the way any research draft is.

## About Parle

Parle is a shared workspace for AI conversations, built for organizations that bill by client or engagement. Projects hold shared threads every member can see live, each with its own budget and expense code, on provider keys you bring or models Parle hosts. Learn more at [parlehub.com](/) or see [pricing](/pricing/).

***

**Have a long piece of research you would rather budget than babysit?**  
[Try Research Tasks on Parle →](https://app.parlehub.com)
