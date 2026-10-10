---
layout: post
title: "Parle Arrives in Microsoft Teams: Ask the Project, Right in the Channel"
date: 2026-09-21 09:00:00 -0400
categories: [Product News, Microsoft Teams, Collaboration]
tags: [announcement, microsoft-teams, collaboration, governance, parlehub]
author: Parle Team
description: "Mention Parle in a Teams channel and get an answer grounded in the bound Parle project, under the same budget, access rules and audit trail as the web app."
---

*New integration lets teams put a project's AI in the channel where the work is already being discussed, without opening a second tool or loosening a single access rule.*

**September 21, 2026:** Parle today announced its Microsoft Teams integration. A project administrator binds a Teams channel to a Parle project; from then on, anyone in the channel can mention **Parle** with a question and receive an answer drawn from that project's files, history and context.

## Why this matters

Most client work is discussed in a channel and produced somewhere else. The discussion happens in Teams. The AI conversation happens in a browser tab, in an account that belongs to one person, with the relevant context pasted in by hand. Half the time the answer never makes it back to the thread that needed it.

Moving the AI into the channel fixes that, and it creates a new risk. A channel is a room with a guest list, and the guest list is rarely the same as the list of people allowed to see a client's documents. An assistant that answers freely in a channel is a way for project knowledge to leave the project.

The integration is built around that risk.

## What the integration does

* **Answers where the question was asked.** A member mentions Parle in a channel thread and the reply arrives in that thread. Each Teams thread maps to one Parle conversation, so a follow-up continues the same exchange rather than starting a new one.
* **Reads the discussion first.** Before answering, Parle can read the last hour of the channel it was asked in, so "what did we decide about the indemnity cap?" is answered from what people actually said.
* **Binds a channel to a project.** A project administrator connects the channel from the Parle tab inside Teams. Until that happens, the channel is told that no project is connected and nothing else.
* **Shows the traffic to the people who run the project.** Each bound channel gets a read-only Teams Interactions section in the project's conversation list. Spend for those threads is visible to project administrators and above.

## What stays the same

A Teams question is an ordinary Parle turn. It does not get a looser path because it arrived through a chat window.

### 1. Identity is resolved, not assumed

The person asking is matched to a Parle user in the bound organization through their Microsoft account, and must be a member of the bound project. Someone who is not gets told so, and told whose job it is to fix it. A message from a person Parle cannot identify is dropped entirely; it is not stored or queued for later.

### 2. The answer only posts where it is safe to

Parle answers when the person asking is a project member and nobody in the channel is a guest or from outside the organization. If the channel has someone who is, the channel receives a link back to the conversation in Parle plus one line saying why the answer was withheld. Two settings tighten this: a project administrator can switch on a strict roster, which requires everyone in the channel to be on the project, and an organization administrator controls the guest rule for the whole organization. Parle also responds only when it is explicitly @mentioned, so ordinary channel chatter never starts a turn or spends credit.

### 3. The budget still applies

The same pre-flight budget check, the same personal and organization caps and the same send limits as the web app apply to every question. A project that is over its cap says so in the channel instead of answering. Every turn lands in the token ledger against the project's code, so Teams usage is attributed like all other usage and appears in the same CSV export.

## Why we built it

Parle exists so that a team's AI work belongs to the project and not to an individual's account. A channel is where most of that team already talks. Putting Parle there means the context stays attached to the engagement, the spend lands on the engagement, and the next person on the project can read how an answer was reached.

It also changes what we are optimizing for. Parle is paid for by the seat and by the governance around the work, not by how many tokens a channel burns. A bound channel with a budget, a project code and a visible ledger is a tool for spending less per deliverable, and that is the outcome we are built to serve.

## Availability

The Microsoft Teams integration is live for organizations on the Business Elite and Enterprise plans. It relies on the organization's Microsoft Entra ID connection to recognize who is asking. The integration is new, and we would rather say plainly that it has the least production mileage of anything described on our site.

## About Parle

Parle is a shared workspace for AI conversations, built for organizations that bill by client or engagement. Projects hold shared threads every member can see live, each with its own budget and expense code, on provider keys you bring or models Parle hosts. Learn more at [parlehub.com](/) or [see the security model](/security/).

***

**Want your project's AI in the channel where the work is already happening?**  
[Start with Parle →](https://app.parlehub.com)
