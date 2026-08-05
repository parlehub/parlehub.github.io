# 05. Robin Achebe, IT and Security Lead, professional services firm

**Rank: 5 (gatekeeper).** Robin cannot buy ParleHub and can absolutely stop it. Every deal
above passes through this persona. `security.html` is written for Robin and should be judged
against this file.

## Snapshot

| | |
| --- | --- |
| Role | IT and Security Manager. At smaller firms, the whole IT function |
| Firm | 150-person professional services firm, plus a managed service provider for helpdesk |
| Scale | Team of three. No dedicated security engineer |
| Reports to | The COO or the managing partner |
| Controls | A veto, the identity provider, and the answers on every client security questionnaire |
| Buys | Nothing, and is the reason things do not get bought |

## Their world

Robin's week is patching, an MSP escalation, a phishing simulation nobody passed, and three
client security questionnaires sitting in the inbox. Robin is the person who fills those in,
which means Robin is the person who personally writes down whether the firm uses AI and how
it is governed.

Robin already tried blocking consumer AI at the network edge. It moved to phones inside a
week. Robin's current position is that the firm is going to use AI regardless, so the only
useful question is whether it happens somewhere Robin can see.

Robin is deeply sceptical of vendor security pages and reads them looking for the thing that
is not said.

## Goals

- "Tie every application to our identity provider. No exceptions, no local accounts."
- "Be able to answer a client questionnaire truthfully without a week of chasing."
- "Make offboarding actually remove access on the day."
- "Stop being the reason the firm cannot adopt anything."
- "Not get a call at 2am."

## Pains

**1. Shadow AI cannot be inventoried, and blocking it just relocates it.**
Consumer accounts, personal devices, personal email. Robin has no inventory of what is in
use, by whom, against what data.
> **Cost:** Every client questionnaire is answered on a guess. The firm's stated security
> posture and its actual one have diverged, and Robin is the one who signed the stated one.

**2. Tools outside the identity provider break offboarding and access review.**
A departed consultant's personal AI account still holds whatever they put in it, and no
access review will ever surface it.
> **Cost:** A control the firm claims to have does not exist. In a segment where clients
> audit their suppliers, a failed access review is a commercial event, not just an internal
> finding.

**3. Every new SaaS request is a security review Robin does not have time for.**
Robin is a three-person team reviewing tools for a 150-person firm.
> **Cost:** The review queue is the adoption bottleneck, so Robin is structurally cast as the
> obstacle to the firm's AI strategy. The opportunity cost lands on the firm; the blame lands
> on Robin.

**4. Metered AI is a threat class Robin has no control for.**
Robin's threat model assumes an attacker wants data. With metered inference, making the firm
spend money is itself the attack, and a runaway agent loop does it accidentally.
> **Cost:** A leaked key stops being a data-breach problem and becomes an uncapped invoice.
> There is no existing control in the firm's stack that bounds it.

**5. Client security questionnaires are a recurring unbilled tax.**
Each one is hours of work, and the AI section is currently unanswerable.
> **Cost:** Hours per questionnaire, several per quarter, plus deals that slow or stall while
> Robin drafts careful language around a control the firm does not have.

## How ParleHub answers it

**Pain 1 and 2, identity and inventory.** Microsoft Entra ID via OIDC **[LIVE]**, verified
in production, with domain-based auto-provisioning, tenant pinning, and org-enforced
SSO-only login so local credentials can be turned off entirely. Google Workspace via OIDC
**[SHIPPED]**, fully built and tested, with a live round trip against a real Google tenant
still outstanding. Four-level RBAC **[LIVE]**: SystemAdmin, OrgAdmin, ProjectAdmin,
ProjectMember. Restricted project visibility on Enterprise.
> **Never mention SAML to this persona or any other.** It is not built, and Robin is exactly
> the person who will ask a follow-up question we cannot answer.

**Pain 3, the review itself.** Give Robin the specifics rather than assurances, because
specifics are what shorten a review. Project files can stay in the firm's own SharePoint site
using per-site `Sites.Selected` Graph access **[LIVE]**, which is least-privilege by
construction rather than tenant-wide read. Deletes go to SharePoint's own recycle bin. Google
Shared Drives **[SHIPPED]**. Managed Azure Blob storage is the always-available default with
its own recycle bin and versioning. Provider API keys are held in Azure Key Vault and
resolved at call time, never exposed **[LIVE]**. Azure authentication is managed-identity
first with minimal static secrets, behind a two-vault secret broker, with CSP, HSTS, and
secure cookies **[LIVE]**.

