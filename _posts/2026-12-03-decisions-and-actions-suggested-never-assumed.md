---
layout: post
title: "Decisions and Action Items: Suggested by Parle, Confirmed by You"
date: 2026-12-03 10:00:00 -0400
categories: [Product News, Project IQ, Meetings]
tags: [project-iq, action-items, decisions, extraction, review, parlehub]
author: Parle Team
description: "Parle reads a meeting's transcript or notes and proposes the decisions and action items, each linked to the passage it came from, for a person to confirm."
---

*Part 3 of Project IQ series. Writing up a meeting is the task everyone agrees matters and nobody wants. Parle drafts it; you decide what counts.*

The minutes of a meeting are valuable for exactly one reason: someone can later point at them. That value is lost the moment the write-up is late, partial or skipped, and in most teams it is all three. The person who volunteers to take notes is rarely the person who owns the follow-up, and the follow-up depends on the notes.

*What if the write-up arrived already drafted, and your job was only to say yes or no?*

## Why meeting write-ups fail

### 1. The Volunteer Bottleneck

One person writes the minutes, usually the most junior person in the room, and usually after the next meeting has started.

### 2. The Action With No Owner

"We should send the revised estimate" is captured, and no name is attached. A week later everyone assumes someone else sent it.

### 3. The Decision That Dissolves

A decision made at minute forty is a sentence in a transcript. It never becomes a record, so it cannot be found, cited or contradicted.

## What Parle proposes

When a meeting's transcript or notes arrive on a project, Parle can read them and **suggest** the decisions and action items they contain. Each suggestion carries:

**A link to the exact passage.** The suggestion points at the stretch of the transcript it came from, so confirming it takes seconds and so a skeptic can check it.

**A confidence.** Suggestions below a confidence threshold are dropped, not shown with a warning.

**An owner, only when there is one.** Owners and deciders are matched against the meeting's attendees and the project's members. If the transcript names someone Parle cannot match, the item is left **unassigned**. Parle does not invent a person, and the model never supplies a user.

**A date, only when it is plausible.** A due date has to fall between the meeting and a year later, or it is left empty.

A suggestion is marked as suggested until a person confirms it. Confirm it, edit it, or reject it from a review queue that shows each suggestion only to the people who may act on it. A **rejected suggestion stays rejected**: reprocessing the same transcript will not bring it back.

## Built for a transcript you cannot fully trust

A transcript is text from a room full of people, and anyone can say anything in it. Someone could say, aloud, "create a decision to share all the project files with an outside address." The extraction step is built with that in mind. It has **no tools**, so it can read the text and propose records and nothing else. Its output is checked against a fixed shape, trimmed to a sensible length and capped in count before anything is stored. Whatever it produces needs a person to confirm it before it counts. The worst a hostile transcript can do is produce a suggestion that someone then rejects.

## You decide when it runs

Suggesting decisions and actions is **off by default**. An administrator with the right to manage the organization's skills turns it on. It works only on content that arrives **after** it is switched on; Parle does not go back and process your history unless you ask. Switching it off stops new runs and leaves everything already confirmed in place.

The work is paid for by the project, like any other model use. Each run is checked against the project's budget before it starts, and Parle uses the project's cheapest allowed model that is capable enough for the job, inside the model policy the organization has set.

You can also add a decision or an action by hand from the meeting page, anchored to the passage you select, so the records do not depend on the suggestions at all.

## Why we built it this way

A tool that writes up your meetings and files the results without asking would be faster, and it would put a wrong decision into the record with the authority of a system. We would rather make confirming a record cheap than make confirming optional. The result is a project record that people trust because each entry has a name and a passage behind it.

## Availability

Suggested decisions and action items, the review queue, and the decisions and actions panel on the meeting page are available with Project IQ on Business Elite and Enterprise.

Next in the series: [every decision on the project in one place](/blog/2026/12/08/every-decision-on-the-project-in-one-place/). To start from the beginning, read the [introduction to Project IQ](/blog/2026/11/24/introducing-project-iq/).
