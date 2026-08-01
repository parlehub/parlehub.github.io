---
layout: post
title: "Your AI Vendor Is a Data Residency Decision You Haven't Made Yet"
date: 2026-08-01 10:00:00 -0400
categories: [Security, AI Governance, Enterprise Tech]
tags: [data-residency, compliance, sharepoint, byok, parlehub]
author: ParleHub Team
description: "Every file pasted into a chat window is an unreviewed data-governance decision. The fix isn't a stricter policy — it's keeping the files in your own tenant."
---

Buying a CRM at an enterprise takes four months. There is a security questionnaire, a SOC 2 report to read, a data processing agreement to redline, and a conversation about which region the data sits in. Legal weighs in. Procurement weighs in. Somebody makes a spreadsheet of vendors and their subprocessors.

Meanwhile, on a Tuesday afternoon, an analyst pastes the draft acquisition memo into a chat window to get help tightening the executive summary.

*Which of those two decisions actually determined where your company's data lives this quarter?*

The uncomfortable answer is that most enterprises have a rigorous, well-documented process for selecting systems of record, and no process at all for the tool their staff now reaches for a dozen times a day. AI arrived through the browser rather than through procurement, and the data governance program never caught up.

This isn't a story about employees behaving badly. It's a story about a control that was never designed. Every organization has spent years deciding what may leave the building and through which door. Then a new door appeared, it was unmarked, and it turned out to be the most convenient one in the office.

---

## The Perimeter You Stopped Enforcing

Data governance in most companies is architectural. Files live in a managed store, the store has retention rules, access is tied to identity, and deletion means something. AI usage, almost everywhere, sits entirely outside that architecture. Three patterns show up over and over.

### 1. The Copy-Paste Breach

Nothing was exfiltrated. No firewall alerted. Someone selected the contents of a contract, pressed Ctrl+C, and pressed Ctrl+V into a text box owned by a company that your legal team has never evaluated.

Think of it as a photocopier that someone installed in the lobby. It works beautifully, everyone uses it, and it keeps a copy of everything it copies. Nobody signed anything about where those copies go, how long they persist, or who else can retrieve them. From a compliance standpoint, the fact that the transfer was manual and well-intentioned changes nothing. The data left the tenant.

### 2. Shadow AI, the Data Processor Nobody Vetted

When staff sign up for consumer-tier AI accounts with a work email, the organization has silently acquired a data processor with no contract governing it. There's no DPA, no defined retention period, no deletion guarantee, no subprocessor list, and often no way to enumerate who in the company even has an account.

Ask the question an auditor asks: *which third parties currently hold copies of our customer data?* In most enterprises, the honest answer includes a set of AI vendors that appear nowhere in the vendor register — because nobody procured them.

### 3. The Download-Reupload Loop

The teams that do try to stay compliant end up performing a strange ritual. Priya in Finance downloads the quarterly model from the managed drive to a laptop, uploads it to an AI tool, works through the analysis, downloads the result, and uploads that back to the drive.

At every step the file is a real, governed asset. In the middle, it is a loose copy on a laptop and a second loose copy inside a vendor's storage. The governed version and the version people are actually working on have quietly diverged, and the copy that mattered — the one with the AI's revisions — spent the afternoon somewhere your retention policy has never heard of.

The instinct in all three cases is to write a policy. Policies are worth writing, but a policy is a request. It asks people to be less productive on purpose, and it competes directly against a tool that saves them two hours. That is not a contest policy wins, and enforcement of a rule nobody can technically violate is the only kind that holds.

---

## Residency Is an Architecture Problem

If AI is going to touch real work product, the question stops being *what are staff allowed to paste* and becomes *where does the file physically live while the AI works on it*. Three properties make that answer defensible.

### 1. The File Never Leaves the Tenant

The strongest possible control is not encryption or a retention promise from a vendor. It's that the document was never copied out in the first place. If the AI reads and writes the file in place, inside storage your organization already owns and already governs, the residency question resolves itself — there is no second copy whose location needs defending.

### 2. Least Privilege, Scoped to the Work

Access that is granted tenant-wide is not access control. An AI workspace connected to a document store should hold the equivalent of a visitor badge to one room, not a master key to the building. The scope should be a specific site or drive, chosen deliberately, for a specific initiative — and it should be legible to a security reviewer without reading source code.

### 3. The Lifecycle Stays Intact

Governance isn't only about where a file sits; it's about what happens to it over time. If a deletion inside the AI tool doesn't propagate to the real store, or if it bypasses your recycle bin entirely, you've created a shadow lifecycle running alongside the official one. A file that is genuinely a file in your document store keeps whatever retention, versioning, and discovery behavior your organization already applies to it. A copy in a vendor's bucket does not.

---

## Where ParleHub Fits

This is precisely the problem we created **ParleHub** to solve. We built a shared workspace where teams run their AI conversations together — and then made the storage layer answer to the customer's tenant rather than to us.

* **Project files can live in your own enterprise store.** Connect a project to your organization's SharePoint site, and the files stay in SharePoint. ParleHub's AI reads, searches, and edits them in place. There is no copy in our storage to ask questions about, because the document never left Microsoft 365. This is verified in production against a real customer tenant today. Google Shared Drives is also fully built and tested, with native Docs, Sheets, and Slides export and Drive full-text search — a real, working option, though we haven't yet run it against a live external Drive.
* **Access is per-site, not per-tenant.** SharePoint access uses Microsoft Graph's least-privilege `Sites.Selected` permission — the connection reaches exactly the site an admin designated and nothing else. Enabling it is deliberately two-step: an org admin turns the provider on, then a project connects one specific site. Nobody grants an AI tool blanket access to the intranet by accident.
* **Deletes and search behave like the platform, not like a shim.** File search runs through SharePoint's own index, and deleting a file from a project sends it to SharePoint's recycle bin — the same one your administrators already know how to restore from. The file's lifecycle stays a SharePoint lifecycle.
* **Identity is your identity.** Sign-in runs through Microsoft Entra ID with domain-based provisioning and tenant pinning, and an organization can require SSO for every login. Offboarding a person in your directory offboards their AI access, which is the control that makes every other control meaningful. Google Workspace sign-in is built and tested as well.
* **The record of who did what is not editable.** Sensitive actions are written to an audit log that is append-only at the database level, enforced by the database itself rather than by application code — so even a compromised application credential cannot quietly rewrite history.

For teams that don't need external storage, ParleHub's managed storage is available on every tier, with its own recycle bin, versioning, and inline previews. External storage is an Enterprise-tier option for organizations whose compliance posture requires that files stay home.

***

Your staff have already decided that AI is worth using. The only decision still open is whether their work leaves your tenant to make that happen.

**Want AI your security team can actually sign off on?**
[See how ParleHub keeps enterprise files in your own storage →](https://parlehub.com)
