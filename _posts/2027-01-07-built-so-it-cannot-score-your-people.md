---
layout: post
title: "Built So It Cannot Score Your People"
date: 2027-01-07 10:00:00 -0400
categories: [Product News, Project IQ, Privacy]
tags: [project-iq, privacy, guard-rails, works-council, ai-act, parlehub]
author: Parle Team
description: "Project IQ is built so it cannot rank people: no per-person scores, no per-person activity figures, and no group figures for fewer than five people."
---

*Part 11 of Project IQ series. The last post is about what Project IQ will not do, and why we made that a property of the build instead of a promise.*

A system that knows who attended which meeting, who owns which task and who decided what is, by accident, a system that can produce a league table. Meetings attended, tasks closed, replies sent, hours active. The data is there, and the temptation to turn it into a number is strong, because numbers look like insight. For the people being counted, they look like surveillance.

Employee representatives, works councils and regulators have noticed. Software that monitors or evaluates workers' performance and behavior is treated with particular care in several jurisdictions, and where it is allowed at all it comes with obligations that most firms would rather not take on.

## The three ways a record becomes a scorecard

### 1. The Quiet Metric

Someone adds a "last active" column to be helpful. A year later it is in a report, and the report is in a performance conversation.

### 2. The Small-Group Aggregate

"Share of the team that attended" sounds harmless until the team is three people, and the number identifies each of them.

### 3. The Promise Nobody Checks

A policy says "we do not rate people." Policy is a sentence, and the next feature does not read it.

## A property of the build

Project IQ holds one rule: **no per-person number is shown to anyone else.** No screen, response or agent tool carries a count, rate, duration, ratio or score derived from a person's activity. People appear as names on records, never as numbers.

We enforce it in four places, each as an automated check that fails the build.

**The data.** A scan of the whole database model fails if any table that refers to a person has a column named like a score, rank or rating. New tables are covered the day they are created.

**The responses.** A check over everything Project IQ returns, including what the assistant's tools return, fails if a type that identifies a person carries a numeric measure of their activity. The assistant cannot be handed a per-person metric, so it cannot repeat one.

**The routes.** A scan of the registered endpoints fails on anything that looks like per-person analytics, such as a leaderboard, a ranking or an activity-by-person path.

**The aggregates.** Any figure about a group of people, such as how many attended or what share were active, goes through one helper that **suppresses any group of fewer than five**. The threshold is a constant in the code. No administrator, setting, plan or environment variable can lower it. When a group is too small, the product says so: "Fewer than 5 people, so Parle doesn't show this."

Exceptions exist and are few. A person can see counts about their own data on the page that shows them what Parle holds about them, and an administrator carrying out an erasure sees counts of what will be removed. Each exception is a reviewed, one-line entry with a written reason, and an entry that is no longer used fails the build.

## What this means for you

If you work with a works council, you can show them a control that does not depend on trusting a vendor's roadmap: the checks are part of the build, so they apply to every future feature. If you are a services firm, the effect is also practical. Your people are far more willing to have their meetings and decisions recorded on a project if the record cannot be turned into a ranking of them.

We have not asked counsel to rule on how any particular regulation applies to your use, and we do not claim a legal conclusion here. What we can say is that we designed the product to stay on the side of recording work and away from evaluating workers, and that the design is checked by machines on every change.

## Why we built it

Project IQ connects people to work. That is valuable and sensitive in equal measure. We think a team will keep using a tool that gives the project a memory and gives no one a score. The guard rails exist so that remains true when we are not paying attention.

## Availability

These guard rails apply to every part of Project IQ, on Business Elite and Enterprise, and are ungated: they apply to the product's code, not to a plan.

That completes the series. The [introduction to Project IQ](/blog/2026/11/24/introducing-project-iq/) links all eleven posts. To try it on a project of your own, [start a free trial](https://app.parlehub.com) or look at the [pricing](/pricing/).
