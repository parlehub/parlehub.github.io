---
layout: post
title: "Live Artifacts: Project Dashboards That Cost No Tokens to Open"
date: 2026-10-09 10:00:00 -0400
categories: [Product News, Live Artifacts, Cost Control]
tags: [announcement, live-artifacts, dashboards, integrations, parlehub]
author: ParleHub Team
description: "Describe a view once; ParleHub builds it, publishes it to the project, and refreshes it from your connected tools without calling a model each time someone looks."
---

*Describe the report you keep asking an assistant to rebuild. ParleHub builds it once, shares it with the project, and keeps it current without spending tokens every time a teammate opens it.*

**October 9, 2026:** ParleHub today announced **Live Artifacts**. A Live Artifact is a small, shared view inside a project, such as a status board, a weekly summary or a spend table, that reads current data from the project's connected tools. It is created in conversation, reviewed before it goes live, and costs nothing in model usage to view.

## Why this matters

Ask a team how they use AI for reporting and a pattern appears. Someone asks the assistant to pull this week's numbers and format them. The answer is good. Next Monday someone asks again. Each repeat is a fresh model call, priced as if it were new work, producing a snapshot that is out of date the moment it lands in a thread.

A question that gets asked weekly is not a conversation. It is a report, and a report should be built once.

## What a Live Artifact is

Two things published together. The first is a **view**: a page that shows the data. The second is a **call spec**: a short, declarative list of which connected tools to read, with what arguments, and which parts of the results the view is allowed to see.

You describe what you want to the artifact builder in an ordinary conversation. It drafts both parts, tests them against your real data, and shows you a preview with that data in it. Nothing is visible to the rest of the project until you publish.

Once published, opening the artifact **does not involve a model at all**. ParleHub runs the spec, caches the result for a period you control, and renders the view. A hundred people opening it costs the same in tokens as one: none.

## What keeps it safe

### 1. It can only read

Every tool an artifact may call is a read tool, and the list of permitted tools is set by an administrator. An artifact cannot write to QuickBooks, close a ticket or change a record. The data it reads reaches the view only as values, and only the fields the spec names.

### 2. It runs on shared access, never one person's

An artifact uses the organization's or project's connection to a tool, not a member's personal credential. A shared view must not quietly run on one colleague's permissions. Disconnect the tool and the next run stops, along with the cached copy.

### 3. The view is boxed in

The view renders in a sandboxed frame with a strict content policy, and a static check refuses any markup that tries to navigate away or reach beyond the frame. It is a page that shows a table. It is not a program with a door.

### 4. It tells you when the data changes shape

Tools change their output. When a connected tool starts returning data in a different structure, the artifact shows a banner saying so, rather than quietly presenting half a picture. A project writer can start a **Repair** in one click, which hands the builder what changed and produces a fixed draft for review. The fix is published only when a person says so.

### 5. You can see whether anyone looks

Each artifact counts its daily active viewers, and the organization sees which artifacts are used most. A dashboard nobody opens can be retired. One everyone opens is clearly worth the effort of keeping current.

## Why we built it

The cheapest token is the one you never spend, and the most expensive use of AI is asking the same question again. A Live Artifact turns a repeated question into an asset that belongs to the project, with the work done once and the answer available to everyone.

ParleHub is paid for by the seat, not the token, so we have no interest in a design that makes people call a model more often. Artifacts are the opposite of that: the value goes up each time someone opens one, and the cost does not.

## Availability

Live Artifacts are live now for Business Elite and Enterprise organizations with integrations enabled. Building and repairing an artifact is a managed feature: it runs on a model ParleHub hosts and draws on the organization's credit balance, a trade-off that lets us guarantee availability and quality for it. An organization that otherwise brings only its own keys enables managed models for this one purpose. Viewing and publishing never call a model, and the library of supported tools is growing.

## About ParleHub

ParleHub is a shared workspace for AI conversations, built for organizations that bill by client or engagement. Projects hold shared threads every member can see live, each with its own budget and expense code, on provider keys you bring or models ParleHub hosts. Learn more at [parlehub.com](/) or see [pricing](/pricing/).

***

**Tired of paying for the same weekly report twice?**  
[Build your first Live Artifact on ParleHub →](https://app.parlehub.com)
