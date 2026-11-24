---
layout: post
title: "Ask Your Agent About the Work: Answers That Cite the Records"
date: 2026-12-22 10:00:00 -0400
categories: [Product News, Work Graph, Agents]
tags: [work-graph, agents, skills, citations, professional-services, parlehub]
author: Parle Team
description: "The work graph skill lets a Parle agent answer who was on a project, what was decided and what happened in a meeting, from records the asker can already see."
---

*Part 8 of the Work Graph series. The screens in the previous posts are for people. This one is for the assistant: the same project record, reachable in a conversation.*

Most people meet AI at work as a chat window that knows a great deal about the world and nothing about their project. Ask it who was on the engagement last spring and it will give a confident, generic answer about how to find out. The assistant is capable. It has just never seen the record.

## Three ways an assistant fails on project questions

### 1. The Blank Slate

It has no access to the project's meetings, decisions or tasks, so every answer starts from the question alone.

### 2. The Search That Returns Everything

Given access to the raw documents, it searches by keywords and hands back long passages. The reader still has to find the answer.

### 3. The Answer Nobody Can Check

It summarizes, and the summary has no pointer to where it came from. A decision stated confidently cannot be traced to a meeting.

## The work graph skill

Parle's agents can be given the **work graph skill**. With it, an agent answers project questions from the Work Graph through a fixed set of tools:

**Find and follow.** Look up a person, meeting, decision or document and see what it is connected to.

**Timeline.** What happened on the project, in order.

**Meetings about a project.** Which meetings were held, when, and with whom.

**People on a project.** Who is on it now and who was on it in a given period, which answers "who was on this in March."

**Decisions.** "What did we decide about the rollout" is answered from the decision records, with the records cited.

**Briefs.** A meeting brief, a project status or the evidence about a person's involvement, assembled in one call with a capped response so the answer stays readable.

**Read the passage.** When an answer needs the exact words, the agent reads the passage from the transcript or document **live, with the asker's own access**, and quotes it.

The tools are fixed. The agent does not write queries against the data, and it cannot ask for anything the tools do not offer. Each call is filtered by what the person in the conversation is allowed to see.

An agent author grants the skill the same way they grant any other skill: from the agent editor's skill picker. An agent without the skill cannot see the Work Graph at all.

## What a good answer looks like

Ask the project's assistant: "What did we agree with Aurora about the go-live date, and who was in that conversation?"

It does not search for the phrase. It looks up the decision records on the project, finds the one about the go-live date, and names the date and the person who decided it. It then lists the attendees of the meeting the decision came from, with the client's people marked as such, and cites both records so you can open them. If the exact wording matters, it reads the passage and quotes it.

If nothing was recorded, it says so. It does not reconstruct a plausible answer.

## Safe in a shared conversation

A project conversation is visible to every member, and the answer is shown to all of them. So the viewer is not one person: it is the set of project members, and an item reaches the answer only if every member could see it. That rule is enforced by the platform, not by instructions to the model, and when in doubt it shows less. See [Who can see what](/blog/2026/12/29/who-can-see-what/).

## Why we built it

The Work Graph is only as useful as the questions it can answer, and the most natural way to ask a question is in a sentence. The skill makes the project's record answerable in the place people already work, with the citations that let them trust the answer or check it.

## Availability

The work graph skill and its tools are available with the Work Graph on Business Elite and Enterprise. Agent usage is billed like any other model use and falls under the same budgets. Searching the content of transcripts and shared documents by meaning, from within the skill, is still being completed.

Next in the series: [who can see what](/blog/2026/12/29/who-can-see-what/). Start with the [introduction to the Work Graph](/blog/2026/11/24/introducing-the-work-graph/) if you are new here.
