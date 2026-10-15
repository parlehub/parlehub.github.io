# Worked example

Source: `_posts/2026-08-12-a-project-name-is-not-a-client-code.md`

**One idea:** AI cost allocation stalls because usage is labelled with project *names*, not
the client codes finance actually bills from.
**Most concrete detail:** a firm allocates an $18 courier run to a matter, but $40,000 of
model spend arrives as one unlabelled line.
**Takeaway:** a name drifts, a code does not.

## Variant A: concrete scene (about 1,000 characters)

```
Your firm can allocate an $18 courier run to a client matter.

What happens to $40,000 of AI spend?

The model invoice arrives as one line and one number. Nothing on it names a client. Finance does what finance does: once a month, someone exports usage by project name and matches it by hand against the billing system.

It works until someone renames "Q3 Diligence" mid-quarter. The earlier months stop matching, and nobody finds out. They just notice a margin number that feels slightly off.

The numbers were never the problem. The labels were. A project name is written for humans and drifts. A client code is written for the ledger and does not.

We built Parle so every project carries its own code, and that code travels into the usage export. Budget, code, ledger, GL, with no join in the middle.

How does your firm tie AI spend back to an engagement code today?

#FinOps #ProfessionalServices #AIGovernance
```

First comment:
```
Full write-up: https://parlehub.com/blog/2026/08/12/a-project-name-is-not-a-client-code/
```

Why it works: the hook is two short lines and the first is a complete thought; the body
holds one idea; Parle appears once, in the last third, as an answer; the question is
answerable from the reader's own job.

## What was cut, and why

- The four named failure modes (Overhead Bucket, Month-End Join, and the rest): the post
  is built on four, but a LinkedIn post can carry one. The Month-End Join has the most
  recognisable picture, so it stayed.
- The earlier post it extends: a cross-reference matters on the blog, not in a feed.
- Feature detail beyond the code field: the claim here is the chain from project budget
  to project code to ledger to CSV export, which `CLAUDE.md` marks [LIVE]. Nothing else
  was needed.

## Hook types for the same post, for the other two variants

- **Reversal:** "Most firms get AI cost numbers right and the labels wrong."
- **Named pattern:** "The Month-End Join is the least reliable system in your building."