**Pain 4, denial of wallet.** Named and addressed directly: rate limits and bounded agent
loops **[LIVE]**, with project, personal, and org-wide spend caps as the financial backstop
and pre-flight enforcement that blocks the send rather than discovering the overage on an
invoice **[LIVE]**.

**Pain 5, the questionnaire.** The combination above is most of the AI section: named IdP
with enforced SSO, role-based access, tenant-resident storage under least privilege, secrets
in a managed vault, spend bounded by policy, and an audit log enforced append-only by
database triggers so that even a compromised application credential cannot alter history
**[LIVE]**.
> *Honest limit, and Robin will find it:* the audit log is a database-level guarantee. There
> is no admin-facing audit log screen and no SIEM export. Say this before Robin asks.

## Unmet needs

- **SAML and Okta.** For any firm standardised on Okta this is a hard disqualification at
  Robin's desk, before anything else is evaluated. *Confirmed gap. Ranked highest across the
  whole persona set on frequency of blocking.*
- **SIEM export or log streaming.** Robin wants ParleHub events in the firm's SIEM, or at
  minimum a downloadable log. Neither exists. *Confirmed gap, and second only to SAML for
  this persona.*
- **SCIM provisioning and deprovisioning.** Domain-based auto-provisioning covers joiners.
  Robin will ask about SCIM for leavers and group-to-role mapping. *Verify with product.*
- **Conditional access, IP allowlisting, device posture.** Entra SSO inherits some of this
  from the tenant's own conditional access policies, which is a genuinely good answer, and
  Robin will ask what ParleHub enforces itself. *Verify what is inherited versus enforced.*
- **DLP and redaction on the way in.** Robin wants to stop a payroll file being attached to
  the wrong project in the first place. *Confirmed gap.*
- **Data retention and deletion policy per project.** *Confirmed gap.*
- **A SOC 2 report. We do not have one.** *Confirmed by the site owner 2026-08-05.* Robin
  asks in the first call. This is survivable with Robin in a way it is not with Jess (04):
  Robin's job is to assess controls, not to require a certificate, and a specific, technical,
  honest answer often satisfies a security lead who has been handed vague vendor assurances
  all week. It becomes fatal when Robin's firm has a procurement policy that requires an
  attestation, which is increasingly common above roughly 200 people. *Penetration test
  summary and subprocessor list: still unknown. Confirm with the site owner.*
- **Uptime commitment and a status page.** *Verify.*

## Objections

**"We will block it at the firewall."**
Already tried, and it moved to phones. The choice is not between AI and no AI; it is between
AI you can see and AI you cannot.

**"We could build this ourselves on Azure OpenAI."**
The honest answer respects the question, because Robin is right that a chat front end over
Azure OpenAI is a weekend. What is not a weekend is per-project budgets with pre-flight
enforcement, four-level RBAC, real-time shared threads, spend analytics by project and person
and model, an append-only audit log enforced by database triggers, and agent file tooling
against SharePoint. Ask what happens to that build when the person who wrote it leaves.

**"Where are our keys and who can read them?"**
Azure Key Vault, resolved at call time, never exposed to the client or to other tenants,
behind a two-vault secret broker with managed-identity-first authentication.

**"Do you have a SOC 2?"**
No, and say so plainly and early. What we can put in front of Robin instead is specific and
checkable: enforced SSO through Entra with tenant pinning, least-privilege `Sites.Selected`
rather than tenant-wide read, keys in Azure Key Vault behind a two-vault broker,
managed-identity-first Azure auth, an audit log enforced append-only by database triggers,
bounded agent loops and rate limits, and CSP, HSTS, and secure cookies. Then make the scope
argument: with files in the firm's own SharePoint and calls under the firm's own provider
keys, most of what an attestation would cover does not sit with us. Robin is capable of
evaluating that on its merits. Do not oversell it, and do not promise a date.

**"What is your incident process?"**
*Verify before answering. Do not improvise this one.*

## Testimonial *(simulated; figures illustrative)*

> "I blocked the consumer tools and it moved to people's phones in a week, which told me
> blocking was not the control. What I needed was AI tied to Entra so offboarding actually
> works, files staying in our own SharePoint under per-site permissions rather than
> tenant-wide read, and a hard ceiling on spend so a runaway loop is a blocked send instead
> of an invoice. Three client questionnaires later, I am answering the AI section from
> facts."

## Buying signals

- A client security questionnaire arrives with an AI section.
- The firm is completing or renewing an ISO 27001 or SOC 2 exercise.
- An access review turns up accounts outside the identity provider.
- Someone above Robin has already decided the firm is adopting AI.
- The firm has just enforced SSO across its other applications and is closing the gaps.
