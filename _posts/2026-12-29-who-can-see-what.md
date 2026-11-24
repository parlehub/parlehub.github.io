---
layout: post
title: "Who Can See What: The Work Graph Never Shows More Than the Source Would"
date: 2026-12-29 10:00:00 -0400
categories: [Product News, Work Graph, Security]
tags: [work-graph, permissions, visibility, access-control, security, parlehub]
author: Parle Team
description: "Parle shows a person only what they could already see or what was shared with their project, and in a shared conversation only what every member can see."
---

*Part 9 of the Work Graph series. A connected record of a project is useful only if it is safe to ask. Here is the rule that makes it safe.*

The first question a careful buyer asks about any assistant that "knows your work" is the right one: what happens when it knows something I should not? A system that gathers meetings, documents and people into one place has, by construction, gathered things that different people are allowed to see. The risk is not that the assistant is malicious. It is that it is helpful, and a helpful system will happily answer a junior's question with a partner's confidential note.

*How do you build an assistant that is useful and still never tells?*

## How connected systems leak

### 1. The Flattened Index

Everything is copied into one searchable pile, and permissions are an afterthought applied to the results, or not at all.

### 2. The Stale Group

Access is derived from group memberships that were true when they were copied. Someone leaves a group, and the copy still lets them in.

### 3. The Broadcast Answer

In a shared conversation, an answer goes to everyone. A fact that one member may see appears for all of them.

## The rule

The Work Graph follows one rule, applied the same way everywhere it is read.

**You see an item only if you could already see it, or it was shared with a project you are in.** More precisely, an item that came from a connected source is visible to a person when that person's own access fetched it. Everyone else sees it only through an explicit share to a project they belong to. Parle does not copy a source's permissions into its own tables and trust them later; it records what each person's access actually retrieved, and it re-confirms it regularly. An observation that is not re-confirmed expires, and one disappears at once when a person's connection is retired.

**Relationships follow their ends.** A link between two items is visible only to someone who can see both. A decision or action extracted from a meeting is visible only to those who can see that meeting.

**First-party records follow the project.** A meeting on a restricted project is visible to the members of that project and not to other people in the organization.

**Shared conversations use the whole audience.** In a project conversation the answer goes to every member, so an item reaches it only if **every** member can see it. If one member could not, the item is left out.

**Content is read live.** The graph holds pointers and metadata. When Parle quotes a passage, it fetches it at that moment with the asker's own access, so a permission revoked at the source is honored even if the graph has not caught up.

**Doubt means less.** If a clause is missing or a check errors, the answer is to show nothing. The system is built to under-show. If a colleague who has not connected their account sees less than you do, that is the design working, and sharing the item with the project is the fix.

## Enforced where it cannot be talked around

The rule is a database predicate applied to every read of the graph, in the platform and not in the assistant's instructions. The model never decides who is asking: the audience comes from the conversation on the server. A test fails the build if any part of the code reads the graph without going through the predicate, so a new feature cannot quietly bypass it.

An item that is hidden does not leave a trace. A "not found" answer is the same whether the item does not exist or is not yours, and omitted counts never reveal how much was left out.

## Why we built it this way

We could have copied every source's permissions into Parle and trusted them. We chose the more conservative reading because a leak is a worse failure than a gap, and a gap is easy to see and to fix. The trade-off is that people who have not connected their own accounts see less until their work is shared with a project. We would rather explain that to a user than explain the alternative to a client.

## Availability

These rules apply to every part of the Work Graph, on Business Elite and Enterprise. Sharing a Microsoft 365 channel or folder with a project as a delegated source is part of what we are still finishing, and we will describe it when it ships.

Next in the series: [your data, your control](/blog/2027/01/05/your-data-your-control/). Start from the [introduction to the Work Graph](/blog/2026/11/24/introducing-the-work-graph/) if you are new here, or read about the rest of our approach on the [security page](/security/).
