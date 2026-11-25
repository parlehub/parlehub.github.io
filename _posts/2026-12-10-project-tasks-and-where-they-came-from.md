---
layout: post
title: "Project Tasks: All the Work People Need to Do, and Why Each Item Exists"
date: 2026-12-10 10:00:00 -0400
categories: [Product News, Project IQ, Project Delivery]
tags: [project-iq, tasks, deliverables, planner, jira, parlehub]
author: Parle Team
description: "One task list per project shows each task's source, whether a SOW, a meeting, a chat or typed in, and where it lives, in Parle or in another tool."
---

*Part 5 of Project IQ series. A task list tells you what to do. A list that also tells you why each item exists tells you which ones to push back on.*

Every project has more than one list of things to do. The SOW implies one. Last Tuesday's meeting produced another. A client asked for something in a chat, and a manager keeps a private list in a notebook. Some of the work is tracked in a proper tool and some of it is tracked in people's heads. Asking "what is everyone working on" produces three different answers, and none of them can say why a given item is on the list.

That last part is where scope creep hides. A task with no origin is a task nobody can decline.

## The lists that don't agree

### 1. The Source You Cannot See

A task appears in the tracker with a title and an owner. Whether it came from the contract, from a client request or from someone's good idea is not recorded. When the budget is tight, the team cannot tell commitments from extras.

### 2. The Action Item That Never Became a Task

Meetings produce actions, and actions live in meeting notes. Unless someone copies them into the tracker, they are never done and never missed, only forgotten.

### 3. The Tool Boundary

Some projects track work in Planner or Jira. Others have no tool at all. A task view that works for only one of these leaves the other with a spreadsheet.

## One task list, with its source on every row

The **Tasks** view in the project's **Work** tab shows one list for the project. Each row carries a **source**: a line in the SOW, an action item from a meeting, a chat, or a task someone typed in. Each row also shows where the task is **mastered**.

**Tasks that live in Parle.** For a project that has no external task tool, Parle holds the tasks itself, with a title, an owner, a due date and a status of To do, In progress, Done or Cancelled. A task can link to the deliverable it contributes to.

**Action items, promoted.** An action item from a meeting appears in the list with the meeting as its source. When a person promotes it to a task, it becomes one row, not two; the task keeps the link to the action it came from.

**Tasks that live elsewhere.** A task sent to Planner or Jira appears as a row that links out to the tool, with its last known state (open, done, gone, or unreachable) and when Parle last checked. Parle does not copy the vendor's task title into the list; it holds the link and the state, and the tool remains the master.

The list filters by source, owner, status, where it is mastered, due date and deliverable. It sorts by due date and then status.

This is where the connected record pays off. The reason a task exists is not a note someone remembered to write; it is a link Parle already holds.

## What it will not do

It does not show a count of tasks per person, a completion rate or a ranking. An owner is a name on a task. A column of "tasks per person" would be a productivity measure, and Project IQ is built so that it cannot produce one.

It does not claim a task is done when it cannot tell. If a linked task has been deleted in the other tool, the row says **Gone from Planner**. If Parle could not reach the tool on the last check, it says **Couldn't check Planner**, with the time of the last successful check, rather than showing a stale state.

## Why we built it

The point of knowing a task's origin is not bureaucracy; it is leverage. A project lead who can see that a third of the open tasks came from a chat and not the SOW has found the conversation to have with the client. A new joiner who can see why a task exists does not need to ask.

## Availability

The Tasks view, Parle-held project tasks, promoting action items and linking to Planner or Jira tasks are available with Project IQ on Business Elite and Enterprise. Live titles from external tools, and matching the same task across tools, are not part of this release.

Next in the series: [meeting briefs](/blog/2026/12/15/meeting-briefs/). Start with the [introduction to Project IQ](/blog/2026/11/24/introducing-project-iq/) if you are new to the series.
