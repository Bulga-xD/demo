---
name: demo-skill
description: Use this skill to follow a realistic but sanitized project workflow: intake, Jira discovery, planning, implementation, testing, validation, security checks, and PR preparation using demo MCP services.
---

# Demo Skill

This skill demonstrates a lightweight but realistic software delivery workflow.

## Purpose

Use this skill when you want to show how a project can progress through:

- issue intake,
- Jira and Confluence discovery,
- design review,
- planning,
- implementation,
- testing,
- validation/security,
- and PR finalization.

## Instructions

1. Start with the issue summary and branch target.
2. Check relevant project context, including Jira and Confluence data when available.
3. Identify the core requirement and acceptance criteria.
4. Draft a minimal implementation plan.
5. Update code and validation artifacts.
6. Run relevant tests and security checks.
7. Prepare a final summary and PR-ready handoff.

## MCP context

This skill is intentionally modeled around MCP usage, but with placeholder data only:

- Jira server: `https://jira.example.com`
- Confluence server: `https://confluence.example.com`
- Cycode API: `https://api.example.com`
- Tokens are represented as environment placeholders, not real secrets.

## Output template

```text
Issue: <jiraId>
Scope:
- 

Plan:
- 

Implementation notes:
- 

Validation:
- 

PR summary:
- 
```

## Important rule

Keep the example realistic but sanitized. Never expose actual credentials, internal hosts, or private company information in the demo workflow.
